import axios from 'axios';

const url = 'https://api.covid19india.org/data.json';

export const fetchDailyData = async () =>{
    try {
        const { data: { cases_time_series }}= await axios.get(url)
         
        const modifiedData = cases_time_series.map((dailyData) => ({
            confirmed: dailyData.dailyconfirmed,
            deaths: dailyData.dailydeceased,
            date: dailyData.date

        }))

        return modifiedData;
        
    } catch (error) {
        
    }
}


export const fetchData = async () =>{

    try {
        const { data: { statewise } } = await axios.get(url)
        
        const modifiedData = statewise[0]
        return modifiedData
        
    } catch (error) {
        
    }    
}

export const fetchStateData = async () => {
    try {
        const { data : { statewise }} = await axios.get(url);

        const modifiedData = statewise.map((stateData) => ({
            state: stateData.state,
            confirmed: stateData.confirmed,
            infected: stateData.active,
            deaths: stateData.deaths,
            recovered: stateData.recovered,
        }))

        return modifiedData
    } catch (error) {
        
    }
}