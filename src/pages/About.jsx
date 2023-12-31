import React from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'

const About = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const detail = searchParams.get('detail');
  const mode = searchParams.get('mode');

  const onToggleDetail = () =>{
    setSearchParams({mode, detail: detail === 'true' ? false : true})
  }
  const onIncreaseMode = () =>{
    const nextMode = mode === null ? 1 : parseInt(mode) + 1;
    setSearchParams({mode: nextMode, detail})
  }

  return (
    <div>
      <h1>소개</h1>
      <p>react router를 사용해보는 페이지입니다.</p>
      <p>detail : {detail}</p>
      <p>mode : {mode}</p>

      <p>쿼리스트링 : {location.search}</p>
      <button onClick={onToggleDetail}>Toggle detail</button>
      <button onClick={onIncreaseMode}>mode + 1</button>
      {/* <p>현재 주소의 경로: {location.pathname}</p>
      <p>hash : {location.hash}</p>
      <p>state : {location.state}</p>
      <p>key : {location.key}</p> */}
      </div>
  )
}

export default About