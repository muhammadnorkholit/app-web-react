import React from 'react'
import Button from '../../elements/Button'
import './index.scss'
export default function PersonalHeader() {
  return (
    <section className='p-4'>
        <div className='row'>
            <div className='col-4'>
                <figure className='overflow-hidden w-75 me-auto' style={{width:'200px',height:'200px'}}>
                    <img src='images/image-category-1.jpg' className='p-1 w-100 h-100 img-circle rounded-circle '/>
                </figure>
            </div>
            <div className='col-8'>
               <div className='d-flex flex-column pt-3 '>
                    <div className='d-flex gap-3 align-items-center'>
                        <h5 className='m-0'>najwa</h5>
                        <div className='d-flex gap-2'>
                        <Button type="button" className='btn fw-bold py-1 border px-2 py-0 d-block' style={{fontSize:11}}>Massage</Button>
                        <Button type="button" className='btn fw-bold py-1 d-block p-0 border px-2 d-block' style={{fontSize:11}}>+</Button>
                        <Button type="button" className='btn px-1 p-0 ' style={{fontSize:12}}><i className="fa fa-ellipsis  fs-5"></i></Button>
                        </div>
                    </div>
               </div>
            </div>
        </div>
    </section>
  )
}
