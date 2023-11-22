import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from '../pages/Main/Main'
import MyPage from '../pages/MyPage/MyPage'
import Layout from '../pages/Layout/Layout'

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/mypage/:userId" element={<MyPage />}  />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default Router