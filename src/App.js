import React, { Suspense} from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import MoviesPage from './pages/MoviesPage';
import AuthForm from './components/Auth/AuthForm';
import NotFoundPage from './pages/NotFoundPage';
import LoadingSpinner from './components/UI/LoadingSpinner';

const BookingTicketPage = React.lazy(()=>import('./pages/BoookingTicketPage'));
const MovieDetailPage = React.lazy(()=>import('./pages/MovieDetailPage'));

const PayPage = React.lazy(()=>import('./pages/PayPage'));

const TicketPage = React.lazy(()=>import('./pages/TicketPage'));

const MyTicketPage  = React.lazy(()=>import('./pages/MyTicketPage'));



function App() {
  const logForm = useSelector(state => state.ui.logformIsVisible);
  const isLogged = useSelector( state => state.auth.isLoggedIn);

  return (
      <Layout>
        <Suspense fallback={<LoadingSpinner/>}>
          { logForm && <AuthForm/>}
          <Routes>

            <Route  path="/" element= {<HomePage/>}/>
            <Route  path="/movies" element={<MoviesPage/>} />
            <Route  path="/movie/:movieId" element= {<MovieDetailPage/>}/>
            <Route  path="/bookingticke" element= {<BookingTicketPage/>}/>
            <Route  path="/movie-purchase" element= {<PayPage />}/>
            <Route  path="/ticket/:orderId" element= {<TicketPage/>}  />
            {isLogged && <Route  path="/mytickets" element= {<MyTicketPage/>}  />}
            <Route path="*" element= {<NotFoundPage/>} />



          </Routes>
        </Suspense>
         
      </Layout>
     
  
  );
}

export default App;
