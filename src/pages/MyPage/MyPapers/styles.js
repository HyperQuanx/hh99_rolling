import styled from 'styled-components';

const StPaperWrap = styled.div`
  width: 80%;
  background-color: #eeeeee;
  border: 3px solid #111111;
  border-left: none;
  border-radius: 0 10px 10px 0;
`;

const StInput = styled.input`
  width: 70%;
  height: 60px;
  margin: 10px;
  background-color: #ffffff;
  border: none;
  border-radius: 10px;
`;

const StPaperBox = styled.div`
  width: 96%;
  height: 80%;
  margin: 20px;
  background-image: url('../public/wkf.png');
  background-size: cover;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const StPaper = styled.div`
  width: 200px;
  height: 100px;
  padding: 20px;
  font-size: 30px;
  background-color: rgba(255, 255, 255, 0.5);
`;

export { StPaperWrap, StInput, StPaper, StPaperBox };
