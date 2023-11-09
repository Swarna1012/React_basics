import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import Homepage from './Homepage';
import { fireEvent, getByText, render,screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import { BrowserRouter } from 'react-router-dom';
import About from './About';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
// });

// test('renders homepage', () => {
//     render(<Homepage />);
//     const linkElement = screen.getByText(/First Name/i);
//     expect(linkElement).toBeInTheDocument();
// })

describe("render homepage", () => {
    it("Renders homepage component", () => {
        const { getByText} = render(
            <BrowserRouter>
                <Homepage />
            </BrowserRouter>
        );
    const linkElement = getByText(/First Name/i);
    expect(linkElement).toBeInTheDocument();
    });
})

describe("render homepage", () => {
    it("Renders homepage component", () => {
        const { getByText} = render(
            <BrowserRouter>
                <Homepage />
            </BrowserRouter>
        );
    const linkElement = getByText(/Last Name/i);
    expect(linkElement).toBeInTheDocument();
    });
})

test("onclick event", () => {
    const navigate = jest.fn();
    const { queryByText } = render(
        <BrowserRouter>
            <Homepage navigate={navigate('about')}/>
        </BrowserRouter>
    );

    const button = queryByText("ADD");
    fireEvent.click(button);

    expect(navigate).toHaveBeenCalledTimes(1);
});

test("renders form properly", () => {
    const {getByTextId, getByLabelText, getByText } = render(
        <BrowserRouter>
            <About />
        </BrowserRouter>
    );

    const input = getByLabelText(/E-mail/i);
    expect(input).toHaveAttribute('type', 'email');
} )
