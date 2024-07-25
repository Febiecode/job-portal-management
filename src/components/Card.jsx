import React from 'react'

const Card = ({job}) => {
    return (
        <>
            <div className='flex flex-col w-[350px] shadow-md rounded-md p-5 my-10 mx-3 lg:mx-0 dark:bg-gray-900 dark:shadow-slate-800'>
                <div className='flex justify-between '>
                    <div className='bg-gradient-to-r from-[#FEFEFD] to-[#F1F1F1] p-3 rounded-xl'>
                        <img src={job.companyLogo} alt="company logo" width={50} height={50}/>
                    </div>
                    <div ><p className=' bg-blue-500 px-2 py-1 rounded-md'>{job.timeAgo}</p></div>
                </div>

                <div>
                    <p className='font-semibold text-lg mt-3'>{job.position}</p>
                    <p>{job.location}</p>
                </div>

                <div className='flex gap-5 text-gray-700 my-5'>
                    <div className='flex grow gap-2 items-center'>
                        <img src="/static/experience.png" alt="experience" className='w-5 h-4' />
                        <p>{job.experience}</p>
                    </div>
                    <div className='flex grow gap-2 items-center'>
                        <img src="/static/jobType.png" alt="jobType" className='w-5 h-5'/>
                        <p>{job.jobType}</p>
                    </div>
                    <div className='flex grow gap-2 items-center'>
                        <img src="/static/lpa.png" alt="salary" className='w-5 h-5'/>
                        <p>{job.salary}</p>
                    </div>
                </div>

                <div>
                    <p>{job.description}</p>
                </div>

                <div className='flex w-full'>
                    <button type='button' className='bg-blue-500 px-4 py-2 grow my-3 rounded-md text-white'>Apply Now</button>
                </div>
            </div>
        </>
    )
}

export default Card