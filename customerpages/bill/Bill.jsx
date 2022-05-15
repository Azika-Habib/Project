import "./bill.scss"
import Customersidebar from "../../customercomponents/customerSidebar/Customersidebar";
import Customernavbar from "../../customercomponents/customerNavbar/Customernavbar";
import Charges from "../../customercomponents/charges/Charges"

const Bill = () => {
  return (
    <div className="list">
      <Customersidebar/>
      <div className="listContainer">
        <Customernavbar/>
        <div className="top">
          <h1>View Charges And Time Slot</h1>
        </div>
        <Charges/>
      </div>
    </div>
  )
}

export default Bill