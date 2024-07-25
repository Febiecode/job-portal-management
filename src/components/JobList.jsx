'use client'
import React, {useState} from 'react'
import Card from './Card';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Search, MapPin, UserCheck, } from 'lucide-react'

function valuetext(value) {
    return `${value}°C`;
}
const jobData = [
    {
        id: 1,
        companyLogo: "/static/amazon.png",
        timeAgo: "24 ago",
        position: "Full Stack Developer",
        experience: "1-3yrs Exp",
        jobType: "part-time",
        salary: "50k",
        location: 'New York',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur deserunt ea velit et pariatur, saepe error? Blanditiis animi incidunt, magni laudantium perspiciatis est ipsa asperiores quod ea at maiores repudiandae!"
    },
    {
        id: 2,
        companyLogo: "/static/amazon.png",
        timeAgo: "24 ago",
        position: "Oracle",
        experience: "1-3yrs Exp",
        jobType: "full-time",
        salary: "60k",
        location: 'San Francisco',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur deserunt ea velit et pariatur, saepe error? Blanditiis animi incidunt, magni laudantium perspiciatis est ipsa asperiores quod ea at maiores repudiandae!"
    },
    {
        id: 3,
        companyLogo: "/static/amazon.png",
        timeAgo: "24 ago",
        position: "Devops",
        experience: "1-3yrs Exp",
        jobType: "contract",
        salary: "80k",
        location: 'Los Angeles',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur deserunt ea velit et pariatur, saepe error? Blanditiis animi incidunt, magni laudantium perspiciatis est ipsa asperiores quod ea at maiores repudiandae!"
    },
    {
        id: 2,
        companyLogo: "/static/amazon.png",
        timeAgo: "24 ago",
        position: "Devops",
        experience: "1-3yrs Exp",
        jobType: "contract",
        salary: "75k",
        location: 'Los Angeles',

        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur deserunt ea velit et pariatur, saepe error? Blanditiis animi incidunt, magni laudantium perspiciatis est ipsa asperiores quod ea at maiores repudiandae!"
    },
    {
        id: 2,
        companyLogo: "/static/amazon.png",
        timeAgo: "24 ago",
        position: "Full Stack Developer",
        experience: "1-3yrs Exp",
        jobType: "contract",
        salary: "76k",
        location: 'Los Angeles',

        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur deserunt ea velit et pariatur, saepe error? Blanditiis animi incidunt, magni laudantium perspiciatis est ipsa asperiores quod ea at maiores repudiandae!"
    },
];

