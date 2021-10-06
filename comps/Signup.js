import {FaUser, FaCalendar, FaEnvelope, FaKey} from 'react-icons/fa'
const Signup = () => {
 
  
  return(
    <div className="flex flex-col my-20 justify-center items-center ">
    <form action="/" className="flex flex-col justify-center gap-4 p-10 shadow-2xl rounded border-t-8 border-red-600" >
      <div className="form-control relative flex flex-col gap-1">
        <label htmlFor="first name" className="text-sm" >First Name</label> 
        <div className="group mt-2 ">
         <div className="shadow-2xl z-20 shadow-inner p-3 absolute bg-white bottom-0 left-0">
           <FaUser className="group-hover:text-green-600 transition all 3000 text-red-600 text-md" />
          </div>
        <input type="text" placeholder="Enter your first name " 
         className="group text-sm shadow-2xl rounded p-2 pl-12 text-sm  focus:outline-none transition all duration-1500 ease-in-out shadow-inner capitalize "
      />
      </div>
      </div>
       
      <div className="form-control relative flex flex-col gap-1">
        <label htmlFor="last name" className="text-sm" >Last Name</label> <div className="group mt-2 ">
         <div className="shadow-2xl z-20 shadow-inner p-3 absolute bg-white bottom-0 left-0">
           <FaUser className="group-hover:text-green-600 transition all 3000 text-red-600 text-md" />
          </div>
        <input type="text" placeholder="Enter your first name " 
         className="group text-sm shadow-2xl rounded p-2 pl-12 text-sm  focus:outline-none transition all duration-1500 ease-in-out shadow-inner capitalize "
      />
      </div>
      
      </div>
      <div className="form-control relative flex flex-col gap-1">
        <label htmlFor="Email" className="text-sm" >Email</label> <div className="group mt-2 ">
         <div className="shadow-2xl z-20 shadow-inner p-3 absolute bg-white bottom-0 left-0">
           <FaEnvelope className="group-hover:text-green-600 transition all 3000 text-red-600 text-md" />
          </div>
        <input type="email" placeholder="Enter your Email Address" 
         className="group text-sm shadow-2xl rounded p-2 pl-12 text-sm  focus:outline-none transition all duration-1500 ease-in-out shadow-inner capitalize "
      />
      </div>
       
      </div>
      <div className="form-control relative flex flex-col gap-1">
        <label htmlFor="username" className="text-sm" >Username</label> <div className="group mt-2 ">
         <div className="shadow-2xl z-20 shadow-inner p-3 absolute bg-white bottom-0 left-0">
           <FaUser className="group-hover:text-green-600 transition all 3000 text-red-600 text-md" />
          </div>
        <input type="text" placeholder="Choose Your Username" 
         className="group text-sm shadow-2xl rounded p-2 pl-12 text-sm  focus:outline-none transition all duration-1500 ease-in-out shadow-inner capitalize "
      />
      </div>
        
      </div>
      <div className="form-control relative flex flex-col gap-1">
           <label htmlFor="password" className="text-sm">Password </label> <div className="group mt-2 ">
         <div className="shadow-2xl z-20 shadow-inner p-3 absolute bg-white bottom-0 left-0">
           <FaKey className="group-hover:text-green-600 transition all 3000 text-red-600 text-md" />
          </div>
        <input type="text" placeholder="Choose a Password" 
         className="group text-sm shadow-2xl rounded p-2 pl-12 text-sm  focus:outline-none transition all duration-1500 ease-in-out shadow-inner capitalize "
      />
      </div>
          
      </div>
      <div className="form-control relative flex flex-col gap-1">
           <label htmlFor="password" className="text-sm">Confirm Password </label> <div className="group mt-2 ">
         <div className="shadow-2xl z-20 shadow-inner p-3 absolute bg-white bottom-0 left-0">
           <FaKey className="group-hover:text-green-600 transition all 3000 text-red-600 text-md" />
          </div>
        <input type="text" placeholder="Confirm your password " 
         className="group text-sm shadow-2xl rounded p-2 pl-12 text-sm  focus:outline-none transition all duration-1500 ease-in-out shadow-inner capitalize "
      />
      </div>
           
      </div>
      <div className="form-control relative flex flex-col gap-1">
           <label htmlFor="date of birth" className="text-sm capitalize">Date of birth</label>
           <div className="group">
            <div className="shadow-2xl z-20 shadow-inner p-3 absolute bg-white  bottom-0 left-0">
           <FaCalendar className="group-hover:text-green-600 text-red-600 text-md" />
           </div>
           <input type="date" placeholder="date of birth" className="relative z-2 bg-white w-full text-sm shadow-2xl rounded p-2 text-sm  focus:outline-none transition all duration-1500 ease-in-out shadow-inner capitalize " />
      </div>
      </div>
      <div className="form-control relative flex flex-col gap-1">
           <label htmlFor="Gender" className="text-sm capitalize">Gender</label>
           <div className="group">
           <div className="shadow-2xl z-20 shadow-inner p-3 absolute bg-white  bottom-0 left-0">
           <FaUser className="group-hover:text-green-600 text-red-600 text-md" />
           </div>
          <select className="bg-white w-full text-sm shadow-2xl rounded p-2 pl-12 text-sm  focus:outline-none transition all duration-1500 ease-in-out  shadow-inner capitalize ">
            <option>Male</option>
            <option>Female</option>
          </select>
    </div>
    </div>
      <button className="bg-red-600 transition duration-500 ease-in-out p-2 text-white font-bold rounded focus:bg-green-500 uppercase " > Signup </button>
    </form>
    </div>
    )
}

export default Signup 