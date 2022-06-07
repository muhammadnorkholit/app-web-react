import React from 'react'
import Button from '../../elements/Button'
import "./index.scss"
export default function WidgetRight() {
  return (
    <section className='stories  py-3 d-flex gap-2 text-wrap d-flex flex-column position-fixed'>
        <div className=' d-flex align-items-center'>
            <figure className='mb-1 ' style={{width:'56px',height:'56px'}}>
                <img src="./images/image-category-1.jpg" alt='gambar' className='w-100 h-100 p-1 img-circle rounded-circle'/>
            </figure>
            <div>
                <Button type="link" href="/" className=' m-1  text-decoration-none text-dark' style={{fontSize:'12px'}}>Mugammad..nn</Button>
                <p className=' m-1 text-gray ' style={{fontSize:'12px'}}>Mugammad..nn</p>
            </div>
        </div>
        <div className='d-flex flex-column'>
            <div className='d-flex align-items-center justify-content-between'>
                <p className=' text-gray fw-normal m-0'  style={{fontSize:'12px'}}>Suggestions For You</p>
                <Button type='link' href='/explore' className="btn border-0 " style={{fontSize:'12px'}}>see all</Button>
            </div>
            
            <div className='list-group  '>
                <div className=' list-group-item p-0 py-2 bg-transparent border-0'>
                    <div className='d-flex align-items-center gap-2'>
                        <figure className=' rounded-circle m-0 overflow-hidden ' style={{width:'40px',height:'40px'}}>
                        <img src='/images/image-category-1.jpg' alt='gambar' className=' w-100 h-100 '/>
                        </figure>
                        <div className='d-flex flex-column align-items-center '>
                        <Button type="link" href="/" className='  text-decoration-none text-dark' style={{fontSize:'12px'}}>Mugammad..nn</Button>
                        <p className=' m-1 text-gray ' style={{fontSize:'10px'}}>folowed by samsul + 2 more</p>
                        </div>
                        <Button type="button" className="btn border-0 text-primary ms-auto" style={{fontSize:'12px'}}>Follow</Button>
                    </div>
                </div>
            </div>
        </div>
       
    </section>
  )
}
