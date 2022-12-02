import Main from '../../layouts/Main';
import bg from '../../assets/images/background-about.png'
import about1 from '../../assets/images/abouts-1.png'
import about2 from '../../assets/images/abouts-2.png'
import about3 from '../../assets/images/abouts-3.png'
import avatar1 from '../../assets/images/avatar1.jpg'
import world from '../../assets/images/world-about.png'
import Image from 'next/image';
import { Col, Row, Input, Button} from 'antd';
import { Carousel } from 'antd';
import { LeftCircleFilled, RightCircleFilled,PhoneFilled ,MessageFilled ,MailFilled} from '@ant-design/icons';

const { TextArea } = Input;
export default function Abouts() {
  return (
    <div>
      <Main>
        <div className='container__abouts'>
          <div className='container__abouts__header'>
            <div className='container__abouts__header--img '>
              <Image src={bg} layout='fill' objectFit='cover' />
            </div>
            <div>
              <div className='wave__img'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fillOpacity="1" d="M0,256L48,234.7C96,213,192,171,288,181.3C384,192,480,256,576,256C672,256,768,192,864,186.7C960,181,1056,235,1152,245.3C1248,256,1344,224,1392,208L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
              </div>
              <div className='wave__img'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FF8F5C" fillOpacity="0.8" d="M0,192L48,176C96,160,192,128,288,138.7C384,149,480,203,576,197.3C672,192,768,128,864,117.3C960,107,1056,149,1152,160C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
              </div>
              <div className='wave__img'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#8BD0FC" fillOpacity="0.5" d="M0,256L48,234.7C96,213,192,171,288,181.3C384,192,480,256,576,256C672,256,768,192,864,186.7C960,181,1056,235,1152,245.3C1248,256,1344,224,1392,208L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
              </div>
            </div>
          </div>
          <div className='container__abouts__content'>
            <Row>
              <Col lg={12}  sm={10} xs={24}>
                  <div style={{marginTop: '62px'}}>
                    <p className='container__abouts__content--text-title'>Vision</p>
                    <p className='container__abouts__content--text-detail'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra. Aliquam in elementum tellus.</p>
                  </div>
              </Col>
              <Col lg={12}  sm={14} xs={0}>
                <div style={{padding:'0 24px',minHeight: '320px'}}>
                  <div className='container__abouts__content--bg-text'>
                    <p className='container__abouts__content--text-title'><b style={{color: '#8BD0FC'}}>Who</b><br></br> we are ?</p>
                  </div>
                  <div className='container__abouts__content--img' >
                    <Image src={about1} />
                  </div>
                </div>
              </Col>
              <Col lg={12}  sm={14} xs={0}>
                  <div style={{marginTop: '64px'}}>
                    <div className='container__abouts__content--bg-text'>
                      <p className='container__abouts__content--text-title'><b style={{color: '#8BD0FC'}}>What</b><br></br> we do ?</p>
                    </div>
                    <div className='container__abouts__content--img'>
                      <Image src={about2} />
                    </div>
                  </div>
              </Col>
              <Col lg={12}  sm={10} xs={24}>
                  <div style={{marginTop: '52px'}}>
                    <p className='container__abouts__content--text-title'>Integrated reading and listening</p>
                    <p className='container__abouts__content--text-detail'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra. Aliquam in elementum tellus.</p>
                  </div>
              </Col>
              <Col lg={12}  sm={10} xs={24}>
                  <div style={{marginTop: '142px'}} className='about__why'>
                    <p className='container__abouts__content--text-title'>Why us ?</p>
                    <p className='container__abouts__content--text-detail'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra. Aliquam in elementum tellus.</p>
                  </div>
              </Col>
              <Col lg={12}  sm={14} xs={0}>
                  <div style={{marginTop: '64px'}}>
                    <div className='container__abouts__content--bg-text'>
                      <p className='container__abouts__content--text-title'><b style={{color: '#8BD0FC'}}>Why</b><br></br> choose us ?</p>
                    </div>
                    <div className='container__abouts__content--img' style={{top: '32px',left: '142px'}}>
                      <Image src={about3} />
                    </div>
                  </div>
              </Col>
            </Row>
            <div className='abouts__silder'>
              <div className='abouts__silder__icon'>
                <LeftCircleFilled />
                <RightCircleFilled />
              </div>
              <Carousel autoplay  dots={{className:'abouts__silder__dots'}} >
                <div className='abouts__silder__content'>
                  <div className='abouts__silder__content--avatar' >
                    <Image src={avatar1}  objectFit='cover' />
                  </div>
                  <div className='about__silder__text' style={{maxWidth:'45%'}}>
                    <p className='abouts__silder__content--name'>Luck</p>
                    <p className='abouts__silder__content--info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                </div>
                <div className='abouts__silder__content'>
                  <div className='abouts__silder__content--avatar'>
                    <Image src={avatar1}   objectFit='cover'/>
                  </div>
                  <div className='about__silder__text' style={{maxWidth:'45%'}}>
                    <p className='abouts__silder__content--name'>Linh</p>
                    <p className='abouts__silder__content--info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                </div>
                <div className='abouts__silder__content'>
                  <div className='abouts__silder__content--avatar'>
                    <Image src={avatar1}  objectFit='cover' />
                  </div>
                  <div className='about__silder__text' style={{maxWidth:'45%'}}>
                    <p className='abouts__silder__content--name'>Khoa</p>
                    <p className='abouts__silder__content--info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                </div>
                <div className='abouts__silder__content'>
                  <div className='abouts__silder__content--avatar'>
                    <Image src={avatar1}  objectFit='cover' />
                  </div>
                  <div className='about__silder__text' style={{maxWidth:'45%'}}>
                    <p className='abouts__silder__content--name'>Minh</p>
                    <p className='abouts__silder__content--info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                </div>
                
              </Carousel>
            </div>
            <div className='abouts__contact'>
              <p className='abouts__contact__title'>Contact us</p>
              <Row>
                <Col lg={12}  sm={12} xs={24}>
                  <div>
                    <p className='abouts__contact__text'>Name</p>
                    <Input className='abouts__contact__input' placeholder="Your name" />
                  </div>
                  <div>
                    <p className='abouts__contact__text'>Email</p>
                    <Input className='abouts__contact__input' placeholder="Your name" />
                  </div>
                  <div>
                    <p className='abouts__contact__text'>Enter decription</p>
                    <TextArea className='abouts__contact__input abouts__contact__area' placeholder="Your name" />
                  </div>
                  <Button className='btn__send__abouts'>Send</Button>
                </Col>
                <Col lg={12}  sm={12} xs={24}>
                  <div className='abouts__contact__information'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                    <div className='abouts__contact__listicon'>
                      <div className='abouts__contact__icon--contact'><MailFilled /></div>
                      <div className='abouts__contact__icon--contact'><MessageFilled /></div>
                      <div className='abouts__contact__icon--contact'><PhoneFilled /></div>
                    </div>
                    <div className='abouts__contact__information--img'>
                      <Image src={world} objectFit='cover'/>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </Main>
      <style jsx>{`
        .container__abouts{
          margin: 92px 24px 24px;
        }

        .container__abouts__header {
          position: relative;
          width:96%;
          margin:0 auto 24px;
          height: 360px;
          overflow: hidden;
        }
      
        .container__abouts__header--img {
            position: relative;
            height: 360px;
            width: 100%;
            display:flex;
            align-items: center;
            justify-content: center;
        }
          
        .container__abouts__header--img::before{
            position:absolute;
            content:'';
            top:0;
            left:0;
            height:100%;
            width:100%;
            background: linear-gradient(133.37deg, rgba(255, 143, 92, 0.7) -19.48%, rgba(139, 208, 252, 0.7) 103.13%);
            z-index: 1;
        }

        .container__abouts__header--img::after{
          content:"About us";
          font-weight: 700;
          font-size: 52px;
          text-transform: uppercase;
          color: #FFFFFF;
          z-index: 2;
        }

        .wave__img{
          position: absolute;
          bottom:0;
          left:0;
          width:100%;
          height:62%;
          z-index:4;
        }

        .wave__img:nth-child(2){
          z-index: 1;
          transform: translate(0px, 42px);
        }

        .wave__img:nth-child(3){
          z-index: 2;
          transform: translate(0, -10px);
        }

        .container__abouts__content{
          width: 90%;
          margin:8px auto;
        }

        .container__abouts__content--text-title{
          font-weight: 700;
          font-size: 24px;
          margin: 0 0 12px;
          color: #FF8F5C;
        }

        .container__abouts__content--text-detail{
          font-weight: 530;
          font-size: 16px;
          margin: 0 0 16px;
          color: rgba(31, 30, 34, 0.8);
        }

        .container__abouts__content--bg-text{
          background: #FFEEE7;
          box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
          height: 100px;
          width: 200px;
          display: flex;
          align-items: center;
          margin: 100px 36px 0;
          padding: 0 16px;
          position: relative;
          z-index:6;
        }

        .container__abouts__content--img{
          position:absolute;
          top: -64px;
          left: 64px;
          z-index: 5;
        }

        .abouts__silder{
          position: relative;
        }

        .abouts__silder__icon{
          position: absolute;
          top: 50%;
          left: 0px;
          transform: translateY(-50%);
          display: inline-flex;
          justify-content: space-between;
          width: 100%;
          font-size: 32px;
          color: rgba(255, 143, 92, 0.5);
          cursor: pointer;
          z-index:1;
        }

        .abouts__silder__content{
          display:flex !important;
          width:95%;
          margin:16px auto;
          height:200px;
          background: linear-gradient(133.37deg, rgba(255, 143, 92, 0.4) -19.48%, rgba(139, 208, 252, 0.4) 103.13%);
          align-items: center;
          padding: 0 24px;
          justify-content: center;
        }
        
        .abouts__silder__content--name{
          font-weight: 600;
          font-size: 16px;
          margin: 6px 0;
          color: #1F1E22;
        }

        .abouts__silder__content--info{
          font-weight: 500;
          font-size: 16px;
          line-height: 20px;
          color: rgba(31, 30, 34, 0.8);
        }

        .abouts__silder__content--avatar{
          width: 121px;
          height: 121px;
          border-radius: 50%;
          overflow: hidden;
          margin: 0 24px;
        }

        .abouts__contact{
          margin:16px auto;
          
        }

        .abouts__contact__title{
          font-weight: 700;
          font-size: 24px;
          text-transform: uppercase;
          color: #FF8F5C;
          text-align:center;
        }

        .abouts__contact__text{
          font-weight: 600;
          font-size: 16px;
          line-height: 20px;
          color: #1F1E22;
        }

        .abouts__contact__information{
          font-weight: 600;
          font-size: 16px;
          line-height: 24px;
          text-align: center;
          color: #1F1E22;
          width: 90%;
          margin: 0 auto;
        }

        .abouts__contact__listicon{
          display:flex;
          margin:16px auto;
          justify-content: center;
        }

        .abouts__contact__icon--contact{
          display:flex;
          height: 36px;
          width: 36px;
          border-radius: 50%;
          justify-content: center;
          align-items: center;
          border: 1px solid #FF8F5C;
          box-shadow: 0px 0px 30px 15px rgb(255 143 92 / 30%), 0px 0px 9px 2px rgb(255 143 92 / 60%);
          font-size: 20px;
          color: rgba(255, 143, 92, 0.8);
          margin: 0 12px;
          cursor: pointer;
        }

        .abouts__contact__information--img{
          width:100%;
          max-height:230px;
        }
        
        @media  (max-width: 992px)and (min-width:577px){
          .wave__img{
            height:45%;
          }

          .wave__img:nth-child(2){
            transform: translate(0px,18px);
          }

          .container__abouts__content--img{
            top:-42px
          }

          .container__abouts__content--text-detail{
            font-size:14px
          }
        }

        @media  (max-width: 576px){
          .wave__img{
            display:none;
          }

          .container__abouts__content--text-title{
            font-size:20px;
            margin-top:-24px;
            text-align:center
          }

          .abouts__silder__content--avatar{
            height:60px;
            width:60px;
            margin:0 12px;
          }
          .container__abouts__content--text-detail{
            font-size:14px;
            text-align: center;
          }

          .about__why{
            margin-top:42px !important;
          }

          .about__silder__text{
            max-width:70% !important;
            max-height: 60%;
            margin: auto;
            overflow-y: hidden;
            
          }

          .abouts__silder__content--name{
            font-size:14px;
          }

          .abouts__silder__content--info{
            font-size:12px;
            max-height: 100%;
            overflow-y: scroll;

          }

          .abouts__contact__information{
            margin: 24px auto;
          }
        }
        `}</style>

      <style jsx global>{`
        .abouts__silder .abouts__silder__dots > li{
          background: #ccc;
          height: 6px;
          width: 20px;
        }
        
        .abouts__silder .abouts__silder__dots > li.slick-active{
          background: #FF8F5C;
        }
        
        .abouts__silder .abouts__silder__dots > li >button{
          display: none;
        }

        .abouts__contact .abouts__contact__input{
          height: 42px;
          border: 1px solid #FF8F5C;
          border-radius: 20px;
          width: 90%;
          font-size: 14px;
          font-weight: 550;
          margin-bottom: 16px;
        }

        .abouts__contact .abouts__contact__area{
          height: 100px;
        }

        .abouts__contact .btn__send__abouts{
          background: #8BD0FC;
          box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
          border-radius: 20px;
          color:#fff;
          height:42px;
          width:90%;
          font-weight: 650;
          font-size: 18px;
          border:none;
        }
      `}</style>
    </div>
  )
}