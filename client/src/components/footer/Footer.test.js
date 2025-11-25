import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Footer from './Footer';
import Path from '../../lib/paths';

const renderFooter = () => {
    return render(
        <MemoryRouter>
            <Footer />
        </MemoryRouter>
    );
};

describe('Footer Component', () => {

    test('renders the site logo', () => {
        renderFooter();

        expect(screen.getByText('Social Tree')).toBeInTheDocument();
        
    });

    test('renders all Quick Links and verifies their internal paths', () => {
        renderFooter();
        
        expect(screen.getByRole('heading', { name: /Quick Links/i })).toBeInTheDocument();
        
        const allEventsLink = screen.getByText('All Events');
        expect(allEventsLink).toBeInTheDocument();
        expect(allEventsLink).toHaveAttribute('href', Path.AllEvents);

        const aboutLink = screen.getByText('About Us');
        expect(aboutLink).toBeInTheDocument();
        expect(aboutLink).toHaveAttribute('href', Path.About);

        const contactLink = screen.getByText('Contact');
        expect(contactLink).toBeInTheDocument();
        expect(contactLink).toHaveAttribute('href', Path.Contacts);
    });

});