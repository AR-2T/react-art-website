import { render, screen } from '@testing-library/react';
import About from './About';
// import useFontFaceObserver from 'use-font-face-observer'

const {container} = render(<About />);

test('Count of Headers Used in About', () => { // There should be 2 headers in this page.
    const counter = container.getElementsByClassName('header');
    console.log(counter.length);
    expect(counter.length).toBe(2); 
});


// const isFontLoaded = useFontFaceObserver('sans-serif');

// test('Check if font matches up', () => {
//     console.log("Is font loaded?", isFontLoaded);
// }, [isFontLoaded]);