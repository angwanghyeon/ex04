import React from 'react'
import {useParams, NavLink} from 'react-router-dom'

const data = {
  velopert:{
    name: '안광현',
    description: '뽀로로가 될 남자'
  },
  gildong:{
    name:'홍길동',
    description: '바람을 다스리고 땅을 접어 달리며...'
  },
  lion:{
    name:'라이언',
    description:'카카오의 마스코트'
  }
}
const Profile = () => {
  
  const params = useParams();
  console.log(params);
  let profile = data[params.username];
  console.log(profile);

  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
          <p><NavLink to='/profile'>선택페이지로</NavLink></p>
        </div>
      ) : (
        <div>
        <p>존재하지 않는 프로필입니다.</p>
        <p><NavLink to='/profile'>선택페이지로</NavLink></p>
        </div>
      )}
    </div>
  )
}

export default Profile