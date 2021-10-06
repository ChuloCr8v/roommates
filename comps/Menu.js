
const Menu = () => {
  return(
    <ul className="bg-gray-200 py-5 flex fixed bottom-0 left-0 z-40 justify-center items-center w-full ">
      <a href="/" className="text-black mr-10 hover:text-red-600" >Home </a>
      <a href="/login" className="text-black mr-10 hover:text-red-600" >Login </a>
      <a href="/signup" className="text-black mr-10 hover:text-red-600" >Signup </a>
      <a href="/" className="text-black mr-10 hover:text-red-600" >FAQs </a>
      <a href="/about" className="text-black">About </a>
    </ul>
    )
}

export default Menu 