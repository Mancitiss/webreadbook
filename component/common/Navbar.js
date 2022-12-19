import Image from 'next/image'
import Logo from '../../assets/images/logo.png'
import LogoLogin from '../../assets/images/logo-login.png'
import Link from 'next/link'
import { Col, Row, Input, Button, Modal, Avatar } from 'antd'
import styles from '../../styles/Home.module.css'
import { useEffect, useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import AvatarLogin from '../../assets/images/avatar1.jpg';
import axios from 'axios';
const { Search } = Input;

import cookies from 'react-cookies';
import {
  SearchOutlined,
  MenuOutlined,
  GoogleOutlined,
  FacebookFilled,
  HomeFilled,
  FolderOpenFilled,
  ScheduleFilled,
  InfoCircleFilled,
  LogoutOutlined,
  LoginOutlined,
} from '@ant-design/icons';
import { useRouter } from 'next/router';
import { ApiError } from 'next/dist/server/api-utils';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalLoginOpen, setIsModalLoginOpen] = useState(false);


  const [isLogin, setLogin] = useState(true)
  const [Avatar, setAvatar] = useState(AvatarLogin)


  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSwitchModal = () => {
    setIsModalLoginOpen((prev) => !prev);
  };

  const handleShowLoginModal = () => {
    showModal();
    setIsModalLoginOpen(true);
  };

  useEffect(() => {
    var access_token = cookies.load("access_token")
    if (access_token == null || access_token == "") {
      setLogin(false)
    }
    else {
      setLogin(true)
    }
    const home = document.getElementById('home');
    const category = document.getElementById('category');
    const abouts = document.getElementById('abouts');
    if (window.location.pathname === '/') {
      // console.log("true");
      home.classList.add('active');
    }
    if (window.location.pathname === '/category') {
      // console.log("true");
      category.classList.add('active');
    }
    if (window.location.pathname === '/abouts') {
      // console.log("true");
      abouts.classList.add('active');
    }
  });

  const getId = async () => {
    let token = cookies.load("access_token")
    let data
    let res = await axios.get("http://127.0.0.1:8000/api/users/current-user/", {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
      .then(
        response => {
          data = response.data;
          //cookies.save("Id", response.data.id)
          localStorage.setItem('id', response.data.id);
          localStorage.setItem('username', response.data.username);
          localStorage.setItem('avatar', response.data.avatar);
          localStorage.setItem('nickname', response.data.nickname);
          localStorage.setItem('intro', response.data.intro);
          localStorage.setItem('hobbies', response.data.hobbies);
          localStorage.setItem('address', response.data.address);
          localStorage.setItem('phone', response.data.phone);
          localStorage.setItem('email', response.data.email);
          var img = response.data.avatar
          if(img == "null" || img == null || img ===null){
            setAvatar(AvatarLogin)
          }else{
            setAvatar("http://127.0.0.1:8000" + img)
          }

        }
      )
      .catch(
        error => console.log(error)
      );
    var access_token = cookies.load("access_token")
    if (access_token == null || access_token == "") {
      setLogin(false)
    }
    else {
      setLogin(true)
    }
  }
  const checkLogin = async () => {
    let sttCode = 0
    let sttCode_re = 0
    let user = document.getElementById('username').value
    let pass = document.getElementById('password').value

    if (!isModalLoginOpen) {
      let re_password = document.getElementById('re_password').value
      if (re_password != pass) {
        alert("Password does not match")
        return
      }
      var FormData = require('form-data');
      var data = new FormData();
      data.append('username', user);
      data.append('password', pass);
      let res = await axios.post("http://127.0.0.1:8000/api/users/", data)
        .then(function (response) {
          //console.log(JSON.stringify(response.data)),
          alert("Sign Up Success"),
            handleShowLoginModal();

        })
        .catch(
          error => {
            console.log(error),
              alert("Account already exists")
          }
        );
    }
    else {
      let res = await axios.post("http://127.0.0.1:8000/o/token/", {
        client_id: 'KOS0npL9WDYQ2qSdsIZQPJBe2uzmTIOLd9WTCSOE',
        client_secret: 'EU8dzfaF3ryStd2OfOPEPwc5r0KN08Dts9yKo15pMjpX9fZzZGEV0iHDIjwgT9umw7AN5lAcQOTWMnCIKNADxD1Dni38QudVrLH1nLRZV9QyEuw67Y1tZDwhKOHGLuLA',
        username: user,
        password: pass,
        grant_type: 'password'
      })
        .then(
          response => {
            cookies.save("access_token", response.data.access_token)
            sttCode = response.status == 200
          }
        )
        .catch(
          error => console.log(error)
        );
      if (sttCode) {
        setLogin(true)
        handleOk()
        getId()


      }
      else {
        alert("We don't recognize that username or password. You can try again or use another login option.")
      }
    }
  };
  // const [username, setUsername] = useState(null)
  // const [password, setPassword] = useState(null)
  const router = useRouter()
  const [users, setUsers] = useState([])
  useEffect(() => {

    var img = localStorage.getItem("avatar")
    if(img == "null" || img == null || img ===null){
      setAvatar(AvatarLogin)
    }else{
      setAvatar("http://127.0.0.1:8000" + img)
    }
    
  }, [])

  // console.log(users);
  const [isModalOpenMobile, setIsModalOpenMobile] = useState(false);
  const showModalMoblie = async () => {
    await setIsModalOpenMobile(true);
    const homeMobile = await document.getElementById('home__mobile');
    const categoryMobile = await document.getElementById('category__mobile');
    const profileMobile = await document.getElementById('profile__mobile');
    const aboutMobile = await document.getElementById('about__mobile');
    // console.log(homeMobile);
    if (window.location.pathname === '/') {
      // console.log("true");
      homeMobile.classList.add('active__mobile');
      homeMobile.classList.add('active__mobile');
    }
    if (window.location.pathname === '/category') {
      categoryMobile.classList.add('active__mobile');
      // console.log("true");
    }
    if (window.location.pathname === '/profile') {
      profileMobile.classList.add('active__mobile');
      // console.log("true");
    }
    if (window.location.pathname === '/abouts') {
      aboutMobile.classList.add('active__mobile');
      // console.log("true");
    }
  };
  const handleOkMobile = () => {
    setIsModalOpenMobile(false);
  };
  const handleCancelMobile = () => {
    setIsModalOpenMobile(false);
  };

  const onSearch = (value) => console.log(value);

  return (
    <div>
      <div className='navbar-home'>
        <Row justify='center' align='middle'>
          <Col lg={0} sm={0} xs={6}>
            <MenuOutlined
              onClick={showModalMoblie}
              style={{ fontSize: '32px' }}
            />
          </Col>
          <Modal className='modal__menu__mobile' open={isModalOpenMobile} onOk={handleOkMobile} onCancel={handleCancelMobile}>
            <div className='logo__web' onClick={() => { router.push('/') }}>
              <Image
                src={Logo}
                alt='Logo trang web doc truyen'
                height={72}
                width={72}
              />
            </div>
            <div className='modal__menu__mobile__content'>
              <Search placeholder='Search...' onSearch={onSearch} />
              <div className='menu__moblie'>
                <div id='home__mobile' className='menu__moblie--btn'>
                  <HomeFilled className='icon__home__mobile' />
                  <Link href='/'>

                    <a className='navbar__home__link'>
                      Home
                    </a>
                  </Link>
                </div>
                <div id='category__mobile' className='menu__moblie--btn'>
                  <FolderOpenFilled className='icon__home__mobile' />
                  <Link href='/category'>

                    <a className='navbar__home__link'>
                      Category
                    </a>

                  </Link>
                </div>
                {isLogin ? (
                  <div id='profile__mobile' className='menu__moblie--btn'>
                    <ScheduleFilled className='icon__home__mobile' />
                    <Link href='/profile'>

                      <a className='navbar__home__link'>
                        Profile
                      </a>

                    </Link>
                  </div>
                ) : (
                  <></>
                )}
                <div id='about__mobile' className='menu__moblie--btn'>
                  <InfoCircleFilled className='icon__home__mobile' />
                  <Link href='/abouts'>

                    <a className='navbar__home__link'>
                      Abouts
                    </a>
                  </Link>
                </div>
              </div>
              <div >
                {isLogin ? (<div className='memu__mobile__footer'><LogoutOutlined className='icon__login--logout' /> <span>Logout</span></div>)
                  : (<div className='memu__mobile__footer'><LoginOutlined className='icon__login--logout' /> <span>Login</span></div>)}

              </div>
            </div>
          </Modal>
          <Col lg={2} sm={2} xs={12}>

            <div className='logo-web' onClick={() => { router.push('/') }}>

              <Image
                src={Logo}
                alt='Logo trang web doc truyen'
                height={72}
                width={72}
              />
            </div>
          </Col>
          <Col lg={9} sm={12} xs={0}>
            <Row justify='center' align='middle'>
              <Col span={8} className={styles.align_center}>
                <Link href='/'>
                  <a id='home' className='navbar__home__link'>
                    Home
                  </a>
                </Link>
              </Col>
              <Col span={8} className={styles.align_center}>
                <Link href='/category'>
                  <a id='category' className='navbar__home__link'>
                    Category
                  </a>
                </Link>
              </Col>
              <Col span={8} className={styles.align_center}>
                <Link href='/abouts'>
                  <a id='abouts' className='navbar__home__link'>
                    About
                  </a>
                </Link>
              </Col>
            </Row>
          </Col>
          <Col lg={11} sm={7} xs={0} className={styles.align_center}>
            <Input
              placeholder='Search'
              prefix={<SearchOutlined />}
              className='input-search-header-home'
            />
          </Col>
          <Col lg={2} sm={3} xs={6}>
            {
              !isLogin ? <Button
                className='btn__header__login'
                onClick={handleShowLoginModal}
              >
                Login

              </Button> : <div onClick={() => { router.push('/profile') }} className='navbar__home__avatar'>
                <Image src={Avatar} width={60} height={60} />
              </div>

            }
          </Col>
        </Row>
        <Modal
          wrapClassName='modal__login'
          maskStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
          footer={null}
          width={534}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <div className='header__modal__login'>
            <div className='logo__header__modal__login'>
              <Image
                className='logo__header__modal__login-img'
                src={LogoLogin}
                alt='Logo trang web doc truyen'
                height={146}
                width={146}
              />
              <h2 className='logo__header__modal__login-text'>
                {isModalLoginOpen ? 'Login' : 'Register'}
              </h2>
            </div>
            <div className='header__modal__login-signup'>
              <p>
                {isModalLoginOpen ? 'No account ?' : 'Already Have Acount?'}
              </p>
              <span onClick={handleSwitchModal}>
                {isModalLoginOpen ? 'Sign up' : 'Sign in'}
              </span>
            </div>
          </div>
          <div className='contaner__modal__login'>
            <Row>
              <Col span={20}>
                <Button
                  className='btn__contaner__loginGG'
                  icon={<GoogleOutlined />}
                >
                  {isModalLoginOpen
                    ? 'Login with Google'
                    : 'Register with Google'}
                </Button>
              </Col>
              <Col span={4}>
                <Button
                  className='btn__contaner__loginFB'
                  icon={<FacebookFilled />}
                ></Button>
              </Col>
            </Row>
            <div className='contaner__modal__login-input'>

              <label className='contaner__modal__login-input-text'>Username</label>
              <Input
                id="username"
                className='input-login'
                placeholder='Username'
              // field={username} 
              // change={event => setUsername(event.target.value)}
              />
            </div>
            <div className='contaner__modal__login-input'>
              <div className='contaner__modal__login-forgot'>
                <label className='contaner__modal__login-input-text'>
                  Password
                </label>
                {isModalLoginOpen && <span>Forgot password ?</span>}
              </div>
              <Input.Password
                id='password'
                className='input-login'
                placeholder='Your password'

              // field={password} 
              // change={event => setPassword(event.target.value)

              />
            </div>
            {!isModalLoginOpen && (
              <div className='contaner__modal__login-input'>
                <div className='contaner__modal__login-forgot'>
                  <label className='contaner__modal__login-input-text'>
                    Confirm Password
                  </label>
                </div>
                <Input.Password
                  id='re_password'
                  className='input-login'
                  placeholder='Confirm password'
                />
              </div>
            )}


            <Button className='btn__modal__login' onClick={() => { checkLogin() }}>

              {isModalLoginOpen ? 'Login' : 'Register'}
            </Button>
          </div>
        </Modal>
      </div>

      <style jsx>{`
        .navbar-home {
          height: 82px;
          width: 100%;
        }

        .logo-web {
          height: 82px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .modal__login .header__modal__login {
          position: relative;
        }

        .modal__login .header__modal__login .logo__header__modal__login {
          position: absolute;
        }

        .active {
          border-bottom: 2px solid #ff8f5c;
          padding: 0 12px;
          display: inline-block;
          color: #ff8f5c;
        }

        .navbar__home__avatar {
          height: 52px;
          width: 52px;
          border-radius: 50%;
          overflow: hidden;
          float: right;
          box-shadow: 1px 2px 10px #ccc;
          cursor: pointer;
        }

        .navbar__home__avatar:hover {
          scale: 1.2;
          box-shadow: 6px 6px 10px #ccc;
        }
      `}</style>
      <style jsx global>{`
        .input-search-header-home {
          height: 42px;
          border-radius: 20px;
          border: 1px solid #ff8f5c;
          font-size: 24px;
          color: #fce76c;
          padding: 0 16px;
          width: 90%;
        }

        .input-search-header-home > input.ant-input {
          font-size: 16px;
          padding: 0 12px;
        }

        .btn__header__login {
          height: 42px;
          width: 100%;
          border-radius: 20px;
          font-size: 18px;
          font-weight: 700;
          color: #fff;
          background: #8bd0fc;
          box-shadow: 2px 4px 4px rgb(0 0 0 / 25%);
          border: none;
        }
        .modal__login .ant-modal-content {
          border-radius: 10px;
          background: rgba(217, 217, 217, 0.4);
          backdrop-filter: blur(5px);
        }

        .modal__login .ant-modal-content .ant-modal-close {
          display: none;
        }

        .modal__login .ant-modal-content .ant-modal-body {
          padding: 0;
          font-size: 16px;
          min-height: 360px;
        }

        .modal__login .header__modal__login {
          position: relative;
          display: flex;
          justify-content: space-between;
        }

        .modal__login .header__modal__login .logo__header__modal__login > span {
          overflow: unset !important;
          position: absolute !important;
        }

        .modal__login
          .header__modal__login
          .logo__header__modal__login
          .logo__header__modal__login-img {
          top: -102px !important;
          left: -42px !important;
        }

        .modal__login
          .header__modal__login
          .logo__header__modal__login
          .logo__header__modal__login-text {
          position: absolute;
          font-weight: 700;
          font-size: 36px;
          text-transform: uppercase;
          inset: 32px 0 0 74px;
        }

        .modal__login .header__modal__login .header__modal__login-signup > p {
          margin: 16px 42px 4px 0;
          font-weight: 500;
          font-size: 18px;
        }
        .modal__login
          .header__modal__login
          .header__modal__login-signup
          > span {
          font-weight: 600;
          font-size: 16px;
          line-height: 20px;
          text-decoration-line: underline;
          color: #8bd0fc;
          float: right;
          margin-right: 42px;
          cursor: pointer;
        }

        .modal__login .contaner__modal__login {
          margin: 36px 42px;
        }

        .modal__login .contaner__modal__login .btn__contaner__loginGG {
          height: 52px;
          background: #ff8f5c;
          border-radius: 10px;
          width: 100%;
          font-weight: 600;
          font-size: 24px;
          color: #ffffff;
          display: flex;
          align-items: center;
          border: none;
        }

        .modal__login
          .contaner__modal__login
          .btn__contaner__loginGG
          > .anticon-google {
          margin-right: 24px;
          font-size: 32px;
          height: 32px;
          width: 32px;
        }

        .modal__login .contaner__modal__login .btn__contaner__loginFB {
          float: right;
          height: 52px;
          width: 80%;
          background: rgba(139, 208, 252, 0.3);
          border-radius: 10px;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal__login
          .contaner__modal__login
          .btn__contaner__loginFB
          > .anticon-facebook {
          font-size: 36px;
          color: #0097f7;
        }

        .modal__login
          .contaner__modal__login
          .btn__contaner__loginFB
          > .anticon-facebook
          > svg {
          border-radius: 50px;
        }

        .modal__login .contaner__modal__login .contaner__modal__login-input {
          margin-top: 24px;
        }

        .modal__login
          .contaner__modal__login
          .contaner__modal__login-input
          .contaner__modal__login-input-text {
          font-weight: 500;
          font-size: 16px;
          margin-bottom: 12px;
        }

        .modal__login
          .contaner__modal__login
          .contaner__modal__login-input
          .input-login {
          border: 1px solid #ff8f5c;
          border-radius: 5px;
          height: 42px;
          font-size: 16px;
        }

        .modal__login
          .contaner__modal__login
          .contaner__modal__login-input
          .contaner__modal__login-forgot {
          display: flex;
          justify-content: space-between;
        }

        .modal__login
          .contaner__modal__login
          .contaner__modal__login-input
          .contaner__modal__login-forgot
          > span {
          font-size: 14px;
          text-decoration-line: underline;
          color: #8bd0fc;
        }

        .modal__login .contaner__modal__login .btn__modal__login {
          margin: 42px 0;
          background: #ff8f5c;
          border-radius: 10px;
          width: 100%;
          height: 52px;
          font-size: 24px;
          font-weight: 700;
          color: #fff;
          border: none;
        }

        .modal__login .contaner__modal__login .btn__modal__login:hover,
        .modal__login .contaner__modal__login .btn__contaner__loginGG:hover {
          border: none;
          box-shadow: 3px 2px 4px rgba(0, 0, 0, 0.25);
        }

        .modal__menu__mobile {
          height: 100vh;
          width: 63% !important;
          position: fixed;
          top: 0;
          left: 0;
          margin: 0;
          padding-bottom: 0;
        }

        .modal__menu__mobile .ant-modal-content {
          height: 100%;
        }

        .modal__menu__mobile .ant-modal-footer {
          display: none;
        }

        .modal__menu__mobile .ant-modal-close-x {
          color: #f19da1;
          font-size: 20px;
        }

        .modal__menu__mobile .logo__web {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .modal__menu__mobile .modal__menu__mobile__content {
          margin: 30px auto;
        }

        .modal__menu__mobile .ant-input {
          background: #fff0e9;
          border-radius: 10px 0 0 10px;
          height: 42px;
          border: none;
          color: rgba(255, 143, 92, 0.7);
          font-size: 14px;
        }
        .modal__menu__mobile .ant-input-search .ant-input:hover,
        .modal__menu__mobile .ant-input-search .ant-input:focus {
          border: none;
        }
        .modal__menu__mobile .ant-input-search-button {
          background: #fff0e9;
          border-radius: 0 10px 10px 0 !important;
          height: 42px;
          border: none;
          color: rgba(255, 143, 92, 0.7) !important;
        }

        .modal__menu__mobile .menu__moblie {
          margin: 20px auto;
          font-size: 16px;
          font-weight: bold;
          color: #ff8f5c;
        }

        .modal__menu__mobile .menu__moblie .menu__moblie--btn,
        .modal__menu__mobile .memu__mobile__footer {
          background: #ffffff;
          border-radius: 5px;
          height: 42px;
          width: 100%;
          display: flex;
          align-items: center;
          padding: 0 12px;
          margin: 4px 0;
        }

        .active__mobile {
          color: #fff;
          background: #ff8f5c !important;
          box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
        }

        .modal__menu__mobile .icon__home__mobile {
          font-size: 24px;
        }

        .modal__menu__mobile .navbar__home__link {
          margin: 0 16px;
        }

        .modal__menu__mobile .memu__mobile__footer {
          display: flex;
          font-size: 16px;
          font-weight: bolder;
          position: absolute;
          bottom: 24px;
          width: unset;
          align-items: center;
          color: #e75c62;
          background: #fff0e9;
        }

        .modal__menu__mobile .memu__mobile__footer .icon__login--logout {
          font-size: 24px;
          margin-right: 12px;
        }

        @media (max-width: 576px) {
          .modal__login .contaner__modal__login .btn__contaner__loginGG {
            font-size: 18px;
            padding: 0 8px;
          }

          .modal__login
            .contaner__modal__login
            .btn__contaner__loginGG
            > .anticon-google {
            margin-right: 4px;
          }

          .modal__login .contaner__modal__login .ant-btn > .anticon + span {
            margin-left: 2px;
          }

          .modal__login .header__modal__login .header__modal__login-signup > p {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
};

export default Navbar;
