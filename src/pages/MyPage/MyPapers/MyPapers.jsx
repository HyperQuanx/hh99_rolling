import React, { useState } from 'react'
import { StInput, StPaperWrap,StPaper, StPaperBox } from './style'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { addCmt, deleteCmt, getCmt } from '../../../api/rollingPaper';
import { useParams } from 'react-router-dom';

const MyPapers = () => {
  const { userId } = useParams(); // getCmt에서 필요한 userId

  const queryClient = useQueryClient();
  const {isError, data} = useQuery(["comments", userId], () => getCmt(userId));
  if (isError) return <div>코멘트 읽기 오류</div>;

  const [cmt, setCmt] = useState("");

  const mutation = useMutation(addCmt, {
    onSuccess: (data) => {
      console.log("cmt 입력 mutation성공",cmt);
      queryClient.invalidateQueries("comments");
      console.log("data",data);
    },
  });

const submitHandler = (event) => {
  event.preventDefault();

  // 빈칸 검사
  if (!cmt) {
    return alert("내용을 작성해주세요👼");
  }

  // 새로 추가하려는 newCmt
  const newCmt = {
    ...rollingPaper,
      comments: [
        ...rollingPaper.comments,
        { comment: cmt }
      ],
    };
  // const newCmt = {
  //   comments: cmt,
  //   // commentId: Date.now()
  // };
  mutation.mutate(newCmt);
  // setCmt('');
};

const deleteMutation = useMutation(deleteCmt, {
  onSuccess: (data) => {
    queryClient.invalidateQueries("comments");
    console.log("data",data);
  },
});

const CONFIRM_MESSAGE = `"${cmt}" 정말로 삭제하시겠습니까?`;
const deleteHandler = (commentId) => {
  if (window.confirm(CONFIRM_MESSAGE)) {
    deleteMutation.mutate(commentId); // (book.id);
  };
};

  return (
  <StPaperWrap>
    <form onSubmit={submitHandler}>
      <label>롤링페이퍼</label>
      <StInput label="롤링페이퍼" value={cmt} onChange={e => setCmt(e.target.value)}/>
      <button type="submit">작성</button>
    </form>
    <StPaperBox>
      {data?.comments?.map((item) => (
        <StPaper key={item.commentId}>
        <div>{item.comment}</div>
        <button onClick={() => deleteHandler(item.commentId)}>삭제</button>
        </StPaper>
        ))}
    </StPaperBox>
  </StPaperWrap>
  )
}

export default MyPapers