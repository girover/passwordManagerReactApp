import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';
import Home from '../pages/Home';
import Passwords from '../pages/passwords/Passwords';
import PageNotFound from '../pages/PageNotFound';
import Categories from '../pages/categories/Categories';
import AddCategory from '../pages/categories/AddCategory';
import Account from '../pages/account/Account';
import EditPassword from '../pages/passwords/EditPassword';
import AddPassword from '../pages/passwords/AddPassword';
import EditCategory from '../pages/categories/EditCategory';

function App() {

  return (
    <Router>
      <div className='App'>
        <Header />
        <Sidebar />
        <div className='content d-flex flex-column' id='content'>
          <main className='flex-grow-1 p-3'>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/home' element={<Home/>} />
            <Route path='/passwords' element={<Passwords/>} />
            <Route path='/passwords/edit' element={<EditPassword />} />
            <Route path='/passwords/add' element={<AddPassword />} />
            <Route path='/categories' element={<Categories/>} />
            <Route path='/categories/create' element={<AddCategory/>} />
            <Route path='/categories/edit' element={<EditCategory/>} />
            <Route path='/account' element={<Account/>} />
            <Route path='/*' element={<PageNotFound/>} />
          </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
