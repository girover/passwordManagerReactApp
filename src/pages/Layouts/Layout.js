import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

const Layout = ({children}) => {
    return ( 
        <div className='App'>
          <Header />
          <Sidebar />
          <div className='content d-flex flex-column' id='content'>
            <main className='flex-grow-1 p-3'>
              {children}
            </main>
            <Footer />
          </div>
        </div>
     );
}
 
export default Layout;