import styled from 'styled-components';

const StBioWrap = styled.div`
  width: 20%;
  background-color: #eeeeee;
  border: 3px solid #111111;
  position: relative;
  border-radius: 10px 0 0 10px;
`;

const StName = styled.div`
  height: 200px;
  font-size: 30px;
  border-bottom: 3px solid #111111;
  background-color: #a7e9af;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px 0 0 0;
`;

const StBio = styled.div`
  height: 400px;
  font-size: 30px;
  display: flex;
  justify-content: center;
`;

const StForm = styled.form`
  width: 100%;
  height: 50px;
  position: absolute;
  bottom: 0;
  display: flex;
`;

const StTextInput = styled.textarea`
  display: block;
  margin: 0 auto;
  border-radius: 5px;
`;

export { StBioWrap, StName, StBio, StForm, StTextInput };
