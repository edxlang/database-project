import { runApp } from '@/app/db/connect';
import oracledb from 'oracledb';
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode, Key } from 'react';

async function testDBConnection() {
    let connection;
    try {
        connection = await runApp();
        console.log('Database connection successful');

        // Execute a simple query
        const result = await connection.execute('SELECT name FROM airport');
        console.log(result.rows); // log the result
        return result.rows;

    } catch (error) {
        console.error('Error getting database connection:', error);
    } finally {
        if (connection) {
            try {
                await connection.close();
            } catch (err) {
                console.error(err);
            }
        }
    }
}

export default async function Home() {
    const data = await testDBConnection();

    return (
        <div className="bg-white">
            <div className="relative isolate pt-14">
                <div className="py-24 sm:py-32 lg:pb-40">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl text-center">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                Welcome to Group 6's Flights Queries Visualization. Click a link in the header to get
                                started.
                            </h1>
                        </div>
                        <div className="mt-16 flow-root sm:mt-24">
                            <div
                                className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 md:-m-4 md:rounded-2xl lg:p-4">
                                {data.map((item: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined, index: Key | null | undefined) => (
                                    <li key={index} style={{color: 'black'}}>{item}</li>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}