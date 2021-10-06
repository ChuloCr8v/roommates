import Link from 'next/link'
const  Buttons = () => {
  return(
    <div class="buttons flex gap-2">
        <button class="bg-green-600 p-2 px-4 text-white text-sm rounded-2xl uppercase "><Link href="/login"> Sign in</Link></button>
        <button class="bg-red-600 p-2 px-4 text-white text-sm rounded-2xl uppercase "><Link href="/signup"> Sign up</Link></button>
        </div>
    )
}

export default Buttons