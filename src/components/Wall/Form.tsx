import React, { Dispatch, SetStateAction, useState } from 'react';
import { Button, Highlight } from '@components/Button';
import { IProspect, ICompany } from '../../types/wall';
import WallApi from '../../apis/wall';

interface WallFormData {
    name?: string;
    email: string;
    location?: string;
}

interface WallFormProps {
    prospects: IProspect[] | undefined;
    companies: ICompany[] | undefined;
    setProspects: Dispatch<SetStateAction<IProspect[] | undefined>>;
    setCompanies: Dispatch<SetStateAction<ICompany[] | undefined>>;
    setShowModal: Dispatch<SetStateAction<boolean>>;
}

const WallForm: React.FC<WallFormProps> = ({ prospects, companies, setProspects, setCompanies, setShowModal }) => {
    const [selectedOption, setSelectedOption] = useState<'prospect' | 'employer' | ''>('');
    const [formData, setFormData] = useState<WallFormData>({ email: '' });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleOptionChange = (option: 'prospect' | 'employer') => {
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

        if (selectedOption === 'prospect') {
            if (!formData.name) newErrors.name = 'Name is required';
            if (!formData.email) newErrors.email = 'Email is required';
        } else if (selectedOption === 'employer') {
            if (!formData.name) newErrors.name = 'Name is required';
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
            //console.log(`Form submitted successfully for ${formData.name}`, formData);
            if (selectedOption == "prospect" && formData.name) {
                WallApi.addProspectAsync(formData as IProspect)
                    .then((response) => {
                        formData.name && prospects ? setProspects(
                            [...prospects, {
                                name: formData.name,
                            }]
                        )
                            :
                            formData.name && setProspects(
                                [{
                                    name: formData.name,
                                }]
                            )
                        setShowModal(false)
                    })
                    .catch(() => {
                        alert('Something went wrong. Please try again or contact founders@projectftk.com');
                    });
            }
            else {
                WallApi.addCompanyAsync(formData as ICompany)
                    .then((response) => {
                        formData.name && formData.location && companies ? setCompanies(
                            [...companies, {
                                name: formData.name,
                                location: formData.location
                            }]
                        )
                            :
                            formData.name && formData.location && setCompanies(
                                [{
                                    name: formData.name,
                                    location: formData.location
                                }]
                            )
                        setShowModal(false)
                    })
                    .catch(() => {
                        alert('Something went wrong. Please try again or contact founders@projectftk.com');
                    });;
            }
        } else {
            alert('Form validation failed');
        }
    };

    return (
        <div className="p-6 text-md flex items-center justify-center">
            <form className="py-8 rounded-lg shadow-md w-full max-w-lg" onSubmit={handleSubmit}>
                {!selectedOption && <h2 className="text-xl font-bold mb-4">Select one:</h2>}
                <div className="flex space-x-4 mb-4n">
                    <label
                        className={`flex flex-col items-center justify-center p-4 rounded-lg border cursor-pointer transition duration-300 ${selectedOption === 'prospect'
                            ? 'border-purple-600 '
                            : 'border-gray-300 hover:border-purple-300'
                            }`}
                    >
                        <input
                            type="radio"
                            name="option"
                            value="prospect"
                            checked={selectedOption === 'prospect'}
                            onChange={() => handleOptionChange('prospect')}
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
                {selectedOption === 'prospect' && (
                    <div className="space-y-4 mt-4 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
                        <div>
                            <label className="">Pseudo-name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name || ''}
                                onChange={handleChange}
                                className={`mt-1 p-2 block w-full border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md text-black`}
                                placeholder="Name that shows up on The Wall"
                                required
                            />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                        </div>
                        <div>
                            <label className="">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`mt-1 p-2 block w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md text-black`}
                                placeholder="Used to hold your place for launch"
                                required
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        </div>
                    </div>
                )}

                {/* Employer Fields */}
                {selectedOption === 'employer' && (
                    <div className="space-y-4 mt-4 text-md translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
                        <div>
                            <label className="">Company Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name || ''}
                                onChange={handleChange}
                                className={`mt-1 p-2 block w-full border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md text-black`}
                                placeholder="Your company's name"
                                required
                            />
                            {errors.companyName && <p className="text-red-500 text-sm">{errors.name}</p>}
                        </div>
                        <div>
                            <label className="">Location</label>
                            <input
                                type="text"
                                name="location"
                                value={formData.location || ''}
                                onChange={handleChange}
                                className={`mt-1 p-2 block w-full border ${errors.location ? 'border-red-500' : 'border-gray-300'} rounded-md text-black`}
                                placeholder="NYC, Remote etc."
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
                                className={`mt-1 p-2 block w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md text-black`}
                                placeholder="Used to hold your place for launch"
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
                            onClick={handleSubmit}
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

export default WallForm;
