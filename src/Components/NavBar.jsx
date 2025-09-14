import {Link, NavLink} from 'react-router-dom';

 export default function Navbar({dark, setDark}){
    return(
        <nav className="sticky top-0 bg-white dark:bg-zinc-800/70 backdrop-blur shadow rounded-xl">
  <div className="mx-auto max-w-6xl px-4 flex items-center justify-between h-12">
  
    <div className="font-bold text-lg">
      <Link href="/">Kevin</Link>
      </div>


    <div className="flex gap-10">
      <NavLink end className={(props) => props.isActive ? "text-blue-600": "hover:text-blue-600"} to="/">Home</NavLink>
      <NavLink className={({isActive}) => isActive ? "text-blue-600": "hover:text-blue-600"} to="/about">About</NavLink>
      <NavLink className={({isActive}) => isActive ? "text-blue-600": "hover:text-blue-600"} to="/projects">Projects</NavLink>
      <NavLink className={({isActive}) => isActive ? "text-blue-600": "hover:text-blue-600"}to="/contact">Contact</NavLink>
    </div>

   
    <button
      onClick={() => setDark(!dark)}
      className="p-2 rounded-full bg-zinc-200 dark:bg-zinc-700 transition"
      aria-label="Toggle theme"
    >
      {dark ? "☀️" : "🌛"}
    </button>
  </div>
</nav>

    )

}