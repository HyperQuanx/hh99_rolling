import styled from "styled-components";

const StPaperWrap = styled.div`
  width: 80%;
  background-color: #eeeeee;
  border: 3px solid #111111;
  border-left: none;
  `

const StLabel = styled.label`
  margin: 16px;
  font-size: 26px;
`

const StInput = styled.input`
  width: 70%;
  height: 60px;
  margin-top: 20px;
  background-color: #ffffff;
  border: none;
  border-radius: 10px;
  &::placeholder {
  color: #ffd1dc;
}
`

const StBtn = styled.button`
  margin: 16px;
  background-color: #ffd1dc;
  `

const StPaperBox = styled.div`
  margin: 20px;
  padding: 20px;
  height: 80%;
  background-color: #dddddd;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`

const StPaper = styled.div`
  width: 16%;
  height: 160px;
  padding: 20px;
  background-color: #ffffff;
`

export {StPaperWrap,StLabel,StInput,StBtn,StPaper,StPaperBox}
