import React,{useState, useEffect} from 'react';
import axios from 'axios';
import Loader from '../components/Loader';
import Main from './Main';

export default () => {
    const [loading, setloading] = useState(true);
    const [Data, setData] = useState({});

    useEffect(() => {
        console.log(loading);
        const getMovies = async () => {
            const data = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
            setData(data);
            setloading(false);
        }
        getMovies();
    },[])
    return(
        <>
        {loading ? <Loader /> : <Main data={Data} />}
        </>
    );
}


