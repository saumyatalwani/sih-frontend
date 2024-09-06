import axios from "axios";
import { Nav } from "../components/navbar";
import { useNavigate } from "react-router-dom";


export default function Issue() {

  const navigate = useNavigate();

  function onSubmit(event){
    event.preventDefault(); // Prevent form from refreshing the page
    const formData = new FormData(event.target);
    const values = Object.fromEntries(formData.entries()); // Get form values
    
    const data = {
      name: values.fName+' '+values.lName,
      dob: values.DoB,
      gender : values.gender,
    }
  
    axios.post('http://127.0.0.1:8000/issue/document/',data).then(response => {
      console.log(response)

      var dt = JSON.parse(response.data);
      if (response.status='200'){
        navigate(`/issued?id=${dt.id}`)
      }
    })
  
    
  
  }
    return (
      <>
      <div className="h-screen bg-indigo-950 font-satoshi">
        <Nav />

        <div className="h-[90vh] p-7">
          <h1 className="text-white text-4xl mb-10">Create Identification Card</h1>
          <form onSubmit={onSubmit}>
            <div>
              <label className="text-white mr-3">Name : </label>
              <input className="rounded-full p-3 px-5 mr-3 w-[20vw] md:w-[15vw]" placeholder="First Name" name="fName"></input>
              <input className="rounded-full p-3 px-5 w-[20vw] md:w-[15vw]" placeholder="Last Name" name="lName"></input>
            </div>

            <div className="mt-5">
              <label className="text-white mr-3">DoB : </label>
              <input className="rounded-full p-3 px-5 mr-3" type="date" placeholder="Date of Birth" name="DoB"></input>

              <label className="text-white mr-3">Gender : </label>
              <div className="relative inline-block">
                <select className="appearance-none rounded-full p-3 px-5 bg-white border border-gray-300" name="gender">
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Transgender">Transgender</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
                </div>
              </div>


            </div>

            <div className="mt-5">
              <label className="text-white mr-3">Address : </label>
              <input className="rounded-full p-3 px-5 mr-3 w-[70vw]" placeholder="Address" name="address"></input>
            </div>

            <button className="mt-5 w-[20vw] md:w-[10vw] rounded-full p-2 px-5 border-x-2 border-y-2 border-indigo-600 text-white flex items-center justify-center hover:bg-indigo-600" type="submit">Submit</button>

          </form>
            
        </div>
        </div>
      </>
    );
  }