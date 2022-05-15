import "./requestTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { reqColumns, reqRows } from "../../requestssource";
import { Link } from "react-router-dom";
import { useState } from "react";

const Requesttable = () => {
  const [req, setReq] = useState(reqRows);

  const handleDelete = (id) => {
    setReq(req.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/" style={{ textDecoration: "none" }}>
               <div className="viewButton">Accept</div> 
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Decline
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        All Requests
    
        {/* <Link to="/users/new" className="link">
          Add New 
        </Link> */}
      </div>
      <DataGrid
        className="datagrid"
        rows={req}
        columns={reqColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Requesttable;