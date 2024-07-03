import { createBrowserRouter } from 'react-router-dom'
import { InvestingPage, NotFoundPage, SettingsPage, TrackingPage } from '../pages';

const router = createBrowserRouter([
    {
        path: "/",
        element: <TrackingPage />,
    },
    {
        path: "/settings",
        element: <SettingsPage />,
    },
    {
        path: "/investing",
        element: <InvestingPage />,
    },
    {
        path: "*",
        element: <NotFoundPage />,
    },
]);



export default router