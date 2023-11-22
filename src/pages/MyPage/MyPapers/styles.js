import styled from "styled-components";

const StPaperWrap = styled.div`
  width: 80%;
  background-color: #eeeeee;
  border: 3px solid #111111;
  border-left: none;
  `

const StInput = styled.input`
  width: 70%;
  height: 60px;
  margin: 10px;
  background-color: #ffffff;
  border: none;
  border-radius: 10px;
`

const StPaperBox = styled.div`
  margin: 20px;
  height: 100%;
  background-color: #bbbbbb;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`

const StPaper = styled.div`
  width: 16%;
  height: 200px;
  padding: 20px;
  background-color: #ffffff;
`

export {StPaperWrap,StInput,StPaper,StPaperBox}
