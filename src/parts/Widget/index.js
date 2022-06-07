import React from 'react'
import "./index.scss"
export default function Widget({data}) {
    const nameWidget = document.getElementById('nameWidget');
    if (nameWidget) {
        nameWidget.appendChild('...')
    }

  return (
    <section id='stori' className='stories bg-white py-3 px-4 d-flex gap-2 border overflow-auto'>
        {data && data.map((item,i)=>(
        <div className=' story' key={i}  style={{width:'56px'}}>
            <figure className='mb-1 ' style={{width:'56px',height:'56px'}}>
                <img src="./images/image-category-1.jpg" alt='gambar-1' className='w-100 h-100 p-1 img-circle rounded-circle'/>
            </figure>
            <p id='nameWidget' className=' text-dark text-center m-0 text-nowrap overflow-hidden' style={{fontSize:'10px'}}>{item.username}</p>
        </div>
        ))}

       
    </section>
  )
}


