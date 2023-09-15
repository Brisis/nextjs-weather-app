"use client"

import Image from 'next/image'
import axios from 'axios';
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import WeatherComponent from './components/Weather';
import { IWeather } from '@/types';
import LoaderComponent from './components/Loader';
import backgroundImage from '@/../public/background.jpg'
import ErrorMessageComponent from './components/ErrorMessage';

export default function Home() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState<IWeather>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const weather_url = `https://api.weatherapi.com/v1/current.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${city}`

  const getWeather = async (e: any) => {
    //prevent default page refresh
    e.preventDefault();

    try {
      setWeather(undefined);
      setError('');
      setLoading(true);

      // -- get weather response from our api --
      const response = await axios.get(weather_url);
      setWeather(response.data);

      setCity('');
      setLoading(false);
    } catch (error: any) {

      // console.log(error);

      setLoading(false);
      // -- display error message to the user --
      setError(`We\'re sorry, something went wrong on our end. Please try again later or check to see if your entered location for '${city}' is correct.`)
      
      setCity('');
      setWeather(undefined);
    }
  }

  
  return (
    <div>

      {/* --- background image overlay --- */}
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[1]'/>

      {/* --- background image --- */}
      <Image src={backgroundImage}
      layout='fill' alt='background image' className='object-cover' />

      {/* --- search form --- */}
      <div className='relative flex justify-between items-center max-w-[600px] w-full m-auto pt-4 text-white z-10'>
        <form className='flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-300 text-white rounded-2xl'>
          <div>
            <input 
              value={city}
              onChange={(e) => setCity(e.target.value)}
              type='text' 
              placeholder='Enter your location' 
              className='bg-transparent border-none text-white placeholder:text-white focus:outline-none text-2xl' />
          </div>
          <button 
            onClick={getWeather}>
              <BsSearch size={20} />
          </button>
        </form>
      </div>


      { error.length > 0 && <ErrorMessageComponent  message={error} /> }

      {/* --- show loading spinner --- */}
      { loading && <LoaderComponent /> }

      {/* --- weather component --- */}
      { weather?.current && <WeatherComponent data={weather} /> }
    </div>
  )
}
