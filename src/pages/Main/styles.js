import styled from 'styled-components';

const StWrap = styled.div`
  width: 1280px;
  margin: 0 auto;
`;
const StMainSlider = styled.div`
  width: 100%;
  height: 200px;
  padding-top: 100px;
  font-size: 50px;
  text-align: center;
  color: white;
  background-color: #552cb7;
`;

const StPaperList = styled.div`
  width: 96%;
  height: 600px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const StPaper = styled.div`
  width: 160px;
  height: 100px;
  margin: 20px;
  padding: 20px;
  border: 3px solid #111111;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  text-align: center;
  justify-content: center;
`;
const StName = styled.span`
  font-weight: bold;
`;
const Screen = styled.div`
  width: 100%;
  text-align: center;
  font-size: 30px;
  background-image: url('../public/qwer.png');
  background-size: cover;
  background-position: center;
  color: white;
`;
const ContainerName = styled.div`
  width: 96%;
  text-align: center;
  font-size: 70px;
  margin: 100px 100px 150px 0px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  border-radius: 5px;
  padding: 30px;
`;

export { StWrap, StMainSlider, StPaperList, StPaper, StName, Screen, ContainerName };
