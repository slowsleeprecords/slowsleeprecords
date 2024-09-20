"use client"

import { useState, useEffect } from "react";
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import accesspagecss from "./accesspagecss.css"

export default function AccessPage() {
    const [accessCode, setAccessCode] = useState('');
    const [error, setError] = useState('');
    const [accessGranted, setAccessGranted] = useState(false); // To trigger redirect

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const handleAccess = async (event) => {
        event.preventDefault();
    
        try {
            const accessresponse = await fetch('https://slowsleeprecords-server.vercel.app/api/accesscode', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ accesscode: accessCode }),
                credentials: 'include', // Ensure cookies are included
            });
    
            if (accessresponse.ok) {
                const responseData = await accessresponse.json();
                console.log(responseData.message); // Logs the success message
                setAccessGranted(true); // Set access granted to true, will trigger useEffect for redirection
            } else {
                const errorData = await accessresponse.json();
                setError(errorData.error || 'Server Error');
            }
        } catch (error) {
            console.error('An error occurred:', error);
            setError('An unexpected error occurred. Please try again.');
        }
    };

    // useEffect should be at the top level
    useEffect(() => {
        if (accessGranted) {
            router.push('/dashboard'); // Redirect to dashboard after successful access
        }
    }, [accessGranted, router]); // Include dependencies to watch for changes

    return (
        <>
            <div id="access-id-cont-main">
                <form onSubmit={handleAccess} className="access-form">
                    <div className="heading-access">
                        <h1>Please Enter Your Access Code</h1>
                        <hr/>
                    </div>
                    <div className="input-section-access">
                        <input 
                            placeholder="Enter Access code"
                            value={accessCode}
                            onChange={(event) => setAccessCode(event.target.value)}
                            required
                        />
                        <button type="submit">Submit</button>
                    </div>
                    {error && <p style={{ color: 'grey', fontWeight: 'bold' }}>{error}</p>}
                </form>
            </div>
        </>
    );
}
