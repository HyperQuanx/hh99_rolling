import styled from "styled-components";

const StBioWrap = styled.div`
  width: 20%;
  background-color: #eeeeee;
  border: 3px solid #111111;
  position: relative;
`
  

const StName = styled.div`
  height: 200px;
  font-size: 30px;
  background-color: #00995e;
  border-bottom: 3px solid #111111;
`

const StBio = styled.div`
  height: 400px;
  font-size: 30px;
  background-color: #fb7da8;
`

const StForm = styled.form`
  width: 100%;
  position: absolute;
  bottom:0;
`

const StTextInput = styled.textarea`
  display: block;
  margin: 0 auto;
`

export {StBioWrap,StName,StBio,StForm,StTextInput}