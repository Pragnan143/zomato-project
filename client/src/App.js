import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

import Menu from "./Components/Restarunts/Menu";
import Review from "./Components/Restarunts/Review";
import OrderOnline from "./Components/Restarunts/OrderOnline";
import Overview from "./Components/Restarunts/Overview";
import Photo from "./Components/Restarunts/Photo";
import HomePage from "./Pages/Home.page";
import Checkout from "./Pages/Checkout.page";
import GoogleAuth from "./Pages/GoogleAuth.page";
import Restaruntpage from "./Pages/Restarunt.page";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/delivery" />} />
        <Route path="/:type" element={<HomePage />} />
        <Route path="/google/:token" element={<GoogleAuth />} />
        {/* <Route path="/restarunt/:id" element={<RedirectRestarunt />} /> */}
        <Route path="/restarunt/:id" element={<Restaruntpage />}>
          <Route path="overview" element={<Overview />} />
          <Route path="order-online" element={<OrderOnline />} />
          <Route path="review" element={<Review />} />
          <Route path="photos" element={<Photo />} />
          <Route path="menu" element={<Menu />} />
        </Route>

        <Route path="/checkout/orders" element={<Checkout />} />
      </Routes>
    </>
  );
}

export default App;
