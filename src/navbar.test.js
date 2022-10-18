import React from 'react'
import { AmplifyProvider, Authenticator } from "@aws-amplify/ui-react";
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router, MemoryRouter } from 'react-router-dom';
import App from './App'


test("Test navbar render navigation items ", ()=>{

    render(<Router>
            <AmplifyProvider>
                <Authenticator.Provider>
                  <App />
                </Authenticator.Provider>
            </AmplifyProvider>
        </Router>);

    const navBarItems = screen.getAllByRole('listitem');
    expect(navBarItems.length).toEqual(4);
});

test("Test login button render ", ()=>{

    render(<Router>
            <AmplifyProvider>
                <Authenticator.Provider>
                  <App />
                </Authenticator.Provider>
            </AmplifyProvider>
        </Router>);

    const loginButton = screen.getByText("Log In");
    expect(loginButton).toBeInTheDocument();
});

  test("Test render the home component with following path '/'", () => {
      const { getByText } = render(
          <MemoryRouter initialEntries={['/']}>
             <AmplifyProvider>
                 <Authenticator.Provider>
                  <App />
                 </Authenticator.Provider>
             </AmplifyProvider>
          </MemoryRouter>
      )

      let HomeComponent= screen.getByRole("link", {"name":"Home"})

      expect(HomeComponent).toBeInTheDocument()
  })

  test("Test render the challenges component with following path '/challenges'", () => {
    const { getByText } = render(
        <MemoryRouter initialEntries={['/challenges']}>
           <AmplifyProvider>
               <Authenticator.Provider>
                <App />
               </Authenticator.Provider>
           </AmplifyProvider>
        </MemoryRouter>
    )

    let ChallengesComponent= screen.getByRole("link", {"name":"Challenges"})

    expect(ChallengesComponent).toBeInTheDocument()
})

test("Test render the gallery component with following path '/gallery'", () => {
  const { getByText } = render(
      <MemoryRouter initialEntries={['/gallery']}>
         <AmplifyProvider>
             <Authenticator.Provider>
              <App />
             </Authenticator.Provider>
         </AmplifyProvider>
      </MemoryRouter>
  )

  let GalleryComponent= screen.getByRole("link", {"name":"Gallery"})

  expect(GalleryComponent).toBeInTheDocument()
})

test("Test render the login component with following path '/login'", () => {
  const { getByText } = render(
      <MemoryRouter initialEntries={['/login']}>
         <AmplifyProvider>
             <Authenticator.Provider>
              <App />
             </Authenticator.Provider>
         </AmplifyProvider>
      </MemoryRouter>
  )

  let LoginComponent= getByText("Log In")

  expect(LoginComponent).toBeInTheDocument()
})


