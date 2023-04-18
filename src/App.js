import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  //let post = '찬실은복도많지!'
  
  let [제목들, 제목변경] = useState(['찬실은복도많지','내서랍속에행복','컴온컴온']);
  let[like, likeAdd] = useState(1)
  return (
    <div className="App">
      <div className='black-nav'>
        <h4 style = {{color : 'red', fontSize : '16px'}}>힐링영화</h4>
      </div>
      <button onClick={() => {
        let copy1 = [제목들];
        copy1[0] = '벌새';
        //copy1[1] = '우리들';
        //copy1[2] = '가족';
        제목변경(copy1);
      }}>신규영화</button>
      <div className='list'>
        <h4>{제목들[0]}<span onClick={() => {likeAdd(like+1)}}>👍</span>{like}</h4>
        <p>4월18일</p>
      </div>
      <div className='list'>
        <h4>{제목들[1]}<span onClick={() => {likeAdd(like+1)}}>👍</span>{like}</h4>
        <p>4월18일</p>
      </div>
      <div className='list'>
        <h4>{제목들[2]}<span onClick={() => {likeAdd(like+1)}}>👍</span>{like}</h4>
        <p>4월18일</p>
      </div>
    </div>
  );
}

export default App;
