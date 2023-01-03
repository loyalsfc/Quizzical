import React from "react";
import Quiz from "./component/Quiz";
import './index.css'
import DataFetching from "./component/Answer";
import QuizPage from "./page/QuizPage";

function App() {
  return (
    <div className="App">
      <QuizPage/>
    {/* <DataFetching /> */}
    </div>
  );
}

export default App;
