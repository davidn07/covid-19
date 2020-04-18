import React, { useState, useEffect } from 'react';
import { fetchStateData } from '../../api';
import { Input, Table, Typography } from 'antd';

function CountryTable() {
    const [stateData, setStateData] = useState([])

    useEffect(()=>{
        const fetchedData = async () =>{
            setStateData(await fetchStateData())
        }

        
                
        fetchedData()
    })

    const { Text } = Typography;
    const columns = [
        {
            title: 'State',
            dataIndex: 'state',
            align: 'center',
            render: (text) => <Text style={{ fontWeight: 'bold'}}>{text}</Text>
        },
        {
            title: 'Confirmed',
            dataIndex: 'confirmed',
            align: 'center',
            render: (text) => <Text style={{ fontWeight: 'bold'}}>{text}</Text>
        },
        {
            title: 'Infected',
            dataIndex: 'infected',
            align: 'center',
            render: (text) => <Text style={{ color: 'blue', fontWeight: 'bold'}}>{text}</Text>
        },
        {
            title: 'Deaths',
            dataIndex: 'deaths',
            align: 'center',
                render: (text) => <Text style={{ color: 'red', fontWeight: 'bold'}}>{text}</Text>
        },
        {
            title: 'Recovered',
            dataIndex: 'recovered',
            align: 'center',
            render: (text) => <Text style={{ color: 'green', fontWeight: 'bold'}}>{text}</Text>
        }
    ]

    return (
        <div>
         <Table columns={columns} dataSource={stateData}/>   
        </div>
    )
}

export default CountryTable
