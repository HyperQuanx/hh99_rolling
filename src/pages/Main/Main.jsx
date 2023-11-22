import React from 'react';
import { useQuery } from 'react-query';
import { getPapers } from '../../api/rollingPaper';
import { StMainSlider, StPaper, StPaperList, StName, StWrap } from './styles';
import { useNavigate, useParams } from 'react-router-dom';

const Main = () => {
  const params = useParams();

  const navigate = useNavigate();

  const {isLoading, isError, data} = useQuery("rollingPapers", getPapers);
  if (isLoading) return <div>로딩중...</div>
  if (isError) return <div>에러 오류</div>

  const myPageClick = (userId) => {
    console.log("userId",userId);
    navigate(`/mypage/${userId}`);
    console.log("params",params);
  }
  
  return (<>
    <StWrap>
      <StMainSlider>Main</StMainSlider>
      <StPaperList>
      {data?.map(item => (
        <StPaper key={item.userId} onClick={() => myPageClick(item.userId)}>
          <p><StName>{item.userName}</StName>님의 페이지</p>
          <p>{item.bio}</p>
          </StPaper>
      ))}
      </StPaperList>
    </StWrap>
    </>
  );
};

export default Main;
