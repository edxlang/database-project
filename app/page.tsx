import { Header } from '@/app/Components/Header'
import { TextField } from '@/app/Components/TextField'

export default function Home() {
    return (
        <div className="bg-white">
            <div className="relative isolate pt-14">
                <div className="py-24 sm:py-32 lg:pb-40">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl text-center">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                Flight Database
                            </h1>
                        </div>

                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <TextField/>
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