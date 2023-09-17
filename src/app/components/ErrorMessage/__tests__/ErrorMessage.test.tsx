import { render, screen } from '@testing-library/react'
import ErrorMessageComponent from '../ErrorMessage'

const mockErrorMessageOne = "An error occured"
const mockErrorMessageTwo = "Location not Found"

describe('ErrorMessageComponent', () => {

    it('should render the "An error occured" heading', () => {
        render(<ErrorMessageComponent message={mockErrorMessageOne} />) // ARRANGE

        //ACT
        const message = screen.getByRole('heading', {
            name: mockErrorMessageOne
        })

        expect(message).toBeInTheDocument()// ASSERT
    })

    it('should render "Location not Found" as a heading', async () => {
        render(<ErrorMessageComponent message={mockErrorMessageTwo} />) // ARRANGE

        //ACT
        const message = screen.getByRole('heading', {
            name: mockErrorMessageTwo
        })

        expect(message).toBeInTheDocument()// ASSERT
    })
})