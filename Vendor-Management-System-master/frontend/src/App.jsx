import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {SignInPage} from "./pages/SignIn.jsx";
import {SignUpPage} from "./pages/SignUp.jsx";
import {UserDashboard} from "./pages/Dashboard.jsx";
import {CreateNewPurchaseOrder} from "./pages/purchaseOrder/CreateNewPurchaseOrder.jsx";

function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<SignInPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/user_dashboard" element={<UserDashboard />} />
              <Route path="/create_purchase_order" element={<CreateNewPurchaseOrder />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
