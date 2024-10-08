import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HomeCards from './components/HomeCards'
import { Joblistings } from './components/Joblistings'
import { Jobs } from './jobs'
import ViewAllJobs from "./components/ViewAllJobs"


function App() {

  const title = "Become a React Dev";
  const subTitle = "Find the React job that fits your skills and needs";

  const recentJobs = Jobs.slice(0,3)

  console.log(recentJobs)

  return (
    <>
    <Navbar />
    <Hero title={title} subtitle={subTitle}/>
    <HomeCards />
    <Joblistings jobs={recentJobs}/>
    <ViewAllJobs />
    </>
  )
}

export default App
