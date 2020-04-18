import React, { useState, useEffect } from 'react';
import { fetchData } from '../../api';
import { Card, Col, Row } from 'antd';
import { CaretRightFilled } from '@ant-design/icons';

import 'antd/dist/antd.css';
import style from './cards.css'
import CountUp from 'react-countup';

function Cards() {
    const [globalData, setGlobalData] = useState([])

    useEffect(()=>{
        const fetchedData = async () =>{
            setGlobalData(await fetchData())
        }
        fetchedData()
    })

    
    const { Meta } = Card;
    return (
        <div className="site-card-wrapper">
    <Row gutter={16}>
      <Col span={8}>
        <Card hoverable title="Total Confirmed" bordered={false} >
        <Meta description={globalData.confirmed} avatar={<CaretRightFilled />}/>
        </Card>
      </Col>
      <Col span={8}>
        <Card hoverable title="Total Deaths" bordered={false} headStyle={{ color: 'red'}}>
        <Meta description={globalData.deaths} avatar={<CaretRightFilled />}/>
        </Card>
      </Col>
      <Col span={8}>
        <Card hoverable title="Total Recovered" bordered={false} headStyle={{ color: 'green'}}>
        <Meta description={globalData.recovered} avatar={<CaretRightFilled />}/>
        </Card>
      </Col>
    </Row>
  </div>
    )
}

export default Cards
