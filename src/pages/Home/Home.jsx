import React, { useState, useEffect } from 'react';
import { Screen } from './styles';
import { Link } from 'react-router-dom';
import MainTyping from './HomeTyping';
import Footer from '../Layout/Footer';

const Home = () => {
  return (
    <div>
      <div>
        <Screen>
          <MainTyping />
        </Screen>
      </div>
      <div style={{ height: '1000px' }}>
        <Link to="/mypage">이게 링크</Link>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
