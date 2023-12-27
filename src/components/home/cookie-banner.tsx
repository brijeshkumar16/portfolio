'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

import { getLocalStorage, setLocalStorage } from '@/lib/storeHelper';
import { Button } from '@/components/ui/button';

export default function CookieBanner() {
    // State to track whether the user has given consent or not
    const [cookieConsent, setCookieConsent] = useState(false);

    // Effect to check if the user has previously given consent
    useEffect(() => {
        const storedCookieConsent = getLocalStorage('cookie_consent', null);

        setCookieConsent(storedCookieConsent);
    }, []);

    // Effect to update Google Analytics and store user consent
    useEffect(() => {
        // Define the value for analytics_storage based on user consent
        const newValue = cookieConsent ? 'granted' : 'denied';

        // Update Google Analytics with user consent
        window.gtag('consent', 'update', {
            analytics_storage: newValue,
        });

        // Store the user's consent in local storage
        setLocalStorage('cookie_consent', cookieConsent);
    }, [cookieConsent]);

    return (
        <div
            className={` ${cookieConsent !== null ? 'hidden' : 'flex'} fixed bottom-0 left-0 right-0
                        mx-auto my-10 flex max-w-max 
                        flex-col items-center justify-between gap-2 rounded-lg border bg-background px-3 py-3  
                         shadow sm:flex-row md:max-w-screen-sm md:px-6`}
        >
            <div className='text-center'>
                <Link href='/info/cookies'>
                    <p>
                        We use <span className='font-bold'>cookies</span> on our site.
                    </p>
                </Link>
            </div>

            <div className='flex gap-2'>
                <Button variant='outline' onClick={() => setCookieConsent(false)}>
                    Decline
                </Button>
                <Button variant='outline' onClick={() => setCookieConsent(true)}>
                    Allow Cookies
                </Button>
            </div>
        </div>
    );
}
