import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SearchComponent from '../Search'

let mockLocationName = 'Harare';

const mockGetWeather = jest.fn((e) => {
    e.preventDefault()
    mockLocationName = ""
});

const mockSearchInputChange = jest.fn()

describe('SearchComponent', () => {
    const placeholderText ='Enter your location'

    describe('Render', () => {

        it('should render the input', () => {
            render(<SearchComponent 
                        value='' 
                        placeholder={placeholderText} 
                        onChange={mockSearchInputChange} 
                        onSubmit={mockGetWeather} />
            ) // ARRANGE

            const input = screen.getByPlaceholderText(placeholderText) //ACT

            expect(input).toBeInTheDocument()// ASSERT
        })

        it('should render a submit button', () => {
            render(<SearchComponent 
                value='' 
                placeholder={placeholderText} 
                onChange={mockSearchInputChange} 
                onSubmit={mockGetWeather} />
            ) // ARRANGE

            //ACT
            const button = screen.getByTestId('submit-button')
            expect(button).toBeInTheDocument()// ASSERT
        })

        it('should render a disabled submit button', () => {
            render(<SearchComponent 
                value='' 
                placeholder={placeholderText} 
                onChange={mockSearchInputChange} 
                onSubmit={mockGetWeather} />
            ) // ARRANGE
            
            //ACT
            const button = screen.getByTestId('submit-button')

            expect(button).toBeDisabled()// ASSERT
        })


    })

    describe('Behavior', () => {

        it('should be able to add text to the input', async () => {
            render(<SearchComponent 
                value={mockLocationName} 
                placeholder={placeholderText} 
                onChange={mockSearchInputChange} 
                onSubmit={mockGetWeather} />
            ) // ARRANGE

            const input = screen.getByPlaceholderText(placeholderText) //ACT
            await userEvent.type(input, mockLocationName)
            expect(input).toHaveValue(mockLocationName)// ASSERT
        })

        it('should empty the text input when submitted', async () => {
             render(<SearchComponent 
                        value=''
                        placeholder={placeholderText} 
                        onChange={mockSearchInputChange} 
                        onSubmit={mockGetWeather} />
                    ) // ARRANGE

            const input = screen.getByPlaceholderText(placeholderText) //ACT
            await userEvent.type(input, mockLocationName)
            const button = screen.getByTestId('submit-button')

            await userEvent.click(button)

            expect(input).toHaveValue('')// ASSERT
        })

        it('should call getWeather when submitted', async () => {
             render(<SearchComponent 
                        value={mockLocationName} 
                        placeholder={placeholderText} 
                        onChange={mockSearchInputChange} 
                        onSubmit={mockGetWeather} />
                    ) // ARRANGE

            const input = screen.getByPlaceholderText(placeholderText) //ACT
            await userEvent.type(input, mockLocationName)

            const button = screen.getByTestId('submit-button')
            await userEvent.click(button)

            expect(mockGetWeather).toBeCalled()// ASSERT
        })

    })
})