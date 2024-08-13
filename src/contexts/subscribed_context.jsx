import React, { createContext, useContext, useEffect, useState } from 'react';
import { check_subscribed } from '../api/endpoints';

const SubscribedContext = createContext();

export const SubscribedProvider = ({ children }) => {
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [loadingSubscribed, setLoading] = useState(true);

    useEffect(() => {
        const checkSubscribed = async () => {
            try {
                const subscribed = await check_subscribed();
                if (subscribed) {
                    setIsSubscribed(true);
                } else {
                    setIsSubscribed(false);
                }
            } catch (error) {
                setIsSubscribed(false);
            } finally {
                setLoading(false);
            }
        };

        checkSubscribed();
    }, [isSubscribed]);

    const subscribe_client = () => {
        setIsSubscribed(true);
    };

    const unsubscribe_client = () => {
        setIsSubscribed(false);
    };

    return (
        <SubscribedContext.Provider value={{ isSubscribed, loadingSubscribed, subscribe_client, unsubscribe_client }}>
            {children}
        </SubscribedContext.Provider>
    );
};

export const useSubscribe = () => {
    return useContext(SubscribedContext);
};