// style.js

import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  backdrop-filter: blur(3px);
`;

export const Center = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  column-gap: 5px;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  font-size: 40px;
  
`;

export const LoginP = styled.p`
  margin-top: 0px;
`;

export const CloseButton = styled.button`
  margin-top: 0px;
  padding: 5px 10px;
  background-color: transparent;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  height: fit-content;
`;

export const InputStyle = styled.input`
  height: 20px;
  border-radius: 5px;
  margin-bottom: 8px;
  width: 200px;
  text-align: center;
`;

export const LoginButton = styled.button`
  font-size: 20px;
  background: linear-gradient(45deg, rgba(255, 153, 2, 0.5) 20%, rgba(255, 153, 204, 0.4) 100%);
`;

export const Information = styled.a`
  margin-top: 30px;
  font-size: 15px;
  background-color: transparent;
`;
