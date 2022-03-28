import axios from "axios";
import React, { useEffect, useState } from "react"


export default function ProfileScreen() {
  const [profile, setProfile] = useState({});
  useEffect(() => {
    setProfile(profile => ({
      ...profile,
      fname: "Khiem",
      lname: "Pham",
      date: "2000-09-22",
      sex: "1",
      email: "pk.22092000@gmail.com",
      phone: "0366888999",
      address: "Can Tho"
    }))
  },[]);

  // const loadData = () => {
  //   axios.get(`http://localhost:3003/profile/`)
  //     .then(res => {
  //       const data = res.data;
  //       setProfile(data);
  //     })
  //     .catch(error => console.log(error));
  // }
console.log(profile)
  
  const [fname, setFname] = useState()
  const [lname, setLname] = useState()
  const [date, setDate] = useState()
  const [sex, setSex] = useState()
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()
  const [address, setAddress] = useState()
  
  const [tempProfile, setTempProfile] = useState({});

  useEffect(() => {
    setTempProfile(tempProfile => ({
      ...tempProfile,
      fname: fname,
      lname: lname,
      date: date,
      sex: sex,
      email: email,
      phone: phone,
      address: address
    }))
  }, [fname, lname, date, email, phone, address, sex])

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3003/api/profile', tempProfile)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    alert("Bạn đã lưu thành công!");
  }

  // const handleCheck = () => {
  //   document.getElementsByName(sex)
  // }

  return (
    <div className="grid">
      <div className="profile__container">
        <h2>Thông tin cá nhân</h2>
        <form className="profile__frm" onSubmit={handleSubmit}>
          <div className="flex beetween" style={{width: "100%"}}>
            <div>
              <label htmlFor="fname">Tên: </label>
              <input 
                className="profile__input" 
                type="text" 
                id="fname" 
                name="fname" 
                placeholder="Tên"
                defaultValue={profile.fname}
                onChange={(e) => setFname(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="lname">Họ: </label>
              <input 
                className="profile__input" 
                type="text" 
                id="lname"
                name="lname"
                placeholder="Ho"
                defaultValue={profile.lname}
                onChange={(e) => setLname(e.target.value)}
                />
            </div>
          </div>
          <div className="flex center">
            <div>
              <label htmlFor="date">Ngày Sinh: </label>
              <input 
                className="profile__input" 
                type="date" 
                id="date" 
                name="date" 
                defaultValue={profile.date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div>
              <label >Giới Tính: </label>
              <input className="profile__input" type="radio" id="male" name="sex"  value={1} onChange={e => setSex(e.target.value)} />
              <label htmlFor="male">Nam </label>
              <input className="profile__input" type="radio" id="female" name="sex"  value={2} onChange={e => setSex(e.target.value)} />
              <label htmlFor="female">Nữ </label>
              <input className="profile__input" type="radio" id="other" name="sex"  value={0} onChange={e => setSex(e.target.value)} />
              <label htmlFor="other">Khác </label>
            </div>
          </div>
          <div className="profile__input--wrap">
            <label htmlFor="email">Email: </label>
            <input 
              className="profile__input" 
              type="text" 
              id="email" 
              name="email" 
              placeholder="Email" 
              defaultValue={profile.email}  
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="profile__input--wrap">
            <label htmlFor="phone">Số Điện Thoại: </label>
            <input 
              className="profile__input" 
              type="text" 
              id="phone" 
              name="phone" 
              placeholder="+84"
              pattern="[0-9]+"
              defaultValue={profile.phone}  
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="profile__input--wrap">
            <label htmlFor="address">Địa Chỉ: </label>
            <textarea 
              className="profile__input" 
              id="address" 
              name="address" 
              placeholder="Địa chỉ"
              defaultValue={profile.address}
              onChange={(e) => setAddress(e.target.value)}  
              rows={2}
            />
              </div>
          <div className="flex around my-2">
            <button 
              type="submit" 
              className="btn btn-primary profile__btn"
              disabled={JSON.stringify(profile) === JSON.stringify(tempProfile)} >
                Lưu Thay Đổi
            </button>
            <button type="reset" className="btn btn-primary profile__btn">Hủy</button>
          </div>

        </form>
      </div>

    </div>
  );
}