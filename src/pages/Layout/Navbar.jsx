// Navbar.jsx

import React, { useState } from 'react';
import { NavbarBox, NavbarLogin, NavbarTitle } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import Modal from '../Login/Login';
import { useCookies } from 'react-cookie';

const Navbar = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const [isSignUpMode, setSignUpMode] = useState(false);

  const [cookies, removeCookie] = useCookies(['token']);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleLogout = () => {
    alert('로그아웃되었습니다!');
    // 쿠키 제거
    removeCookie('token');
    // Navbar.jsx에서 사용할 로그아웃 로직 수행
    setSignUpMode(prevSignUpMode => false);
    // 모달을 닫음
    setModalOpen(false);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <NavbarBox>
        <NavbarTitle>Rolling-Paper ★</NavbarTitle>
        <NavbarLogin>
          {isSignUpMode ? (
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
        {isModalOpen && <Modal onClose={handleCloseModal} />}
      </NavbarBox>
    </div>
  );
};

export default Navbar;
