import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/NewsCards";
import logo from "./logo.png";
import "./App.css";
import wordsToNumbers from 'words-to-numbers';

const alanKey =
  "5bbb4b18573281938bdc774a04ac192f2e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles, number }) => {
        if (command === "newHeadlines") {
          setNewsArticles(articles);
          setActiveArticle(-1);
        } else if (command === "highlight") {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        } else if (command === "open") {
          const parsedNumber = number.length > 2 ? wordsToNumbers(number, { fuzzy: true }) : number;
          const article = articles[parsedNumber -1];

          if(parsedNumber > 20) {
            alanBtn().playText('Please try that again.')
          } else if(article){
            window.open(article.url, '_blank');
            alanBtn().playText('Opening now.');

          }
        }
      },
    });
  }, []);

  return (
    <div>
      <div className="app_logoContainer">
        <img className="app_logo" src={logo} alt="news talk logo" />
      </div>
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
    </div>
  );
};

export default App;
