import { PushpinOutlined ,PushpinFilled, EditFilled} from "@ant-design/icons"
import { Button } from "antd"
import Image from "next/image"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Book1 from "../../assets/images/book-card-1.png"
export default function Card({index, story_name, image, total_chapters, introduce, owner}){
    
    const [check, setCheck]= useState(false)
    const router= useRouter()
    const hello='2'
    const color= ['#FF8F5C','#8BD0FC','#FCE76C']
    const [colorID, setColorID]= useState(0)
    const [img, setImg]= useState(Book1)
    var intro = "" + introduce
    if(intro.length > 160){
        intro = intro.slice(0, 160) + "..."
    }
    const saveStory = async () => {
        setCheck(!check)
        var tid = localStorage.getItem("id")
        if(tid == 'null' || tid == null){
            alert("Đăng nhập để lưu truyện")
            return
        }
        var formdata = new FormData();
        formdata.append("story", index);
        formdata.append("user", localStorage.getItem("id"));

        
        var requestOptions = {
          method: 'POST',
          body: formdata,
          redirect: 'follow'
        };
        
        fetch("http://127.0.0.1:8000/api/savestory/", requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
      }
    useEffect(()=>{
        
        if(image == null){
            setImg(Book1)
        }else{
            setImg(image)
        }
        const bgs= document.getElementsByClassName(`item__card__book--bg--${index}`)
        const btns= document.getElementsByClassName(`item__card__book--btn--${index}`)
        setColorID(Math.floor(Math.random() * color.length))
        // console.log(colorID);
        for(let i=0; i<bgs.length;i++){
            // console.log("bg", bgs[i]);
            bgs[i].style.setProperty('--colorCard',`${color[colorID]}`)
        }
        for(let i=0; i<btns.length;i++){
            // console.log("bg", bgs[i]);
            btns[i].style.setProperty('--colorCard',`${color[colorID]}`)
        }
    })

    
    return(
        <div>
            <div className="item__card__book">
                <div className={`item__card__book--bg item__card__book--bg--${index}`} ></div>
                {
                    owner ?(<><div onClick={()=>router.push(`/books/create/edit=${index}`)}><EditFilled /></div></>)
                    :(<><input type='checkbox'style={{display:'none'}}  id={`check__save-${index}`} onClick={saveStory} />
                    <label htmlFor={`check__save-${index}`} >{!check ?<PushpinOutlined /> :<PushpinFilled /> }</label></>)
                }
                
                <div className="item__card__book--content"  onClick={() => router.push(`/books/detail/${index}`)} >
                    <div className="item__card__book--img">
                        <Image src={img} alt="image book" width ={107} height={144}/>
                    </div>
                    <div className="item__card__book--text">
                        <h3 className="item__card__book--text--name"> <b>{story_name}</b></h3>
                        <p className="item__card__book--text--chap">Total chap: <b>{total_chapters}</b></p>
                        <p className="item__card__book--text--intro">{intro}</p>
                        {/* <p className="item__card__book--text--author">By <b>Luck</b></p> */}
                    </div>
                    <Button className={`item__card__book--btn item__card__book--btn--${index}`} >Read now</Button>
                </div>
                
            </div>

            <style jsx>{`
            .item__card__book{
                width: 200px;
                height: 287px;
                background: #FFFFFF;
                box-shadow: 0px 0px 4px 2px rgb(0 0 0 / 25%), 2px 2px 6px rgb(0 0 0 / 25%);
                border-radius: 5px;
                position: relative;
                margin:12px 6px;
                cursor: pointer;
                transition: all 0.8s;
            }
            
            .item__card__book--bg{
                height:100%;
                width:100%;
                position:absolute;
                left:0;
                top:0;
                overflow:hidden;
            }

            .item__card__book--bg::before{
                content:'Read and Listen';
                width:100%;
                height:100%;
                position:absolute;
                left:0;
                top:0;
                font-style: italic;
                font-weight: 900;
                font-size: 52px;
                line-height: 90px;
                display: flex;
                align-items: center;
                text-align: center;
                letter-spacing: 0.08em;
                text-transform: uppercase;
                color: rgba(0, 0, 0, 0.15);
                text-shadow: 0px 0px 4px rgb(0 0 0 / 15%);
                overflow: hidden;
            }

            .item__card__book--bg::after{
                content:'';
                width: 166px;
                height: 166px;
                position:absolute;
                left:50%;
                top:50%;
                background: var(--colorCard);
                box-shadow: 0px 0px 25px 5px var(--colorCard), 
                0px 0px 100px 10px var(--colorCard);
                border-radius: 50%;
                transform: translate(-50%, -50%);
                transition: 0.6s;
            }

            .item__card__book--content{
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
            }

            .item__card__book--img{
                margin-top: 72px;
                transition: 0.6s;
            }

            .item__card__book--text{
                display:none;
                position: absolute;
                inset: 100px 8px 0;
                transition: 0.6s;
            }

            .item__card__book--text--name{
                font-weight: 700;
                font-size: 14px;
                text-transform: capitalize;
                color: rgba(31, 30, 34, 0.9);
                display: inline-block;
                margin-bottom: 4px;
            }

            .item__card__book--text--chap{
                font-weight: bold;
                font-size: 12px;
                text-transform: capitalize;
                color: rgba(31, 30, 34, 0.7);
                margin-bottom: 12px;
            }

            .item__card__book--text--intro{
                font-weight: 500;
                font-size: 13px;
                line-height: 15px;
                color: rgba(31, 30, 34, 0.7);
                margin-bottom: 6px;
            }

            .item__card__book--text--author{
                font-weight: 500;
                font-size: 13px;
                line-height: 15px;
                color: rgba(31, 30, 34, 0.7);
                float: right;
            }

            
            .item__card__book--text--chap > b{
                color: #FF8F5C;
            }

            .item__card__book:hover .item__card__book--text{
                display:block;
                inset: 82px 8px 0;
                transition: all 0.6s;
            }

            .item__card__book:hover .item__card__book--bg::after{
                transform: translateX(-4px) translateY(-158px);
                transition: all 0.6s;
            }
           
            .item__card__book:hover .item__card__book--img{
                scale: 0.7;
                transform: translateX(72px) translateY(-102px);
                transition: all 0.6s;
            }

            @media  (max-width: 480px){
                .item__card__book{
                    width: 135px;
                    height: 198px;
                    margin: 6px;
                }

                .item__card__book--bg::before{
                    font-size: 32px;
                    line-height: 72px;
                }

                .item__card__book--bg::after{
                    width: 116px;
                    height: 116px;
                }

                .item__card__book--img{
                    margin-top: 22px;
                    scale: 0.8;
                }

                .item__card__book:hover .item__card__book--bg::after{
                    transform: translate(-16px, -116px);
                    transition: all 0.6s;
                }

                .item__card__book:hover .item__card__book--img{
                    scale: 0.6;
                    transform: translate(54px, -82px);
                    transition: all 0.6s;
                }

                .item__card__book:hover .item__card__book--text{
                    inset: 58px 4px 0;
                }

                .item__card__book--text--intro{
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

            }
            `}</style>
            <style jsx global>{`
                .item__card__book .anticon-pushpin,
                .item__card__book .anticon-edit{
                    position:absolute;
                    font-size: 36px;
                    right: 8px;
                    top: 8px;
                    color: #FF8F5C;
                    z-index:10;
                    cursor: pointer;
                }

                .item__card__book .item__card__book--btn{
                    width: 92px;
                    height: 32px;
                    background: var(--colorCard);
                    border-radius: 20px;
                    border: none;
                    position: absolute;
                    top: 240px;
                    font-weight: 700;
                    font-size: 12px;
                    text-transform: uppercase;
                    color: #FFFFFF;
                    box-shadow: 0 4px 8px var(--colorCard);
                    transition:0.5s;
                }

                .item__card__book .item__card__book--btn:hover,
                .item__card__book .item__card__book--btn:active{
                    background: var(--colorCard);
                    color:#fff;
                    box-shadow: 0 1px 4px var(--colorCard);
                    scale: 1.2;

                }

                @media  (max-width: 480px){

                    .item__card__book .item__card__book--content .item__card__book--btn{
                        top: 160px;
                        width: 82px;
                        height: 28px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                }
            `}</style>
        </div>
    )
}