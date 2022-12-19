import { CheckCircleOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import { useEffect } from "react"

export default function Chap({ chap, book }) {
  const link = { book: book?.id, chap: chap?.index };
  const read = true
  const router = useRouter();
  const history = async () => {
    var formdata = new FormData();
    formdata.append("chapter", localStorage.getItem("read_chapter"));
    formdata.append("story", localStorage.getItem("id_name_story"));
    formdata.append("user", localStorage.getItem("id"));

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };

    fetch("http://127.0.0.1:8000/api/history/", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }
  useEffect(() => {
    const items = document.getElementsByClassName('item__chap');
    console.log(items.length);
    for (let i = 0; i < items.length; i++) {
      if (read) {

        items[i].classList.add('readed')
      }
    }
  }, [])

  return (
    <div>
      <div
        className='item__chap'
        onClick={() => {
          localStorage.setItem("read_chapter", chap?.id)
          history()
          router.push(`/books/${link?.book}/${link?.chap}`);

        }}
      >
        <p className='item__chap__number'>{`Chap ${chap?.index}: ${chap?.chapter_name}`}</p>
        
        <div className='item__chap__isread'>
          <CheckCircleOutlined />
        </div>
      </div>

      <style jsx>{`
        .item__chap {
          display: flex;
          width: 90%;
          height: 36px;
          background: #ffffff;
          box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
          border-radius: 5px;
          align-items: center;
          font-weight: 600;
          font-size: 16px;
          position: relative;
          margin: 6px;
          transition: 0.4s;
          cursor: pointer;
        }

        .item__chap:hover {
          box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.25);
          scale: 1.02;
        }
        .item__chap__number {
          margin: 0 24px 0 16px;
          color: #ff8f5c;
        }

        .item__chap__isread{
                    position: absolute;
                    right: 16px;
                    font-size: 22px;
                    color: rgba(255, 143, 92, 0.7);
                }
                @media  (max-width: 992px)and (min-width:577px) {
                    
                }
                
                @media  (max-width: 576px){
                    .item__chap{
                        width:98%;
                        font-size: 12px;
                        margin: 4px;
                        
                    }
                    
                    .item__chap__number{
                        margin: 0 4px 0 8px;
                    }
                    
                    .item__chap__isread{
                        display:none;
                    }
                    
                    .readed{
                        background: rgba(255,143,92,.5);
                    }
                  
  `}</style>
    </div>
  );
}

