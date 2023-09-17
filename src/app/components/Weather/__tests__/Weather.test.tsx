import { render, screen } from '@testing-library/react'
import WeatherComponent from '../Weather'
import { IWeather } from '@/types'


const mockWeather: IWeather = {
    location: {
        name: "Harare",
        region: "Mashonaland East",
        country: "Zimbabwe",
        lat: -17.82,
        lon: 31.04,
        tz_id: "Africa/Harare",
        localtime_epoch: 1694966857,
        localtime: "2023-09-17 18:07"
    },
    current: {
        last_updated_epoch: 1694966400,
        last_updated: "2023-09-17 18:00",
        temp_c: 28.4,
        temp_f: 83.1,
        is_day: 0,
        condition: {
            text: "Partly cloudy",
            icon: "//cdn.weatherapi.com/weather/64x64/night/116.png",
            code: 1003
        },
        wind_mph: 7.8,
        wind_kph: 12.6,
        wind_degree: 121,
        wind_dir: "ESE",
        pressure_mb: 1010,
        pressure_in: 29.83,
        precip_mm: 0,
        precip_in: 0,
        humidity: 12,
        cloud: 44,
        feelslike_c: 26.3,
        feelslike_f: 79.3,
        vis_km: 10,
        vis_miles: 6,
        uv: 1,
        gust_mph: 14.1,
        gust_kph: 22.7
    }
}

const mockSetTodos = jest.fn()

describe('WeatherComponent', () => {

    describe('Render', () => {

        it('should render weather information', () => {
            render(<WeatherComponent data={mockWeather} />) // ARRANGE

            //ACT
            const weatherItem = screen.getByTestId('weather-item')

            expect(weatherItem).toBeInTheDocument()// ASSERT
        })

        it('should render a weather condition', () => {
            render(<WeatherComponent data={mockWeather} />) // ARRANGE

            //ACT
            const condition = screen.getByTestId('weather-condition')

            expect(condition).toBeInTheDocument()// ASSERT
        })

        it('should render weather temperature', () => {
            render(<WeatherComponent data={mockWeather} />) // ARRANGE

             //ACT
             const temperature = screen.getByTestId('weather-temperature')

             expect(temperature).toBeInTheDocument()// ASSERT
        })

        it('should render weather details section', () => {
            render(<WeatherComponent data={mockWeather} />) // ARRANGE

            //ACT
            const details = screen.getByTestId('weather-details')

            expect(details).toBeInTheDocument()// ASSERT
        })


        it('should render "Weather in Harare" in location details section', async () => {
            render(<WeatherComponent data={mockWeather} />) // ARRANGE

            //ACT
            const weatherLocation = await screen.findByTestId('weather-location-details')

            expect(weatherLocation).toHaveTextContent(`Weather in ${mockWeather.location.name}`) // ASSERT
        })

    })
})