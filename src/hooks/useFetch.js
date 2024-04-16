import axios from "axios";
import { useState } from "react";

const useFetch = () => {

    const[apiData, setApiData] = useState();
    const[isLoading, setIsloading] = useState(true);
    const[hasError, setHasError] = useState(false);
    const getApi = url => {
        axios.get(url)
        .then(res => {
            setApiData(res.data)
            setHasError(false)
        })

        .catch(err => {
            setHasError(true)
            console.log(err)
        })
        .finally(() => {
            setIsloading(false);
        });
    }
     return [apiData, getApi, isLoading, hasError];
}

export default useFetch;