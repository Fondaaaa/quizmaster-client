import {createBrowserRouter} from 'react-router-dom';
import {RootLayout} from '@/components/layout/RootLayout';
import {HomePage} from '@/app/routes/HomePage';
import {NotFoundPage} from '@/app/routes/NotFoundPage';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        children: [
            {
                index: true,
                element: <HomePage/>,
            },
            {
                path: '*',
                element: <NotFoundPage/>,
            },
        ],
    },
]);
