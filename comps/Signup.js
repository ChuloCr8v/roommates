import {FaUser, FaCalendar, FaEnvelope, FaKey} from 'react-icons/fa'
const Signup = () => {
 
  
  return(
    <div class="flex flex-col my-20 justify-center items-center ">
    <form action="/" class="flex flex-col justify-center gap-4 p-10 shadow-2xl rounded border-t-8 border-red-600" >
      <div class="form-control relative flex flex-col gap-1">
        <label htmlFor="first name" class="text-sm" >First Name</label> 
        <div class="group mt-2 ">
         <div class="shadow-2xl z-20 shadow-inner p-3 absolute bg-white bottom-0 left-0">
           <FaUser class="group-hover:text-green-600 transition all 3000 text-red-600 text-md" />
          </div>
        <input type="text" placeholder="Enter your first name " 
         class="group text-sm shadow-2xl rounded p-2 pl-12 text-sm  focus:outline-none transition all duration-1500 ease-in-out shadow-inner capitalize "
      />
      </div>
      </div>
       
      <div class="form-control relative flex flex-col gap-1">
        <label htmlFor="last name" class="text-sm" >Last Name</label> <div class="group mt-2 ">
         <div class="shadow-2xl z-20 shadow-inner p-3 absolute bg-white bottom-0 left-0">
           <FaUser class="group-hover:text-green-600 transition all 3000 text-red-600 text-md" />
          </div>
        <input type="text" placeholder="Enter your first name " 
         class="group text-sm shadow-2xl rounded p-2 pl-12 text-sm  focus:outline-none transition all duration-1500 ease-in-out shadow-inner capitalize "
      />
      </div>
      
      </div>
      <div class="form-control relative flex flex-col gap-1">
        <label htmlFor="Email" class="text-sm" >Email</label> <div class="group mt-2 ">
         <div class="shadow-2xl z-20 shadow-inner p-3 absolute bg-white bottom-0 left-0">
           <FaEnvelope class="group-hover:text-green-600 transition all 3000 text-red-600 text-md" />
          </div>
        <input type="email" placeholder="Enter your Email Address" 
         class="group text-sm shadow-2xl rounded p-2 pl-12 text-sm  focus:outline-none transition all duration-1500 ease-in-out shadow-inner capitalize "
      />
      </div>
       
      </div>
      <div class="form-control relative flex flex-col gap-1">
        <label htmlFor="username" class="text-sm" >Username</label> <div class="group mt-2 ">
         <div class="shadow-2xl z-20 shadow-inner p-3 absolute bg-white bottom-0 left-0">
           <FaUser class="group-hover:text-green-600 transition all 3000 text-red-600 text-md" />
          </div>
        <input type="text" placeholder="Choose Your Username" 
         class="group text-sm shadow-2xl rounded p-2 pl-12 text-sm  focus:outline-none transition all duration-1500 ease-in-out shadow-inner capitalize "
      />
      </div>
        
      </div>
      <div class="form-control relative flex flex-col gap-1">
           <label htmlFor="password" class="text-sm">Password </label> <div class="group mt-2 ">
         <div class="shadow-2xl z-20 shadow-inner p-3 absolute bg-white bottom-0 left-0">
           <FaKey class="group-hover:text-green-600 transition all 3000 text-red-600 text-md" />
          </div>
        <input type="text" placeholder="Choose a Password" 
         class="group text-sm shadow-2xl rounded p-2 pl-12 text-sm  focus:outline-none transition all duration-1500 ease-in-out shadow-inner capitalize "
      />
      </div>
          
      </div>
      <div class="form-control relative flex flex-col gap-1">
           <label htmlFor="password" class="text-sm">Confirm Password </label> <div class="group mt-2 ">
         <div class="shadow-2xl z-20 shadow-inner p-3 absolute bg-white bottom-0 left-0">
           <FaKey class="group-hover:text-green-600 transition all 3000 text-red-600 text-md" />
          </div>
        <input type="text" placeholder="Confirm your password " 
         class="group text-sm shadow-2xl rounded p-2 pl-12 text-sm  focus:outline-none transition all duration-1500 ease-in-out shadow-inner capitalize "
      />
      </div>
           
      </div>
      <div class="form-control relative flex flex-col gap-1">
           <label htmlFor="date of birth" class="text-sm capitalize">Date of birth</label>
           <div class="group">
            <div class="shadow-2xl z-20 shadow-inner p-3 absolute bg-white  bottom-0 left-0">
           <FaCalendar class="group-hover:text-green-600 text-red-600 text-md" />
           </div>
           <input type="date" placeholder="date of birth" class="relative z-2 bg-white w-full text-sm shadow-2xl rounded p-2 text-sm  focus:outline-none transition all duration-1500 ease-in-out shadow-inner capitalize " />
      </div>
      </div>
      <div class="form-control relative flex flex-col gap-1">
           <label htmlFor="Gender" class="text-sm capitalize">Gender</label>
           <div class="group">
           <div class="shadow-2xl z-20 shadow-inner p-3 absolute bg-white  bottom-0 left-0">
           <FaUser class="group-hover:text-green-600 text-red-600 text-md" />
           </div>
          <select class="bg-white w-full text-sm shadow-2xl rounded p-2 pl-12 text-sm  focus:outline-none transition all duration-1500 ease-in-out  shadow-inner capitalize ">
            <option>Male</option>
            <option>Female</option>
          </select>
    </div>
    </div>
      <button class="bg-red-600 transition duration-500 ease-in-out p-2 text-white font-bold rounded focus:bg-green-500 uppercase " > Signup </button>
    </form>
    </div>
    )
}

export default Signup 