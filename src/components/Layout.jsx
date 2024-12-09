import Nav from './Nav';
import Contents from './Contents';
const Layout = () => {
  return (
    <div>
        <div className="grid grid-cols-[1fr_4fr]">
            <div className="sidebar bg-orange-100 ">
                <Nav/>
            </div>
            <div className="content bg-white px-8">
                <Contents/>
            </div>
        </div>
    </div>
  )
}

export default Layout