import React,{useState} from 'react'
import Button from '../Button'
import './index.scss'
export default function Like({}) {
    const [Likes, setLikes] = useState(false);
  return (
    <Button type='button' onClick={()=>setLikes(!Likes)}  className="btn border-0 like"><i className={`${Likes ? "fa text-danger" : 'fa-regular'}  fa-heart`}/></Button>

  )
}
