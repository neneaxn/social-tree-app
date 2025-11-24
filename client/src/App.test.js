import App from "./App";
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';


test('Always true', () => {
    expect(true).toBe.true; 
});

test('Heading', () => {
    render(
        <MemoryRouter>
            <App/>
        </MemoryRouter>
);
    
    const headingElement = screen.getByText('Jest'); 
    
    expect(headingElement).toBeInTheDocument();
});