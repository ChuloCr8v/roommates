import Menu from './Menu'
import Logo from './Logo'
import SocialIcons from './SocialIcons'
import {useState, useEffect} from 'react'
const Header = () => {
    const [menuBg, setMenuBg] = useState(true)
    const [scroll, setScrollY] = useState('')
    
    useEffect(() => {
        setScrollY(window.pageYOffset)
    }, [])
        let prevPos = scroll
        const changeBg = () => {
        let currentPos = window.pageYOffset 
        if(currentPos > prevPos) {
            setMenuBg(true)
        } else {
            setMenuBg(false)
        }
        prevPos = currentPos 
        
        }
    
    useEffect(() => {
        window.addEventListener('scroll', changeBg);
        return () => {
      window.removeEventListener("scroll", changeBg);
     }; 
    }, [])
    
  return(
      <>
    {menuBg && <div className="w-full bg-gray-800 fixed z-50 top-0 left-0 p-3">
      <div class="logo-container flex justify-between items-center">
      <Logo />
      <SocialIcons />
      </div>
      <Menu />
    </div>}
    </>
    )
}

export default Header 