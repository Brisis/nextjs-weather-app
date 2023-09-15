import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

describe('Home', () => {
    it('should have the text This is a test', () => {
        render(<Home />) // ARRANGE
    
        const myElement = screen.getByText('This is a test') // ACT - ACTION
    
        expect(myElement).toBeInTheDocument() // ASSERTION
    })

    it('should have the word "This"', () => {
        render(<Home />) // ARRANGE
    
        const myElement = screen.getByText(/This/i) // ACT - ACTION
    
        expect(myElement).toBeInTheDocument() // ASSERTION
    })
})

