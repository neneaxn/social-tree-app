import { render, screen } from '@testing-library/react';
import Loading from './Loading';

describe('Loading Component', () => {

    test('renders the "Loading ..." message', () => {
        render(<Loading />);

        const loadingText = screen.getByText('Loading ...');
        expect(loadingText).toBeInTheDocument();

        expect(loadingText.tagName).toBe('P'); 
    });
});