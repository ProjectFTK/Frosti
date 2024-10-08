import React, { useState } from 'react';
import { Button, Highlight } from '@components/Button';

interface FormData {
    name?: string;
    funkyName?: string;
    email: string;
    companyName?: string;
    location?: string;
}

const Form = () => {
    const [selectedOption, setSelectedOption] = useState<'seekingJob' | 'employer' | ''>('');
    const [formData, setFormData] = useState<FormData>({ email: '' });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleOptionChange = (option: 'seekingJob' | 'employer') => {
        setSelectedOption(option);
        setFormData({ email: '' }); // Reset form data when switching options
        setErrors({});
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateForm = () => {
        let newErrors: { [key: string]: string } = {};

        if (selectedOption === 'seekingJob') {
            if (!formData.name) newErrors.name = 'Name is required';
            if (!formData.funkyName) newErrors.funkyName = 'Funky Name is required';
            if (!formData.email) newErrors.email = 'Email is required';
        } else if (selectedOption === 'employer') {
            if (!formData.companyName) newErrors.companyName = 'Company Name is required';
            if (!formData.location) newErrors.location = 'Location is required';
            if (!formData.email) newErrors.email = 'Email is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            // Handle form submission or API call with formData
            console.log('Form submitted successfully', formData);
        } else {
            console.log('Validation failed');
        }
    };

    return (
        <div className="p-6 text-md flex items-center justify-center">
            <form className="p-8 rounded-lg shadow-md w-full max-w-lg" onSubmit={handleSubmit}>
                {!selectedOption && <h2 className="text-xl font-bold mb-4">Select one:</h2>}
                <div className="flex space-x-4 mb-4">
                    <label
                        className={`flex flex-col items-center justify-center p-4 rounded-lg border cursor-pointer transition duration-300 ${selectedOption === 'seekingJob'
                            ? 'border-purple-600 '
                            : 'border-gray-300 hover:border-purple-300'
                            }`}
                    >
                        <input
                            type="radio"
                            name="option"
                            value="seekingJob"
                            checked={selectedOption === 'seekingJob'}
                            onChange={() => handleOptionChange('seekingJob')}
                            className="hidden"
                        />
                        <span className="text-lg font-medium">Prospect</span>
                    </label>

                    <label
                        className={`flex flex-col items-center justify-center p-4 rounded-lg border cursor-pointer transition duration-300 ${selectedOption === 'employer'
                            ? 'border-purple-600'
                            : 'border-gray-300 hover:border-purple-300'
                            }`}
                    >
                        <input
                            type="radio"
                            name="option"
                            value="employer"
                            checked={selectedOption === 'employer'}
                            onChange={() => handleOptionChange('employer')}
                            className="hidden"
                        />
                        <span className="text-lg font-medium">Employer</span>
                    </label>
                </div>

                {/* Seeking Job Fields */}
                {selectedOption === 'seekingJob' && (
                    <div className="space-y-4 mt-4 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
                        <div>
                            <label className="">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name || ''}
                                onChange={handleChange}
                                className={`mt-1 p-2 block w-full border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                                placeholder="Enter your name"
                                required
                            />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                        </div>
                        <div>
                            <label className="">Funky Name</label>
                            <input
                                type="text"
                                name="funkyName"
                                value={formData.funkyName || ''}
                                onChange={handleChange}
                                className={`mt-1 p-2 block w-full border ${errors.funkyName ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                                placeholder="Enter your funky name"
                                required
                            />
                            {errors.funkyName && <p className="text-red-500 text-sm">{errors.funkyName}</p>}
                        </div>
                        <div>
                            <label className="">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`mt-1 p-2 block w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                                placeholder="Enter your email"
                                required
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        </div>
                    </div>
                )}

                {/* Employer Fields */}
                {selectedOption === 'employer' && (
                    <div className="space-y-4 text-md translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
                        <div>
                            <label className="">Company Name</label>
                            <input
                                type="text"
                                name="companyName"
                                value={formData.companyName || ''}
                                onChange={handleChange}
                                className={`mt-1 p-2 block w-full border ${errors.companyName ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                                placeholder="Enter company name"
                                required
                            />
                            {errors.companyName && <p className="text-red-500 text-sm">{errors.companyName}</p>}
                        </div>
                        <div>
                            <label className="">Location</label>
                            <input
                                type="text"
                                name="location"
                                value={formData.location || ''}
                                onChange={handleChange}
                                className={`mt-1 p-2 block w-full border ${errors.location ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                                placeholder="Enter location"
                                required
                            />
                            {errors.location && <p className="text-red-500 text-sm">{errors.location}</p>}
                        </div>
                        <div>
                            <label className="">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`mt-1 p-2 block w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                                placeholder="Enter company email"
                                required
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        </div>
                    </div>
                )}

                {
                    selectedOption &&
                    <div className="flex justify-end pt-6">

                        <Button
                            intent="primary"
                            onClick={() => console.log('deez')}
                            size="lg"
                            className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]"
                        >
                            Submit
                        </Button>
                    </div>
                }
            </form>
        </div>
    );
};

export default Form;
