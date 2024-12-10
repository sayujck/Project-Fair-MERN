import React, { useEffect, useState } from 'react'
import landingImg from '../assets/landingImg.png'
import ProjectCard from '../components/ProjectCard'
import {Card } from 'react-bootstrap'
import Header from '../components/Header'
import { Link, useNavigate } from 'react-router-dom'
import { homeProjectsAPI } from '../services/allAPI'

const Home = () => {
  const navigate = useNavigate()
  const [homeProjects,setHomeProjects] = useState([])
  const [isLogin,setIsLogin] = useState(false)

  console.log(homeProjects);
  
  useEffect(()=>{
    getHomeProjects()
    if(sessionStorage.getItem("token")){
      setIsLogin(true)
    }
    else{
      setIsLogin(false)
    }
  },[])

  const handleNavigateProject =()=>{
    // authorised
    if(sessionStorage.getItem("token")){
      navigate('/projects')
    }
    else{
      // unauthorized 
      alert("Please login to get full access to our project collection")
    }
  }

    const getHomeProjects = async () =>{
      try{
        const result = await homeProjectsAPI()
        console.log(result);
        if(result.status==200){
        setHomeProjects(result.data)
      }
      }catch(err){
        console.log(err);
      }
    }

  return (
    <>
     <Header/>
     <div style={{minHeight:'100vh'}} className="d-flex justify-content-center align-items-center rounded shadow w-100">
      <div className="container mt-5">

        {/* Landing */}
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 style={{fontSize:'80px'}}> <i className='fa-brands fa-docker me-2'></i> Project Fair</h1>
            <p style={{textAlign:'justify'}}>One Stop Destination for all Software Development Projects. Where User can add and manage their projects. As well as access all projects available in our website... What are you waiting for!!!</p>
            {
              isLogin ?
              <Link to={'/dashboard'} className="btn btn-warning">MANAGE YOUR PROJECTS</Link>
              :
              <Link to={'/login'} className="btn btn-warning">STARTS TO EXPLORE</Link>
            }
          </div>
          <div className="col-lg-6">
            <img className='img-fluid' src={landingImg} alt="" />
          </div>
        </div>

        {/* Explore Projects */}
        <div className="my-5 text-center">
          <h1 className="mb-5">Explore Our Projects</h1>
          <marquee>
            <div className="d-flex">
              {
                homeProjects?.map(project=>(
                  <div className="me-5">
                    <ProjectCard displayData={project}/>
                  </div>
                ))
              }
            </div>
          </marquee>
          <button onClick={handleNavigateProject} className='btn btn-link mt-5'>CLICK HERE TO VIEW MORE PROJECTS</button>
        </div>

        {/* Our Testimonials */}
        <div className="d-flex justify-content-center align-items-center my-5 flex-column">
          <h1>Our Testimonials</h1>
          <div className="d-flex justify-content-evenly align-items-center mt-3 w-100">
            {/* cards */}
          <Card style={{width:'18rem'}}>
            <Card.Body>
            <Card.Text className='d-flex justify-content-center align-items-center flex-column'>
              <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png" alt="" />
              <div className="d-flex ustify-content-center my-2">
                <i className='fa-solid fa-star text-warning'></i>
                <i className='fa-solid fa-star text-warning'></i>
                <i className='fa-solid fa-star text-warning'></i>
                <i className='fa-solid fa-star text-warning'></i>
              </div>
              <p style={{textAlign:'justify'}}>
                Some quick example text to build on the card title and make up the bulk of the card's content
              </p>
            </Card.Text>
           </Card.Body>
          </Card>
            {/* cards */}
          <Card style={{width:'18rem'}}>
            <Card.Body>
            <Card.Text className='d-flex justify-content-center align-items-center flex-column'>
              <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png" alt="" />
              <div className="d-flex ustify-content-center my-2">
                <i className='fa-solid fa-star text-warning'></i>
                <i className='fa-solid fa-star text-warning'></i>
                <i className='fa-solid fa-star text-warning'></i>
                <i className='fa-solid fa-star text-warning'></i>
              </div>
              <p style={{textAlign:'justify'}}>
                Some quick example text to build on the card title and make up the bulk of the card's content
              </p>
            </Card.Text>
           </Card.Body>
          </Card>
            {/* cards */}
          <Card style={{width:'18rem'}}>
            <Card.Body>
            <Card.Text className='d-flex justify-content-center align-items-center flex-column'>
              <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png" alt="" />
              <div className="d-flex ustify-content-center my-2">
                <i className='fa-solid fa-star text-warning'></i>
                <i className='fa-solid fa-star text-warning'></i>
                <i className='fa-solid fa-star text-warning'></i>
                <i className='fa-solid fa-star text-warning'></i>
              </div>
              <p style={{textAlign:'justify'}}>
                Some quick example text to build on the card title and make up the bulk of the card's content
              </p>
            </Card.Text>
           </Card.Body>
          </Card>
          </div>
        </div>

      </div>
     </div>
    </>
  )
}

export default Home