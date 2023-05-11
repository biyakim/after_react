import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
//1. 이벤트버블링 해결
//2. 입력창에 내용을 영화 리스트 맨 위에 삽입
//3. 영화제목마다 삭제 버튼 만들어 삭제하기
//4. 종하요가 각자 영화에 따라 증가하기
//5. 모달창에 닫기 버튼을 만들어 누르면 모달창 닫기
function App() {
  //let post = '찬실은복도많지!'
  
  let [제목들, 제목변경] = useState(['찬실은복도많지','내서랍속에행복','컴온컴온']);
  let[like, setLike] = useState([0, 0, 0]);
  let[modal, setModal] = useState(false);
  //동적UI를 만들기 위해서는 현재UI상태를 state에 저장해 두어야함
  let[title, setTitle] = useState(0); //0이면 0번째 제목, 1이면 1번째 제목, 2이면 2번째 제목
  //사용자가 입력 내용을 저장하는 변수
  let[user, setUser] = useState('');

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
                <h4 onClick={() => {setModal(true); setTitle(i)}}>{제목들[i]}
                <span onClick={(e) =>{e.stopPropagation(); 
                  let copy6 = [...like];
                  copy6[i] = copy6[i] + 1;

                  setLike(copy6)}}>👍</span>{like[i]}</h4>
                <p>4월18일</p>
                <button onClick={() => {
                    let copy4 = [...제목들];
                    copy4.splice(i,1);
                    제목변경(copy4);
                }}>삭제</button>
            </div>
          )
        })
      }
      {/* <input type = "text" onChange={(e) => {console.log(e.target.value)}}></input> */}
       {/* 사용자가 입력한 내용을 user에 저장하기 */}
       <input type = "text" onChange={(e) => {setUser(e.target.value)}}></input>
       <button onClick={() => {
            let copy3 = [...제목들];
            copy3.unshift(user);
            // copy3[0] = user
            제목변경(copy3);
       }}>발행</button>
      {
        modal == true ? <Modal 제목변경 = {제목변경} color = "skyblue" title1 = {제목들} title = {title} modal = {setModal}/> : null
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
         <button onClick={() => {props.modal(false)}}>창 닫기</button>
      </div>
    
  )
}

export default App;
