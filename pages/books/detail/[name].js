import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Main from '../../../layouts/Main';
import { Breadcrumb, Col, Row } from 'antd';
import { ReadOutlined } from '@ant-design/icons';
import ItemReview from '../../../component/items/ItemReview';
import BookDetail from '../../../component/book/BookDetail';
import Chap from '../../../component/items/Chap';
import TextHeading from '../../../component/common/TextHeading';
import CommentBook from '../../../component/book/CommentBook';
import Card from '../../../component/items/Card';
import bookApi from '../../../utils/book';

export default function BookInfo() {
  const [book, setBook] = useState(null);
  const [bookReviewList, setBookReviewList] = useState([]);
  const [chapterList, setChapterList] = useState([]);

  const router = useRouter();

  useEffect(() => {
    const id = router.query.name;
    if (!id) return;
    const getReviewBook = async () => {
      try {
        const res = await bookApi.getReview(id);
        setBookReviewList(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getReviewBook();
  }, [router.query.name]);

  useEffect(() => {
    const id = router.query.name;
    if (!id) return;
    const getBook = async () => {
      try {
        const res = await bookApi.get(id);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getBook();
  }, [router.query.name]);

  useEffect(() => {
    const id = router.query.name;
    if (!id) return;
    const getChapters = async () => {
      try {
        const res = await bookApi.getChapters(id);
        setChapterList(res.data);
      } catch (error) {}
    };
    getChapters();
  }, [book]);

  return (
    <div>
      <Main>
        <div className='book__detail'>
          <Breadcrumb className='book__detail__breadcurmb'>
            <Breadcrumb.Item href='/'>
              <ReadOutlined className='icon__book' />
              <span>Book</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item>{book?.story_name}</Breadcrumb.Item>
          </Breadcrumb>
          <div className='book__detail__content'>
            <Row>
              <Col span={18}>
                <div>
                  <BookDetail
                    book={book}
                    newChapterList={chapterList.slice(
                      chapterList.length - 3,
                      chapterList.length
                    )}
                  ></BookDetail>
                </div>
                <div className='book__detail__content__listchap'>
                  <Row>
                    <Col span={24}>
                      <div className='book__detail__content__listchap--title'>
                        <TextHeading>All chap</TextHeading>
                      </div>
                    </Col>
                    {chapterList.map((chap, index) => (
                      <Col span={12} key={index}>
                        <Chap chap={chap} book={book} />
                      </Col>
                    ))}
                  </Row>
                </div>
                <div className='book__detail__content__comment'>
                  <Row>
                    <Col span={24}>
                      <div className='book__detail__content__listchap--title'>
                        <TextHeading>Comment</TextHeading>
                      </div>
                    </Col>
                    <div className='book__detail__content__comment--comment'>
                      <CommentBook></CommentBook>
                    </div>
                  </Row>
                </div>
                <div className='book__detail__content__similar'>
                  <Row>
                    <Col span={24}>
                      <div className='book__detail__content__listchap--title'>
                        <TextHeading>Similar books</TextHeading>
                      </div>
                    </Col>
                    <div>
                      <Row>
                        <Col span={6}>
                          <Card index={1}></Card>
                        </Col>
                        <Col span={6}>
                          <Card index={2}></Card>
                        </Col>
                        <Col span={6}>
                          <Card index={3}></Card>
                        </Col>
                        <Col span={6}>
                          <Card index={4}></Card>
                        </Col>
                      </Row>
                    </div>
                  </Row>
                </div>
              </Col>
              <Col span={6}>
                <div className='book__detail__navbar__review--title'>
                  <ReadOutlined />
                  <span>Book review</span>
                </div>
                <Row>
                  {bookReviewList.map((bookReview, index) => (
                    <Col span={24} key={index}>
                      <ItemReview bookReview={bookReview} book={book} />
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </Main>
      <style jsx>{`
        .book__detail {
          margin: 92px 24px 24px;
        }

        .book__detail__navbar__review--title {
          font-weight: 700;
          font-size: 18px;
          line-height: 22px;
          color: #ff8f5c;
          margin: 0 0 16px;
        }

        .book__detail__content__listchap--title {
          float: left;
          margin: 12px 24px;
        }

        .book__detail__content__comment--comment {
          width: 85%;
          margin: 12px auto;
        }

        .book__detail__content__similar {
          margin: 24px 0;
        }

        @media (max-width: 992px) and (min-width: 577px) {
        }

        @media (max-width: 576px) {
          .book__detail {
            margin: 92px 12px 12px;
          }
        }
      `}</style>

      <style jsx global>{`
        .book__detail .book__detail__breadcurmb {
          font-weight: 700;
          font-size: 18px;
          line-height: 36px;
        }

        .book__detail .book__detail__breadcurmb .icon__book {
          font-size: 26px;
          color: #ff8f5c;
        }

        .book__detail .book__detail__content .anticon-read {
          font-size: 24px;
          margin: 0px 6px;
        }
      `}</style>
    </div>
  );
}
