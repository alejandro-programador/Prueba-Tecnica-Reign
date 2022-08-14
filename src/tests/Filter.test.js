import { render, screen } from '@testing-library/react';
import Content from '../components/Content';

describe("Filter tests", () => {

    test("Filter rendering", () => {
        render(<Content />);
        const FILTER_BTN = screen.getByRole('button');
        expect(FILTER_BTN).toBeInTheDocument();
    })

})