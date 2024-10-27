
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import s from './App.module.scss';
import Personal from "./pages/Personal/Personal"
import Professional from "./pages/Professional/Professional"
import Header from "./components/Header/Header"
import { questionArray } from './globalUtils.js/globalUtils';


function App() {
  useEffect(() => {
    localStorage.removeItem('personalPollAnswers');
    localStorage.removeItem('professionalPollAnswers');
  }, []);

  return (
    <div className={s.App}>
      <Header />
      <div className={s.bodyWrapper}>
        <Routes>
          <Route exact path="/" element={<Personal data={questionArray.personal} />} />
          <Route path="/professional" element={<Professional data={questionArray.professional} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
