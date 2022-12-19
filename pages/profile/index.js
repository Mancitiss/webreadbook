import { Row, Col, Button, Tabs } from 'antd';
import { useState, useEffect } from 'react';
import { EditOutlined, SettingOutlined, CameraFilled } from '@ant-design/icons';
import Image from 'next/image';
import Link from 'next/link';
import Main from '../../layouts/Main';
import TextHeading from '../../component/common/TextHeading';
import Card from '../../component/items/Card';
import { useRouter } from 'next/router';
import bannerUrl from '../../assets/images/background-profile-user.png';
import TabBook from '../../component/book/TabBook';
import axios from "axios";
import cookies from 'react-cookies';
import { PlusCircleOutlined } from '@ant-design/icons';
function Profile() {
  const [user, setUser] = useState({});
  const [hiStory, setHiStory] = useState([]);
  const name = "book1"
  const [myStory, setMyStory] = useState([]);
  const [mySave, setMySave] = useState([]);
  async function getMyStory() {
      var data_new = []
      var us = localStorage.getItem("id")
      var us_temp = false
      let res = await axios.get("http://127.0.0.1:8000/api/my-book/" + localStorage.getItem("id") + "/")
          .then(
              response => {
                  let data = response.data
                  for (let temp of data) {
                      if (us == temp.user) {
                          us_temp = true
                      } else {
                          us_temp = false
                      }

                      let ob =
                      {
                          id: temp.id,
                          story_name: temp.story_name,
                          image: temp.image,
                          total_chapters: temp.total_chapters,
                          introduce: temp.introduce,
                          user: us_temp
                      }
                      data_new.push(ob)
                  };
                  setMyStory(data_new)

              }
          )
          .catch(
              error => console.log(error)
          );

  }
  async function getMySave() {
      var data_new = []
      var us = localStorage.getItem("id")
      var us_temp = false
      let res = await axios.get("http://127.0.0.1:8000/api/my-save/" + localStorage.getItem("id") + "/")
          .then(
              response => {
                  let data = response.data
                  for (let temp of data) {
                      if (us == temp.user) {
                          us_temp = true
                      } else {
                          us_temp = false
                      }

                      let ob =
                      {
                          id: temp.id,
                          story_name: temp.story_name,
                          image: temp.image,
                          total_chapters: temp.total_chapters,
                          introduce: temp.introduce,
                          user: us_temp
                      }
                      data_new.push(ob)
                  };
                  setMySave(data_new)

              }
          )
          .catch(
              error => console.log(error)
          );

  }
  const router = useRouter();
  async function getHiStory() {
    let data_new = []
    const us = localStorage.getItem("id")
    let us_temp = false
    let res = await axios.get("http://127.0.0.1:8000/api/get-story-history/" + localStorage.getItem("id") + "/")
      .then(
        response => {
          let data = response.data
          for (let temp of data) {
            if (us == temp.user) {
              us_temp = true
            } else {
              us_temp = false
            }

            let ob =
            {
              id: temp.id,
              story_name: temp.story_name,
              image: temp.image,
              total_chapters: temp.total_chapters,
              introduce: temp.introduce,
              user: us_temp
            }
            data_new.push(ob)
          };
          setHiStory(data_new)

        }
      )
      .catch(
        error => console.log(error)
      );

  }


  let id;

  useEffect(() => {
    getHiStory()
    getMyStory()
    getMySave()
    const getUser = () => {
      let avatar = localStorage.getItem('avatar') === 'null' ? '' : localStorage.getItem('avatar')
      let email = localStorage.getItem('email') === 'null' ? '' : localStorage.getItem('email')
      let intro = localStorage.getItem('intro') === 'null' ? '' : localStorage.getItem('intro')
      let hobbies = localStorage.getItem('hobbies') === 'null' ? '' : localStorage.getItem('hobbies')
      let address = localStorage.getItem('address') === 'null' ? '' : localStorage.getItem('address')
      let phone = localStorage.getItem('phone') === 'null' ? '' : localStorage.getItem('phone')

      let user = {
        avatar,
        email,
        intro,
        hobbies,
        address,
        phone,
      };
      setUser(user);
    };
    id = localStorage.getItem('id');
    
    getUser();
  }, [id]);

  const logOut = async () => {
    cookies.save('access_token', '');
    cookies.remove('access_token');
    localStorage.clear();
    // window.location="/";
  };


  const myLoader = ({ src }) => {
    return `http://localhost:8000${src}`;
  }

  return (
    <div>
      <Main>
        <div>
          <div className='user-section'>
            <div
              className='banner-background'
              style={{
                backgroundImage: `url(${bannerUrl.src})`,
              }}
            >
              <div className='user-info'>
                <div>
                  <div className='user-avatar'>
                    <Image
                      src={user?.avatar ? `${user?.avatar}` : ''}
                      loader={myLoader}
                      alt='Avatar'
                      layout='fill'
                      className='user-avatar-img'
                    />
                    <span className='user-change-avatar'>
                      <CameraFilled />
                    </span>
                  </div>
                </div>

                <div className='user-info-options'>
                  <div className='write-book-btn'>
                    <Button
                      className='btn__create__book'
                      onClick={() => router.push(`books/create/${name}`)}
                    >
                      <span className='option-icon'>
                        <EditOutlined />
                      </span>
                      <span className='option-content'>Write book</span>
                    </Button>
                  </div>
                  <div className='setting-btn'>
                    <Button className='btn__setting__user' disabled>
                      <span className='option-icon'>
                        <SettingOutlined />
                      </span>
                      <span className='option-content'>Setting</span>
                    </Button>
                  </div>
                  <div className='write-book-btn-mb'>
                    <Button
                      className='btn__create__book'
                      onClick={() => router.push(`books/create/${name}`)}
                    >
                      <span className='option-icon'>
                        <EditOutlined />
                      </span>
                    </Button>
                  </div>
                  <div className='setting-btn-mb'>
                    <Button className='btn__setting__user' disabled>
                      <span className='option-icon'>
                        <SettingOutlined />
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='main-section-profile'>
            <Row gutter={38}>
              <Col lg={8} sm={10} xs={24}>
                <TextHeading className='text-heading-section'>
                  Information
                </TextHeading>
                <div className='user-introduce'>
                  <div className='user-introduce-item user-intro'>
                    <span className='user-introduce-item-title'>Intro</span>
                    <div className='user-intro-text'>
                      <span>
                        {user?.intro || 'Hiện chưa có phần giới thiệu'}
                      </span>
                    </div>
                    <div>
                      <Button className='edit__intro__user'>Edit intro</Button>
                    </div>
                  </div>
                  <div className='user-introduce-item'>
                    <span className='user-introduce-item-title'>Email:</span>
                    <span className='user-introduce-item-content'>
                      {user?.email || 'Hiện chưa có email'}
                    </span>
                  </div>
                  <div className='user-introduce-item'>
                    <span className='user-introduce-item-title'>Phone:</span>
                    <span className='user-introduce-item-content'>
                      {user?.phone || 'Hiện chưa có số điện thoại'}
                    </span>
                  </div>
                  <div className='user-introduce-item'>
                    <span className='user-introduce-item-title'>Address:</span>
                    <span className='user-introduce-item-content'>
                      {user?.address || 'Hiện chưa có địa chỉ'}
                    </span>
                  </div>
                  <div className='user-introduce-item'>
                    <span className='user-introduce-item-title'>Hobbies:</span>
                    <span className='user-introduce-item-content'>
                      {user?.hobbies || 'Hiện chưa có sở thích'}
                    </span>
                  </div>
                  <div>
                    <Button className='edit__intro__user'>Edit Details</Button>
                  </div>
                  <br></br>
                  <div className='item__card__book--btn'>
                    <Link href='/'>
                      <Button
                        className='edit__intro__user'
                        onClick={() => {
                          logOut();
                        }}
                      >
                        Logout
                      </Button>
                    </Link>
                  </div>
                </div>
              </Col>
              <Col lg={16} sm={14} xs={24}>
                <TextHeading className='text-heading-section'>
                  Reading
                </TextHeading>
                <Row>
                {
                    hiStory.map((hiStory) => {
                      return (
                        <Card index={hiStory.id} story_name={hiStory.story_name} image={hiStory.image} total_chapters={hiStory.total_chapters} introduce={hiStory.introduce} owner={hiStory.user} />)
                    })
                  }
                </Row>

                  
              </Col>
            </Row>
          </div>
          <div className='profile-tabs'>
          <div className='tab__book__profile'>
                <Tabs defaultActiveKey="1">
                    <Tabs.TabPane tab="Your books" key="1">
                        <div>
                            <Row justify="start" gutter={16}>
                                {
                                    myStory.map((myStory) => {
                                        return (
                                            <Card index={myStory.id} story_name={myStory.story_name} image={myStory.image} total_chapters={myStory.total_chapters} introduce={myStory.introduce} owner={myStory.user} />)
                                    })
                                }
                                <Col flex={2} sm={8} xs={12}>
                                    <div className='create__book--item' onClick={() => router.push(`books/create/${name}`)}>
                                        <PlusCircleOutlined />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Saved" key="2">
                        <div>
                            <Row justify="start" gutter={16}>
                            {
                                    mySave.map((mySave) => {
                                        return (
                                            <Card index={mySave.id} story_name={mySave.story_name} image={mySave.image} total_chapters={mySave.total_chapters} introduce={mySave.introduce} owner={mySave.user} />)
                                    })
                                }
                            </Row>
                        </div>
                    </Tabs.TabPane>
                    
                </Tabs>
            </div>
          </div>
        </div>
      </Main>
      <style jsx>{`
      .create__book--item{
        width: 200px;
        height: 287px;
        box-shadow: 0px 0px 4px 2px rgb(0 0 0 / 25%), 2px 2px 6px rgb(0 0 0 / 25%);
        border-radius: 5px;
        position: relative;
        margin: 12px 6px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 100px;
        color: #FCE76C;
    }

    @media  (max-width: 576px){
        .create__book--item{
            width: 135px;
            height: 198px;
            margin: 6px;
        }
    }
        .user-section {
          padding: 16px 36px;
          margin: 82px auto 138px;
          margin-top: 82px;
        }

        .banner-background {
          position: relative;
          background-repeat: no-repeat;
          background-size: cover;
          height: 280px;
          border-radius: 10px;
        }

        .user-info {
          display: flex;
          justify-content: space-between;
          width: 88%;
          position: absolute;
          bottom: 0;
          left: 6%;
          transform: translateY(50%);
        }

        .user-avatar {
          width: 197px;
          height: 197px;
          position: relative;
        }

        .user-change-avatar {
          position: absolute;
          width: 39px;
          height: 39px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          bottom: 0;
          right: 0;
          transform: translate(50%, 50%);
          cursor: pointer;
          font-size: 20px;
          opacity: 0.6;
        }

        .user-info-options {
          align-self: flex-end;
          display: flex;
          gap: 60px;
        }

        .user-info-options .btn {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .option-icon {
          width: 24px;
          height: 24px;
          margin-right: 7px;
        }

        .main-section-profile {
          width: 90%;
          margin: 0 auto;
        }

        .user-introduce {
          padding: 20px 48px 12px;
          margin-top: 8px;
          box-shadow: 2px -1px 4px 0px #00000040;
        }

        .user-introduce-item {
          display: flex;
          margin-top: 15px;
        }

        .user-introduce-item:first-child {
          margin-top: 0;
        }

        .user-introduce-item-title {
          font-weight: 500;
          width: 65px;
          margin-right: 18px;
        }

        .user-introduce-item-content {
          font-weight: 600;
        }

        .user-intro {
          flex-direction: column;
          gap: 12px;
        }

        .user-intro-text {
          text-align: center;
        }

        .user-intro-text span {
          font-weight: 600;
        }

        .text-heading-section {
          display: flex;
        }

        .card-list {
          display: flex;
          gap: 24px;
        }

        .edit-intro-btn,
        .edit-details-btn {
          height: 38px;
        }

        .write-book-btn,
        .setting-btn {
          height: 42px;
        }

        .profile-tabs {
          width: 90%;
          margin: 24px auto;
        }
      `}</style>

      <style jsx global>{`
        .btn {
          height: 100%;
          width: 100%;
          border-radius: 20px;
          font-size: 18px;
          font-weight: 700;
          color: #fff;
          background: #8bd0fc;
          box-shadow: 2px 4px 4px rgb(0 0 0 / 25%);
          border: none;
        }
        .setting-btn {
          background: #fff;
        }

        .profile-tabs {
          width: 90%;
          margin: 24px auto;
        }
        .write-book-btn-mb,
        .setting-btn-mb {
          display: none;
        }
        @media (max-width: 992px) and (min-width: 577px) {
          .user-introduce {
            padding: 16px;
          }
        }

        @media (max-width: 576px) {
          .user-section {
            padding: 16px;
          }

          .banner-background {
            height: 172px;
          }

          .user-avatar {
            height: 72px;
            width: 72px;
          }

          .user-change-avatar {
            top: 20px;
            left: 24px;
            opacity: 0.4;
          }

          .user-info-options {
            gap: 12px; // set khoang cach space 2 item trong flex
          }

          .write-book-btn-mb,
          .setting-btn-mb {
            display: block;
          }

          .write-book-btn,
          .setting-btn {
            display: none;
          }

          .option-icon {
            width: unset;
            height: unset;
            margin: 0;
          }

          .user-section {
            margin: 82px auto 36px;
          }
        }
      `}</style>

      <style jsx global>{`
        .user-info-options .btn__create__book,
        .user-info-options .btn__setting__user,
        .user-introduce .edit__intro__user {
          height: 42px;
          border-radius: 20px;
          border: none;
          box-shadow: 2px 4px 4px rgb(0 0 0 / 25%);
          width: 160px;
          font-weight: 700;
          font-size: 18px;
          color: #fff;
          background: #8bd0fc;
        }

        .user-info-options .btn__setting__user {
          color: #8bd0fc;
          background: #fff;
        }

        .user-introduce .edit__intro__user {
          width: 100%;
          border-radius: 10px;
          margin: 12px 0;
        }

        .user-avatar .user-avatar-img {
          object-fit: cover;
          border-radius: 50%;
        }
        @media (max-width: 576px) {
          .user-info-options .btn__create__book,
          .user-info-options .btn__setting__user {
            height: 42px;
            width: 42px;
            border-radius: 5px;
            display: flex;
            font-size: 20px;
            justify-content: center;
            align-items: center;
            background: #fff;
            box-shadow: unset;
            color: #8bd0fc;
          }
        }
      `}</style>
    </div>
  );
}

export default Profile;
