import axios from "axios";
import React, { useState } from "react"

export default function ProfileScreen() {

  const [profile] = useState(JSON.parse(localStorage.getItem("profile")))
  const [sex, setSex] = useState(profile.info_sex)
  console.log(sex)

  const defaultData = {
    account_id: profile.account_id,
    info_address: profile.info_address,
    info_date: profile.info_date,
    info_email: profile.info_email,
    info_fname: profile.info_fname,
    info_lname: profile.info_lname,
    info_phone_number: profile.info_phone_number,
    info_sex: profile.info_sex
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const dataSubmit = new FormData(event.currentTarget);
    if (dataSubmit.get('lname') || dataSubmit.get('fname')) {
      alert("Họ tên không được để trống!!")
    } else {
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


      if (JSON.stringify(data) === JSON.stringify(defaultData)) {
        alert("Không có thông tin nào cần thay đổi!!")
      } else {
        if (confirm("Xác nhận thay đổi")) {
          axios.post('http://localhost:3003/account/update', data)
            .then(function (response) {
              console.log(response.data);
              alert("Cập nhật thông tin thành công vui lòng đăng nhập lại!");
              localStorage.setItem("user", "");
              localStorage.setItem("token", "");
              localStorage.setItem("profile", "");
              window.location = "/signin";
            })
            .catch(function (error) {
              console.log(error);
              alert("Cập nhật thông tin thất bại!");
            })
        } else {
          console.log("cancel")
          return
        }
      }
    }

  }
  let isMale, isFemale, isOther;
  if (sex === 0) {
    isMale = true;
  } else isMale = false;
  if (sex === 1) {
    isFemale = true
  } else isFemale = false;
  if (sex === 2) {
    isOther = true
  } else isOther = false;
  const handleCheck = (e) => {
    console.log("value: " + e.target.value);
    let value = e.target.value;
    if (value === "0") {
      isMale = true;
    } else isMale = false;
    if (value === "1") {
      isFemale = true
    } else isFemale = false;
    if (value === "2") {
      isOther = true
    } else isOther = false;

    setSex(parseInt(value))
    console.log("male: " + isMale + " female: " + isFemale + " other: " + isOther)
  }

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
                pattern="/^(?!\s*$).+"
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
            <div >
              <label >Giới Tính: </label>
              <input className="form-input" type="radio" id="male" name="sex" defaultValue={0} checked={isMale} onChange={e => handleCheck(e)} />
              <label htmlFor="male"> Nam  </label>
              <input className="form-input" type="radio" id="female" name="sex" defaultValue={1} checked={isFemale} onChange={e => handleCheck(e)} />
              <label htmlFor="female"> Nữ  </label>
              <input className="form-input" type="radio" id="other" name="sex" defaultValue={2} checked={isOther} onChange={e => handleCheck(e)} />
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