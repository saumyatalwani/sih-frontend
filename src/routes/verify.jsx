import { UploadIcon } from "@primer/octicons-react";
import axios from "axios";
import { useState } from "react";
import { Nav } from "../components/navbar";
import Load from "../components/load";
import { useNavigate } from "react-router-dom";


export default function Verify() {

  const [file,setFile]=useState(null);
  const [loading,setLoading]=useState(false);
  const navigate = useNavigate();

  const handleImageUpload = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  async function onSubmit(event){
    event.preventDefault();
    const formData = new FormData(event.target);
  
    //console.log(formData.entries());
    setLoading(true);

    try{
    const data = await axios.post('http://127.0.0.1:8000/image/upload/',formData);
    console.log(data.status);
    if(data.msg=='validated'){
    navigate('/verified');} else {
      navigate('/notVerified');
    }
  } catch(e){
    console.log(e)
    navigate('/error');
  }
    
  
  }

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