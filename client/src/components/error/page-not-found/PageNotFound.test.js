import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PageNotFound from './PageNotFound'; 

const renderPageNotFound = () => {
    return render(
        <MemoryRouter>
            <PageNotFound />
        </MemoryRouter>
    );
};

describe('PageNotFound Component', () => {

    test('renders the main error heading', () => {
        renderPageNotFound();

        const mainHeading = screen.getByRole('heading', { 
            name: /Page Not Found!/i 
        });
        expect(mainHeading).toBeInTheDocument();
    });

    test('renders the text that redirects to the home page', () => {
        renderPageNotFound();
        
        const infoText = screen.getByText(/Please go back to/i);
        expect(infoText).toBeInTheDocument();
    });
});