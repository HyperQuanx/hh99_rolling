import React, { useState } from 'react'
import { StBioWrap,StName,StBio, StTextInput, StForm, StBtn, StBold } from './styles';
import { useMutation, useQueryClient } from 'react-query';
import { putBio } from '../../../api/rollingPaper';


const MyBio = ({rollingPaper}) => {
  const [bio, setBio] = useState("");

  const queryClient = useQueryClient();
  const mutation = useMutation(putBio, {
    onSuccess: () => {
      alert('자기소개 입력 완료!');
      console.log("bio 입력 mutation성공",bio);
      queryClient.invalidateQueries("rollingPapers");
    },
  })

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("bio submit성공",bio);

    // 빈칸 검사
    if (!bio) {
      return alert("자기소개 내용을 작성해주세요👼");
    };

    const newBio = {
      ...rollingPaper,
      bio:bio
    };

    mutation.mutate(newBio);
    setBio("");
  };
  return (
  <StBioWrap>
    <StName>{rollingPaper.userName}님에게 전달하고 싶은 말을 남겨주세요💗 </StName>
    <StBio>{rollingPaper.userName}님의 자기소개 : <StBold>{rollingPaper.bio}</StBold>
    <StForm onSubmit={submitHandler}>
    <StTextInput rows={10} cols={30} placeholder=' 자기소개를 입력해주세요!'
    value={bio} onChange={(e) => setBio(e.target.value)}/>
    <StBtn type="submit">입력</StBtn>
    </StForm>
    </StBio>
  </StBioWrap>
  )
}

export default MyBio
