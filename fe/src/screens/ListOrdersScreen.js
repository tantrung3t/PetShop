import React, { useEffect } from "react"
// import axios from "axios";

export default function ListOrdersScreen() {
  // const [orders, setOrders] = useState();

  useEffect(() => {
    // axios.get("http://localhost:3003/")
    // .then(res => {
    //   const data = res.data;
    //   setOrders(data)
    //   console.log(data);
    // })
    // .catch(error => console.log(error))
      console.log("useEffect");
  });

  return (
    <div className="grid">
      <h1 className="center" style={{textTransform: "uppercase"}}>Thông tin đơn hàng</h1>

    </div>
  );
}