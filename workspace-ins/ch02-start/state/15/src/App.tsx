import { useState } from "react";

// 이메일 검증 정규식
const emailExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// 휴대폰 검증 정규식
const cellphoneExp = /^(01[016789]{1})[0-9]{3,4}[0-9]{4}$/;

function App() {

  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ cellphone, setCellphone ] = useState('010');

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handleCellphoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCellphone(event.target.value);
  };

  const user = { name: '', email: '', cellphone: '010' };

  const errors = {};

  const onSubmitHandler = () => {
    let newErrors = null;

    // 필수 입력 체크
    if(user.name.trim() === ''){
      newErrors = {
        name: { message: '이름을 입력하세요.' }
      };
    }else if(user.name.trim().length < 2){
      newErrors = {
        name: { message: '2글자 이상 입력하세요.' }
      };
    }else if(user.email.trim() === ''){
      newErrors = {
        email: { message: '이메일을 입력하세요.' }
      };
    }else if(emailExp.test(user.email) === false){
      newErrors = {
        email: { message: '이메일 양식에 맞지 않습니다.' }
      };
    }else if(user.cellphone.trim() === ''){
      newErrors = {
        cellphone: { message: '휴대폰 번호를 입력하세요.' }
      };
    }else if(cellphoneExp.test(user.cellphone) === false){
      newErrors = {
        cellphone: { message: '휴대폰 형식에 맞지 않습니다.' }
      };
    }
    
    if(newErrors){  // 입력값 검증 실패
      errors = newErrors;
    }else{  // 입력값 검증 통과
      errors = {};
      console.log('서버에 전송...', user);
    }
  };

  return (
    <>
      <h1>15 회원가입 입력값 상태 관리</h1>
      <form>
        <label htmlFor="name">이름</label>
        <input id="name" name="name" value={name} onChange={handleNameChange} /><br />
        <div className="error-style">검증 실패 메세지</div>

        <label htmlFor="email">이메일</label>
        <input id="email" name="email" value={email} onChange={handleEmailChange} /><br />
        <div className="error-style">검증 실패 메세지</div>

        <label htmlFor="cellphone">휴대폰</label>
        <input id="cellphone" name="cellphone" value={cellphone} onChange={handleCellphoneChange} /><br />
        <div className="error-style">검증 실패 메세지</div>

        <button type="submit">가입</button>
      </form>

      <p>
        이름: {name}<br />
        이메일: {email}<br />
        휴대폰: {cellphone}<br />
      </p>
    </>
  );  
}

export default App
