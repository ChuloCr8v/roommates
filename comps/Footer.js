import SocialIcons from './SocialIcons'
import Logo from './Logo'
import FooterMenu from './FooterMenu'

const Footer = () => {
  return(
    <div className="footer bg-black py-16 px-20 pb-20 flex flex-col justify-center items-center space-y-8 " >
      <Logo />
      <SocialIcons />
      <FooterMenu />
    </div>
    )
}

export default Footer 