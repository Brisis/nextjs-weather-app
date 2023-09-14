"use client"

import Image from 'next/image'
import axios from 'axios';
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import WeatherComponent from './components/Weather';
import { IMainWeather } from '@/types';
import LoaderComponent from './components/Loader';

export default function Home() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState<IMainWeather>();
  const [loading, setLoading] = useState(false);

  const weather_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`

  const getWeather = async (e: any) => {
    e.preventDefault();
    try {
      setLoading(true);

      const response = await axios.get(weather_url);
      setWeather(response.data);

      setCity('');
      setLoading(false);
    } catch (error: any) {
      console.log(error);
    }
  }

  
  return (
    <div>

      {/* --- background image overlay --- */}
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[1]'/>

      {/* --- background image --- */}
      <Image src='https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1975&q=80'
      layout='fill' alt='background image' className='object-cover' />

      {/* --- search form --- */}
      <div className='relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 text-white z-10'>
        <form onSubmit={getWeather} className='flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-300 text-white rounded-2xl'>
          <div>
            <input 
              onChange={(e) => setCity(e.target.value)}
              type='text' 
              placeholder='Search city' 
              className='bg-transparent border-none text-white focus:outline-none text-2xl' />
          </div>
          <button 
            onClick={getWeather}>
              <BsSearch size={20} />
          </button>
        </form>
      </div>

      { loading && <LoaderComponent /> }

      {/* --- weather component --- */}
      { weather?.main && <WeatherComponent data={weather} /> }
    </div>
  )
}
