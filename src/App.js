import React from 'react';
import Chart from './comonents/Chart/Chart';
import Cards from './comonents/Cards/Cards';
import CountryTable from './comonents/CountryTable/CountryTable';
import Header from './comonents/Header/Header';
import { Row, Col, Divider  } from 'antd';



function App() {
  return (
    <div>
      <Header />
      <Divider />
      <Row>
      <Col span={24}><Cards /></Col>
    </Row>
    <Divider  />
    <Row>
    <Col span={6}></Col>
      <Col span={12}><Chart /></Col>
    </Row>
    <Divider  />
      <CountryTable />
    </div>
  )
}

export default App
