import HeroImg from '../public/hero.jpg'
import Buttons from './Buttons'
import styles from '../styles/HeroSection.module.scss' 
import {FaSearch} from 'react-icons/fa'

const HeroSection = () => {
  return(
    <div className={styles.herosection}>
    <div className={styles.contentcontainer} >
      <div class=" mt-36 relative z-20 flex flex-col justify-center items-center gap-2" className={styles.container}>
        <h1 
        class="text-3xl md:text-4xl text-white text-center font-black" > Meet Your Match! </h1>
        <h3
        class="text-xl md:text-2xl text-white text-center font-bold mb-8" 
        >Find a <span class="text-yellow-500 text-2xl md:text-3xl ">rooMMate</span> close to you today!</h3>
        <p class="text-sm md:text-xl text-white text-center mb-4"> Search through our catalogue and choose your perfect match.</p>
        <form class="relative group">
           <input type="text" placeholder="city, zip"
           class="mb-8 rounded-full px-4 py-1 focus:ring-2 ring-red-600 focus:outline-none"
           />
           <FaSearch class="transition all duration-1500 group-hover:text-red-600 absolute right-3 top-2 "/>
           </form>
        <Buttons />
        </div>
      </div>
      </div>
    )
}

export default HeroSection 