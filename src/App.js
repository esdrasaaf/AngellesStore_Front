import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GlobalStyle from './assets/styles/globalStyle'
import SignInPage from './pages/AuthPages/SignIn'
import SignUpPage from './pages/AuthPages/SignUp'

export default function App () {
    return (
        <BrowserRouter>
            <GlobalStyle/>
                <Routes>
                    <Route path='/' element={<SignInPage />}/>
                    <Route path='/sign-up' element={<SignUpPage />}/>
                </Routes>
        </BrowserRouter>
    )
}