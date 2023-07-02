import {useState, useEffect} from 'react'
import axios from 'axios'

const useFetch = (url)=>{
    const [data, setData] = useState([])
    const [dataByManyParams, setDataByManyParams] = useState([]);
    const [dataBySingleParam, setDataBySingleParam] = useState([]);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(()=>{
       const fetchData = async () =>{
        setLoading(true)
        try {
            const res = await axios.get(url)
            console.log("API response:",res.data)
            setData(res.data)
            setDataByManyParams(res.data.hotelsByManyParams);
            setDataBySingleParam(res.data.hotelsBySingleParam);
        } catch (err) {
            setError(err)            
        }   
        setLoading(false)
       }
       fetchData()
    },[url])

    const reFetch = async () =>{
        setLoading(true)
        try {
            const res = await axios.get(url)
            // console.log("Fetched data:", res.data); // Check if data is received successfully
            setData(res.data);
            setDataByManyParams(res.data.hotelsByManyParams);
            setDataBySingleParam(res.data.hotelsBySingleParam);
        } catch (err) {
            setError(err)            
        }
        setLoading(false)
    }
    return {data, dataByManyParams, dataBySingleParam, loading, error, reFetch} //data
}

export default useFetch