"use client";
import React, { FormEvent, useState } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function page() {
    const [email, setEmail] = useState('');
    const[message, setMessage] = useState('');
    const handleSubmit = (event: FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        console.log('Submitted:', {email, message});
    }
  return (
    <div>
      <div className="h-[50rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Join the waitlist
        </h1>
        <p></p>
        <p className="mt-5 text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
        We&apos;re here to help with any questions about our courses,
          programs, or events. Reach out and let us know how we can assist you
          in your musical journey.
        </p>
        <div className="mt-8 text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                <input
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email"
                required
                className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"/>
            <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter Your Meassage"
            rows={5}
            required
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
            />
            <button
             type="submit"
            className="px-6 py-2 font-medium text-white bg-teal-500 rounded-lg hover:bg-teal-700 focus:ring-2 focus:outline-none focus:ring-offset-2 focus:ring-teal-600 "> Submit Now
                </button>
            </form>

        </div>
        
      </div>
      <BackgroundBeams />
    </div>
    </div>
  )
}
