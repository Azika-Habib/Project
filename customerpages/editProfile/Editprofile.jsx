import "./editProfile.scss";
import Customersidebar from "../../customercomponents/customerSidebar/Customersidebar";
import Customernavbar from "../../customercomponents/customerNavbar/Customernavbar"
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

const Editprofile = ({ inputs, title }) => {
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
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
              <button>Update Info</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editprofile;