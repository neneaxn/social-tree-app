import { render, screen } from '@testing-library/react';
import About from './AboutUs';

describe('About Component', () => {

    test('renders the main headings and mission statement', () => {
        render(<About />);

        const missionHeading = screen.getByRole('heading', { 
            name: /Our Mission: Nurturing Connections/i 
        });
        expect(missionHeading).toBeInTheDocument();

        const philosophyHeading = screen.getByRole('heading', { 
            name: /The Social Tree Philosophy/i 
        });
        expect(philosophyHeading).toBeInTheDocument();

        const missionText = screen.getByText(
            /We believe that truly meaningful connections/i
        );
        expect(missionText).toBeInTheDocument();
        
        const closingText = screen.getByText(
            /Join us and start planting the roots of your next great connection today\./i
        );
        expect(closingText).toBeInTheDocument();
    });

    test('renders all philosophy list items', () => {
        render(<About />);

        expect(screen.getByText('Growth:', { exact: false })).toBeInTheDocument();
        expect(screen.getByText(/Empowering you to expand your network/i)).toBeInTheDocument();

        expect(screen.getByText('Curiosity:', { exact: false })).toBeInTheDocument();
        expect(screen.getByText(/Fostering a community dedicated to exploring new passions/i)).toBeInTheDocument();

        expect(screen.getByText('Elegance:', { exact: false })).toBeInTheDocument();
        expect(screen.getByText(/Providing a platform that is intuitive, beautiful/i)).toBeInTheDocument();
    });
});