import "./list.scss"
import Customersidebar from "../../customercomponents/customerSidebar/Customersidebar"
import Customernavbar from "../../customercomponents/customerNavbar/Customernavbar"
import Customerdatatable from "../../Customercomponents/customerDatatable/Customerdatatable"

const List = () => {
  return (
    <div className="list">
      <Customersidebar/>
      <div className="listContainer">
        <Customernavbar/>
        <Customerdatatable/>
      </div>
    </div>
  )
}

export default List