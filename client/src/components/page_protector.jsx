import React from 'react'
import { useLocation,useNavigate } from 'react-router-dom';
const PageProtector = ({ auth, user, button }) => {
 const location=useLocation()
     const navigate = useNavigate();
     // If auth is false, redirect to login page
     if (!auth && !(location.pathname.includes('/login') || location.pathname.includes('/signup'))) {
            return navigate("/login", {
               state: { from: location },
               replace: true,
            });
     }
     // If auth is true, render the children components
     return (
          <div className="min-h-screen bg-[var(--one)] dark:bg-[var(--three)] text-[var(--five)]">
               {React.Children.map(children, (child) => {
                    return React.cloneElement(child, { auth, user, button });
               })}
          </div>
     );



}

export default PageProtector