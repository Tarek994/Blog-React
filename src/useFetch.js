import {useState, useEffect} from "react";

const useFetch = (url) =>{
    
    const [data, setData] = useState(null);
    const [isloading, setIsloading] = useState(false);
    const [errMsg, setErrMsg] = useState(null);
  
    useEffect(() =>{
      setIsloading(true);
      setErrMsg(null);
      fetch(url)
      .then((res)=>{
        console.log(res)
        if(!res.ok){
          throw Error(res.statusText ? res.statusText : "Error")
         
        }
        return res.json();
      })
      .then((data) => {
        setIsloading(false)
        console.log(data);
        setData(data);
        
      }).catch((err) => {
        setIsloading(false);
        setErrMsg(err.message)
      })
  },[])
    
}

export default useFetch