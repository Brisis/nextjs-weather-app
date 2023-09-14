import { IMainWeather } from '@/types';
import Image from 'next/image'

type Props = {
    data: IMainWeather
}

const WeatherComponent: React.FC<Props> = ({ data }) => {
    console.log(data);
    
    return(
        <div>
            <div>
                <div>
                    <Image 
                        src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} 
                        alt='' 
                        width='150' 
                        height='150' 
                    />
                </div>
            </div>
        </div>
    );
}

export default WeatherComponent