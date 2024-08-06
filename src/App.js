import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AbouPage";
import NavBar from "./pages/NavBar";
import ArticleListPage from "./pages/ArticleListPage";
import ArticlePage from "./pages/ArticlePage";
import NotFoundPage from "./pages/NotFoundPage";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
       <NavBar />
        <div id="page-body">
          <Routes>
            <Route path='/' element ={<HomePage />} />
            <Route path ='/articles' element ={<ArticleListPage />} />
            <Route path ='/about' element ={<AboutPage />} /> 
           <Route path='/articles/:articlesId'  element ={<ArticlePage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
