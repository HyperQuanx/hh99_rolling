import React, { useState } from 'react';
import { ModalWrapper, ModalContent, CloseButton, InputStyle, LoginButton, LoginP, Center } from './styles';
import SignUp from './SignUp';
import axios from 'axios';
// import { useCookies } from 'react-cookie';

const Login = ({ onClose, onLogin }) => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [isSignUpMode, setSignUpMode] = useState(false);
  const BASE_URL = 'https://port-0-rolling-paper-3szcb0g2blp9q5y23.sel5.cloudtype.app/api';
  // const [cookies, setCookie, removeCookie] = useCookies(['token']);

  const handleLogin = async () => {
    // const token = 'qasdasd';
    // setCookie('token', token);
    // console.log(cookies);
    // removeCookie('token');
    // console.log(cookies);
    try {
      const response = await axios.post(
        `${BASE_URL}/login`,
        {
          userId: id,
          password: pw,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            // 필요한 경우 다른 헤더를 추가하세요.
          },
        },
      );
      // 'Authorization' 헤더에서 토큰을 추출합니다.
      const token = response.headers['authorization'] || response.headers['Authorization'];
      // setCookie('token', token);

      // console.log(response);
      // const token = response.data.token;

      // onLogin 함수를 호출하여 토큰을 부모 컴포넌트로 전달
      if (typeof onLogin === 'function') {
        onLogin(token);
      }

      console.log('로그인 성공:', token);
      alert('로그인이 성공적으로 완료되었습니다.');

      onClose();
    } catch (error) {
      console.error('로그인 실패:', error);
      alert('로그인에 실패했습니다. 아이디와 비밀번호를 확인하세요.');
    }
  };

  const handleSignUpClick = () => {
    setSignUpMode(true);
  };

  const handleBackToLoginClick = () => {
    setSignUpMode(false);
  };

  return (
    <ModalWrapper>
      <ModalContent>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          {isSignUpMode ? <LoginP>Sign Up</LoginP> : <LoginP>Login</LoginP>}
          <CloseButton onClick={onClose}>X</CloseButton>
        </div>
        {isSignUpMode ? (
          <SignUp onClose={() => handleBackToLoginClick()} />
        ) : (
          <>
            <Center>
              <label htmlFor="userId">User Id: </label>
              <InputStyle
                type="text"
                id="userId"
                placeholder="아이디를 입력해주세요."
                value={id}
                onChange={e => setId(e.target.value)}
              />
            </Center>
            <Center>
              <label htmlFor="password">Password: </label>
              <InputStyle
                type="password"
                id="password"
                placeholder="비밀번호를 입력해주세요."
                value={pw}
                onChange={e => setPw(e.target.value)}
              />
            </Center>
            <LoginButton onClick={() => handleLogin()}>Login</LoginButton>
            <div style={{ marginTop: '40px' }}>
              <span style={{ fontSize: '25px', marginRight: '20px' }}>회원이 아니신가요?</span>
              <LoginButton onClick={handleSignUpClick}>Sign up</LoginButton>
            </div>
          </>
        )}
      </ModalContent>
    </ModalWrapper>
  );
};

export default Login;
