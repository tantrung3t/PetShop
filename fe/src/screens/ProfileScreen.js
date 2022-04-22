import axios from "axios";
import React, {useState } from "react"

export default function ProfileScreen() {

  const [profile] = useState(JSON.parse(localStorage.getItem("profile")))

  const [sex, setSex] = useState(0)
 
  const handleSubmit = (event) => {
    event.preventDefault();
    const dataSubmit = new FormData(event.currentTarget);
    
    var data = {
      account_id: profile.account_id,
      info_address: dataSubmit.get('address'),
      info_date: dataSubmit.get('date'),
      info_email: dataSubmit.get('email'),
      info_fname: dataSubmit.get('fname'),
      info_lname: dataSubmit.get('lname'),
      info_phone_number: dataSubmit.get('phone'),
      info_sex: sex

    }

    axios.post('http://localhost:3003/account/update', data)
      .then(function (response) {
        console.log(response.data);
        alert("Cập nhật thông tin thành công vui lòng đăng nhập lại!");
      })
      .catch(function (error) {
        console.log(error);
        alert("Cập nhật thông tin thất bại!");
      });
    
    // location.reload();

  }

  // const handleCheck = () => {
  //   document.getElementsByName(sex)
  // }
  // console.log(JSON.parse(localStorage.getItem("profile")))

  return (
    <div className="grid">
      <div className="form-container">
        <h2>Thông tin cá nhân</h2>
        <form className="form-wrap" onSubmit={handleSubmit}>
          <div className="flex beetween" style={{ width: "100%" }}>
            <div>
              <label htmlFor="fname">Tên: </label>
              <input
                className="form-input"
                type="text"
                id="fname"
                name="fname"
                placeholder="Tên"
                defaultValue={profile.info_fname}
                // onChange={(e) => setFname(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="lname">Họ: </label>
              <input
                className="form-input"
                type="text"
                id="lname"
                name="lname"
                placeholder="Ho"
                defaultValue={profile.info_lname}
                // onChange={(e) => setLname(e.target.value)}
              />
            </div>
          </div>
          <div className="flex beetween center">
            <div>
              <label htmlFor="date">Ngày Sinh: </label>
              <input
                className="form-input"
                type="date"
                id="date"
                name="date"
                defaultValue={profile.info_date}
                // onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div>
              <label >Giới Tính: </label>
              <input className="form-input" type="radio" id="male" name="sex" value={1} onChange={e => setSex(e.target.value)} />
              <label htmlFor="male"> Nam  </label>
              <input className="form-input" type="radio" id="female" name="sex" value={2} onChange={e => setSex(e.target.value)} />
              <label htmlFor="female"> Nữ  </label>
              <input className="form-input" type="radio" id="other" name="sex" value={0} onChange={e => setSex(e.target.value)} />
              <label htmlFor="other"> Khác </label>
            </div>
          </div>
          <div className="form-input--wrap">
            <label htmlFor="email">Email: </label>
            <input
              className="form-input"
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              defaultValue={profile.info_email}
              // onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-input--wrap">
            <label htmlFor="phone">Số Điện Thoại: </label>
            <input
              className="form-input"
              type="text"
              id="phone"
              name="phone"
              placeholder="+84"
              pattern="[0-9]+"
              defaultValue={profile.info_phone_number}
              // onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="form-input--wrap">
            <label htmlFor="address">Địa Chỉ: </label>
            <textarea
              className="form-input"
              id="address"
              name="address"
              placeholder="Địa chỉ"
              defaultValue={profile.info_address}
              // onChange={(e) => setAddress(e.target.value)}
              rows={2}
            />
          </div>
          <div className="flex around my-2">
            <button
              type="submit"
              className="btn btn-primary form-btn"
              // disabled={JSON.stringify(profile) === JSON.stringify(tempProfile)} 
            >
              Lưu Thay Đổi
            </button>
            <button type="reset" className="btn btn-primary form-btn">Hủy</button>
          </div>

        </form>
      </div>
    </div>
  );
}