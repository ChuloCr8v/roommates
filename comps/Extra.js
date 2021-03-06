import Connect from '../public/share-2.png'
import Friends from '../public/friends.png'
import Home from '../public/home.png'

const Extra = () => {
  return(
    <div class="extra my-36 md:py-40" >
      <div class="container md:shadow-2xl relative h-auto w-auto rounded-full md:border-4 border-gray-600 space-y-24 md:grid grid-cols-2">
        <div class="item transform md:translate-x-1/2 md:-translate-y-28 flex flex-col justify-center items-center ">
         <div class="img-contain shadow-2xl md:border-4 border-gray-600 flex flex-col justify-center items-center bg-white rounded-full p-8 ">
          <img src={Connect.src} alt="connect with members" class="h-20 w-20" />
          </div>
          <p class="uppercase font-bold text-red-600 text-center text-lg mt-8 " > Connect with new people on the go </p>
        </div>
        <div class="item md:absolute -left-10 top-1/3 flex flex-col justify-center items-center ">
        <div class="img-contain shadow-2xl md:border-4 border-gray-600 flex flex-col justify-center items-center bg-white rounded-full p-8 ">
          <img src={Friends.src} alt="become friends with members" class="h-20 w-20" />
          </div>
          <p class="uppercase font-bold text-red-600 text-center text-lg mt-8" > Make friends with members</p>
        </div>
        <div class="item transform md:translate-x-1/4 md:translate-y-1/2 flex flex-col justify-center items-center ">
         <div class="img-contain shadow-2xl md:border-4 border-gray-600 flex flex-col justify-center items-center bg-white rounded-full p-8 ">
          <img src={Home.src} alt="find a room" class="h-20 w-20" />
          </div>
          <p class="uppercase font-bold text-red-600 text-center text-lg mt-8 " > Find the perfect room </p>
        </div>
      </div>
    </div>
    )
}

export default Extra 