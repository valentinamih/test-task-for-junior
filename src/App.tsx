import React from 'react';
import './App.css';
import {useDispatch} from "react-redux";
import {AppDispatch} from "./redux/store";
import {getCards} from "./redux/cardsSlice";
import {Header} from "./Components/Header/Header";
import {Carousel} from "./Components/Carousel/Carousel";
import {MainSection} from "./Components/MainSection/MainSection";
import {Footer} from "./Components/Footer/Footer";

function App() {
  let dispatch = useDispatch<AppDispatch>()
  dispatch(getCards())
  return (
    <div className="App">
      <Header />
      <Carousel />
      <MainSection />
      <Footer />
    </div>
  );
}

export default App;
