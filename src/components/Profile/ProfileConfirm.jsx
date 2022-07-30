import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const ConfirmProfilePage = () => {

    const { user, isAuthenticated, isLoading } = useAuth0();


    const fetchUserData = useEffect(() => {
        if (isLoading) return;

        // if a user comes to this page without being authenticated or having data, redirect to home page
        if (!user || !isAuthenticated) {
            window.location.href = '/';
            return;
        }

        const sendUserData = async () => {
            const url = `http://localhost:3001/newuser`;
            const payload = {
                ...user
            };

            const response = await fetch(url, 
                {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(payload)
                });
            window.location.href = window.location.origin;
        }

        sendUserData();

    }, [isLoading]);


    return (
        <div>
            Creating your profile. Please wait for redirect.
        </div>
    );
};

export default ConfirmProfilePage;