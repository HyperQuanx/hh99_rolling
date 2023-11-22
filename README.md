yarn add
react-router-dom
react-redux @reduxjs/toolkit
redux react-redux
styled-components
axios
redux-thunk
react-query
json-server
json-server --watch db.json --port 4000
cross-env



2023. 11. 20. 오늘까지 끝내야 할 것

backend : api 완성. 서버 배포

frontend : 기능 구현. ( 회원가입, 로그인, 롤링페이퍼 추가, 롤링페이퍼 작성 )

색 구현 질문 + backend들에게 서버에 색깔 저장 요청

추가로 넣어야 할 기능

이미지 추가, 배경 색 커스터 마이징, 글자 색 커스터 마이징, 메인화면 동적으로 보이게 하기. 마지막 디자인 화요일까지 + 수요일 아침까지

시도해볼만 한 작업 > 테마 추가.

수요일 까지 추가적인 기능 다 넣고 8시 쯤 다 끝나면 모여서 발표에 관한 얘기. 서로가 구현한 기능들을 제게 말씀해주시면 제가 그거 기반으로 프레젠테이션.

대충 리허설 한번만 하고.




api server

http://52.79.226.181/api/users







headers: {
          Authorization: `Bearer ${yourAuthToken}`, // 여기에 실제 토큰을 넣어주세요
        },




import React, { useState } from 'react';
import { ModalWrapper, ModalContent, CloseButton, InputStyle, LoginButton, LoginP, Center } from './style';
import SignUp from './SignUp';
import axios from 'axios';
import { useCookies } from 'react-cookie';

const Login = ({ onClose }) => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [isSignUpMode, setSignUpMode] = useState(false);
  const BASE_URL = 'http://52.79.226.181/api';

  const [cookies, setCookie, removeCookie] = useCookies(['token']);

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
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
            // 필요한 경우 다른 헤더를 추가하세요.
          },
        },
      );
      console.log(response);
      const token = response.data.token;
      setCookie('token', token);

      console.log('로그인 성공:', response.data);
      alert('로그인이 성공적으로 완료되었습니다.');
      onClose();
    } catch (error) {
      console.error('로그인 실패:', error);
      alert('로그인에 실패했습니다. 아이디와 비밀번호를 확인하세요.');
    }
  };
