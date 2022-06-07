import React from 'react'
import Button from '../../elements/Button'
import './index.scss'

export default function Header() {
  return (
      <div className='position-relative pb-lg-5 pb-4 mb-5'>
    <header className=' bg-white border py-1 ' style={{zIndex:2}}>
        <div className='container'>
        <div className='navbar navbar-expand  justify-content-between'>
            <div className=' navbar-brand flex-grow-1'>instagram</div>
            <form method='post' action='' className='search d-lg-block flex-grow-1 d-none'>
                <input type="text" className='form-control bg-light shadow-none'/>
            </form>
            <div className='collapse d-flex navbar-collapse'>
                <ul className='navbar-nav ms-auto'>
                    <li className='nav-item'><Button type="link" href='/' className=" nav-link text-dark"><i className='fa fa-home'/></Button></li>
                    <li className='nav-item'><Button type="link" href='/' className=" nav-link text-dark"><i className='fa-regular fa-paper-plane'/></Button></li>
                    <li className='nav-item'><Button type="link" href='/' className=" nav-link text-dark"><i className='fa fa-circle-plus'/></Button></li>
                    <li className='nav-item'><Button type="link" href='/' className=" nav-link text-dark"><i className='fa-regular fa-compass'/></Button></li>
                    <li className='nav-item'><Button type="link" href='/' className=" nav-link text-dark"><i className='fa-regular fa-heart'/></Button></li>
                    
                </ul>
            </div>
        </div>
        </div>
    </header>
      </div>
  )
}
