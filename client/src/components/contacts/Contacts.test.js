import { render, screen } from '@testing-library/react';
import Contacts from './Contacts';

describe('Contacts Component', () => {

    test('renders the main heading and intro text', () => {
        render(<Contacts />);

        const mainHeading = screen.getByRole('heading', { 
            name: /Reach Out & Connect/i 
        });
        expect(mainHeading).toBeInTheDocument();

        const introText = screen.getByText(
            /We're here to help you grow your social tree/i
        );
        expect(introText).toBeInTheDocument();
    });

    test('renders the General Inquiries contact card with email and phone', () => {
        render(<Contacts />);
        
        const generalHeading = screen.getByRole('heading', { name: /General Inquiries/i });
        expect(generalHeading).toBeInTheDocument();
        
        const generalEmail = screen.getByText('info@socialtree.com');
        expect(generalEmail).toBeInTheDocument();

        expect(screen.getByText('Phone: +359 12 34 567')).toBeInTheDocument();
    });

    test('renders the Partnerships & Media contact card with email and follow info', () => {
        render(<Contacts />);

        const mediaHeading = screen.getByRole('heading', { name: /Partnerships & Media/i });
        expect(mediaHeading).toBeInTheDocument();

        const mediaEmail = screen.getByText('media@socialtree.com');
        expect(mediaEmail).toBeInTheDocument();

        expect(screen.getByText('Follow Us: @SocialTreeEvents')).toBeInTheDocument();
    });

    test('renders the Our Address card with location details', () => {
        render(<Contacts />);
        
        const addressHeading = screen.getByRole('heading', { name: /Our Address/i });
        expect(addressHeading).toBeInTheDocument();

        expect(screen.getByText('Office: 1 Vitosha bld.')).toBeInTheDocument();
        expect(screen.getByText('Sofia, 1000')).toBeInTheDocument();
    });
});