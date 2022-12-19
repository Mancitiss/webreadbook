import Baner from '../component/common/Baner'
import React, { useEffect, useState } from 'react';
import Main from '../layouts/Main'
import TextHeading from '../component/common/TextHeading';
import Card from '../component/items/Card';
import { LeftCircleFilled, RightCircleFilled } from '@ant-design/icons';
import { Row, Col, Button } from 'antd';
import File from '../component/items/File';
import Bar from '../component/items/Bar';
import CardCreater from '../component/items/CardCreater';
import axios from "axios";
export default function Home() {
  const [category, setCategory] = useState([]);
  const [story, setStory] = useState([]);
  const [caStory, setCaStory] = useState([]);



  async function getCategory() {
    let data_new = []
    let res = await axios.get("http://127.0.0.1:8000/api/categorys/?format=json")
      .then(
        response => {
          let data = response.data
          for (let temp of data) {
            let ob =
            {
              id: temp.id,
              category_name: temp.category_name,
            }
            data_new.push(ob)
          };

        }
      )
      .catch(
        error => console.log(error)
      );
    setCategory(data_new)
    //console.log(data_new)
  }
  async function getStory() {
    let data_new = []
    var us = localStorage.getItem("id")
    let us_temp = false
    let res = await axios.get("http://127.0.0.1:8000/api/list-story-new/")
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

        }
      )
      .catch(
        error => console.log(error)
      );
    setStory(data_new)
    //console.log(data_new)
  }
  async function getCaStory() {
    let data_new = []
    const us = localStorage.getItem("id")
    let us_temp = false
    let res = await axios.get("http://127.0.0.1:8000/api/get-story-catagory/" + localStorage.getItem("id_cata_cho") + "/")
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
          setCaStory(data_new)

        }
      )
      .catch(
        error => console.log(error)
      );

  }

  useEffect(() => {
    getCategory()
    getStory()
    getCaStory()
    const btnBack = document.getElementsByClassName('btn__back')
    const btnNext = document.getElementsByClassName('btn__next')
    //const widthItem = document.querySelector('.item__card__book').getBoundingClientRect().width
    const widthSlide = document.querySelector('.home__silde__container').getBoundingClientRect().width
    const sliders = document.querySelectorAll('.home__silde__container')
    // console.log(items.length);
    sliders.forEach((slide) => {
      btnNext[0].addEventListener('click', () => {
        slide.scrollLeft += 100;
        console.log("herr", slide.scrollLeft);
      })
      btnBack[0].addEventListener('click', () => {
        slide.scrollLeft -= 100;
        console.log("herr", slide.scrollLeft);
      })
    })
  }, [])
  //getCategory()
  useEffect(() => {

    for (let i = 0; i < category.length; i++) {
      const one = document.getElementById(`check__category__${category[0].id}`)
      one.checked = true
    }
    

  }, [])

  return (
    <div >
      <Main>
        <Baner />
        <TextHeading >For You</TextHeading>
        <div className='home__silde'>
          <div className='home__next__back--slide'>
            <LeftCircleFilled className='btn__slide btn__back' />
            <RightCircleFilled className='btn__slide btn__next' />
          </div>
          <div className='home__silde__container' >

            {
              story.map((story) => {
                return (
                  <Card index={story.id} story_name={story.story_name} image={story.image} total_chapters={story.total_chapters} introduce={story.introduce} owner={story.user} />)
              })
            }
          </div>
        </div>
        <div className='home__contaner__content'>
          <Row >
            <Col lg={16} sm={24} xs={24}>
              <TextHeading>Book Category</TextHeading>
              <div>
                <div className='home__contaner__content--listfile' onClick={getCaStory}>
                  {
                    category.map((categori) => {
                      return (
                        <File index={categori.id} name={categori.category_name} />)
                    })
                  }
                </div>
                <Row align='middle'>
                  <Col lg={4} sm={6} xs={12}>
                    <div className='home__next__back--slide slide__small'>
                      <LeftCircleFilled className='btn__slide btn__back' />
                      <RightCircleFilled className='btn__slide btn__next' />
                    </div>
                  </Col>
                  <Col lg={14} sm={12} xs={0}>
                    <div className='silde__dot__bottom'>

                    </div>
                  </Col>
                  <Col lg={6} sm={6} xs={12}>
                    <div>
                      <Button className='btn__all__category'>All category</Button>
                    </div>
                  </Col>
                </Row>
                <Row>
                  {
                    caStory.map((caStory) => {
                      return (
                        <Card index={caStory.id} story_name={caStory.story_name} image={caStory.image} total_chapters={caStory.total_chapters} introduce={caStory.introduce} owner={caStory.user} />)
                    })
                  }
                </Row>
              </div>
            </Col>
            <Col lg={8} sm={24} xs={24}>
              <Row>
                <Col lg={24} sm={24} xs={0}>
                  <div className='home__bar__line'>
                    <TextHeading>Top Category</TextHeading>
                    <Bar />
                  </div>

                </Col>
              </Row>
              <Row>
                <Col lg={24} sm={24} xs={24}>
                  <div className='home__bar__line'>
                    <TextHeading>Top Creater</TextHeading>
                    <Row>
                      <Col lg={12} sm={6} xs={12} >
                        <CardCreater {...{ number: '1' }} />
                      </Col>
                      <Col lg={12} sm={6} xs={12} >
                        <CardCreater {...{ number: '2' }} />
                      </Col>
                      <Col lg={12} sm={6} xs={12} >
                        <CardCreater {...{ number: '3' }} />
                      </Col>
                      <Col lg={12} sm={6} xs={12} >
                        <CardCreater {...{ number: '4' }} />
                      </Col>
                      <Col lg={12} sm={6} xs={12} >
                        <CardCreater {...{ number: '5' }} />
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Main>

      <style jsx>{`
        .home__silde{
          margin:12px auto;
          max-width:90%;
          position:relative;
        }

        .home__silde__container{
          height:100%;
          width:100%;
          display:flex;
          overflow:hidden;
          scroll-behavior: smooth;
        }

        .home__next__back--slide{
          position: absolute;
          display: inline-flex;
          width: 100%;
          justify-content: space-between;
          z-index: 10;
          font-size: 42px;
          color: rgba(255, 143, 92, 0.5);
          top: 50%;
          transform: translateY(-50%);
        }

        .slide__small{
          font-size: 24px;
          justify-content: space-evenly;
        }

        .home__contaner__content{
          margin: 24px 20px;
        }

        .home__contaner__content--listfile{
          display:flex;
          overflow:hidden;
          width:100%;
          margin-bottom: 8px;
        }

        .home__contaner__content--listfile:hover{
          overflow-x:scroll;
        }

        .home__bar__line{
          background: #FFFFFF;
          box-shadow: 0px 0px 4px 1px rgb(0 0 0 / 25%);
          border-radius: 10px;
          margin-left:16px;
          margin-bottom:16px;
          padding: 12px 0;

        }
        
      `}</style>

      <style jsx global>{`
      .home__silde .home__next__back--slide .btn__slide{
        cursor: pointer;
      }

      .home__contaner__content .btn__all__category{
        float: right;
        height: 36px;
        border: 2px solid #8BD0FC;
        border-radius: 15px;
        font-weight: 600;
        font-size: 14px;
        color: #1F1E22;
      }
      `}</style>
    </div>

  )
}