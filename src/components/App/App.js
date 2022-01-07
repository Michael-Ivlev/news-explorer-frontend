import React, { useState } from "react";
import { Route, Routes, useHistory } from "react-router-dom";
import { Main } from "../Main/Main";
import { Header } from "../Header/Header";
import "./App.css";
import { Footer } from "../Footer/Footer";
import { SavedNews } from "../SavedNews/SavedNews";
import { PopUpRegister } from "../PopUpRegister/PopUpRegister";
import { PopUpLogin } from "../PopUpLogin/PopUpLogin";
import { PopupWithForm } from "../PopupWithForm/PopupWithForm";

function App() {
  const [isLogedIn, setIsLogedIn] = useState(false);
  const [registerPopUpOpen, setRegisterPopUpOpen] = useState(false);
  const [loginPopUpOpen, setLoginPopUpOpen] = useState(false);
  const [registretionSuccsess, setRegistretionSuccsess] = useState(false);

  function closeAllPopUps() {
    setRegisterPopUpOpen(false);
    setLoginPopUpOpen(false);
    setRegistretionSuccsess(false);
  }
  function handleLoginOpen() {
    setLoginPopUpOpen(true);
  }
  function handleLoginSuccess() {
    setIsLogedIn(true)
    closeAllPopUps()
  }
  function handleRegisterOpen() {
    setRegisterPopUpOpen(true);
  }
  function handlePopUpRegisterOrSignUp() {
    if (registerPopUpOpen) {
      setRegisterPopUpOpen(false);
      setLoginPopUpOpen(true);
    }
    if (loginPopUpOpen) {
      setRegisterPopUpOpen(true);
      setLoginPopUpOpen(false);
    }
  }
  function handlSuccsessRegistration() {
    setRegistretionSuccsess(true);
  }

  return (
    <div className="page">
      <div className="page__container">
        <Routes>
          <Route
            path="/saved-news"
            element={
              <>
                <Header isLogedIn={isLogedIn} darMode={true} />
                <SavedNews />
                <Footer />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Header
                  isLogedIn={isLogedIn}
                  darMode={false}
                  onCloseClick={handleLoginOpen}
                />
                {
                  <PopupWithForm
                    isOpen={registretionSuccsess}
                    onCloseClick={closeAllPopUps}
                    title="Registration successfully completed!"
                  />
                }
                <PopUpRegister
                  isOpen={registerPopUpOpen}
                  onCloseClick={closeAllPopUps}
                  onChangeClick={handlePopUpRegisterOrSignUp}
                  handleRegisterSuccess={handlSuccsessRegistration}
                />
                <PopUpLogin
                  isOpen={loginPopUpOpen}
                  onCloseClick={closeAllPopUps}
                  onChangeClick={handlePopUpRegisterOrSignUp}
                  handleLoginSuccess={handleLoginSuccess}
                />
                <Main isLogedIn={isLogedIn} />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
