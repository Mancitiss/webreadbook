import { Col, Row } from "antd";

export default function Book(){
    return(
        <div>
            <div className="content__book__chap">
                {/* <input type='checkbox' id='next' />
                <input type='checkbox' id='back' /> */}
                <Row>
                    <Col span={24}>
                        <div className="content__book__chap--bg">
                            <div className="lopgia"></div>
                            <p className="content__book__chap--content">Lorem ipsum dolor sit amet
                                Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, 
                                risus sem sollicitudin lacus,
                                    ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. 
                                    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                                    Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. 
                                    Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. 
                                    Aliquam in elementum tellus.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan,
                                risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, 
                                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
                                Lorem ipsum dolor sit amet
                                Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, 
                                risus sem sollicitudin lacus,
                                    ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. 
                                    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                                    Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. 
                                    Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. 
                                    Aliquam in elementum tellus.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan,
                                risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, 
                                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
                            </p>
                        </div>
                    </Col>
                    {/* <Col span={12}>
                        <div className="content__book__chap--bg">
                            <p>Lorem ipsum dolor sit amet
                                Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, 
                                risus sem sollicitudin lacus,
                                    ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. 
                                    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                                    Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. 
                                    Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. 
                                    Aliquam in elementum tellus.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan,
                                risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, 
                                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
                            </p>
                        </div>
                    </Col> */}
                    
                </Row>
            </div>
            
            <style jsx>{`
                .content__book__chap--bg{
                    width: 90%;
                    margin: 12px auto;
                    padding: 16px;
                    // max-height: 600px;
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
            `}</style>
            
        </div>
    )
}