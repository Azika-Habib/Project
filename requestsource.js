export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
   {
      field: "name",
     headerName: "Vehihcle-Name",
      width: 230,
     
    },
   {
     field: "number",
     headerName: "Vehicle-number",
     width: 230,
   },
 
   {
     field: "problem",
     headerName: "Problem-Description",
     width: 230,
   },
   {
     field: "status",
     headerName: "Status",
     width: 160,
     renderCell: (params) => {
       return (
         <div className={`cellWithStatus ${params.row.status}`}>
           {params.row.status}
         </div>
       );
     },
   },
 ];
 
 //temporary data
 export const userRows = [
   {
     id: 1,
     name: "Alto",
     status: "pending",
     email: "KE 1187",
     problem: 'oil change',
   },
   {
     id: 2,
     name: "Alto",
     status: "approved",
     email: "KE 1187",
     problem: 'brake issue',
   },
  
  
 ];