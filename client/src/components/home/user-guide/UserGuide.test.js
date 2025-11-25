import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import UserGuide from './UserGuide';
import Path from '../../../lib/paths';

const renderUserGuide = () => {
    return render(
        <MemoryRouter>
            <UserGuide />
        </MemoryRouter>
    );
};

describe('UserGuide Component', () => {

    test('renders the main heading and subtext', () => {
        renderUserGuide();

        const heading = screen.getByRole('heading', { name: /Ready to Branch Out\?/i });
        expect(heading).toBeInTheDocument();

        const subtext = screen.getByText(/Explore hundreds of events or plant your own social tree today/i);
        expect(subtext).toBeInTheDocument();
    });

    test('renders the "Browse All Events" link with correct path', () => {
        renderUserGuide();

        const browseLink = screen.getByRole('link', { name: /Browse All Events/i });
        
        expect(browseLink).toBeInTheDocument();
        expect(browseLink).toHaveAttribute('href', Path.AllEvents);
    });

    test('renders the "Create Event" link with correct path', () => {
        renderUserGuide();

        const createLink = screen.getByRole('link', { name: /Create Event/i });
        
        expect(createLink).toBeInTheDocument();
        expect(createLink).toHaveAttribute('href', Path.CreateEvent);
    });
});