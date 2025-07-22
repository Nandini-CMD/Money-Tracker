import React from 'react'
// This is the layout component for authentication pages
// It will be used to wrap the sign-in and sign-up pages

const AuthLayout = ({children}) => {
  return <div className='flex justify-center pt-40'>{children}</div>;
}

export default AuthLayout