import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GlobalStyle from './assets/styles/globalStyle'
import UserInfoProvider from './contexts/UserContext'
import SignInPage from './pages/AuthPages/SignIn'
import SignUpPage from './pages/AuthPages/SignUp'
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
                    </Routes>
                </UserInfoProvider>
        </BrowserRouter>
    )
}