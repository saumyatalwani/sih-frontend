import { Link } from "react-router-dom";

export function Nav(){

    return (
        <>
        <div className="flex w-screen p-5 bg-gray-900">
          <Link to={`/`}><h1 className="text-2xl font-clashDisplay font-semibold text-indigo-50">Docu<span className="text-indigo-600">Verify</span></h1></Link>

          <div className="ml-auto mr-5 font-normal text-white">
            <Link to={'/issue'} className="mx-2">Issue</Link>
            <Link to={'/verify'} className="mx-2">Verify</Link>
          </div>
        </div>
        </>
    )
}