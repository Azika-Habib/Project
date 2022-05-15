import "./approveRequest.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Requesttable from "../../components/requestTable/Requesttable"

const Approverequest = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Requesttable/>
      </div>
    </div>
  )
}

export default Approverequest;