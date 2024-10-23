import React, { useEffect, useState } from 'react';

const Profile = () => {

    const [user, setUser] =  useState(null);

    // Load user data from localStorage when the component mounts
    useEffect(() => {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }, []);
  
    // Handle logout
    const handleLogout = () => {
      localStorage.removeItem('user');
      window.location.href = '/'; // Redirect to login page
    };
  
    if (!user) {
      return <p>Loading...</p>;
    }
    return (
        <div className='flex justify-center items-center h-screen bg-gray-100'>
        <div className='bg-white rounded-lg shadow-lg p-6 w-96'>
          <h1 className='text-2xl font-bold mb-4'>Profile Page</h1>
          <div className='mb-4'>
            <label className='block text-gray-700'>Username:</label>
            <p className='text-gray-900'>{user.username}</p>
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700'>Email:</label>
            <p className='text-gray-900'>{user.email}</p>
          </div>
          <button
            onClick={handleLogout}
            className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 w-full'
          >
            Logout
          </button>
        </div>
      </div>
    );
}

export default Profile;
