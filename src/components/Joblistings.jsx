import React from 'react'
import { Joblisting } from './Joblisting'

export const Joblistings = ({ jobs }) => {

    console.log(jobs)
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
     {jobs.map((job) => (
        <Joblisting
            key={job.id} 
            type={job.type}
            location={job.location}
            title={job.title}
            description={job.description}
            company={job.company}
        />
     ))}
    </div>
  )
}
