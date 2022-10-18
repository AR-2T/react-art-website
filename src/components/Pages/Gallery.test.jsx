import Gallery from "./Gallery"
import { fireEvent, render, screen } from '@testing-library/react';

test("Searchbar should be rendered", ()=>{
    render(<Gallery/>);
    const searchQueryEl = screen.getByPlaceholderText("Search anything...");
    expect(searchQueryEl).toBeInTheDocument();

});

test("Searchbar should be empty", ()=>{
    render(<Gallery/>);
    const searchQueryEl = screen.getByPlaceholderText("Search anything...");
    expect(searchQueryEl.value).toBe("");

});

test("Searchbar input should change", ()=>{
    render(<Gallery/>);
    const searchQueryEl = screen.getByPlaceholderText("Search anything...");
    expect(searchQueryEl.value).toBe("");

});

test("Searchbar input should change", ()=>{
    render(<Gallery/>);
    const searchQueryEl = screen.getByPlaceholderText("Search anything...");
    const testValue = "test";
    fireEvent.change(searchQueryEl, { target: { value: testValue} });
    expect(searchQueryEl.value).toBe(testValue);

});