export const userColumns = [
     { field: "id", headerName: "ID", width: 70 },
    {
       field: "username",
      headerName: "Name",
       width: 230,
      
     },
    {
      field: "email",
      headerName: "Email",
      width: 230,
    },
  
    {
      field: "phone",
      headerName: "Phone",
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
      username: "Ali",
      img: "https://imphones.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      status: "active",
      email: "ali@gmail.com",
      phone: '0300 1234 765',
    },
    {
      id: 2,
      username: "Sana",
      img: "https://imphones.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "sana@gmail.com",
      status: "passive",
      phone: '0300 1234 765',
    },
    {
      id: 3,
      username: "Umer",
      img: "https://imphones.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "umer@gmail.com",
      status: "pending",
      phone: '0300 1234 765',
    },
    {
      id: 4,
      username: "Saif",
      img: "https://imphones.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "saif@gmail.com",
      status: "active",
      phone: '0300 1234 765',
    },
    {
      id: 5,
      username: "Tariq",
      img: "https://imphones.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "tariq@gmail.com",
      // status: "passive",
      phone: '0300 1234 765',
    },
    {
      id: 6,
      username: "Mehreen",
      img: "https://imphones.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "mehreen@gmail.com",
      // status: "active",
      phone: '0300 1234 765',
    },
   
  ];