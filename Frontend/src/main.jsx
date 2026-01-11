import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { appStore } from './utils/appStore.js'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from 'react'

//Lezy Lodaing
const Home = lazy(()=> import('./Pages/Home.jsx') )   

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children:[
            {
                path:"/",
                element: <Home />
            }
        ]
    }

])

createRoot(document.getElementById('root')).render(
    <Provider store={appStore} >
        <Suspense fallback={<p>Loading...</p>}>
            <RouterProvider router = {routes}/>
        </Suspense>
    </Provider>
)
