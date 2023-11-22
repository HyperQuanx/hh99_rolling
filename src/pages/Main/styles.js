import styled from "styled-components";

const StWrap = styled.div`
  width: 1280px;
  margin: 0 auto;
`
const StMainSlider = styled.div`
  width:100%;
  height: 200px;
  padding-top: 100px;
  font-size: 50px;
  text-align: center;
  color: white;
  background-color: #552cb7;
`

const StPaperList = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const StPaper = styled.div`
  width: 160px;
  margin: 20px;
  padding: 20px;
  border: 3px solid #111111;
  border-radius: 10px;
  background-color: #ffc567;
  cursor: pointer;
`
const StName = styled.span`
  font-weight: bold;
`


export { StWrap, StMainSlider, StPaperList, StPaper, StName }
