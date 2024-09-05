import { CheckIcon } from "@primer/octicons-react";
import { useSearchParams } from "react-router-dom";
import { Nav } from "./navbar";

export default function Issued() {

  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get('id');
    return (
      <>
      <div className="h-screen bg-indigo-950 font-satoshi">
        <Nav />

        <div className="flex h-[80vh] items-center justify-center flex-col">
          <div className="flex items-center justify-center rounded-full bg-green-500 h-[15vh] w-[15vh]"><CheckIcon className="text-white m-10" size={'10vh'}/></div>
          <h1 className="text-4xl text-white font-satoshi mt-5">Successfully Issued!</h1>
          <h1 className="text-4xl text-white font-satoshi mt-5">Your ID is {id}</h1>
        </div>
      </div>
      </>
    );
  }