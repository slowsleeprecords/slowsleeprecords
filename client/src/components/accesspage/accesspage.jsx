"use client"

import accesspagecss from "./accesspagecss.css"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useRouter, usePathname, useSearchParams } from 'next/navigation'

export default function AccessPage() {

    const [accessCode, setAccessCode] = useState('')
    const [error, setError] = useState('')

    const router = useRouter();
    const pathname = usePathname()
    const searchParams = useSearchParams() 

    const handleAccess = async (event) => {
        event.preventDefault();
    
        try {
            const accessresponse = await fetch('http://localhost:8080/api/accesscode', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ accesscode: accessCode }),
                credentials: 'include', // Ensures cookies are included in the request
            });

    
            if (accessresponse.ok) {
                const responseData = await accessresponse.json();
                console.log(responseData.message); // Logs the success message
                router.push('/dashboard'); // Redirect to dashboard 
    
            } else {
                const errorData = await accessresponse.json();
                setError(errorData.error || 'Server Error');
            }
        } catch (error) {
            console.error('An error occurred:', error);
            setError('An unexpected error occurred. Please try again.');
        }
    };

    return(<>
        <div id="access-id-cont-main">
            {/* <h1>Please Write Your Access Code</h1> */}
            <form onSubmit={handleAccess} className="access-form">
            <div className="heading-access">
                <h1>Please Enter Your Access Code</h1>
                <hr/>
            </div>
               <div className="input-section-access">
               <input placeholder="Enter Access code"
                      value={accessCode}
                      onChange={(event) => setAccessCode(event.target.value)}
                      required
               ></input>
               <button type="submit">Submit</button>
               </div>
                {error && <p style={{ color: 'grey', fontWeight: 'bold' }}>{error}</p>} 
            </form>
        </div>
    </>)
}