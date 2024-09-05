import Load from "./loadingIcon";

export default function Loading() {
    return (
      <>
      <div className="h-screen bg-indigo-950 font-satoshi">
        <div className="flex w-screen p-5 bg-gray-900">
          <h1 className="text-2xl font-clashDisplay font-semibold text-indigo-50">Docu<span className="text-indigo-600">Verify</span></h1>

          <div className="ml-auto mr-5 font-normal text-white">
            <a href={'/upload'}>Upload</a>
          </div>
        </div>

        <div className="flex h-[80vh] items-center justify-center">
          <Load />
        </div>
      </div>
      </>
    );
  }