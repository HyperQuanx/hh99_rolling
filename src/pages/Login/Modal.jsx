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

  return showLoginModal ? (
    <Login onClose={handleCloseModal} onSignUpClick={handleSignUpClick} />
  ) : (
    <SignUp onClose={handleCloseModal} />
  );
};

export default Modal;
