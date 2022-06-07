import { click } from '@testing-library/user-event/dist/click';
import React,{useState} from 'react'
import Button from '../../elements/Button'
import Like from '../../elements/Likes';
import './index.scss'

export default function ContentLanding({data}) {
    const [Open, setOpen] = useState(false);
    const image = document.getElementById('content-image');
    if (image) {
      image.addEventListener('scroll',function () {
        image.scrollBy(100,0)
      })
    }
  return (
    <>
      {data.map((datas, i) => {
        return (
          <section className="bg-white border bg-white" key={i}>
            <div className="content">
              <div className=" header-content bg-white py-2 px-3 d-flex align-items-center">
                <Button type="link" href="/">
                  <figure
                    className="m-0 me-3"
                    style={{ width: "50px", height: "50px" }}
                  >
                    <img
                      src="./images/image-category-1.jpg"
                      alt="gambar"
                      className="w-100 h-100 p-1 img-circle rounded-circle"
                    />
                  </figure>
                </Button>
                <Button
                  type="link"
                  href="/"
                  className="link-dark text-decoration-none "
                  style={{ fontSize: 14 }}
                >
                  {datas?.user?.username}
                </Button>
                <Button
                  type="button"
                  href="/"
                  onClick={() => {
                    setOpen(!Open);
                    PopUp("active");
                  }}
                  className="ms-auto btn border-0"
                >
                  <i className="fa fa-ellipsis "></i>
                </Button>
              </div>
              <figure
                id='content-image'
                className=" overflow-auto d-flex content-image"
                style={{ background: "rgba(0,0,0,.3)", maxHeight: "800px" }}
              >
                <img
                  src="./images/ilustrasi.png"
                  alt="gambar"
                  className=" col-12   img-fluid w-100"
                />
                <img
                  src="./images/image-category-1.jpg"
                  alt="gambar"
                  className="col-12   img-fluid w-100"
                />
           
              </figure>
              <div className=" meta-text px-3">
                <div className=" icon">
                  <Like Like={"like" == "true"} />
                  <Button id="kiri" type="button" className="btn border-0">
                    <i className={` fa-regular fa-paper-plane`} />
                  </Button>
                  <Button type="button" className="btn border-0">
                    <i className={` fa-regular fa-comment`} />
                  </Button>
                  <Button type="button" className="btn border-0 ms-auto">
                    <i className=" fa-regular fa-bookmark" />
                  </Button>
                </div>
                <div className="mt-3">
                  <p className="fw-bold " style={{ fontSize: "10px" }}>
                    {datas.user.username}{" "}
                    <span className=" fw-normal ms-2">{datas.description}</span>
                  </p>
                </div>
              </div>
            </div>
            <PopUp callback={() => setOpen(!Open)} active={Open} />
          </section>
        );
      })}
    </>
  );
}


export function PopUp({callback,active}){
    return(
        <div  className={`${active ? 'visible' :"invisible"} min-vh-100  fixed-top d-flex align-items-center justify-content-center pop-up`}>
            <div className={`${active ? 'active' :""} list-group`} >
                <div className=' list-group-item  px-5 text-center fw-bold' style={{width:'400px'}}>
                    <Button type='button' className='btn border-0 text-danger'>Report</Button>
                </div>
                <div className=' list-group-item px-5 text-center fw-bold' style={{width:'400px'}}>
                    <Button type='button' className='btn border-0 text-danger'>Unfollow</Button>
                </div>
                <div className=' list-group-item px-5 text-center fw-bold' style={{width:'400px'}}>
                    <Button type='button' className='btn border-0 text-dark'>Go to post</Button>
                </div>
                <div className=' list-group-item px-5 text-center fw-bold' style={{width:'400px'}}>
                    <Button onClick={callback} type='button' className='btn border-0 text-dark'>cancel</Button>
                </div>
            </div>
        </div>
    )
}
