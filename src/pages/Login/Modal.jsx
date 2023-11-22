// Modal.jsx
import React, { useState } from 'react';
import Login from './Login';
import SignUp from './SignUp';

const Modal = () => {
  const [showLoginModal, setShowLoginModal] = useState(true);

  const handleSignUpClick = () => {
    setShowLoginModal(false);
  };

  const handleCloseModal = () => {
    setShowLoginModal(true);
  };

  const handleLogin = token => {
    // 로그인 성공 후 처리
    console.log('로그인 성공, 토큰:', token);
    // 여기서 추가적인 로그인 성공 처리 로직을 수행할 수 있습니다.
    // 예를 들어, 상태를 업데이트하거나 다른 동작을 수행할 수 있습니다.
  };

  return showLoginModal ? (
    <Login onClose={handleCloseModal} onSignUpClick={handleSignUpClick} onLogin={handleLogin} />
  ) : (
    <SignUp onClose={handleCloseModal} />
  );
};

export default Modal;
