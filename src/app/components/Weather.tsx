import { IWeather } from '@/types';
import Image from 'next/image'

type Props = {
    data: IWeather
}

const WeatherComponent: React.FC<Props> = ({ data }) => {
    console.log(data);    
    
    return(
        <div 
            className='relative flex flex-col justify-between max-w-[600px] w-full h-[90vh] m-auto p-4 text-gray-300 z-10'>
            <div className='relative flex justify-between pt-12'>
                <div className='flex flex-col items-center'>
                    <Image 
                        src={`https:${data.current.condition.icon}`} 
                        alt='' 
                        width='100' 
                        height='100' 
                    />
                    <p className='text-2xl'>{ data.current.condition.text }</p>
                </div>
                <p className='text-9xl'>{ data.current.temp_c.toFixed(0) }&#176;</p>
            </div>

            <div className='bg-black/50 relative p-8 rounded-md'>
                <p className='text-2xl text-center pb-6'>Weather in { data.location.name }</p>
                <div className='flex justify-between text-center'>
                    <div>
                        <p className='font-bold text-2xl'>{ data.current.precip_in }%</p>
                        <p className='text-xl'>Precipitation</p>
                    </div>
                    <div>
                        <p className='font-bold text-2xl'>{ data.current.wind_kph.toFixed(0) } KM/H</p>
                        <p className='text-xl'>Wind Speed</p>
                    </div>
                    <div>
                        <p className='font-bold text-2xl'>{ data.current.wind_degree.toFixed(0) }&#176; {data.current.wind_dir}</p>
                        <p className='text-xl'>Wind Direction</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WeatherComponent