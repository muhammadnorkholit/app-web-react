import React from 'react'
import Header from '../parts/Header'
import useNetwork from '../status/useNetwork'


export default function Layout({children,title}) {
    // set title website
    document.title = title;
  return (
    <div className='min-vh-100 bg-light'>
        <Header/>

        {children}
    </div>
  )
}
