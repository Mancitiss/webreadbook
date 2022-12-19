import { Row, Col, Rate } from 'antd';
import { useState, useEffect } from 'react';
import bookApi from '../../utils/book';
import Image from 'next/image';
import Chap from '../items/Chap';
import Book1 from "../../assets/images/baner-book1.png"
export default function BookDetail({ book, newChapterList }) {
  const [categoryList, setCategoryList] = useState([]);


  useEffect(() => {
    const getCategories = async () => {
      try {
        for (let id of book.category_name) {
          const res = await bookApi.getCategories(id);
          setCategoryList((pre) => [...pre, res.data.category_name]);
        }
        localStorage.setItem("read_chap_name", book?.story_name)
        localStorage.setItem("id_name_story", book?.id)
      } catch (error) { }
    };
    getCategories();
  }, [book]);

  const myLoader = ({ src }) => {
    return `${src}`;
  }

  return (
    <div>
      <div className='component__detail'>
        <Row>
          <Col lg={8} sm={12} xs={24}>
            <div className='component__detail__img'>
              <Image
                src={book?.image || Book1}
                loader={myLoader}
                width={279}
                height={279}
                alt='hinh bia sach'
              />
            </div>
            <div className='component__detail__info'>
              <Row>
                <Col span={12}>
                  <p className='component__detail__info--left'>Author:</p>
                  <p className='component__detail__info--left'>Category:</p>
                  <p className='component__detail__info--left'>Total chap:</p>
                </Col>
                <Col span={12}>
                  <p className='component__detail__info--right'>
                    {book?.author}
                  </p>
                  <p className='component__detail__info--right'>
                    {categoryList.join(', ')}
                  </p>
                  <p className='component__detail__info--right'>
                    {book?.total_chapters}
                  </p>
                </Col>
              </Row>
            </div>
          </Col>
          <Col span={16}>
            <div className='component__detail__information'>
              <h1 className='component__detail__information--name'>
                {book?.story_name}
              </h1>
              <Rate
                className='component__detail__information--rate'
                allowHalf
                value={Number(book?.rating)}
                disabled
              />
            </div>
            <div className='component__detail__content'>
              <h3 className='component__detail__content--title'>
                Main content
              </h3>
              <p className='component__detail__content--detail'>
                {book?.introduce}
              </p>
              <div className='component__detail__new--chap'>
                <h3 className='component__detail__content--title'>New chap</h3>
                <div className='component__detail__new--listchap'>
                  {newChapterList.map((chap) => (
                    <Chap chap={chap} book={book} key={chap.id} />
                  ))}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <style jsx>{`
        .component__detail {
          padding: 12px 8px;
          position: relative;
        }

        .component__detail__img {
          width: 90%;
          max-width: 310px;
          overflow: hidden;
          margin: 0 auto 12px;
        }

        .component__detail__content {
          font-weight: 550;
          font-size: 14px;
          line-height: 18px;
          color: rgba(31, 30, 34, 0.7);
          width: 90%;
          margin: 0 auto 12px;
        }

        .component__detail__info--right {
          color: rgba(31, 30, 34, 0.8);
          font-size: 14px;
          font-weight: 700;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .component__detail__information {
          text-align: center;
          font-weight: bolder;
          font-size: 36px;
          color: #1f1e22;
          margin: 6px 0 12px;
        }

        .component__detail__information--name {
          margin: 0;
        }

        .component__detail__content {
          width: 90%;
          margin: 0 auto 20px;
        }

        .component__detail__content--title {
          font-weight: 600;
          font-size: 16px;
          line-height: 24px;
          color: #1f1e22;
        }

        .component__detail__content--detail {
          font-weight: 500;
          font-size: 14px;
          color: rgba(31, 30, 34, 0.7);
          max-height: 550px;
          width: 100%;
          overflow-y: scroll;
          letter-spacing: 0.05em;
          margin: 6px 0 12px;
        }

        .component__detail__new--listchap {
          width: 90%;
        }
      `}</style>

      <style jsx global>{`
        .component__detail
          .component__detail__information
          .component__detail__information--rate {
          font-size: 24px;
        }
      `}</style>
    </div>
  );
}
