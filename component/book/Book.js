import { Col, Row, Popover, Slider } from "antd";
import { useEffect, useRef, useState } from "react";
import { RedoOutlined } from "@ant-design/icons";
import Image from "next/image";
import axios from "axios";
import IconStart from '../../assets/images/icon-play-light.png'
import IconPause from '../../assets/images/icon-pause-light.png'
import IconResume from '../../assets/images/icon-resume-light.png'
import IconStartDark from '../../assets/images/icon-play-dark.png'
import IconPauseDark from '../../assets/images/icon-pause-dark.png'
import IconResumeDark from '../../assets/images/icon-resume-dark.png'
import IconSetting from '../../assets/images/icon-setting-light.png'
import IconSettingDark from '../../assets/images/icon-setting-dark.png'
import Voice1 from '../../assets/images/avatar-ai-1.png'
import Voice2 from '../../assets/images/avatar-ai-2.png'
import Voice3 from '../../assets/images/avatar-ai-3.png'

export default function Book({check, content}){
    // const [click, setClick]= useState(false)
    const iconVoice = useRef()
    const iconStart = useRef()
    const iconPause = useRef()
    const iconResume = useRef()
    const [voice, setVoice]=useState('Vietnamese Female')

    const [speed, setSpeed]= useState(1)
    const onChange=(value)=>{
        
        setSpeed(value)
        iconPause.current.style.display='none'
        iconStart.current.style.display='block'
        iconResume.current.style.display='none'
        
    }
    console.log('sp',speed);
    const speakVoice =(()=>{
        responsiveVoice.speak(content,voice,{rate: speed})
        iconVoice.current.style.display='flex'
        iconStart.current.style.display='none'
        iconPause.current.style.display='block'
        iconResume.current.style.display='none'
        // console.log('l',responsiveVoice);
        
    })
    const listening=(()=>{
        // const timeCheck =setInterval(()=>{

        //     if(responsiveVoice.isPlaying()) {
        //         // console.log("I hope you are listening");
        //         if(iconVoice){

        //             iconVoice.current.style.display='flex'
        //         }
        //       }
        //     else{
        //         // console.log("none listenming");
        //         if(iconVoice){

        //             iconVoice.current.style.display='none'
        //         }
                
        //     }
        // },1500)
        //  return (()=>{
        //     clearInterval(timeCheck);
        //  })

    })
    const pauseVoice =(()=>{
        responsiveVoice.pause();
        iconVoice.current.style.display='none'
        iconStart.current.style.display='none'
        iconPause.current.style.display='none'
        iconResume.current.style.display='block'
        console.log('pasue');
    })
    

    const resumeVoice =(()=>{
        responsiveVoice.resume();
        iconVoice.current.style.display='flex'
        iconPause.current.style.display='block'
        iconStart.current.style.display='none'
        iconResume.current.style.display='none'
        console.log('resue');

    })
    const changeVoice=()=>{
        iconPause.current.style.display='none'
        iconStart.current.style.display='block'
        iconResume.current.style.display='none'
        console.log('chagnge');
    }
   
    // console.log('v',volume);
    const setting=(
        <div className="popover__setting__voice--content">
            <p className="popover__text--title"><b>Voice: </b> Mai</p>
            <div className="popover__setting--list-voice">
                <input className="choose__voice" style={{display:'none'}} type={'radio'} name='choose__voice' id="voicegirl"  defaultChecked/>
                <label onClick={()=>{changeVoice();setVoice('Vietnamese Female')}} htmlFor="voicegirl"><div className="pover__setting--img choose">
                    <Image src={Voice1} objectFit='cover' />
                </div></label>
                <input className="choose__voice" style={{display:'none'}} type={'radio'} name='choose__voice' id="voiceman" />
                <label onClick={()=>{changeVoice();setVoice('Vietnamese Male')}} htmlFor="voiceman"><div className="pover__setting--img choose">
                    <Image src={Voice2}objectFit='cover' />
                </div></label>
                <input className="choose__voice" style={{display:'none'}} type={'radio'} name='choose__voice' id="voiceeng" />
                <label onClick={()=>{changeVoice();setVoice('UK English Female')}} htmlFor="voiceeng"><div className="pover__setting--img choose">
                    <Image src={Voice3} objectFit='cover' />
                </div></label>
            </div>
            <p className="popover__text--title"><b>Speed: </b> {speed}</p>
            <Slider value={speed} min={0} max={1.5} step={0.5} onChange={onChange } />

        </div>
    )

    return(
        <div>
            <div className="content__book__chap">
                {/* <button onClick={speakVoice}>Click</button>
                <button onClick={pauseVoice}>pause</button>
                <button onClick={resumeVoice}>resume</button>
                <button onClick={listening}>listening</button> */}
                <Row>
                    <Col span={24}>
                        <div className="content__book__chap--bg">
                            <div className="lopgia"></div>
                            <p className="content__book__chap--content">{content}</p>
                        </div>
                    </Col>
                    <div className="readbook__content__main--groundicon">
                    <div className="icon__voice__speak" ref={iconVoice}>
                        <div className="icon__voice__speak--bar"></div>
                        <div className="icon__voice__speak--bar"></div>
                        <div className="icon__voice__speak--bar"></div>
                        <div className="icon__voice__speak--bar"></div>
                        <div className="icon__voice__speak--bar"></div>
                        <div className="icon__voice__speak--bar"></div>
                        <div className="icon__voice__speak--bar"></div>
                        <div className="icon__voice__speak--bar"></div>
                        <div className="icon__voice__speak--bar"></div>
                        <div className="icon__voice__speak--bar"></div>
                    </div>
                        <div className="icon__replay__voice">
                        <div style={{height:'36px',cursor: 'pointer'}} onClick={()=>{speakVoice(); listening()}}>
                            <RedoOutlined />
                        </div>
                        </div>
                        <div className="icon__play__voice" >
                            <div  style={{height:'36px',cursor: 'pointer'}} ref={iconStart} onClick={()=>{speakVoice(); listening()}}>
                                { check ? <Image src={IconStartDark} />: <Image src={IconStart} />}
                                {/* <Image src={IconStart} /> */}
                            </div>
                            <div  style={{height:'36px',cursor: 'pointer', display:'none'}} ref={iconPause} onClick={pauseVoice}>
                                { check ? <Image src={IconPauseDark} />: <Image src={IconPause} />}
                                {/* <Image src={IconPause} /> */}
                            </div>
                            <div  style={{height:'36px',cursor: 'pointer', display:'none'}} ref={iconResume} onClick={resumeVoice}>
                                { check ? <Image src={IconResumeDark} />: <Image src={IconResume} />}
                                {/* <Image src={IconResume} /> */}
                            </div>
                        </div>
                        <div className="icon__setting__voice" >
                            <Popover  placement="topRight" content={setting} trigger="click" overlayClassName="popover__setting__voice">
                                <div  onClick={pauseVoice} style={{height:'36px',cursor: 'pointer'}} >
                                    {/* <Image src={IconSetting} /> */}
                                    { check ? <Image src={IconSettingDark} />: <Image src={IconSetting} />}
                                </div>
                            </Popover>
                        </div>
                                
                    </div>
                    
                </Row>
            </div>
            
            <style jsx>{`
                .content__book__chap--bg{
                    width: 90%;
                    margin: 12px auto;
                    padding: 16px;
                    font-weight: 500;
                    font-size: 18px;
                    line-height: 32px;
                    color: rgba(31, 30, 34, 0.8);
                    position:relative;
                    transform-style: preserve-3d;
                    perspective: 5000px;
                }

                .content__book__chap--bg::before,
                .content__book__chap--bg::after{
                    position:absolute;
                    content:'';
                    top:0;
                    left:0;
                    height:100%;
                    width:48%;
                    background: var(--dark,#DCF1FE);
                    box-shadow: 2px 2px 4px rgb(0 0 0 / 25%);
                    border-radius: 15px;
                    animation: opentext 3s linear;
                    z-index: -1;
                }

                .content__book__chap--bg::after{
                    right:0;
                    left:unset;
                }

                .content__book__chap--content{
                    -webkit-column-count: 2;
                    -moz-column-count: 2;
                    column-count: 2;
                    column-gap: 7%;
                    text-align: justify;
                    animation: opentext 3s linear;
                }

                .lopgia{
                    position: absolute;
                    top: 0;
                    right: 0;
                    height: 100%;
                    width: 100%;
                    transform-style: preserve-3d;
                    animation: openbook 2s linear ;
                    transform: rotateY(0);
                    z-index: -1;
                }

                .lopgia::before,.lopgia::after{
                    position:absolute;
                    content:'';
                    top:0;
                    left:0;
                    height:100%;
                    width:48%;
                    background: var(--dark,#DCF1FE);
                    box-shadow: 2px 2px 4px rgb(0 0 0 / 25%);
                    border-radius: 15px;
                }

                .lopgia::after{
                    right:0;
                    left:unset;
                }

                .icon__replay__voice{
                    top: 136px;
                    font-size: 24px;
                    color: #999;
                    position: fixed;
                    right: 30px;
                    cursor: pointer;
                    z-index:100;
                }


                .icon__play__voice,
                .icon__setting__voice{
                    background: #FFFFFF;
                    box-shadow: 2px 2px 4px rgb(0 0 0 / 25%), inset 2px 2px 4px rgb(0 0 0 / 25%);
                    width: 57px;
                    height: 57px;
                    border-radius: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: fixed;
                    right: 12px;
                    top: 180px;
                    cursor: pointer;
                    z-index:100;

                }

                .icon__setting__voice{
                    top: 210px;
                    margin-top:52px;
                }

                .icon__voice__speak {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 80px;
                    width: 100%;
                    position: fixed;
                    bottom: 32px;
                    left: 0;
                    display:none;
                }
                
                .icon__voice__speak--bar {
                    background: linear-gradient(133.37deg, #FF8F5C -19.48%, #8BD0FC 103.13%);
                    bottom: 1px;
                    height: 3px;
                    width: 10px;
                    margin: 0px 4px;
                    border-radius: 5px;
                    animation: sound 0ms -600ms linear infinite alternate;
                }

                .icon__dark{
                    background: #1F1E22;
                    box-shadow: 4px 2px 4px rgba(0, 0, 0, 0.25), inset 3px 2px 4px rgba(0, 0, 0, 0.25);
                }
                
                @keyframes sound {
                    0% {
                       opacity: .35;
                        height: 3px; 
                    }
                    100% {
                        opacity: 1;       
                        height: 70px;        
                    }
                }
                
                .icon__voice__speak--bar:nth-child(1)  { left: 1px; animation-duration: 474ms; }
                .icon__voice__speak--bar:nth-child(2)  { left: 15px; animation-duration: 433ms; }
                .icon__voice__speak--bar:nth-child(3)  { left: 29px; animation-duration: 407ms; }
                .icon__voice__speak--bar:nth-child(4)  { left: 43px; animation-duration: 458ms; }
                .icon__voice__speak--bar:nth-child(5)  { left: 57px; animation-duration: 400ms; }
                .icon__voice__speak--bar:nth-child(6)  { left: 71px; animation-duration: 427ms; }
                .icon__voice__speak--bar:nth-child(7)  { left: 85px; animation-duration: 441ms; }
                .icon__voice__speak--bar:nth-child(8)  { left: 99px; animation-duration: 419ms; }
                .icon__voice__speak--bar:nth-child(9)  { left: 113px; animation-duration: 487ms; }
                .icon__voice__speak--bar:nth-child(10) { left: 127px; animation-duration: 442ms; }

                @keyframes openbook{
                    0%{
                        transform: rotateY(0deg) translateX(0);
                    }
                    
                    100%{
                        transform: rotateY(-180deg) 
                    }
                }
                @keyframes opentext{
                    0%{
                        opacity: 1;
                    }
                    50%{
                        opacity: 0.4;
                    }
                    100%{
                        opacity: 1;
                    }
                }
                @media  (max-width: 992px)and (min-width:577px) {
                    
                    .content__book__chap--bg{
                        width:95%;
                    }
                    .content__book__chap--content{
                        column-gap: 3%;
                    }

                    .lopgia::before,.lopgia::after{
                        width:50%
                    }
                }

                @media  (max-width: 576px){
                    .content__book__chap--bg{
                        width:95%;
                        padding:12px;
                        color: rgba(31,30,34,1);
                    }

                    .content__book__chap--bg::before,
                    .content__book__chap--bg::after{
                        display:none;
                    }

                    .content__book__chap--content{
                        column-count: 1;
                    }
                    .lopgia::before,.lopgia::after{
                        display:none;
                    }

                    .icon__setting__voice{
                        bottom: 24px;
                        top: unset;
                    }

                    .icon__play__voice{
                        bottom: 96px;
                        top: unset;
                    }

                    .icon__replay__voice{
                        top: unset;
                        bottom: 162px;
                        color: #FF8F5C;
                    }
                }
            `}</style>
            <style jsx global>{`
                .popover__setting__voice .ant-popover-inner{
                    background: rgba(255, 255, 255, 0.2);
                    border-radius: 5px;
                    filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.25));
                    backdrop-filter: blur(10px);
                    height: 170px;
                    width: 280px;
                }

                .popover__setting__voice .popover__text--title{
                    margin-bottom: 8px;
                    color: #FF8F5C;
                    font-weight: 700;
                    font-size: 12px;
                }

                .popover__setting__voice .popover__text--title > b{
                    font-weight: 530;
                    font-size: 13px;
                    color: #1F1E22;
                    margin-right:12px;
                }

                .popover__setting__voice .popover__setting--list-voice{
                    display: flex;
                    justify-content: space-around;
                }

                .popover__setting__voice .pover__setting--img{
                    width: 46px;
                    height: 46px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius:50%;
                    margin: 8px 0;
                    position: relative;
                    cursor: pointer;
                }

                .popover__setting__voice .choose__voice:checked +label .choose::before,
                .popover__setting__voice .choose__voice:checked +label .choose::after{
                    content:'';
                    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100' ry='100' stroke='%238BD0FC' stroke-width='8' stroke-dasharray='50%25%2c 13%25' stroke-dashoffset='86' stroke-linecap='butt'/%3e%3c/svg%3e");
                    border-radius: 100px;
                    position: absolute;
                    height: 52px;
                    width: 52px;
                    top:-2px;
                    left:-2px;
                    border:none;
                    transition: all 0.6s;
                    animation: rotate 8s infinite;
                    box-shadow:none;
                }

                .popover__setting__voice .choose__voice:checked +label .choose::after{
                    height: 72px;
                    width: 72px;
                    transform: rotate(80deg);
                    top: -12px;
                    left: -12px;
                    opacity: 0.5;
                    transition: all 0.6s;
                    animation: rotate 12s infinite;
                }

                @keyframes rotate {
                    0%,100% {
                        scale:0.9;
                      rotate: 0deg;
                    }
                    50% {
                        scale:1.1;
                      rotate: 180deg;
                }
            `}</style>
            
        </div>
    )
}