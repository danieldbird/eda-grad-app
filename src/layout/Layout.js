import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="flex flex-col grow container mx-auto py-4">{children}</main>
      <Footer />
    </>
  )
}

export default Layout
