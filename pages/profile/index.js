import { Row, Col, Button, Tabs } from 'antd';
import { EditOutlined, SettingOutlined, CameraFilled } from '@ant-design/icons';
import Image from 'next/image';
import Link from 'next/link'
import Main from '../../layouts/Main';
import TextHeading from '../../component/common/TextHeading';
import Card from '../../component/items/Card';

import bannerUrl from '../../assets/images/background-profile-user.png';
import Avatar from '../../assets/images/avatar1.jpg';
import TabBook from '../../component/book/TabBook';
import cookies from 'react-cookies'
export default function Profile() {
  const logOut = async()=>{
    cookies.save("access_token", "")
    cookies.remove("access_token")
    localStorage.clear();
    // window.location="/";
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
                      src={Avatar}
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
                    <Button className='btn'>
                      <span className='option-icon'>
                        <EditOutlined />
                      </span>
                      <span className='option-content'>Write book</span>
                    </Button>
                  </div>
                  <div className='setting-btn'>
                    <Button className='mr-4 btn'>
                      <span className='option-icon'>
                        <SettingOutlined />
                      </span>
                      <span className='option-content'>Setting</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='main-section-profile'>
            <Row gutter={38}>
              <Col lg={8} xs={24}>
                <TextHeading className='text-heading-section'>
                  Information
                </TextHeading>
                <div className='user-introduce'>
                  <div className='user-introduce-item user-intro'>
                    <span className='user-introduce-item-title'>Intro</span>
                    <div className='user-intro-text'>
                      <span>I like write sad books {':))'} </span>
                    </div>
                    <div className='edit-intro-btn'>
                      <Button className='btn'>Edit intro</Button>
                    </div>
                  </div>
                  <div className='user-introduce-item'>
                    <span className='user-introduce-item-title'>Email:</span>
                    <span className='user-introduce-item-content'>
                      abc@gmail.com
                    </span>
                  </div>
                  <div className='user-introduce-item'>
                    <span className='user-introduce-item-title'>Phone:</span>
                    <span className='user-introduce-item-content'>
                      0988731212
                    </span>
                  </div>
                  <div className='user-introduce-item'>
                    <span className='user-introduce-item-title'>Address:</span>
                    <span className='user-introduce-item-content'>
                      st1, Ho Chi Minh city, VN
                    </span>
                  </div>
                  <div className='user-introduce-item'>
                    <span className='user-introduce-item-title'>Hobbies:</span>
                    <span className='user-introduce-item-content'>
                      Write book, play games
                    </span>
                  </div>
                  <div className='edit-details-btn'>
                    <Button className='btn'>Edit Details</Button>
                  </div>  
                  <br></br>
                  <div className='item__card__book--btn'>
                  <Link href='/'>
                  <Button className='btn' onClick={()=>{logOut()}} >Logout</Button>
                  </Link>                    
                  </div>
                </div>
              </Col>
              <Col lg={16} xs={24}>
                <TextHeading className='text-heading-section'>
                  Reading
                </TextHeading>
                <div className='card-list'>
                  <Card index={1}/>
                  <Card index={2}/>
                  <Card index={3}/>
                </div>
              </Col>
            </Row>
          </div>
          <div className='profile-tabs'>
            <TabBook></TabBook>
          </div>
        </div>
      </Main>
      <style jsx>{`
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

        .profile-tabs{
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

        .user-avatar .user-avatar-img {
          object-fit: cover;
          border-radius: 50%;
        }
      `}</style>
      
    </div>
  );
}
