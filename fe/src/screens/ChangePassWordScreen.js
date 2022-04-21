import axios from "axios";
import React, { useRef, useState } from "react"

export default function ChangePasswordScreen() {
  const [profile] = useState(JSON.parse(localStorage.getItem("profile")))
  const inputOldPasswd = useRef(null);
  const inputNewPasswd = useRef(null);
  const inputComfirnPasswd = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      account_id: profile.account_id,
      old: inputOldPasswd.current.value,
      new: inputNewPasswd.current.value,
      comfirm: inputComfirnPasswd.current.value,
    }
    // console.log(data);
    data.old === data.new ? alert("Mật khẩu mới phải khác mật khẩu cũ!!") : data.new !== data.comfirm ? alert("Nhập lại mật khẩu không đúng!!") : (
      // console.log("ok")

      axios.post('http://localhost:3003/account/changepassword', data)
        .then(function (response) {
          console.log(response.data);

          if (response.data.status === 400) alert("Nhập mật khẩu hiện tại không đúng thử lại!");
          else {
            alert("Thay đổi mật khẩu thành công!");
            location.reload();
          }
        })
        .catch(function (error) {
          console.log(error);
          alert("Cập nhật thông tin thất bại!");
        })
    )

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

          <div className="form-input--wrap">
            <label htmlFor="old-passwd">Mật khẩu cũ: </label>
            <input
              ref={inputOldPasswd}
              className="form-input"
              type="password"
              id="old-passwd"
              name="old-passwd"
              placeholder="Mật khẩu cũ"
            />
          </div>
          <div className="form-input--wrap">
            <label htmlFor="new-passwd">Mật khẩu mới: </label>
            <input
              ref={inputNewPasswd}
              className="form-input"
              type="password"
              id="new-passwd"
              name="new-passwd"
              placeholder="Mật khẩu mới"
            />
          </div>
          <div className="form-input--wrap">
            <label htmlFor="comfirm-passwd">Nhập mại mật khẩu: </label>
            <input
              ref={inputComfirnPasswd}
              className="form-input"
              type="password"
              id="comfirm-passwd"
              name="comfirm-passwd"
              placeholder="Nhập lại mật khẩu"
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