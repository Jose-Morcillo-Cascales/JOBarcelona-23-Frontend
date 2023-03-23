import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../pages'
import GeneralProvider from './../helper/utils/general_provider/GeneralProvider'

const Router = () => {
    return (
        <GeneralProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
            </BrowserRouter>
        </GeneralProvider>
    )
}

export default Router