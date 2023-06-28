import { Link, Outlet } from "react-router-dom";

function Layout() {


  return (
    <>
    <header>
        <Link to="contacts">Open contacts table</Link>
    </header>
    <Outlet/>
    </>
  )
}

export default Layout