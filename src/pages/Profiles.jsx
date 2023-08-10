import React from 'react'
import {NavLink, Route, Routes} from 'react-router-dom'
import Profile from './Profile';


const Profiles = () => {
  console.log(Profile.profile)
  
  return (
    <div>
      <h1>프로필 선택</h1>
      <ul>
      <li><NavLink to={'/profile/velopert'}>velopert</NavLink></li>
      <li><NavLink to={'/profile/gildong'}>gildong</NavLink></li>
      <li><NavLink to={'/profile/lion'}>lion</NavLink></li>
      </ul>
      <Routes>
        <Route path='profile/:username' element={<Profile></Profile>}></Route>
      </Routes>
    </div>
  )
}

export default Profiles