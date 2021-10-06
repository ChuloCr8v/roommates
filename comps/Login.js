import {FaUser, FaKey} from 'react-icons/fa'

const Login = () => {
  return(
    <div class="flex flex-col justify-center items-center">
    <form action="/" class="flex flex-col justify-center gap-4 p-10 shadow-2xl rounded border-t-8 border-green-600" > <div class="form-control relative flex flex-col gap-1">
        <label htmlFor="username" class="text-sm" >Username</label>
        <div class="group mt-2 ">
         <div class="shadow-2xl z-20 shadow-inner p-3 absolute bg-white bottom-0 left-0">
           <FaUser class="group-hover:text-red-600 transition all 3000 text-green-600 text-md" />
          </div>
        <input type="text" placeholder="Enter your username" 
         class="group text-sm shadow-2xl rounded p-2 pl-12 text-sm  focus:outline-none transition all duration-1500 ease-in-out shadow-inner capitalize "
      />
      </div>
      </div>
      <div class="form-control relative flex flex-col gap-1">
           <label htmlFor="password" class="text-sm">Password </label>
           <div class="group mt-2">
           <div class="shadow-2xl z-20 shadow-inner p-3 absolute bg-white  bottom-0 left-0">
           <FaKey class="group-hover:text-red-600 text-green-600 text-md" />
           </div>
           <input type="password" placeholder="Enter password" 
             class="text-sm shadow-2xl rounded p-2 pl-12 text-sm  focus:outline-none transition all duration-1500 ease-in-out shadow-inner "
        />
      </div>
      </div>
      
      <a href="#" class="text-sm"> Forgot Password? </a>
      <div class="form-control flex justify-start items-center gap-2">
        <label htmlFor="check" class="text-sm"> Remember Me </label>
        <input type="checkbox" />
      </div>
      <button class="bg-green-600 transition duration-500 ease-in-out p-2 text-white font-bold rounded focus:bg-green-500" > Login </button>
    </form>
    </div>
    )
}

export default Login