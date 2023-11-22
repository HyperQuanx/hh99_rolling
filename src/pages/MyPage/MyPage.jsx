import React, { useState } from 'react';
import { Center } from '../Login/styles';

const MyPage = () => {
  const [color, setColor] = useState('rgba(255, 153, 204, 0.4) 100%');

  return (
    <div>
      <h1 style={{ background: color }}>test</h1>
      <button
        style={{ background: 'rgba(255, 153, 2, 0.5) 20%' }}
        onClick={() => setColor('rgba(255, 153, 2, 0.5) 20%')}
      >
        색
      </button>
      <button style={{ background: 'rgba(2, 255, 15, 0.5) 20%' }} onClick={() => setColor('rgba(2, 255, 15, 0.5) 20%')}>
        바
      </button>
      <button
        style={{ background: 'rgba(2, 255, 251, 0.639) 20%' }}
        onClick={() => setColor('rgba(2, 255, 251, 0.639) 20%')}
      >
        꾸
      </button>
      <button
        style={{ background: 'rgba(238, 255, 2, 0.964) 20%' }}
        onClick={() => setColor('rgba(238, 255, 2, 0.964) 20%')}
      >
        기
      </button>
      <button defaultBorder>실험버튼</button>
      <div
        style={{
          border: '1px solid black',
          borderRadius: '10px',
          width: '100px',
          height: '100px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        실험박스
      </div>
    </div>
  );
};

export default MyPage;
