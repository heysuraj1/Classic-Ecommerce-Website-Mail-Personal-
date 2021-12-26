import NavBar from './NavBar'
import Footer from "../Components/Footer";


const Layout = ({children}) => {
    return (
        <div>
            <NavBar/>
            {children}
            <Footer/>
        </div>
    );
}

export default Layout;