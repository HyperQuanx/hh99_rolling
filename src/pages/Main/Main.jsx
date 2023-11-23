import React from 'react';
import { useQuery } from 'react-query';
import { getPapers } from '../../api/rollingPaper';
import { StMainSlider, StPaper, StPaperList, StName, StWrap, Screen, ContainerName } from './styles';
import { useNavigate, useParams } from 'react-router-dom';
import MainTyping from '../Home/HomeTyping';
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Main = () => {
  const params = useParams();

  const navigate = useNavigate();

  const { isLoading, isError, data } = useQuery('rollingPapers', getPapers);
  if (isLoading) return <div>로딩중...</div>;
  if (isError) return <div>에러 오류</div>;

  const myPageClick = userId => {
    console.log('userId', userId);
    navigate(`/mypage/${userId}`);
    console.log('params', params);
  };

  return (
    <>
      <StWrap>
        <Screen>
          <MainTyping />
        </Screen>
        <ContainerName>롤링페이퍼를 남겨보아요!</ContainerName>
        <StPaperList>
          {data?.map(item => (
            <StPaper key={item.userId} onClick={() => myPageClick(item.userId)}>
              <div>
                <FontAwesomeIcon icon={faCloudArrowUp} style={{ color: '#7bbfea', fontSize: '50px' }} />
                <p style={{ fontSize: '20px' }}>
                  <StName>{item.userName}</StName>님의 페이지
                </p>
              </div>
            </StPaper>
          ))}
        </StPaperList>
      </StWrap>
    </>
  );
};

export default Main;
