import SideBar from './SideBar';
import Contents from './Contents';
const Layout = () => {
  return (
    <div>
        <div className="grid grid-cols-[1fr_4fr]">
            <div className="sidebar bg-orange-100 ">
                <SideBar/>
            </div>
            <div className="content bg-white px-1 md:px-2 lg:px-8">
                <Contents/>
            </div>
        </div>
    </div>
  )
}

export default Layout