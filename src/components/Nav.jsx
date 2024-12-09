
const Nav = () => {
  return (
    <div>
        <h1 className="header px-6 py-4">Note !</h1>
        <button className="w-32 h-12 p-2 m-4 rounded-xl flex justify-around items-center bg-orange-300/50 shadow-lg">
            <span>+</span>
            <span>New note</span>
        </button>
        <p className="sub-header px-6 py-2 flex items-center justify-between">
            <span>NOTEBOOKS</span>
            <button className="w-12">+</button>
        </p>
        <div className="flex flex-col *:py-3 *:px-6 *:text-start">
            <button className="w-full ">JavaScript guide</button>
            <button className="w-full">JavaScript guide</button>
            <button className="w-full">JavaScript guide</button>
            
        </div>
    </div>
  )
}

export default Nav