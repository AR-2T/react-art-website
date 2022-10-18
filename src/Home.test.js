import { fireEvent, render, screen } from '@testing-library/react';
import Home from './components/Pages/Home';

test("Total number of items should equal the sum of the individual categories' items", () => {
    render(<Home />);
    const sum1 = screen.getByTestId("sum1");
    const sum2 = screen.getByTestId("sum2");
    expect(sum1.textContent).toEqual(sum2.textContent)
});

test("Filter starts as a blank string to include all categories by default", () => {
    render(<Home />);
    const filter = screen.getByTestId("filter");
    expect(filter.textContent).toEqual("");
});

test("Generated idea starts as a blank string", () => {
    render(<Home />);
    const idea = screen.getByTestId("idea");
    expect(idea.textContent).toEqual("");
});