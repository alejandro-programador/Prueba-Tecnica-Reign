import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

describe("Header tests", () => {

    test("Header rendering", () => {
        render(<Header />);
        const TITLE = screen.getByText(/REIGN NEWS/i);
        expect(TITLE).toBeInTheDocument();
    })

})