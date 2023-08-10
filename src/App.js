import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import {Route, Routes, NavLink, Link} from 'react-router-dom';
// import Profiles from './pages/Profiles';
import Profile from './pages/Profile';
import Profiles from './pages/Profiles';
import Articles from './pages/Articles';
import Article from './pages/Article';
import Layout from './pages/Layout';
import StyledComp from './pages/StyledComp';
import SassButton from './pages/SassButton';
import CheckBox from './components/CheckBox';
import Check from './pages/Check';
import APITest from './pages/APITest';



function App() {
  console.log(Profile.length)

  return (
    <div>
      <h1>리액트 연습</h1>
      <ul>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/about?detail=true&mode=150'}>About</NavLink></li>
        <li><NavLink to={'/profile'}>Profiles</NavLink></li>
        <li><Link to={'/articles'}>게시글 목록</Link></li>
        <li><Link to={'/StyledComp'}>스타일 컴포넌트</Link></li>
        <li><Link to={'/SassButton'}>Sass 스타일링</Link></li>
        <li><Link to={'/check'}>css 모듈</Link></li>
        <li><Link to={'/apisample'}>API 페이지</Link></li>
      </ul>
      <Routes>
        <Route element={<Layout></Layout>}>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/profile' element={<Profiles></Profiles>} ></Route>
        <Route path='/profile/:username' element={<Profile></Profile>}></Route>
        </Route>
        <Route path='/articles' element={<Articles></Articles>}>
        <Route path=':id' element={<Article></Article>}></Route>
        </Route>
        <Route path='/StyledComp' element={<StyledComp></StyledComp>}></Route>
        <Route path='/SassButton' element={<SassButton></SassButton>}></Route>
        <Route path='/check' element={<Check></Check>}></Route>
        <Route path='/apisample' element={<APITest></APITest>}></Route>

      </Routes>
    </div>
  );
}

export default App;
