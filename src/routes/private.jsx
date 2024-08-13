import React from 'react';
import { Navigate } from 'react-router-dom';
import { useColorMode, VStack } from "@chakra-ui/react"

import { useAuth } from '../contexts/auth_context';
import Navbar from '../components/navbar';
import { useSubscribe } from '../contexts/subscribed_context';

export const SubscribedRoute = ({ children }) => {

    const { isAuthenticated, loading } = useAuth();
    const { isSubscribed, loadingSubscribed} = useSubscribe();

    return (
        <>
            { (!loading & !loadingSubscribed) ?

                (isAuthenticated) ?
                    isSubscribed ?
                        children
                    :
                        <Navigate to='/subscribe' replace />
                :
                    <Navigate to='/sign_in' replace />
            
            :

            <Loading />

        }
        </>

    );
};

export const AuthenticateRoute = ({ children }) => {

    const { isAuthenticated, loading } = useAuth();

    return (
        <>
            { !loading ?
            
                isAuthenticated ?
                    children
                :
                    <Navigate to='/sign_in' replace />
            
            :

            <Loading />

        }
        </>

    );
};

export const Loading = () => {

    const { colorMode } = useColorMode();

    return (
        <VStack 
            w='100vw'
            h='100vh' 
            bg={colorMode ==='light' ? '#FAFAFA' : '#3A3A43'}
        >
            
            <Navbar />
        </VStack>
    )
}

export default SubscribedRoute;