'use client'

const navigation = [
    { name: 'Covid Long Term', href: '/covid-long-term' },
    { name: 'Price Change Since Covid', href: '/price-change-since-covid' },
    { name: 'Query 3 Link', href: '#' },
    { name: 'Query 4 Link', href: '#' },
    { name: 'Query 5 Link', href: '#' },
]


export function Search() {
    return (
        <div>
            <label htmlFor="start-date" className="sr-only">
                Date
            </label>
            <details className="dropdown">
                <summary className="m-1 btn text-gray-900 ring-gray-300 focus:ring-2 focus:ring-inset">Airline</summary>
                <ul className="block w-half rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6">
                    <li><a>Southwest</a></li>
                    <li><a>Jetblue</a></li>
                </ul>
            </details>
        </div>


    )
}

export default function Home() {

    return (
        <div className="bg-white">
            <header className="absolute inset-x-0 top-0 z-50">
                <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1"/>
                    <div className="hidden lg:flex lg:gap-x-12">
                        {navigation.map((item) => (
                            <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                                {item.name}
                            </a>
                        ))}
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end"/>
                </nav>
            </header>

            <div className="relative isolate pt-14">
                <div className="py-24 sm:py-32 lg:pb-40">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl text-center">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                Airline Price Changes Since Covid
                            </h1>
                        </div>

                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Search/>

                            <button
                                className="rounded-md bg-gray-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">
                                Submit <span aria-hidden="true">→</span>
                            </button>
                        </div>
                        <div className="mt-16 flow-root sm:mt-24">
                            <div
                                className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 md:-m-4 md:rounded-2xl lg:p-4">
                                <img
                                    src="https://dist.neo4j.com/wp-content/uploads/20210210101155/1Rf98vgvcLle1SZvLmmIwaQ.png"
                                    alt=""
                                    width={1200}
                                    height={1000}
                                    className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}