import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../components/ErrorPage';
import Main from './../leyout/Main';
import Home from './../components/Home';
import Book from './../components/Book';
import About from './../components/About';
import Books from './../components/Books';
import BookDetails from './../components/BookDetails';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'home',
                element: <Home />
            },
            {
                path: 'books',
                loader: () => fetch('https://api.itbook.store/1.0/new'),
                element: <Books />,
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'book/:id',
                element: <BookDetails />,
                loader: ({ params }) => fetch(`https://api.itbook.store/1.0/books/${params.id}`)
            }
        ]
    },
])
export default router
