import React, { useEffect } from 'react'
import Job from './Job'
import { useDispatch, useSelector } from 'react-redux'
import { getAlljobs } from '../slice/jobSlice';

const Jobs = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAlljobs());
    }, []);
    const selector = useSelector(state=>state.jobReducer);
    console.log('selector is',selector);
  return (
    <div>
{selector.loading && <p>loading</p>}
{selector.job.jobs && selector.job.jobs.map((item,idx)=><Job currentjob={item} key={idx}/>) }
    </div>
  )
}

export default Jobs
