import { DoubleLeftOutlined, DoubleRightOutlined } from "@ant-design/icons"
export default function TextHeading({children}){
    return (
        <div>
            <div className="text__heading__common">
                <DoubleRightOutlined />
                <h1 className="text__heading__common-content"> {children}</h1>
                <DoubleLeftOutlined />
            </div>

            <style jsx>{`
            .text__heading__common{
                margin: 12px 0;
                display: inline-block;
                margin-left: 50%;
                transform: translateX(-50%);
                position: relative;
            }

            .text__heading__common-content{
                font-weight: 700;
                font-size: 28px;
                text-transform: uppercase;
                color: #1F1E22;
                margin:0;
                white-space: nowrap;
            }

            @media  (max-width: 992px) {
                .text__heading__common-content{
                    font-size:24px
                }
            }

            @media  (max-width: 576px){
                .text__heading__common-content{
                    font-size:20px
                }
            }
            `}</style>

            <style jsx global>{`
            .text__heading__common .anticon-double-right{
                font-size: 32px;
                color: #FF8F5C;
                position: absolute;
                top: -16px;
                left: -25px;
            }

            .text__heading__common .anticon-double-left{
                font-size: 20px;
                color: #FF8F5C;
                position: absolute;
                right: -16px;
                top: 31px;
            }

            @media  (max-width: 992px) {
                .text__heading__common .anticon-double-right{
                    font-size:20px;
                    top: -12px;
                    left: -16px;
                }

                .text__heading__common .anticon-double-left{
                    font-size: 16px;
                    right: -12px;
                    top: 26px;
                }
            }
            `}</style>
        </div>
        
    )
}

