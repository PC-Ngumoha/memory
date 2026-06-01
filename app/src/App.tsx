// import { useEffect } from "react";
// import { BrowserRouter, Routes, Route } from "react-router";
// import Timeline from "./features/Timeline/Timeline";
// import Auth from "./features/Auth/Auth";

import { useAuth0 } from '@auth0/auth0-react';

// function App() {
//   useEffect(() => {
//     async function testing() {
//       const response = await fetch('http://localhost:3000/api/v1/test');
//       const data = await response.json();
//       console.log(data);
//     }

//     testing();
//   }, []);
//   return <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<Timeline />}/>
//       <Route path="/auth" element={<Auth />}/>
//     </Routes>
//   </BrowserRouter>;
// }

function App() {
  const {
    getAccessTokenSilently,
    user,
    isAuthenticated,
    isLoading,
    loginWithRedirect: login,
    logout: auth0Logout,
    error,
  } = useAuth0();

  const signup = () =>
    login({ authorizationParams: { screen_hint: 'signup' } });

  const logout = () =>
    auth0Logout({ logoutParams: { returnTo: window.location.origin } });

  const callApi = async () => {
    try {
      const token = await getAccessTokenSilently();
      const res = await fetch(
        `${import.meta.env.VITE_AUTH0_AUDIENCE}/api/v1/test`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await res.json();

      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  if (isLoading) return 'Loading...';

  return isAuthenticated ? (
    <>
      <p>Logged in as {user!.email}</p>

      <h1>User Profile</h1>

      <pre>{JSON.stringify(user, null, 2)}</pre>

      <button onClick={callApi}>Call Protected API route</button>
      <button onClick={logout}>Logout</button>
    </>
  ) : (
    <>
      {error && <p>Error: {error.message}</p>}

      <button onClick={signup}>Signup</button>

      <button
        onClick={() => {
          login();
        }}
      >
        Login
      </button>
    </>
  );
}

export default App;
