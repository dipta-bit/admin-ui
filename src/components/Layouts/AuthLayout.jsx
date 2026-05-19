import React, { Children } from 'react';
import Logo from '../Elements/Logo';

function AuthLayout(Props) {
    const { children } = Props;
  return (
    <>
    <main className="min-h-screen bg-special-mainBg flex justify-center items-center">
      {/* container start */}
      <div className="max-w-md w-full p-6">
        <Logo />
        {children}
        {/*form */}
        {/* sign in with google start */}
        <div></div>
        {/* sign in with google end */}
        {/* link start */}
        <div></div>
        {/* link end */}
      </div>
      {/* container end */}
    </main>
    </>
  )
}

export default AuthLayout