import Users from '../public/user.png';
import Filter from '../public/filter.png';
import Group from '../public/group.png';
import Location from '../public/location.png';
import Image from 'next/image'

const WhyUs = () => {
  return(
    <div class="whyus bg-gray-800 py-20 ">
    <h1 class="text-center font-black text-3xl text-yellow-400 mb-20 "> Why RooMMates? </h1>
    <div class="list md:grid grid-cols-2" >
      <div class="item flex flex-col justify-center items-center px-6 py-10 ">
      <div class="image-container p-3 relative">
      <div class="img-bg absolute top-0 left-0 w-32 h-32 rounded-full bg-white">
      </div>
        <Image src={Users} class="" height={100} width={100} />
      </div>
      <div className="content flex flex-col justify-center items-center space-y-4 mt-10 ">
        <h1 class="font-bold text-center text-2xl text-white"> Verified Profiles </h1>
        <p class="text-center text-md text-white"> Our members are verified to ensure that all details are correct and up to date. This will help you know who you are dealing with. 
        </p>
      </div>
      </div>
      <div class="item flex flex-col justify-center items-center px-6 py-10 ">  
      <div class="image-container p-3 relative">
      <div class="img-bg absolute top-0 left-0 w-32 h-32 rounded-full bg-white">
      </div>
        <Image src={Group} class="" height={100} width={100} />
      </div>
      <div className="content flex flex-col justify-center items-center space-y-4 mt-10 ">
        <h1 class="font-bold text-center text-2xl text-white"> Large User Database </h1>
        <p class="text-center text-md text-white">We provide you access to a large user database with individuals sorted by character to help you meet someone you consider a suitable match. 
        </p>
      </div>
      </div>
      <div class="item flex flex-col justify-center items-center px-6 py-10 ">
        <div class="image-container p-3 relative">
      <div class="img-bg absolute top-0 left-0 w-32 h-32 rounded-full bg-white">
      </div>
        <Image src={Filter} class="" height={100} width={100} />
      </div>
      <div className="content flex flex-col justify-center items-center space-y-4 mt-10 ">
        <h1 class="font-bold text-center text-2xl text-white"> Filter Profiles </h1>
        <p class="text-center text-md text-white">You have the superpower to filter your searches by different qualities and habits. Make use of that to choose the right one for you. 
        </p>
      </div>
      </div>
      <div class="item flex flex-col justify-center items-center px-6 py-10 ">
        <div class="image-container p-3 relative">
      <div class="img-bg absolute top-0 left-0 w-32 h-32 rounded-full bg-white">
      </div>
        <Image src={Location} class="" height={100} width={100} />
      </div>
      <div className="content flex flex-col justify-center items-center space-y-4 mt-10 ">
        <h1 class="font-bold text-center text-2xl text-white"> Search by Location </h1>
        <p class="text-center text-md text-white" >Need someone close to your city or somewhere in particular. Our location filter allows you to search users by location and where you consider the perfect part of town for you."
        </p>
      </div>
      </div>
    </div>
    </div>
    )
}

export default WhyUs