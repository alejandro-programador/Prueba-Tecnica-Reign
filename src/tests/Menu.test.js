import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Menu from '../components/Menu';

describe("Menu tests", () => {

    const setTimer = jest.setTimeout(30000);

    let allBtn,
        myFavesBtn;

    beforeEach( () => {
        render(<Menu />);
        allBtn = screen.getByRole('button', {name: /All/i});
        myFavesBtn = screen.getByRole('button', {name: /My Faves/i});
    } )

    test("Menu rendering", () => {
        expect(allBtn).toBeInTheDocument();
        expect(myFavesBtn).toBeInTheDocument();
    })

    test("Click in all btn", () => {
        userEvent.click(allBtn);
        expect(allBtn).toHaveStyle({
            color: 'primary'
        })
        expect(myFavesBtn).toHaveStyle({
            color: 'secondary'
        })
    } )

    test("Click in my faves btn", () => {
        userEvent.click(myFavesBtn);
        expect(myFavesBtn).toHaveStyle({
            color: 'primary'
        })
        expect(allBtn).toHaveStyle({
            color: 'secondary'
        })
    } )

})