import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import styled from 'styled-components';
//npm i react-typing-effect
const TypingTitle = styled.h1`
  text-shadow: 10px 10px 10px pink;
  font-size: 60px;
`;

export default function MainTyping() {
  return (
    <>
      <ReactTypingEffect
        text={[
          '항해99 17기 전용 Rolling-Paper',
          'Welcome to Rolling-Paper!',
          '소중한 순간을 기록해보세요!',
          '당신의 감성을 담은 소중한 메시지를 남겨보세요',
          '나만의 페이지를 꾸며보세요!',
        ]}
        cursorRenderer={cursor => <h1>{cursor}</h1>}
        speed={100}
        eraseSpeed={50}
        eraseDelay={1500}
        typingDelay={1000}
        displayTextRenderer={(text, i) => {
          return (
            <TypingTitle>
              {text.split('').map((char, i) => {
                const key = `${i}`;
                return <span key={key}>{char}</span>;
              })}
            </TypingTitle>
          );
        }}
      />
    </>
  );
}
