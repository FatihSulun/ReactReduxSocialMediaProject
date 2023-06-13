import React from 'react'
import { Container } from 'reactstrap'
// import { Route, Routes } from 'react-router-dom'
import NotFound from '../common/NotFound'
import Header from '../navi/Header'
import Footer from '../Foot/Footer'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Post from '../Posts/Post'
import DashBoard from './DashBoard'

function App() {
  return (
    <Container>
      <Header />
      <DashBoard/>
      <Footer />
    </Container>
  )
}

export default App
