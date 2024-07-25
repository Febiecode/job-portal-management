import React from 'react'
// import FilterSection from './FilterSection'
// import SectionContainer from './SectionContainer'
import MainLayout from './layouts/MainLayout'
import JobSearchForm from './JobSearchForm'
import JobList from './JobList'

const Main = () => {
    return (
        <>
            <MainLayout>
                {/* <JobSearchForm /> */}
                <JobList />
                {/* <FilterSection /> */}
            </MainLayout>


        </>
    )
}

export default Main