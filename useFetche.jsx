import { useEffect, useState } from "react";
const useFetche = (url) => {
  const [data, setData] = useState(null);
  const [IsPending , SetIsPending] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() =>{
    const abortCont = new AbortController();
    fetch(url, {signal: abortCont.signal})
    .then(res =>{
      if(!res.ok){
        throw Error('could not fetch the data for that resource');
      }
      return res.json();
    })
    .then(data=>{
      setData(data);
      SetIsPending(false);
      setError(null);
    })
    .catch(err =>{
      if(err.name === 'AbortError'){
        console.log('fetch aborted');
      }else{
        SetIsPending(false);
        setError(err.message);
      }
    });
    return ()=> abortCont.abort();
  }, [url]);
  return {data, IsPending, error}
}

export default useFetche;