import { render, screen } from '@testing-library/react';
import Values from './Values';

describe('Values Component', () => {

    test('renders all three value cards with their respective content', () => {
        render(<Values />);

        expect(screen.getByRole('heading', { name: /Professional Networking/i })).toBeInTheDocument();
        expect(screen.getByText('💼')).toBeInTheDocument();
        expect(screen.getByText(/Host business meetups, find mentors/i)).toBeInTheDocument();

        expect(screen.getByRole('heading', { name: /Passion & Hobbies/i })).toBeInTheDocument();
        expect(screen.getByText('☕')).toBeInTheDocument();
        expect(screen.getByText(/Easily organize and discover local gatherings/i)).toBeInTheDocument();      
        
        expect(screen.getByRole('heading', { name: /Join With a Click/i })).toBeInTheDocument();
        expect(screen.getByText('✨')).toBeInTheDocument();
        expect(screen.getByText(/No complicated sign-ups. View event details/i)).toBeInTheDocument();
    });
});