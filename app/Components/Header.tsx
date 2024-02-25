const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Covid Long Term', href: '/covid-long-term' },
    { name: 'Price Change Since Covid', href: '/price-change-since-covid' },
    { name: 'Amount of flights airlines send to and from a city is affected by rates of disease.', href: '/query5' },
    { name: 'Cancellation and Delays Affect for Flight Prices for Select City', href: '/city-price' },
    { name: 'Airline’s stock price influences', href: '/query3' },
]

export function Header() {
    return (
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
    )
}