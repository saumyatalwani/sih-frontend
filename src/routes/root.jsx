import { Nav } from "../components/navbar"

import { ArrowUpRightIcon } from "@primer/octicons-react"
import { Link } from "react-router-dom"

export default function Root(){
    return (<>
        <div className="h-screen bg-indigo-950 font-satoshi">
            <Nav />

            <div className="flex h-[80vh] items-center justify-center flex-col">
                <h1 className="font-clashDisplay text-indigo-50 text-6xl font-extrabold">Docu<span className="text-indigo-600">Verify</span></h1>

                <p className="text-white mt-2">A Comprehensive Automated Document Verification System using Blockchain</p>
                <div className="mt-5"><Link to={`/issue`} className="text-white mr-5"><span className="underline">Issue</span><ArrowUpRightIcon/></Link>
                <Link to={`/verify`} className="text-white"><span className="underline">Verify</span><ArrowUpRightIcon/></Link></div>
                
            </div>

        </div>
    </>)
}