import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GlobalStyle from './assets/styles/globalStyle'
import SignInPage from './pages/AuthPages/SignIn'

export default function App () {
    return (
        <BrowserRouter>
            <GlobalStyle/>
                <Routes>
                    <Route path='/' element={<SignInPage />}/>
                </Routes>
        </BrowserRouter>
    )
}