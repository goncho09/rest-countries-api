import { FaRegMoon } from "react-icons/fa";

export default function Navbar(){
    return (
        <header className="flex justify-center p-5 bg-white border-b">
            <nav className="flex justify-between w-[80%]">
                <h1 className="font-extrabold text-xl">Where in the world?</h1>
                <button className="flex items-center text-lg">
                <FaRegMoon className=""/>
                    <p className="ml-5">Dark Mode</p>
                </button>
            </nav>
        </header>
    )
}