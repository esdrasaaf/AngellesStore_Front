import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GlobalStyle from './assets/styles/globalStyle'

export default function App () {
    return (
        <BrowserRouter>
            <GlobalStyle/>
                <Routes>
                    <Route path='/' element={<div>oi</div>}/>
                </Routes>
        </BrowserRouter>
    )
}