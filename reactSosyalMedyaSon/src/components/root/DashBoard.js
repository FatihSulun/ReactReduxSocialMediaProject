import React, { Component } from 'react'
import Post from '../Posts/Post'
import { Route, Routes } from'react-router-dom'
import ImagePost from '../Posts/ImagePost'
import VideoPost from '../Posts/VideoPost'
import HaberlerPost from '../Posts/HaberlerPost'

export default class DashBoard extends Component {
  render() {
    return (
      <div>
        <HaberlerPost/>
        <Routes>
            {/* <Route path="/" element={<Post />} />
            <Route path="/login" element={<ImagePost />} />
            <Route path="/register" element={<VideoPost />} /> */}
        </Routes>
      </div>
    )
  }
}
