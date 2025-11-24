import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';
import AuthContext from '../../contexts/authContext.jsx'; 

const renderWithAuth = (authMockValue) => {
    return render(
        // required because of <Link/>
        <MemoryRouter>
            <AuthContext.Provider value={authMockValue}>
                <Header />
            </AuthContext.Provider>
        </MemoryRouter>
    );
};


describe('Header navigation for guest/user', () => {

    // data for the two states - user and guest
    const guestData = {
        isAuthenticated: false,
        email: null,
    };

    const userData = {
        isAuthenticated: true,
        email: 'peter@abv.bg',
    };

    // Guests Tests
    
    test('guest navigation links', () => {
        renderWithAuth(guestData);

        // All links
        expect(screen.getByText('Social Tree')).toBeInTheDocument();
        expect(screen.getByText('All events')).toBeInTheDocument();
        expect(screen.getByText('Search')).toBeInTheDocument();
        expect(screen.getByText('Contacts')).toBeInTheDocument();
        expect(screen.getByText('About')).toBeInTheDocument();
        
        // Guest Links
        expect(screen.getByText('Login')).toBeInTheDocument();
        expect(screen.getByText('Register')).toBeInTheDocument();

        // User Links
        expect(screen.queryByText('Add Event')).not.toBeInTheDocument();
        expect(screen.queryByText('Logout')).not.toBeInTheDocument();
    });


    // Authenticated User Tests

    test('user navigation links and welcome message', () => {
        renderWithAuth(userData);

        // All links
        expect(screen.getByText('All events')).toBeInTheDocument();
        
        // Authenticated links
        expect(screen.getByText('Add Event')).toBeInTheDocument();
        expect(screen.getByText('Logout')).toBeInTheDocument();
        
        // Welcome Message
        const welcomeMessage = screen.getByText('| Welcome, peter@abv.bg', { exact: false });
        expect(welcomeMessage).toBeInTheDocument();

        // Guest links
        expect(screen.queryByText('Login')).not.toBeInTheDocument();
        expect(screen.queryByText('Register')).not.toBeInTheDocument();
    });

});

describe('Navigation paths work correctly', () => {

    const userData = {
        isAuthenticated: true,
        email: 'peter@abv.bg',
    };

    test('links navigate correctly', () => {
        renderWithAuth(userData); 
        
        const allEventsLink = screen.getByText('All events').closest('a');
        expect(allEventsLink).toHaveAttribute('href', '/events'); 
        
        const addEventLink = screen.getByText('Add Event').closest('a');
        expect(addEventLink).toHaveAttribute('href', '/create'); 
    });

});

