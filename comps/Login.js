import {FaUser, FaKey} from 'react-icons/fa'

const Login = () => {
  return(
    <div className="flex flex-col justify-center items-center">
    <form action="/" className="flex flex-col justify-center gap-4 p-10 shadow-2xl rounded border-t-8 border-green-600" > <div className="form-control relative flex flex-col gap-1">
        <label htmlFor="username" className="text-sm" >Username</label>
        <div className="group mt-2 ">
         <div className="shadow-2xl z-20 shadow-inner p-3 absolute bg-white bottom-0 left-0">
           <FaUser className="group-hover:text-red-600 transition all 3000 text-green-600 text-md" />
          </div>
        <input type="text" placeholder="Enter your username" 
         className="group text-sm shadow-2xl rounded p-2 pl-12 text-sm  focus:outline-none transition all duration-1500 ease-in-out shadow-inner capitalize "
      />
      </div>
      </div>
      <div className="form-control relative flex flex-col gap-1">
           <label htmlFor="password" className="text-sm">Password </label>
           <div className="group mt-2">
           <div className="shadow-2xl z-20 shadow-inner p-3 absolute bg-white  bottom-0 left-0">
           <FaKey className="group-hover:text-red-600 text-green-600 text-md" />
           </div>
           <input type="password" placeholder="Enter password" 
             className="text-sm shadow-2xl rounded p-2 pl-12 text-sm  focus:outline-none transition all duration-1500 ease-in-out shadow-inner "
        />
      </div>
      </div>
      
      <a href="#" className="text-sm"> Forgot Password? </a>
      <div className="form-control flex justify-start items-center gap-2">
        <label htmlFor="check" className="text-sm"> Remember Me </label>
        <input type="checkbox" />
      </div>
      <button className="bg-green-600 transition duration-500 ease-in-out p-2 text-white font-bold rounded focus:bg-green-500" > Login </button>
    </form>
    </div>
    )
}

export default Login