import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import GlobalStyle from './assets/styles/globalStyle'
import UserInfoProvider from './contexts/UserContext'
import SignInPage from './pages/AuthPages/SignIn'
import SignUpPage from './pages/AuthPages/SignUp'
import CartPage from './pages/CartPage/CartPage'
import CatalogPage from './pages/CatalogPage/Catalog'
import HomePage from './pages/HomePage/Home'
import ProductPage from './pages/ProductPage/Product'

export default function App () {
    return (
        <BrowserRouter>
            <GlobalStyle/>
                <UserInfoProvider>
                    <Routes>
                        <Route path='/' element={<SignInPage />}/>
                        <Route path='/sign-up' element={<SignUpPage />}/>
                        <Route path='/home' element={<HomePage />} />
                        <Route path='/product/:productId' element={<ProductPage />} />
                        <Route path='/category/:categoryId' element={<ProductPage />} />
                        <Route path='/cart' element={<CartPage />} />
                        <Route path='/catalog' element={<CatalogPage />} />
                        <Route path='/404' element={<>not found component</>} />
                        <Route path='*' element={<Navigate to={'/404'} />} />
                    </Routes>
                </UserInfoProvider>
        </BrowserRouter>
    )
}