export function AirlineDropdown() {
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