import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  //let post = '찬실은복도많지!'
  
  let [제목들, 제목변경] = useState(['찬실은복도많지','내서랍속에행복','컴온컴온']);
  let[like, likeAdd] = useState(0);
  let[modal, setModal] = useState(false);
  //동적UI를 만들기 위해서는 현재UI상태를 state에 저장해 두어야함
  let[title, setTitle] = useState(0); //0이면 0번째 제목, 1이면 1번째 제목, 2이면 2번째 제목


  // [1,2,3,4,5].map(function(a){
  //   console.log(a)
  // })
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
        // modal == true ? <Modal/> : null
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
                <h4 onClick={() => {setModal(true); setTitle(i)}}>{제목들[i]}</h4>
                <p>4월18일</p>
            </div>
          )
        })
      }
      {
        modal == true ? <Modal 제목변경 = {제목변경} color = "skyblue" title1 = {제목들} title = {title}/> : null
        // modal == true ? <Modal/> : null
      }
    </div>
      
  );
}

function Modal(props){
  return(
    <div className='modal' style={{background : props.color}}>
         <h4>{props.title1[props.title]}</h4>
         {/* <h4>{제목들[0]}</h4> */}
         <p>날짜</p>
         <p>상세내용</p>
         <button onClick={() => {props.제목변경(['라이프잇셀프', '벌새', '라이스보이'])}}>글 수정</button>
      </div>
    
  )
}

export default App;
