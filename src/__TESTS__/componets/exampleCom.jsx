// ExampleComponent.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setToken, removeToken, } from '../../utils/reduxSlices/authSlice';
import { clearProfile, setProfile } from '../../utils/reduxSlices/profileSlice';
import { toggleTheme } from '../../utils/reduxSlices/settingSlice';


const ExampleComponent = () => {
  const dispatch = useDispatch();

  // Accessing state from the Redux store
  const token = useSelector((state) => state.auth.token);
  const profile = useSelector((state) => state.profile);
  const theme = useSelector((state) => state.settings.theme);

  // Handlers
  const handleLogin = () => {
    dispatch(setToken('sample-token'));
    dispatch(setProfile({ name: 'John Doe', email: 'john.doe@example.com' }));
  };

  const handleLogout = () => {
    dispatch(removeToken());
    dispatch(clearProfile());
  };

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <div style={{ backgroundColor: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
      <h1>Redux Toolkit Example</h1>

      <h2>Auth</h2>
      <p>Token: {token ? token : 'No token'}</p>

      <h2>Profile</h2>
      <p>Name: {profile.name || 'No profile'}</p>
      <p>Email: {profile.email || 'No profile'}</p>

      <h2>Settings</h2>
      <p>Current Theme: {theme}</p>

      <button className='h-10 px-5 rounded-md mx-2 bg-orange-600' onClick={handleLogin}>Login</button>
      <button className='h-10 px-5 rounded-md mx-2 bg-green-600' onClick={handleLogout}>Logout</button>
      <button className='h-10 px-5 rounded-md mx-2 bg-blue-600' onClick={handleToggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ExampleComponent;
