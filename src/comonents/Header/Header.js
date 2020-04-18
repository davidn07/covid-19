import React, {useEffect, useState}  from 'react';
import { fetchData } from '../../api';
import { PageHeader, Button, Descriptions } from 'antd';
import 'antd/dist/antd.css';
import style from './header.css'


function Header() {
    const [Time, setTime] = useState([])

    useEffect(()=>{
        const fetchedData = async () =>{
            setTime(await fetchData())
        }
        fetchedData()
    })
    return (
        <div className="site-page-header-ghost-wrapper">
    <PageHeader
      ghost={false}
      
      title="Covid-19 India Tracker"
      
    >
      <Descriptions size="small" column={3}>
        <Descriptions.Item label="Created By:">David Nirmal</Descriptions.Item>
    <Descriptions.Item label="Last Updated">{Time.lastupdatedtime}</Descriptions.Item>
      </Descriptions>
    </PageHeader>
  </div>
    )
}

export default Header
