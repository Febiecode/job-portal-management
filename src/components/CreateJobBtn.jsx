import React from 'react'

const CreateJobBtn = ({ btnText }) => {
    return (
        <div>
            <button type='button' className='px-4 py-2 text-white bg-gradient-to-r from-[#A128FF] to-[#6100AD] rounded-md'>{btnText}</button>
        </div>
    )
}

export default CreateJobBtn