import styled from "styled-components";

const StBioWrap = styled.div`
  width: 20%;
  background-color: #a7e9af;
  border: 3px solid #111111;
  position: relative;
`
  
const StName = styled.div`
  height: 200px;
  padding: 10px;
  font-size: 30px;
  background-color: #ffd1dc;
  border-bottom: 3px solid #111111;
`

const StBio = styled.div`
  height: 60%;
  padding: 10px;
  font-size: 30px;
  background-color: #a7e9af;
`

const StBold = styled.span`
  font-size: 40px;
  font-weight: 800;
  `

const StForm = styled.form`
  width: 100%;
  position: absolute;
  bottom:0;
`

const StTextInput = styled.textarea`
  border: none;
  border-radius: 8px;
  display: block;
  resize: none;
  &::placeholder {
  color: #a7e9af;
  font-weight: bold;
}
`

const StBtn = styled.button`
  margin: 10px auto;
`

export {StBioWrap,StName,StBio,StBold,StForm,StTextInput,StBtn}
