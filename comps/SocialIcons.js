import Facebook from '../public/icon-facebook.svg'
import Instagram from '../public/icon-instagram.svg'
import Twitter from '../public/icon-twitter.svg'

const Footer = () => {
  return(
      <div className="social-icons flex justify-center items-center space-x-2 ">
        <div className="img-contain bg-white p-2  rounded-full">
        <img src={Facebook.src} alt="facebook" className="h-3 w-3" />
        </div>
        <div className="img-contain bg-white p-2  rounded-full">
        <img src={Instagram.src} alt="facebook" className="h-3 w-3" />
        </div>
        <div className="img-contain bg-white p-2  rounded-full">
        <img src={Twitter.src} alt="facebook" className="h-3 w-3" />
        </div>
      </div>
    )
}

export default Footer 