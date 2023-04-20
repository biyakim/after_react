import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  //let post = '찬실은복도많지!'
  
  let [제목들, 제목변경] = useState(['찬실은복도많지','내서랍속에행복','컴온컴온']);
  let[like, likeAdd] = useState(0);
  let[modal, setModal] = useState(false);

  [1,2,3,4,5].map(function(a){
    console.log(a)
  })
  return (
    <div className="App">
      <div className='black-nav'>
        <h4 style = {{color : 'red', fontSize : '16px'}}>힐링영화</h4>
      </div>
      <button onClick={() => {
        let copy1 = [...제목들];
        copy1[0] = '벌새';
        //copy1[1] = '우리들';
        //copy1[2] = '가족';
        제목변경(copy1);
      }}>신규영화</button>
      <button onClick={() => {
        let copy2 = [...제목들];
        copy2.sort();
        제목변경(copy2);
      }}>제목정렬</button>
      {/* <div className='list'>
        <h4>{제목들[0]}<span onClick={() => {likeAdd(like+1)}}>👍</span>{like}</h4>
        <p>4월18일</p>
      </div>
      <div className='list'>
        
        <h4 onClick={()=>{setModal(!modal)}}>{제목들[1]}</h4>
        <p>4월18일</p>
      </div>
      <div className='list'>
        <h4>{제목들[2]}</h4>
        <p>4월18일</p>
      </div> */}
      {/* <Modal></Modal> */}
      {/* <Modal/> */}
      {
        modal == true ? <Modal/> : null
      }
      {/* {
         제목들.map(function(e) {
          return (
            <div className='list'>
                <h4>{e}</h4>
                <p>4월18일</p>
            </div>
          )
        })
      } */}
     {
         제목들.map(function(e,i) {
          return (
            <div className='list'>
                <h4>{제목들[i]}</h4>
                <p>4월18일</p>
            </div>
          )
        })
      }
    </div>
  );
}

function Modal(){
  return(
    <>
    <div className='modal'>
         <h4>제목</h4>
         <p>날짜</p>
         <p>상세내용</p>
      </div>
    </>
    
  )
}

export default App;
