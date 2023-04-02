import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes, Redirect } from "react-router-dom";
import Home from "./modules/Home/Home";
import Transaction from "./modules/Transaction/Transaction";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import { NotLogin } from "./pages/NotLogin";
import Account from "./modules/Account/Account";
import Transfer from "./modules/Transfer/Transfer";
import Header from "./modules/Header";
import { NotFound } from "./pages/NotFound";
import { Logout } from "./pages/Logout";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "./store/user/selecters";

function App() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  // Nhờ chiến xem lại dùm ràng buộc khi login
  // return (
  //   <>
  //     <BrowserRouter>
  //       <Header />
  //       <div>
  //         <Routes>
  //           {isLoggedIn ? (
  //             <>
  //               <Route path="/card" element={<Home />} />
  //               <Route path="/transfer" element={<Transfer />} />
  //               <Route path="/transaction" element={<Transaction />} />
  //               <Route path="/account" element={<Account />} />
  //               <Route path="/auth/logout" element={<Logout />}></Route>
  //               <Route path="*" element={<NotFound />} />
  //             </>
  //           ) : (
  //             <>
  //               <Route
  //                 path="/auth/sign-in"
  //                 element={<SignInPage></SignInPage>}
  //               ></Route>
  //               <Route
  //                 path="/auth/sign-up"
  //                 element={<SignUpPage></SignUpPage>}
  //               ></Route>
  //               <Route path="*" element={<NotLogin />} />
  //             </>
  //           )}
  //         </Routes>
  //       </div>
  //     </BrowserRouter>
  //   </>
  // );

  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/card" element={<Home />} />
          <Route path="/transfer" element={<Transfer />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/account" element={<Account />} />
          <Route
            path="/auth/sign-in"
            element={<SignInPage></SignInPage>}
          ></Route>
          <Route
            path="/auth/sign-up"
            element={<SignUpPage></SignUpPage>}
          ></Route>
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
