import './App.css';
import React, { useEffect, useState } from "react";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Login from './pages/Login'; 
import ServiceList from './pages/Login'; 
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import SignUp from './pages/SignUp';
import BookService from './pages/BookService';
import MyBooks from './pages/MyBooks';
import EditService from './pages/EditService';



function App() {
  const [user, setUser] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [serviceImg, setServiceImg] = useState("");
   const [serviceId, setServiceID] = useState("");
   const [book, setBook] = useState('');


  return (
    <div className="App">
      <Router>
        <Navbar
          isLogged={isLogged}
          setIsLogged={setIsLogged}
          setUser={setUser}
          user={user}
        />
        <Routes>
          <Route
            path="/services/myBooks"
            exact
            element={
              <MyBooks
                user={user}
                serviceId={serviceId}
                setServiceID={setServiceID}
                setBook={setBook}
                setSelectedService={setSelectedService}
              />
            }
          />
          <Route path="/" exact element={<Home isLogged={isLogged} />} />
          <Route
            path="/book"
            exact
            element={
              <BookService
                user={user}
                serviceImg={serviceImg}
                setServiceImg={setServiceImg}
                selectedService={selectedService}
                setSelectedService={selectedService}
              />
            }
          />
          <Route
            path="/service/edit"
            exact
            element={
              <EditService
                user={user}
                serviceImg={serviceImg}
                setServiceImg={setServiceImg}
                selectedService={selectedService}
                setSelectedService={selectedService}
                serviceId={serviceId}
                setServiceID={setServiceID}
                book={book}
              />
            }
          />
          <Route
            path="/services"
            exact
            element={
              <Services
                serviceImg={serviceImg}
                setServiceImg={setServiceImg}
                selectedService={selectedService}
                setSelectedService={setSelectedService}
              />
            }
          />
          <Route path="/about" exact element={<About />} />
          <Route path="/signup" exact element={<SignUp />} />
          <Route
            path="/login"
            exact
            element={<Login setIsLogged={setIsLogged} setUser={setUser} />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
