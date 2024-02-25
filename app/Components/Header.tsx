const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Covid Long Term', href: '/covid-long-term' },
    { name: 'Price Change Since Covid', href: '/price-change-since-covid' },
    { name: 'Query 3', href: '/' },
    { name: 'Cancellation and Delays Affect for Flight Prices for Select City', href: '/city-price' },
    { name: 'Query 5', href: '/query5' },
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