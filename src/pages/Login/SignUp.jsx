import React, { useState } from 'react';
import { ModalWrapper, ModalContent, CloseButton, InputStyle, LoginButton, Center, Information } from './styles';
import axios from 'axios';

const SignUp = ({ onClose }) => {
  const [newUserId, setNewUserId] = useState({
    userId: '',
  });
  const [newPassword, setNewPassword] = useState({
    password: '',
  });
  const [newUserName, setNewUserName] = useState({
    username: '',
  });
  const BASE_URL = 'http://52.79.226.181/api';

  const handleSignUp = async () => {
    try {
      const response = await axios.post(`${BASE_URL}/signup`, {
        userId: newUserId.userId,
        password: newPassword.password,
        userName: newUserName.username,
      });

      console.log('회원가입 성공:', response.data);
      alert('회원가입이 성공적으로 완료되었습니다.');
      onClose();
    } catch (error) {
      console.error('회원가입 실패:', error);

      // 에러 메시지 출력
      if (error.response) {
        console.error('상태 코드:', error.response.status);
        console.error('응답 데이터:', error.response.data);
        alert(`회원가입 실패: ${error.response.data.message}`);
      } else if (error.request) {
        console.error('요청이 전송되지 않음');
      } else {
        console.error('에러 메시지:', error.message);
      }
    }
  };

  const handleBackToLoginClick = () => {
    onClose();
  };

  return (
    <ModalWrapper>
      <ModalContent>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>Sign Up</div>
          <CloseButton onClick={onClose}>X</CloseButton>
        </div>
        <Center>
          <label htmlFor="newUserId" style={{ fontSize: '30px' }}>
            New User Id:{' '}
          </label>
          <InputStyle
            type="text"
            id="newUserId"
            placeholder="생성할 아이디를 입력해주세요."
            value={newUserId.userId}
            onChange={e => {
              setNewUserId({
                userId: e.target.value,
              });
            }}
          />
        </Center>
        <Center>
          <label htmlFor="newPassword" style={{ fontSize: '30px' }}>
            New Password:{' '}
          </label>
          <InputStyle
            type="password"
            id="newPassword"
            placeholder="영문+숫자 4 ~ 12자리 조합."
            value={newPassword.password}
            onChange={e => {
              setNewPassword({
                password: e.target.value,
              });
            }}
          />
        </Center>
        <Center style={{ marginBottom: '20px' }}>
          <label htmlFor="newUserName" style={{ fontSize: '30px' }}>
            User Name:{' '}
          </label>
          <InputStyle
            type="text"
            id="newUserName"
            placeholder="본인 이름을 정확히 입력하세요 !"
            value={newUserName.username}
            onChange={e => {
              setNewUserName({
                username: e.target.value,
              });
            }}
          />
        </Center>
        <LoginButton onClick={handleSignUp}>Create User!</LoginButton>
        <LoginButton onClick={handleBackToLoginClick} style={{ marginLeft: '10px' }}>
          Return Login
        </LoginButton>
        <br />
        <div>
          <Information href="https://teamsparta.notion.site/247d57da1322424d8e8c551df21a048e" target="_blank">
            서비스 이용약관
          </Information>
          <span style={{ fontSize: '20px', marginLeft: '10px', marginRight: '10px' }}> | </span>
          <Information href="https://teamsparta.notion.site/7b1dc644460946f08bab08b794de685f" target="_blank">
            개인정보처리방침
          </Information>
        </div>
      </ModalContent>
    </ModalWrapper>
  );
};

export default SignUp;
