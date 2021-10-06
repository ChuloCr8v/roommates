import Facebook from '../public/icon-facebook.svg'
import Instagram from '../public/icon-instagram.svg'
import Twitter from '../public/icon-twitter.svg'

const Footer = () => {
  return(
      <div class="social-icons flex justify-center items-center space-x-2 ">
        <div class="img-contain bg-white p-2  rounded-full">
        <img src={Facebook.src} alt="facebook" class="h-3 w-3" />
        </div>
        <div class="img-contain bg-white p-2  rounded-full">
        <img src={Instagram.src} alt="facebook" class="h-3 w-3" />
        </div>
        <div class="img-contain bg-white p-2  rounded-full">
        <img src={Twitter.src} alt="facebook" class="h-3 w-3" />
        </div>
      </div>
    )
}

export default Footer 