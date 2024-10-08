import React from 'react'
import { Joblisting } from './Joblisting'

export const Joblistings = ({ jobs }) => {

  return (
  <section className="bg-blue-50 px-4 py-10">
    <div className="container-xl lg:container m-auto">
      <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
        Browse Jobs
      </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {jobs.map((job) => (
            <Joblisting
                key={job.id} 
                type={job.type}
                location={job.location}
                title={job.title}
                description={job.description}
                salary={job.salary}
                company={job.company}
                id={job.id}
            />
        ))}
        </div>
      </div>
    </section>
  )
}
