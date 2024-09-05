import { UploadIcon } from "@primer/octicons-react";
import axios from "axios";
import { useState } from "react";
import { Nav } from "./navbar";
import Load from "./loadingIcon";
import { Navigate } from "react-router-dom";

async function onSubmit(event){
  event.preventDefault();
  const formData = new FormData(event.target);

  //console.log(formData.entries());
  
  const data = await axios.post('http://192.168.56.1:5370/image/upload/',formData).then(response => {console.log(response)

    if (response.status=200){
      Navigate('/verified')
    }
  });
  setLoading(true);

}

export default function Root() {

  const [file,setFile]=useState(null);
  const [loading,setLoading]=useState(false);

  const handleImageUpload = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };

    return (
      <>
      <div className="h-screen bg-indigo-950 font-satoshi">
        <Nav />

        <div className="flex h-[80vh] items-center justify-center flex-col">
          { loading ? 
            <div className="bg-[#17153d] h-[55vh] w-[80vw] md:w-[40vw] text-white flex items-center justify-center flex-col rounded-2xl hover:shadow-xl">
              <Load/>
            </div>
            :
            <div className="bg-[#17153d] h-[55vh] w-[80vw] md:w-[40vw] text-white flex items-center justify-center flex-col rounded-2xl hover:shadow-xl">
                <UploadIcon className="size-10 mb-3"/>
                Upload your Aadhar Card here
                
                <form onSubmit={onSubmit}>
                  <label htmlFor="file">
                  <div className="mt-5 rounded-2xl p-2 px-5 border-x-2 border-y-2 border-indigo-600 text-white flex items-center justify-center hover:bg-indigo-600">
                    Browse
                  </div></label>
                  <input type="file" className="hidden" id="file" name="image" onChange={handleImageUpload} ></input>

                  {file ? <img src={file} className="h-[20vh] w-auto mt-5" alt="preview" /> : null}


                  <button type="submit" className="mt-5 rounded-2xl p-2 px-5 border-x-2 border-y-2 border-indigo-600 text-white flex items-center justify-center hover:bg-indigo-600">Submit</button>
                
                </form>
                
            </div>
          }
            
        </div>
        </div>
      </>
    );
  }