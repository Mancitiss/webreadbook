import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/plots';

export default function Bar(){
    const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch(`https://gw.alipayobjects.com/os/bmw-prod/55424a73-7cb8-4f79-b60d-3ab627ac5698.json?_limit=2`)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    data,
    xField: 'year',
    yField: 'value',
    seriesField: 'category',
    // xAxis: {
    //   type: 'time',
    // },
    // yAxis: {
    //   label: {
    //     // 数值格式化为千分位
    //     formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
    //   },
    // },
  };
    return(
        <div>
            <div className='main__bar__category'>
                <Line {...config} className='main__bar__category--line' />
            </div>

            <style jsx>{`
                .main__bar__category{
                    width: 90%;
                    height: 300px;
                    margin: 12px auto;
                    background: linear-gradient(180deg, rgba(139, 208, 252, 0) 0%, 
                    rgba(139, 208, 252, 0.6) 100%);
                }
            `}</style>
            <style jsx global >{`
                .main__bar__category .main__bar__category--line{
                    padding: 12px;
                }
            `}</style>
        </div>
    )
}