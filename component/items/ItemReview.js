import { Col, Row } from "antd";
import { HeartOutlined } from "@ant-design/icons";
import Image from "next/image";
import Book1 from '../../assets/images/book-1.png'
import { useRouter } from "next/router";

export default function ItemReview(){
    const router = useRouter()
    const name= 'book1'
    return(
        <div>
            <div className="item__review__book" onClick={()=>{ router.push(`/reviews/${name}`)}} >
                <Row>
                    <Col span={6}>
                        <div className="item__review__book--img">
                            <Image src={Book1} alt='bia sach'/>
                        </div>
                    </Col>
                    <Col span={18}>
                        <div className="item__review__book--text">
                            <p className="item__review__book--text--title">I like “Love story” beacause I love you</p>
                            <p className="item__review__book--text--owner">By Luck</p>
                        </div>
                    </Col>
                </Row>
                <p className="item__review__book--content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et 
                </p>
                <HeartOutlined className="icon__heart" />
            </div>
            <style jsx>{ `
                .item__review__book{
                    background: #FFFFFF;
                    box-shadow: 2px 2px 4px rgb(0 0 0 / 25%);
                    border-radius: 10px;
                    width: 90%;
                    margin: 0 4px 6px;
                    padding:4px ;
                    height: 110px;
                    position:relative;
                }
                .item__review__book--img{
                    width: 100%;
                    max-height: 52px;
                    overflow: hidden;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .item__review__book--text{
                    white-space: nowrap;
                    width: 90%;
                    font-weight: 700;
                    font-size: 14px;
                    line-height: 18px;
                    color: #000000;
                }
                .item__review__book--text--title{
                    overflow: hidden;
                    text-overflow: ellipsis;
                    margin-bottom:6px;
                }
                .item__review__book--text--owner{
                    font-weight: 500;
                    font-size: 12px;
                    margin-bottom: 4px;
                    color: rgba(31, 30, 34, 0.6);
                }
                
                .item__review__book--content{
                    width: 85%;
                    margin: 6px auto;
                    overflow: hidden;
                    position: relative;
                    font-size: 13px;
                    line-height: 15px;
                    color: #000000;
                    opacity: 0.8;
                    font-weight: 530;
                }
            `}</style>
            <style jsx global>{`
                .item__review__book .icon__heart{
                    position: absolute;
                    bottom: 14px;
                    right: 8px;
                    font-size: 24px;
                    color: #FF8F5C;
                }
            `}</style>
        </div>
    )
}