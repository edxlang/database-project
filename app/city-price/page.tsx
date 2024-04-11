'use client';

import { useEffect, useState } from 'react';
import handler from "@/app/api/q1/route";

export function Search() {
    return (
        <div>
            <label htmlFor="start-date" className="sr-only">
                City
            </label>
            <details className="dropdown">
                <summary className="m-1 btn text-gray-900 ring-gray-300 focus:ring-2 focus:ring-inset">Departure City</summary>
                <ul className="block w-half rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6">
                    <li><a>LA</a></li>
                    <li><a>Miami</a></li>
                </ul>
            </details>
        </div>
    )
}

export default function Home() {
    const [iataCodes, setIataCodes] = useState([]);

    const handler = async () => {
        const response = await fetch('/api/q1', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    };

    const handleSubmit = async () => {
        const result = await handler();
        setIataCodes(result);
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
                            <Search/>
                            <button
                                onClick={handleSubmit}
                                className="rounded-md bg-gray-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">
                                Submit <span aria-hidden="true">→</span>
                            </button>
                        </div>
                        <ul>
                            {iataCodes.map((code, index) => (
                                <li key={index}>{code}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}