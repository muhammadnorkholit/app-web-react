import React,{useEffect,useState} from 'react'
import Layout from '../elements/Layout'
import ContentLanding from '../parts/ContentLanding'
import Widget from '../parts/Widget'
import WidgetRight from '../parts/WidgetRight'
import { UseHooks } from '../Hooks/ApiHooks'


export default function LandingPage() {
  const [data, setdata] = useState([]);
  const [data2, setdata2] = useState([]);

  useEffect(() => {
    UseHooks('/posts')
    .then(i=>setdata(i.data)) 
    .catch(e=>console.log(e))
  }, []);
  useEffect(() => {
    UseHooks('/user')
    .then(i=>setdata2(i.data)) 
    .catch(e=>console.log(e))
  }, []);


  return (
    <Layout title="Instagram">
        <div className='container' >
          <div className='row'>
          <div className='col-lg-8 col-12'>
            <Widget data={data2}/>
              <ContentLanding data={data}/>
          </div>
          <div className='col-4 d-lg-block d-none '>
            <WidgetRight/>
          </div>

          </div>


        </div>
    </Layout>
  )
}
