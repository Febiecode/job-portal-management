import React, { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { differenceInSeconds, differenceInMinutes, differenceInHours, differenceInDays, differenceInMonths, differenceInYears } from 'date-fns';

const JobPostForm = () => {

    const initialFormData = {
        companyLogo: '',
        position: '',
        experience: '',
        jobType: '',
        salary: '',
        description: '',
        requirements: '',
        responsibity: '',
        applicationDeadline: ''
    };

    const initialErrors = {
        companyLogo: '',
        position: '',
        experience: '',
        jobType: '',
        salary: '',
        description: '',
        requirements: '',
        responsibity: '',
        applicationDeadline: ''
    };

    const [formData, setFormData] = useState(initialFormData);
    const [errors, setErrors] = useState(initialErrors);
    const [datePosted, setDatePosted] = useState(new Date());

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const formatTimeAgo = (date) => {
        const now = new Date();
        const seconds = differenceInSeconds(now, date);
        if (seconds < 60) {
            return `${seconds} sec`;
        }

        const minutes = differenceInMinutes(now, date);
        if (minutes < 60) {
            return `${minutes} min`;
        }

        const hours = differenceInHours(now, date);
        if (hours < 24) {
            return `${hours} hr${hours > 1 ? 's' : ''}`;
        }

        const days = differenceInDays(now, date);
        if (days < 30) {
            return `${days} day${days > 1 ? 's' : ''}`;
        }

        const months = differenceInMonths(now, date);
        if (months < 12) {
            return `${months} mon${months > 1 ? 's' : ''}`;
        }

        const years = differenceInYears(now, date);
        return `${years} yr${years > 1 ? 's' : ''}`;
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.companyLogo) newErrors.companyLogo = 'Company Logo URL is required';
        if (!formData.position) newErrors.position = 'Position is required';
        if (!formData.experience) newErrors.experience = 'Experience is required';
        if (!formData.jobType) newErrors.jobType = 'Job Type is required';
        if (!formData.salary) newErrors.salary = 'Salary is required';
        if (!formData.description) newErrors.description = 'Description is required';
        if (!formData.requirements) newErrors.requirements = 'Requirements are required';
        if (!formData.responsibity) newErrors.responsibity = 'Responsibility is required';
        if (!formData.applicationDeadline) newErrors.applicationDeadline = 'Application Deadline is required';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length === 0) {
            const timeAgo = formatTimeAgo(datePosted);
            const submissionData = { ...formData, timeAgo };
            console.log('Form data submitted:', submissionData);
            setFormData(initialFormData);
            setErrors(initialErrors);
            // You can now send submissionData to your server or API
        } else {
            setErrors(newErrors);
        }
    };

    return (
        <div className='overflow-y-scroll lg:h-120 h-96'>
            <form onSubmit={handleSubmit} className="p-5">
                <div className='lg:flex lg:flex-row flex-col gap-5'>
                    <div className="mb-4 grow">
                        <label className="block text-gray-700">Company Logo URL</label>
                        <input
                            type="text"
                            name="companyLogo"
                            value={formData.companyLogo}
                            onChange={handleChange}
                            className={`bg-transparent border ${errors.companyLogo ? 'border-red-500' : 'border-gray-700'} rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-700 w-full p-2`}
                            placeholder="Enter company logo URL"
                        />
                        {errors.companyLogo && <p className="text-red-500">{errors.companyLogo}</p>}
                    </div>
                    <div className="mb-4 grow">
                        <label className="block text-gray-700">Position</label>
                        <input
                            type="text"
                            name="position"
                            value={formData.position}
                            onChange={handleChange}
                            className={`bg-transparent border ${errors.position ? 'border-red-500' : 'border-gray-700'} rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-700 w-full p-2`}
                            placeholder="Enter position"
                        />
                        {errors.position && <p className="text-red-500">{errors.position}</p>}
                    </div>
                </div>
                <div className='lg:flex lg:flex-row flex-col gap-5'>
                    <div className="mb-4 grow">
                        <label className="block text-gray-700">Experience</label>
                        <select
                            id="experience"
                            name='experience'
                            value={formData.experience}
                            onChange={handleChange}
                            className={`bg-transparent border ${errors.experience ? 'border-red-500' : 'border-gray-700'} rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-700 w-full p-2`}
                        >
                            <option value="">Select Experience</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        {errors.experience && <p className="text-red-500">{errors.experience}</p>}
                    </div>
                    <div className="mb-4 grow">
                        <label className="block text-gray-700">Job Type</label>
                        <select
                            id="jobType"
                            name='jobType'
                            value={formData.jobType}
                            onChange={handleChange}
                            className={`bg-transparent border ${errors.jobType ? 'border-red-500' : 'border-gray-700'} rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-700 w-full p-2`}
                        >
                            <option value="">Select Job Type</option>
                            <option value="fulltime">Full Time</option>
                            <option value="parttime">Part Time</option>
                            <option value="contract">Contract</option>
                            <option value="internship">Internship</option>
                        </select>
                        {errors.jobType && <p className="text-red-500">{errors.jobType}</p>}
                    </div>
                </div>
                <div className='lg:flex lg:flex-row flex-col gap-5'>
                    <div className="mb-4 grow">
                        <label className="block text-gray-700">Salary</label>
                        <input
                            type="text"
                            name="salary"
                            value={formData.salary}
                            onChange={handleChange}
                            className={`bg-transparent border ${errors.salary ? 'border-red-500' : 'border-gray-700'} rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-700 w-full p-2`}
                            placeholder="Enter salary"
                        />
                        {errors.salary && <p className="text-red-500">{errors.salary}</p>}
                    </div>
                    <div className="mb-4 grow">
                        <label className="block text-gray-700">Application Deadline</label>
                        <input 
                            type="date" 
                            onChange={handleChange} 
                            value={formData.applicationDeadline} 
                            id="applicationDeadline" 
                            name="applicationDeadline" 
                            className={`bg-transparent border ${errors.applicationDeadline ? 'border-red-500' : 'border-gray-700'} rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-700 w-full p-2`}
                        />
                        {errors.applicationDeadline && <p className="text-red-500">{errors.applicationDeadline}</p>}
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Description</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className={`bg-transparent border ${errors.description ? 'border-red-500' : 'border-gray-700'} rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-700 w-full p-2`}
                        placeholder="Enter description"
                    ></textarea>
                    {errors.description && <p className="text-red-500">{errors.description}</p>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Requirements</label>
                    <textarea
                        name="requirements"
                        value={formData.requirements}
                        onChange={handleChange}
                        className={`bg-transparent border ${errors.requirements ? 'border-red-500' : 'border-gray-700'} rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-700 w-full p-2`}
                        placeholder="Enter requirements"
                    ></textarea>
                    {errors.requirements && <p className="text-red-500">{errors.requirements}</p>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Responsibility</label>
                    <textarea
                        name="responsibity"
                        value={formData.responsibity}
                        onChange={handleChange}
                        className={`bg-transparent border ${errors.responsibity ? 'border-red-500' : 'border-gray-700'} rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-700 w-full p-2`}
                        placeholder="Enter responsibility"
                    ></textarea>
                    {errors.responsibity && <p className="text-red-500">{errors.responsibity}</p>}
                </div>
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default JobPostForm;
