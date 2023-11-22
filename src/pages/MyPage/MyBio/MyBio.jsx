import React, { useState } from 'react'
import { StBioWrap,StName,StBio, StTextInput, StForm } from './styles';
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
    // setBio("");
  };
  return (
  <StBioWrap>
    <StName>(이름 or 사진) {rollingPaper.userName} </StName>
    <StBio>(각자 자기소개) {rollingPaper.bio}
    <StForm onSubmit={submitHandler}>
    <StTextInput rows={10} cols={30} value={bio} onChange={(e) => setBio(e.target.value)}/>
    <button type="submit">입력</button>
    </StForm>
    </StBio>
  </StBioWrap>
  )
}

export default MyBio