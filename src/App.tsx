import React from "react";
import "./App.css";
import { AuthContextProvider } from "./components/context/AuthContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sign from "./components/pages/Sign/Sign";
import Chat from "./components/pages/Chat/Chat";
import Protected from "./components/Protected/Protected";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthContextProvider>
          <Routes>
            <Route path="/" element={<Sign />} />
            <Route
              path="/chat"
              element={
                <Protected>
                  <Chat />
                </Protected>
              }
            />
          </Routes>
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
