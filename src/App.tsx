import { configureWeb3Modal } from "./connection";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/landingPage";
import Feed from "./pages/dashboard/feed";
import Subscription from "./pages/dashboard/subscription";
import Analytics from "./pages/dashboard/analytics";
import Overview from "./pages/DAOdashboard/Overview";
import Proposals from "./pages/DAOdashboard/Proposals";
import Voting from "./pages/DAOdashboard/Voting";
import Treasury from "./pages/DAOdashboard/Treasury";
import { ToastContainer } from "react-toastify";

configureWeb3Modal();

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="feed" element={<Feed />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="subscription" element={<Subscription />} />
          <Route path="overview" element={<Overview />} />
          <Route path="proposals" element={<Proposals />} />
          <Route path="voting" element={<Voting />} />
          <Route path="treasury" element={<Treasury />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer theme="colored" />
    </>
  );
}

export default App;
