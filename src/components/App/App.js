import React, { useState } from "react";
import { Route, Routes, useHistory, Navigate } from "react-router-dom";
import { Main } from "../Main/Main";
import { Header } from "../Header/Header";
import "./App.css";
import { Footer } from "../Footer/Footer";
import { SavedNews } from "../SavedNews/SavedNews";
import { PopUpRegister } from "../PopUpRegister/PopUpRegister";
import { PopUpLogin } from "../PopUpLogin/PopUpLogin";
import { PopupWithForm } from "../PopupWithForm/PopupWithForm";
import newsApi from "../../utils/NewsApi";
import mainApi from "../../utils/MainApi";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { UserSavedCardsContext } from "../../contexts/UserSavedCardsContext";

function App() {
  const [isLogedIn, setIsLogedIn] = useState(false);
  const [registerPopUpOpen, setRegisterPopUpOpen] = useState(false);
  const [loginPopUpOpen, setLoginPopUpOpen] = useState(false);
  const [registretionSuccsess, setRegistretionSuccsess] = useState(false);
  const [newsCardListStatus, setNewsCardListStatus] = useState("");
  const [newsCards, setNewsCards] = useState([]);
  const [userCard, setUserCard] = useState(
    JSON.parse(localStorage.getItem("userCards"))
  );
  const [registerErrorMsg, setRegisterErrorMsg] = useState("");
  const [token, setToken] = useState(localStorage.getItem("jwt"));
  const [currentUser, setCurrentUser] = useState({});
  const searchKeyWord = localStorage.getItem("searchKeyWord");

  function ProtectedRoute({ children, isLogedIn }) {
    return !isLogedIn ? <Navigate replace to="/" /> : children;
  }

  React.useEffect(() => {
    if (!localStorage.getItem("searchResults")) {
      return;
    }
    const localStorageCards = JSON.parse(localStorage.getItem("searchResults"));
    setNewsCards(localStorageCards);
    setNewsCardListStatus("Finish");
  }, []);

  React.useEffect(() => {
    if (!localStorage.getItem("jwt")) {
      return;
    }
    mainApi.getUserInfo(token).then((res) => {
      setIsLogedIn(true);
      setCurrentUser(res);
    });
  }, []);

  React.useEffect(() => {
    if (token) {
      mainApi.getUserInfo(token).then((res) => setCurrentUser(res));
    }
  }, [token]);

  React.useEffect(() => {
    if (isLogedIn === false) {
      return;
    }
    mainApi.getUserArticlesList(token).then((res) => {
      localStorage.setItem("userCards", JSON.stringify(res));
      setUserCard(res);
    });
  }, [isLogedIn]);

  function closeAllPopUps() {
    setRegisterPopUpOpen(false);
    setLoginPopUpOpen(false);
    setRegistretionSuccsess(false);
  }
  function handleLoginOpen() {
    setLoginPopUpOpen(true);
  }
  function handleLoginSuccess() {
    setIsLogedIn(true);
    closeAllPopUps();
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

  function handleSearchResults(event) {
    setNewsCardListStatus("Loading");
    newsApi
      .getSearchResults(event.target.searchform__input.value)
      .then((res) => {
        if (res.totalResults === 0) {
          setNewsCardListStatus("Not-Found");
          return;
        }
        setNewsCards(res.articles);
        localStorage.setItem("searchResults", JSON.stringify(res.articles));
        localStorage.setItem(
          "searchKeyWord",
          event.target.searchform__input.value
        );
        setNewsCardListStatus("Finish");
      })
      .catch(() => {
        setNewsCardListStatus("Error");
      });
  }

  function handleRegistration(data) {
    mainApi
      .signup(data.email, data.password, data.username)
      .then((res) => {
        setRegisterPopUpOpen(false);
        setRegistretionSuccsess(true);
      })
      .catch((err) => setRegisterErrorMsg(err.message));
  }

  function handleLogin(data) {
    mainApi.signin(data.email, data.password).then((res) => {
      setToken(res.token);
      localStorage.setItem("jwt", res.token);
      setIsLogedIn(true);
      closeAllPopUps();
    });
  }

  function handleLogOut() {
    localStorage.removeItem("jwt");
    setIsLogedIn(false);
  }

  function handleCardSave(card) {
    const sourceChecker = card.source.id ? card.source.id : "no source";
    const formatCard = {
      keyword: searchKeyWord,
      title: card.title,
      text: card.content,
      date: card.publishedAt,
      source: sourceChecker,
      link: card.url,
      image: card.urlToImage,
    };
    mainApi.saveCard(token, formatCard).then(() => {
      mainApi.getUserArticlesList(token).then((res) => {
        localStorage.setItem("userCards", JSON.stringify(res));
        setUserCard(res);
      });
    });
  }

  function handleCardDelete(card) {
    const cardFilter = userCard.filter(
      (userCard) => userCard.link === card.url
    );
    const cardId = cardFilter[0]._id;
    mainApi.deleteCard(token, cardId).then((res) => {
      mainApi.getUserArticlesList(token).then((res) => {
        localStorage.setItem("userCards", JSON.stringify(res));
        setUserCard(res);
      });
    });
  }

  function getUserArticlesList() {
    mainApi.getUserArticlesList(token).then((res) => {
      return res;
    });
  }

  return (
    <div className="page">
      <div className="page__container">
        <Routes>
          <Route
            path="/saved-news"
            element={
              <ProtectedRoute isLogedIn={isLogedIn}>
                <CurrentUserContext.Provider value={currentUser}>
                  <UserSavedCardsContext.Provider value={userCard}>
                    <Header
                      isLogedIn={isLogedIn}
                      darMode={true}
                      onLogOut={handleLogOut}
                    />
                    <SavedNews
                      userCards={userCard}
                      isLogedIn={isLogedIn}
                      handleCardDelete={handleCardDelete}
                    />
                    <Footer />
                  </UserSavedCardsContext.Provider>
                </CurrentUserContext.Provider>
              </ProtectedRoute>
            }
          />
          <Route
            path="/"
            element={
              <CurrentUserContext.Provider value={currentUser}>
                <Header
                  isLogedIn={isLogedIn}
                  darMode={false}
                  onCloseClick={handleLoginOpen}
                  onLogOut={handleLogOut}
                />
                {
                  <PopupWithForm
                    isOpen={registretionSuccsess}
                    onCloseClick={closeAllPopUps}
                    title="Registration successfully completed!"
                    onChangeClick={handleLoginOpen}
                    link_rederect_text="Sign In"
                  />
                }
                <PopUpRegister
                  isOpen={registerPopUpOpen}
                  onCloseClick={closeAllPopUps}
                  onChangeClick={handlePopUpRegisterOrSignUp}
                  handleRegisterSuccess={handlSuccsessRegistration}
                  handleRegistration={handleRegistration}
                  errorMessage={registerErrorMsg}
                />
                <PopUpLogin
                  isOpen={loginPopUpOpen}
                  onCloseClick={closeAllPopUps}
                  onChangeClick={handlePopUpRegisterOrSignUp}
                  handleLogin={handleLogin}
                />
                <Main
                  isLogedIn={isLogedIn}
                  nesListComponentStatus={newsCardListStatus}
                  handleSearch={handleSearchResults}
                  newsCards={newsCards}
                  handleCardSave={handleCardSave}
                  handleCardDelete={handleCardDelete}
                />
                <Footer />
              </CurrentUserContext.Provider>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
