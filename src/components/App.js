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
import CategoryPasswords from '../pages/categories/CategoryPasswords';
import { AuthProvider } from '../auth/AuthProvider';
import { ProtectedRoute } from '../auth/ProtectedRoute';
import LoginPage from '../auth/LoginPage';
import Layout from '../pages/Layouts/Layout';
import Logout from '../auth/Logout';

function App() {

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path='/' element={<ProtectedRoute><Layout><Home /></Layout></ProtectedRoute>} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/logout' element={<ProtectedRoute><Logout /></ProtectedRoute>} />
          <Route path='/home' element={<ProtectedRoute><Layout><Home /></Layout></ProtectedRoute>} />
          <Route path='/passwords' element={<ProtectedRoute><Layout><Passwords /></Layout></ProtectedRoute>} />
          <Route path='/passwords/edit' element={<ProtectedRoute><Layout><EditPassword /></Layout></ProtectedRoute>} />
          <Route path='/passwords/add' element={<ProtectedRoute><Layout><AddPassword /></Layout></ProtectedRoute>} />
          <Route path='/categories' element={<ProtectedRoute><Layout><Categories /></Layout></ProtectedRoute>} />
          <Route path='/categories/create' element={<ProtectedRoute><Layout><AddCategory /></Layout></ProtectedRoute>} />
          <Route path='/categories/edit' element={<ProtectedRoute><Layout><EditCategory /></Layout></ProtectedRoute>} />
          <Route path='/categories/:id/passwords' element={<ProtectedRoute><Layout><CategoryPasswords /></Layout></ProtectedRoute>} />
          <Route path='/account' element={<ProtectedRoute><Layout><Account /></Layout></ProtectedRoute>} />
          <Route path='/*' element={<ProtectedRoute><Layout><PageNotFound /></Layout></ProtectedRoute>} />
        </Routes>
      </Router>
    </AuthProvider>
    // <AuthProvider>
    //   <Router>
    //     <div className='App'>
    //       {!isLoginPage && <Header />}
    //       {!isLoginPage && <Sidebar />}
    //       <div className='content d-flex flex-column' id='content'>
    //         <main className='flex-grow-1 p-3'>
    //           <Routes>
    //             <Route path='/login' element={<LoginPage />} />
    //             <Route path='/' element={<Home />} />
    //             <Route path='/home' element={<Home />} />
    //             <Route path='/passwords' element={<ProtectedRoute><Passwords /></ProtectedRoute>} />
    //             <Route path='/passwords/edit' element={<EditPassword />} />
    //             <Route path='/passwords/add' element={<AddPassword />} />
    //             <Route path='/categories' element={<Categories />} />
    //             <Route path='/categories/create' element={<AddCategory />} />
    //             <Route path='/categories/edit' element={<EditCategory />} />
    //             <Route path='/categories/:id/passwords' element={<CategoryPasswords />} />
    //             <Route path='/account' element={<Account />} />
    //             <Route path='/*' element={<PageNotFound />} />
    //           </Routes>
    //         </main>
    //         <Footer />
    //       </div>
    //     </div>
    //   </Router>
    // </AuthProvider>
  );
}

export default App;
