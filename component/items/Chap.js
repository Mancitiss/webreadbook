import { CheckCircleOutlined } from "@ant-design/icons"
import { useRouter } from "next/router"

export default function Chap(){
    const link={'book':'book1','chap':'123'}
    const router= useRouter()
    return(
        <div>
            <div className="item__chap" onClick={()=>{router.push(`/books/${link.book}/${link.chap}`)}}>
                <p className="item__chap__number">Chap 123:</p>
                <p className="item__chap__name">Where my love ?</p>
                <div className="item__chap__isread">
                    <CheckCircleOutlined  />
                </div>
            </div>

            <style jsx>{`
                .item__chap{
                    display:flex;
                    width:90%;
                    height:36px;
                    background: #FFFFFF;
                    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
                    border-radius: 5px;
                    align-items: center;
                    font-weight: 600;
                    font-size: 16px;
                    position:relative;
                    margin:6px;
                    transition: 0.4s;
                    cursor: pointer;
                }

                .item__chap:hover{
                    box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.25);
                    scale: 1.02;
                }
                .item__chap__number{
                    margin: 0 24px 0 16px;
                    color: #FF8F5C;
                }
                
                .item__chap__name{
                    margin: 0;
                    color: #1F1E22;
                }

                .item__chap__isread{
                    position: absolute;
                    right: 16px;
                    font-size: 22px;
                    color: rgba(255, 143, 92, 0.7);
                }
                @media  (max-width: 992px)and (min-width:577px) {
                    
                }
                
                @media  (max-width: 576px){
                    .item__chap{
                        width:98%;
                        font-size: 12px;
                        margin: 4px;
                    }

                    .item__chap__number{
                        margin: 0 4px 0 8px;
                    }

                    .item__chap__isread{
                        font-size: 18px;
                        right: 6px;
                    }
                   
                }
            `}</style>
        </div>
    )
}