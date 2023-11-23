import React, { useState } from 'react';
import { StBioWrap, StName, StBio, StTextInput, StForm } from './styles';
import { useMutation, useQueryClient } from 'react-query';
import { putBio } from '../../../api/rollingPaper';
import { faArrowDown, faPen, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MyBio = ({ rollingPaper }) => {
  const [bio, setBio] = useState('');

  const queryClient = useQueryClient();
  const mutation = useMutation(putBio, {
    onSuccess: () => {
      alert('자기소개 입력 완료!');
      console.log('bio 입력 mutation성공', bio);
      queryClient.invalidateQueries('rollingPapers');
    },
  });

  const submitHandler = event => {
    event.preventDefault();
    console.log('bio submit성공', bio);

    // 빈칸 검사
    if (!bio) {
      return alert('자기소개 내용을 작성해주세요👼');
    }

    const newBio = {
      ...rollingPaper,
      bio: bio,
    };

    mutation.mutate(newBio);
    // setBio("");
  };
  return (
    <StBioWrap>
      <StName>
        <FontAwesomeIcon icon={faUser} style={{ marginRight: '10px' }} />
        {rollingPaper.userName}{' '}
      </StName>
      <StBio>
        <div>
          <div style={{ marginTop: '10px', marginBottom: '20px' }}>자기소개</div>
          <div style={{ textAlign: 'center' }}>
            <FontAwesomeIcon icon={faArrowDown} />
          </div>
          <div>-------</div>
          <div style={{ textAlign: 'center' }}>{rollingPaper.bio}</div>
        </div>
        <StForm onSubmit={submitHandler}>
          <StTextInput value={bio} onChange={e => setBio(e.target.value)} />
          <button type="submit" style={{ fontSize: '20px' }}>
            <FontAwesomeIcon icon={faPen} />
          </button>
        </StForm>
      </StBio>
    </StBioWrap>
  );
};

export default MyBio;
