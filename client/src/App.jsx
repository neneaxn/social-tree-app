import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/authContext";

import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Create from "./components/event/create/Create";
import Events from "./components/event/all-events/Events";
import EventDetails from "./components/event/details/Detials";
import Logout from "./components/logout/Logout";
import EventEdit from "./components/event/edit/EventEdit";
import About from "./components/about/AboutUs";
import Footer from "./components/footer/Footer";
import Contacts from "./components/contacts/Contacts";
import Search from "./components/search/Search";
import ErrorBoundary from "./components/error/ErrorBoundary";
import AuthGuardGuest from "./components/guards/AuthGuardGuest";
import AuthGuardUser from "./components/guards/AuthGuardUser";
import PageNotFound from "./components/error/page-not-found/PageNotFound";

import Path from "./lib/paths";


function App() {
    return (
        <ErrorBoundary>
            <AuthProvider>
            <div>
                <Header />
                <Routes>
                    <Route path={Path.Home} element={<Home />} />
                    <Route path={Path.AllEvents} element={<Events />} />
                    <Route path={Path.EventDetails} element={<EventDetails />} />
                    <Route path={Path.About} element={<About/>}/>
                    <Route path={Path.Contacts} element={<Contacts/>}/>
                    <Route path={Path.Search} element={<Search/>}/>
                    <Route element={<AuthGuardUser/>}>
                        <Route path={Path.Login} element={<Login />} />
                        <Route path={Path.Register} element={<Register />} />
                    </Route>
                    <Route element={<AuthGuardGuest />}>
                        <Route path={Path.CreateEvent} element={<Create />} />
                        <Route path={Path.EventEdit} element={<EventEdit />} />
                        <Route path={Path.Logout} element={<Logout />} />
                    </Route>
                    <Route path='*' element={<PageNotFound/>}/>
                </Routes>
                <Footer/>
            </div>
            </AuthProvider>
        </ErrorBoundary>
    );
}

export default App;
