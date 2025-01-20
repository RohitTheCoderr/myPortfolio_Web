import { useState,useEffect } from "react";
import { getFetch } from "@src/utils/apiCall";

export default function useFetch(path){
const [data,setData] = useState("")
const [error,setError] = useState("")

useEffect(()=>{
    getFetch(path)
    .then((data) => setData(data))
    .catch((error) => setError(error))
}, [path])

    return { data, error }
}