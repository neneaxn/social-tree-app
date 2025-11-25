import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import EventNotFound from './EventNotFound';

const renderEventNotFound = () => {
    return render(
        <MemoryRouter>
            <EventNotFound />
        </MemoryRouter>
    );
};

describe('EventNotFound Component', () => {

    test('renders the main "Event Not Found!" heading', () => {
        renderEventNotFound();

        const mainHeading = screen.getByRole('heading', { 
            name: /Event Not Found!/i 
        });
        expect(mainHeading).toBeInTheDocument();
    });

    test('renders the text and the link to all events', () => {
        renderEventNotFound();
        
        const infoText = screen.getByText(/Please go back to/i);
        expect(infoText).toBeInTheDocument();

        const allEventsLink = screen.getByText('all events.', { selector: 'a' });
        expect(allEventsLink).toBeInTheDocument();

        expect(allEventsLink).toHaveAttribute('href', '/events'); 
    });
});