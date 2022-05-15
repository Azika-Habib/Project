import React from "react";
import  "./newRequest.scss";
import Customersidebar from "../../customercomponents/customerSidebar/Customersidebar";
import Customernavbar from "../../customercomponents/customerNavbar/Customernavbar";

import { useState } from "react";

const Newrequest = ({ inputs, title }) => {
  const [file, setFile] = useState("");

  return (
    <div className="new">
      <Customersidebar />
      <div className="newContainer">
        <Customernavbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
             <img
              src= "/images/Request.jpg"
              
              alt=""
            /> 
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                {/* <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label> */}
                {/* <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                /> */}
              </div>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Newrequest;