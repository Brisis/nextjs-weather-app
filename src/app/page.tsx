"use client"

import Image from 'next/image'
import axios from 'axios';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import WeatherComponent from './components/Weather';
import { IWeather } from '@/types';
import LoaderComponent from './components/Loader';
import backgroundImage from '@/../public/background.jpg'
import ErrorMessageComponent from './components/ErrorMessage';
import SearchComponent from './components/Search';

export default function Home() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState<IWeather>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const weather_url = `https://api.weatherapi.com/v1/current.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${city}`

  const getWeather = async (e: FormEvent) => {
    //prevent default page refresh
    e.preventDefault();

    try {
      setLoading(true);
      // -- get weather response from our api --
      const response = await axios.get(weather_url);

      setCity('')
      setLoading(false);

      setWeather(response.data);
    } catch (error: any) {
      setLoading(false);
      // -- display error message to the user --
      setError(`We\'re sorry, something went wrong on our end. Please try again later or check to see if your entered location for '${city}' is correct.`)
      setCity('');
    }
  }

  useEffect(() => {
    if (loading) {
      setWeather(undefined);
      setError('');
    }
  })

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value.trim())
  }

  
  return (
    <div>

      {/* --- background image overlay --- */}
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[1]'/>

      {/* --- background image --- */}
      <Image src={backgroundImage}
      fill={true} alt='background image' className='object-cover' />

      {/* --- search form --- */}
      <SearchComponent 
        value={city}  
        placeholder='Enter your location' 
        onChange={handleSearchInputChange} 
        onSubmit={getWeather} 
      />

      <h1>This is a test</h1>

      {/* --- show error message --- */}
      { error.length > 0 && <ErrorMessageComponent  message={error} /> }

      {/* --- show loading spinner --- */}
      { loading && <LoaderComponent /> }

      {/* --- weather component --- */}
      { weather?.current && <WeatherComponent data={weather} /> }
    </div>
  )
}