const JobList = () => {
    const [jobTitleSearch, setJobTitleSearch] = useState('');
    const [jobTypeSearch, setJobTypeSearch] = useState('');
    const [locationSearch, setLocationSearch] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleJobTypeChange = (event) => {
        setJobTypeFilter(event.target.value);
    };

    const filteredJobs = jobData.filter(job => {
        // Convert job attributes and search terms to lowercase for case-insensitive comparison
        const jobPosition = job.position.toLowerCase();
        const jobType = job.jobType.toLowerCase();
        const jobLocation = job.location.toLowerCase();
        
        const jobTitleTerm = jobTitleSearch.toLowerCase().trim();
        const jobTypeTerm = jobTypeSearch.toLowerCase().trim();
        const locationTerm = locationSearch.toLowerCase().trim();
        
    
        // Check if the job attributes match the search terms or if the search terms are empty
        const jobSearchTerm = jobTitleTerm === '' || jobPosition.includes(jobTitleTerm);
        const typeSearchTerm = jobTypeTerm === '' || jobType.includes(jobTypeTerm);
        const locationSearchTerm = locationTerm === '' || jobLocation.includes(locationTerm);
        
    
        // Return true only if all search terms match their respective job attributes
        return jobSearchTerm && typeSearchTerm && locationSearchTerm;
    });
    

    const [jobTitle, setJobTitle] = useState('');
    const [role, setRole] = useState('');
    const [preferredLocation, setPreferredLocation] = useState('');
    const [jobType, setJobType] = useState('');
    const [value, setValue] = useState([50000, 80000]);

    const handleChange = (event, newValue) => {
        setValue(newValue);

    };


    const handleSubmit = (e) => {
        e.preventDefault();
        setJobTitleSearch(jobTitle);
        setJobTypeSearch(jobType);
        setLocationSearch(preferredLocation);
        

        // Handle form submission
        console.log({
            jobTitle,
            role,
            preferredLocation,
            jobType,
            value
        });
    };
    return (
        <>
        <main className='shadow-lg dark:bg-gray-900 dark:shadow-slate-800 p-5'>
            <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-10">
                <div className="flex items-center grow">
                    <Search className='me-5 text-gray-400' />
                    <input
                        id="jobTitle"
                        type="text"
                        value={jobTitle}
                        placeholder='Search By Job Title'
                        onChange={(e) => setJobTitle(e.target.value)}
                        className="bg-transparent border-none text-gray-700 placeholder-gray-400 dark:placeholder-gray-300 focus:outline-none focus:border-transparent w-full"
                    />
                </div>

                <div className="flex items-center grow">
                    <MapPin className='me-5 text-gray-400' />
                    <select
                        id="preferredLocation"
                        value={preferredLocation}
                        onChange={(e) => setPreferredLocation(e.target.value)}
                        className="bg-transparent border-none text-gray-700 placeholder-gray-400  focus:outline-none focus:border-transparent w-full"
                    >
                        <option value="">Select Location</option>
                        <option value="New York">New York</option>
                        <option value="San Francisco">San Francisco</option>
                        <option value="Los Angeles">Los Angeles</option>
                    </select>
                </div>

                <div className="flex items-center grow">
                <UserCheck className='me-5 text-gray-400'/>
                    <select
                        id="jobType"
                        value={jobType}
                        onChange={(e) => setJobType(e.target.value)}
                        className="bg-transparent border-none text-gray-700 placeholder-gray-400 dark:placeholder-gray-200 focus:outline-none focus:border-transparent w-full"
                    >
                        <option value="" >Select Job Type</option>
                        <option value="full-time">Full-time</option>
                        <option value="part-time">Part-time</option>
                        <option value="contract">Contract</option>
                    </select>
                </div>

                <div className="flex flex-col grow me-5">
                    <div className='flex justify-between'>
                        <p>Salary Per Month</p>
                        <p>{`${value[0] / 1000}k - ${value[1] / 1000}k`}</p>
                    </div>
                    <div>
                        <Box>
                            <Slider

                                getAriaLabel={() => 'Temperature range'}
                                value={value}
                                min={50000}
                                max={80000}
                                step={5000}
                                onChange={handleChange}
                                getAriaValueText={valuetext}
                                sx={{
                                    color: 'primary', // Custom color for the slider
                                    '& .MuiSlider-thumb': {
                                        width: 18, // Custom width of the thumb
                                        height: 18, // Custom height of the thumb
                                        backgroundColor: '#00000', // Custom color for the thumb
                                        border: '2px solid currentColor', // Border color
                                        '&:hover': {
                                            boxShadow: '0 0 0 8px rgba(55, 65, 81, 0.16)', // Shadow on hover
                                        },
                                        '&:active': {
                                            boxShadow: '0 0 0 14px rgba(55, 65, 81, 0.16)', // Shadow on active
                                        },
                                    },
                                    '& .MuiSlider-rail': {
                                        backgroundColor: '#000000', // Custom color for the rail
                                    },
                                    '& .MuiSlider-track': {
                                        backgroundColor: 'primary', // Custom color for the track
                                    },
                                }}
                            />
                        </Box>
                    </div>
                </div>

                <div className="mb-4 flex flex-col grow me-5">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Search
                    </button>
                </div>
            </form>
        </main>
            <div className='flex flex-wrap  gap-5 justify-center'>
            {filteredJobs.map(job => (
                    <Card key={job.id} job={job} />
                ))}
            </div>
        </>
    )
}

export default JobList