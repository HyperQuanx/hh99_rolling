import React, { useState } from 'react';
import MyBio from './MyBio/MyBio';
import MyPapers from './MyPapers/MyPapers';
import { getPapers } from '../../api/rollingPaper';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { StWrap } from '../Main/styles';
import { StMyWrap, StName } from './styles';

const MyPage = () => {
  const params = useParams();
  const [rollingPaper, setRollingPaper] = useState(
    {userId: '', userName: '', bio: '', comments: [{comment: ''},{comment: ''}]}
  );

  const {isError, data} = useQuery("myPage", getPapers, {
    onSuccess: (data) => {
      const foundData = data.find((item) => item.userId == params.userId);
      if (foundData) {
        setRollingPaper(foundData); // 찾은 데이터를 state에 업데이트->렌더링
      }; 
    }
  });
  if (isError) return <div>마이페이지 에러 오류</div>

  // console.log("data",data);
  // console.log("params",params);
  // console.log("rollingPaper",rollingPaper);

  return (
    <StWrap>
      <StName>{rollingPaper.userName}님의 롤링페이지✨</StName>
      <StMyWrap>
      <MyBio rollingPaper={rollingPaper}/>
      <MyPapers/>
      </StMyWrap>
    </StWrap>
    );
};

export default MyPage;
