import Home from "./pages/home/Home";
import SignIn from './components/login/SignIn';
import SignUp from './components/signup/SignUp';
import List from "./pages/approveRequest/Approverequest";
import Approverequest from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { requestInputs, userInputs } from "./formSource";
import Customerhome from "./customerpages/customerhome/Customerhome";
import Newrequest from "./customerpages/newRequest/Newrequest";
import Editprofile from "./customerpages/editProfile/Editprofile";
import Requeststatus from "./customerpages/requeststatus/Requeststatus";
import Vehiclestatus from "./customerpages/vehicleStatus/Vehiclestatus";
import Bill from "./customerpages/bill/Bill";

function App() {
 

  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<SignUp />} />
            <Route  path ="/SignIn"index element={<SignIn />} />
            <Route path="home" element={<Home />} />
            <Route
                path="approverequest"
                element={<Approverequest inputs={requestInputs}  />}
              />
             
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            {/* <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route> */}
          </Route>
          <Route path="customerhome" element={<Customerhome />} />
          <Route
                path="newrequest"
                element={<Newrequest inputs={requestInputs} title="Add New Request" />}
              />
             
              <Route  path="requeststatus" index element={<Requeststatus  />} />
              <Route  path="vehiclestatus" index element={<Vehiclestatus  />} />
              <Route  path="bill" index element={<Bill  />} />
              
               <Route
                path="editprofile"
                element={<Editprofile inputs={userInputs} title="Edit profile" />}
              />
          {/* <Route path="newrequest" element={<Newrequest />} /> */}
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;