import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';


const renderHomeComponent = () => {
    return render(
        <MemoryRouter>
            <Home />
        </MemoryRouter>
    );
};

describe('Home Component - Static Text Check', () => {

    test('renders the static welcome heading and descriptive text', () => {
        renderHomeComponent();

        expect(screen.getByRole('heading', { name: /Welcome to our community!/i })).toBeInTheDocument();

        const descriptionText = screen.getByText(
            /Discover and create meaningful gatherings, from professional workshops to passionate hobby groups/i,
            { exact: false }
        );
        expect(descriptionText).toBeInTheDocument();
        
        expect(screen.getByRole('heading', { name: /Our events/i })).toBeInTheDocument();
    });

});