import React from 'react'

const Job = ({currentjob}) => {
  return (
    <div>
      <p>{currentjob.title}</p>
      <p>{currentjob.position}</p>
      <p>{currentjob.perks}</p>
      <p>{currentjob.description}</p>
      <hr />
    </div>
  )
}

export default Job
