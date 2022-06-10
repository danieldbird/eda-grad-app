import React from 'react'

function Footer() {
  return (
    <footer className=" flex justify-between items-center bg-red-500 py-2">
      <div className="container mx-auto text-center text-white">
        Copyleft - {new Date().getFullYear()}
      </div>
    </footer>
  )
}

export default Footer
