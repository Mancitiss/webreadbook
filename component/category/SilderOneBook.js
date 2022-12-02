import Image from 'next/image'
import Baner1 from '../../assets/images/baner-book1.png'


export default function SilderBook(){
    return(
        <div>
            <div className='silder__category'>
                <div  className='silder__category__item'>
                    <p className='silder__category__item--top'>1</p>
                    <div className='silder__category__item--img'>
                        <Image layout="fixed" src={Baner1} alt='hinh sach va nhan vat' />
                    </div>
                </div>
                
            </div>

            <style jsx>{`
                .silder__category{
                    padding:12px 0;
                    display:flex;
                    justify-content: center;
                }

                .silder__category__item{
                    position:relative;
                    height:250px;
                    max-width: 300px;
                    overflow:hidden;
                    margin:0 6px;
                    
                }

                .silder__category__item--top{
                    font-weight: 600;
                    font-size: 200px;
                    color: #fff;
                    -webkit-text-stroke: 3px #FF8F5C;
                    text-shadow: 5px 10px 4px rgb(0 0 0 / 25%);
                    position: absolute;
                    top: 0;
                    left: 0;
                    z-index:1;
                }

                .silder__category__item:nth-child(1) .silder__category__item--top{
                    color: #FF8F5C;
                }

                .silder__category__item--img{
                    max-width: 240px;
                    max-height: 250px;
                    min-height:240px;
                    margin-left: 24px;
                }
            `}</style>
        </div>
    )
}