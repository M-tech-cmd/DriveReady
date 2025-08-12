import React, { useState } from 'react'
import Title from '../../components/owner/Title'
import { assets } from '../../assets/assets'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'

const AddCar = () => {
    const { axios, currency } = useAppContext()

    const [image, setImage] = useState(null)
    const [car, setCar] = useState({
        brand: '',
        model: '',
        year: '',
        pricePerDay: '',
        category: '',
        transmission: '',
        fuel_type: '',
        seating_capacity: '',
        location: '',
        description: '',
    })

    const [isLoading, setIsLoading] = useState(false)
    const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (isLoading) return null;

    setIsLoading(true);
    try {
        const formData = new FormData();
        formData.append('image', image);
        formData.append('carData', JSON.stringify(car)); // lowercase key - matches typical backend usage

        const { data } = await axios.post('/api/owner/add-car', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        if (data.success) {
            toast.success(data.message);
            setImage(null);
            setCar({
                brand: '',
                model: '',
                year: '',
                pricePerDay: '',
                category: '',
                transmission: '',
                fuel_type: '',
                seating_capacity: '',
                location: '',
                description: '',
            });
        } else {
            toast.error(data.message);
        }
    } catch (error) {
        toast.error(error.message);
    } finally {
        setIsLoading(false);
    }
};

    const handleInputChange = (field, value) => {
        setCar(prev => ({ ...prev, [field]: value }))
    }

    return (
        <div className='px-4 py-10 md:px-10 flex-1 bg-gray-50 min-h-screen'>
            <div className='max-w-4xl mx-auto'>
                <Title
                    title="Add New Car"
                    subTitle="Fill in details to list a new car for booking, including pricing, availability, and car specifications."
                />

                <div className='bg-white rounded-lg shadow-sm p-6 mt-6'>
                    <form onSubmit={onSubmitHandler} className='space-y-6'>
                        {/* Car Image Upload */}
                        <div className='border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary transition-colors'>
                            <label htmlFor="car-image" className='cursor-pointer block'>
                                {image ? (
                                    <div className='space-y-4'>
                                        <img
                                            src={URL.createObjectURL(image)}
                                            alt="Car preview"
                                            className='h-48 w-auto mx-auto rounded-lg object-cover shadow-md'
                                        />
                                        <p className='text-sm text-gray-600'>Click to change image</p>
                                    </div>
                                ) : (
                                    <div className='space-y-4'>
                                        <div className='w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center'>
                                            <img src={assets.upload_icon} alt="Upload" className='w-8 h-8' />
                                        </div>
                                        <div>
                                            <p className='text-lg font-medium text-gray-700'>Upload a picture of your car</p>
                                            <p className='text-sm text-gray-500'>PNG, JPG up to 10MB</p>
                                        </div>
                                    </div>
                                )}
                                <input
                                    type="file"
                                    id="car-image"
                                    accept="image/*"
                                    hidden
                                    onChange={(e) => setImage(e.target.files[0])}
                                />
                            </label>
                        </div>

                        {/* Car Brand & Model */}
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            <div className='space-y-2'>
                                <label className='block text-sm font-medium text-gray-700'>Brand *</label>
                                <input
                                    type="text"
                                    placeholder='e.g. BMW, Mercedes, Audi...'
                                    required
                                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all'
                                    value={car.brand}
                                    onChange={(e) => handleInputChange('brand', e.target.value)}
                                />
                            </div>
                            <div className='space-y-2'>
                                <label className='block text-sm font-medium text-gray-700'>Model *</label>
                                <input
                                    type="text"
                                    placeholder='e.g. X5, E-Class, M4...'
                                    required
                                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all'
                                    value={car.model}
                                    onChange={(e) => handleInputChange('model', e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Year & Price */}
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            <div className='space-y-2'>
                                <label className='block text-sm font-medium text-gray-700'>Year *</label>
                                <input
                                    type="number"
                                    placeholder='e.g. 2020'
                                    required
                                    min="1950"
                                    max="2024"
                                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all'
                                    value={car.year}
                                    onChange={(e) => handleInputChange('year', e.target.value)}
                                />
                            </div>
                            <div className='space-y-2'>
                                <label className='block text-sm font-medium text-gray-700'>Daily Price ({currency}) *</label>
                                <input
                                    type="number"
                                    placeholder='e.g. 100'
                                    required
                                    min="0"
                                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all'
                                    value={car.pricePerDay}
                                    onChange={(e) => handleInputChange('pricePerDay', e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Category */}
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                            <div className='space-y-2'>
                                <label className='block text-sm font-medium text-gray-700'>Category *</label>
                                <select
                                    required
                                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white'
                                    value={car.category}
                                    onChange={(e) => handleInputChange('category', e.target.value)}
                                >
                                    <option value="">Select Category</option>
                                    <option value="SUV">SUV</option>
                                    <option value="Sedan">Sedan</option>
                                    <option value="Hatchback">Hatchback</option>
                                    <option value="Coupe">Coupe</option>
                                    <option value="Convertible">Convertible</option>
                                    <option value="Truck">Truck</option>
                                    <option value="Van">Van</option>
                                </select>
                            </div>

                            <div className='space-y-2'>
                                <label className='block text-sm font-medium text-gray-700'>Transmission *</label>
                                <select
                                    required
                                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white'
                                    value={car.transmission}
                                    onChange={(e) => handleInputChange('transmission', e.target.value)}
                                >
                                    <option value="">Select Transmission</option>
                                    <option value="Automatic">Automatic</option>
                                    <option value="Manual">Manual</option>
                                </select>
                            </div>

                            <div className='space-y-2'>
                                <label className='block text-sm font-medium text-gray-700'>Fuel Type *</label>
                                <select
                                    required
                                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white'
                                    value={car.fuel_type}
                                    onChange={(e) => handleInputChange('fuel_type', e.target.value)}
                                >
                                    <option value="">Select Fuel Type</option>
                                    <option value="Petrol">Petrol</option>
                                    <option value="Diesel">Diesel</option>
                                    <option value="Electric">Electric</option>
                                    <option value="Hybrid">Hybrid</option>
                                </select>
                            </div>
                        </div>

                        {/* Seating Capacity & Location */}
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            <div className='space-y-2'>
                                <label className='block text-sm font-medium text-gray-700'>Seating Capacity *</label>
                                <input
                                    type="number"
                                    placeholder='e.g. 5'
                                    required
                                    min="1"
                                    max="15"
                                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all'
                                    value={car.seating_capacity}
                                    onChange={(e) => handleInputChange('seating_capacity', e.target.value)}
                                />
                            </div>
                            <div className='space-y-2'>
                                <label className='block text-sm font-medium text-gray-700'>Location *</label>
                                <input
                                    type="text"
                                    placeholder='e.g. New York, NY'
                                    required
                                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all'
                                    value={car.location}
                                    onChange={(e) => handleInputChange('location', e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Description */}
                        <div className='space-y-2'>
                            <label className='block text-sm font-medium text-gray-700'>Description *</label>
                            <textarea
                                placeholder='Describe your car... (e.g. This is a well-maintained luxury car with all modern features...)'
                                required
                                rows={4}
                                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-vertical'
                                value={car.description}
                                onChange={(e) => handleInputChange('description', e.target.value)}
                            />
                            <p className='text-xs text-gray-500'>Minimum 50 characters</p>
                        </div>

                        {/* Submit Button */}
                        <div className='flex justify-end pt-6 border-t'>
                            <button
                                type="submit"
                                disabled={isLoading}
                                className='flex items-center gap-2 px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-medium transition-colors shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed'
                            >
                                <img src={assets.tick_icon} alt="" className='w-4 h-4' />
                                {isLoading ? 'Listing Car...' : 'List Your Car'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddCar
