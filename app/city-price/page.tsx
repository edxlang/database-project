'use client';

import { useState } from "react";
import {q1} from '../types/q1'

async function fetchAirlines() {
    const response = await fetch('/api/q1/route', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data.inquiries;
}

export default function Home() {
    const [airlines, setAirlines] = useState<q1[]>([]);

    const handleSubmit = async () => {
        const result = await fetchAirlines();
        setAirlines(result);
    };

    return (
        <div className="bg-white">
            <div className="relative isolate pt-14">
                <div className="py-24 sm:py-32 lg:pb-40">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl text-center">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                Departure City Price Change by Cancellations
                            </h1>
                        </div>

                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <button
                                onClick={handleSubmit}
                                className="rounded-md bg-gray-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">
                                Submit <span aria-hidden="true">→</span>
                            </button>
                        </div>
                        <ul>
                            {airlines.map((airline, index) => (
                                <li key={index}>{airline.IATACODE}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}