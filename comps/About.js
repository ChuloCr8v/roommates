//import style from '../styles/.module.scss'
import Link from 'next/link'


const About = () => {
  return(
    <div class="About my-20 px-2 md:px-16 flex flex-col items-center justify-center ">
      <h1 class="text-2xl text-center text-red-600 font-black">Need a rooMMate?</h1>
      <p class="text-center mt-5"> 
      Surf through our database of members and pick the right match for you. Our platform gives you the superpower to access individuals by qualities, allowing you to pick from a wide range of potentials who you consider fit for your interests. 
        </p>
      <h1 class="text-2xl mt-20 text-center text-red-600 font-black">Need a Room?</h1>
      <p class="text-center mt-5"> 
        A lot of our members with different tastes and standards of rooms to meet your needs are looking for you to share with. Register with us today for free and get access to them. 
      </p>
      <button 
      class="bg-red-600 text-white text-sm rounded-2xl py-2 px-3 mt-8 uppercase transition all duration-1500 transform hover:scale-105 hover:opacity-60" 
      >
      <Link href="/signup"> Register Now To Find Your Match </Link>
      </button>
    </div>
    )
}

export default About 