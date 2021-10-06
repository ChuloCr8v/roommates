//import style from '../styles/.module.scss' 
import Link from 'next/link'
const CTA = () => {
  return(
    <div className="cta bg-gray-800 w-full flex flex-col justify-center items-center text-white p-8 space-y-8 py-20" >
       <h1 className="text-yellow-400 font-bold text-3xl" > Get Started Now </h1>
       <div className="md:flex md:space-x-8 justify-around items-center ">
       <div className="flex flex-col justify-center items-center " >
       <p className="text-sm text-center " > Signup now to meet thousands of people waiting for you, make new friends and get your perfect match for a rooMMate. </p>
       <button className="bg-red-600 hover:bg-red-400 text-white text-sm rounded-full py-2 px-6 mt-8 text-center" ><Link href="/signup">SIGNUP</Link></button>
        </div>
        <div className="flex flex-col justify-center items-center mt-12 " >
        <p className="text-sm text-center "> Already a member? Great! Login now to continue interacting with thousands of other users nationwide. </p>
       <button className="bg-green-600 hover:bg-green-400 text-white text-sm rounded-full py-2 px-6 mt-8 " ><Link href="/login">LOGIN</Link></button>
        </div>
        </div>
        </div>
    )
}

export default CTA