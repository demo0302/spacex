import React from 'react'
import Header from './../Header/Header'
import Routers from '../../router/Routers'
import Footer from './../Footer/Footer'
import About from './../About/About'

const Layout = () => {
   return (
      <>
         <Header />
         <Routers />
         <Footer />      
      </>
   )
}

export default Layout