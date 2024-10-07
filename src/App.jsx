import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HomeCards from './components/HomeCards'
import { Joblistings } from './components/Joblistings'
import { Jobs } from './jobs'


function App() {

  const title = "Become a React Dev";
  const subTitle = "Find the React job that fits your skills and needs";

  const recentJobs = Jobs.slice(0,3)

  return (
    <>
    <Navbar />
    <Hero title={title} subtitle={subTitle}/>
    <HomeCards />
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            Browse Jobs
          </h2>
          <Joblistings jobs={recentJobs}/>
        </div>
      </section>

      <section className="m-auto max-w-lg my-10 px-6">
        <a
          href="jobs.html"
          className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
          >View All Jobs</a
        >
      </section>
    </>
  )
}

export default App
