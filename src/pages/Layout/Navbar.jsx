// Navbar.jsx

import React, { useState } from 'react';
import { NavbarBox, NavbarLogin, NavbarTitle } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import Modal from '../Login/Login';

const Navbar = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isAuthenticated, setAuthenticated] = useState(false); // 인증 상태를 관리

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleLogout = () => {
    alert('로그아웃되었습니다!');
    setAuthenticated(false); // 인증 상태 업데이트
    // 모달을 닫음
    setModalOpen(false);
  };

  const handleLogin = () => {
    setAuthenticated(true);
    setModalOpen(false);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <NavbarBox>
        <NavbarTitle href="/">Rolling-Paper ★</NavbarTitle>
        <NavbarLogin>
          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              style={{
                backgroundColor: 'transparent',
                height: 'fit-content',
                fontSize: '55px',
                padding: '0px',
                marginRight: '35px',
              }}
            >
              Logout
            </button>
          ) : (
            <button
              onClick={handleOpenModal}
              style={{
                padding: '5px',
                fontSize: '60px',
                backgroundColor: 'transparent',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: '35px',
              }}
            >
              <FontAwesomeIcon icon={faUser} />
            </button>
          )}
        </NavbarLogin>
        {isModalOpen && <Modal onClose={handleCloseModal} onLogin={handleLogin} />}
      </NavbarBox>
    </div>
  );
};

export default Navbar;
