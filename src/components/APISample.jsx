import React, { useCallback, useEffect, useState } from 'react';
import { json } from 'react-router-dom';

const APISample = () => {
  const [data, setData] = useState(null);
  const [number, setNumber] = useState(1);

  const callAPI = useCallback(()=>{
    fetch(`https://jsonplaceholder.typicode.com/todos/${number}`)
    .then(res => res.json())
    .then(json=>{
      console.log(json);
      setData(json);
    });
  },[number])

  //뭐할 때 사용하는 건지 확실히 이해하셈
  useEffect(()=>{
    callAPI();
  },[callAPI]);



  return (
    <div>
      {data ? <h1>{number} : {data.title}</h1> : '데이터를 아직 부르는중...'}
      <button onClick={()=>{
        setNumber(number+1)
      }}>데이터 불러오기</button>
    </div>
  );
};

export default APISample;