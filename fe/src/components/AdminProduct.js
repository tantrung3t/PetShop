import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import axios from 'axios';

import './AdminProduct.css';

const localhost = "http://localhost:3003"

const modalStyle = {
  'paddingLeft': '10px',
  'paddingRight': '10px',
  'display': 'flex',
  'width': '100%',
  'justifyContent': 'space-between',
  'alignItems': 'center'
}
const modalStyle2 = {
  'paddingLeft': '10px',
  'paddingRight': '10px',
  'display': 'flex',
  'width': '100%',
  'justifyContent': 'space-between',
  'alignItems': 'center'
}

const bodyStyle = {
  // 'paddingLeft': '120px',
  // 'paddingRight': '120px',
}

const divStyle1 = {
  'display': 'flex',
  'borderBottom': '1px solid #91c2cc',
  'width': '100%',
  'height': '60px',
  'justifyContent': 'space-between',
  'alignItems': 'center'

};
const divStyle2 = {
  'width': '120px',
};

const divStyle3 = {
  'width': '120px',
  'fontSize': '700',
  'fontWeight': 'bold',
  'color': '#005d80'
};
const divStyle4 = {
  'width': '160px',
  'fontSize': '700',
  'fontWeight': 'bold',
  'color': '#005d80'
};
const divStyleScroll = {
  'width': '101%',
  'height': '400px',
  'overflow': 'auto',
}

const buttonStyle1 = {
  'padding': '10px 20px',
  'margin': '3px 3px 3px 3px',
  'outline': 'none',
  'border': 'none',
  'backgroundColor': '#e33939',
  'color': '#f7f7f7',
  'borderRadius': '6px',
  'cursor': 'pointer',
  'fontSize': '12px',
  'fontWeight': 'bold',
};

const buttonStyle2 = {
  'padding': '10px 20px',
  'margin': '3px 3px 3px 3px',
  'outline': 'none',
  'border': 'none',
  'backgroundColor': '#1e931c',
  'color': '#f7f7f7',
  'borderRadius': '6px',
  'cursor': 'pointer',
  'fontSize': '12px',
  'fontWeight': 'bold',
};
const preview = {
  'marginLeft': '10px',
  'paddingRight': '10px',
  'border': '2px dashed #91c2cc',
  'width': '310px',
  'height': '240px',
  'fontSize': '22px',
  'position': 'relative',
  'borderRadius': '6px',
  'overflow': 'hidden',
  'display': 'flex',
  'alignItems': 'center',
  'justifyContent': 'center',
  'flexDirection': 'column',
  'cursor': 'pointer',
}
const box3 = {
  width: '200px',
  height: '200px',
  margin: '10px',
  backgroundColor: '#f7f7f7',
  padding: '10px',
  border: 'none',
  borderRadius: '10px',
  // boxShadow: '0 7px 14px 0 rgba(65, 69, 88, 0.1), 0 3px 6px 0 rgba(0, 0, 0, 0.07)'
}
const box4 = {
  width: "81%",
  margin: '10px',
  backgroundColor: '#ffffff',
  padding: '10px',
  border: 'none',
  borderRadius: '10px',
  boxShadow: '0 7px 14px 0 rgba(65, 69, 88, 0.1), 0 3px 6px 0 rgba(0, 0, 0, 0.07)'
}
export default function AdminProduct() {

  const [hide, setHide] = useState("hide");
  const [titleModal, settitleModal] = useState("");
  const [image, setImage] = useState("");
  const [imageUpload, setImageUpload] = useState("")
  const [isUploaded, setIsUploaded] = useState(false);
  const [dataProductBrand, setDataProductBrand] = useState([]);
  const [data, setData] = useState([]);
  const [isAddProductNew, setIsAddProductNew] = useState(true);

  //state product upload
  const [product_id, setProduct_id] = useState("");
  // const [product_name, setProduct_name] = useState("");
  // const [product_brand_id, setProduct_brand_id] = useState("");
  // const [product_type_id, setProduct_type_id] = useState("");
  // const [product_price, setProduct_price] = useState("");
  // const [product_amount, setProduct_amount] = useState("");
  const [product_image, setProduct_image] = useState("");
  const [product_description, setProduct_description] = useState("");


  //init data product brand
  useEffect(() => {
    loadData_products();
    loadData_product_brand()
    
  }, []);

  //call and render product brand
  const loadData_product_brand = () => {
    axios.get(`http://localhost:3003/products/brand`)
      .then(res => {
        const data = res.data;
        setDataProductBrand(data)
      })
      .catch(error => console.log(error));
  }
  const render_product_brand = () => {
    let element = dataProductBrand.map((brand, index) => {

      return <option key={index} value={brand.product_brand_id}>{brand.product_brand_name}</option>
    })
    return element;
  }

  //call data products
  const loadData_products = () => {
    axios.get(`http://localhost:3003/products`)
      .then(res => {
        const data = res.data;
        setData(data)
      })
      .catch(error => console.log(error));
  }

  const delete_product = (id) => {
    const dataDeleteProduct = {
      "token": localStorage.getItem('token'),
      "product_id": id
    }

    axios({
      method: 'post',
      url: 'http://localhost:3003/products/delete',
      data: dataDeleteProduct
    })
      .then(function (response) {
        console.log(response);
        alert("S???n ph???m ???? ???????c xo??!")
        loadData_products()
      })
      .catch(function (error) {
        console.log(error);
        alert("Kh??ng th??? xo?? s???n ph???m ng??y b??y gi??? vui l??ng th??? l???i!")
      });

  }

  const edit_product = (index, id, product_name, product_type_id, product_brand_id, product_price, product_amount, product_description, product_image) => {
    settitleModal("Ch???nh s???a cho s???n ph???m c?? ID = " + id + " index = " + index);
    setHide("modal");
    setIsUploaded(true);
    setIsAddProductNew(false);
    setImage(localhost + product_image);
    setProduct_image(product_image);
    setProduct_id(id);

    document.getElementById("product_name").value = product_name;
    document.getElementById("product_type_id").value = product_type_id;
    document.getElementById("product_brand_id").value = product_brand_id;
    document.getElementById("product_price").value = product_price;
    document.getElementById("product_amount").value = product_amount;

    setProduct_description(product_description)

  }

  const add_product = () => {
    settitleModal("Th??m s???n ph???m m???i")
    setIsUploaded(false);
    setImage("");
    setHide("modal");
    setIsAddProductNew(true);

    document.getElementById("product_name").value = "";
    document.getElementById("product_type_id").value = 1;
    document.getElementById("product_brand_id").value = 1;
    document.getElementById("product_price").value = "";
    document.getElementById("product_amount").value = "";
    setProduct_description("")

  }
  const close_modal = () => {
    loadData_products();
    setHide("modal hide");
  }
  const exit_modal = (e) => {
    if (e.target == e.currentTarget) close_modal();
  }
  const clear_all = () => {
    setIsUploaded(false);
    setProduct_description("");
    setImageUpload("")
  }
  const renderList = () => {
    let element = data.map((product, index) => {

      return <Item
        key={index}
        index={index}
        product_id={product.product_id}
        product_name={product.product_name}
        product_price={product.product_price}
        product_sold={product.product_sold}
        product_brand_name={product.product_brand_name}
        product_brand_id={product.product_brand_id}
        product_type_id={product.product_type_id}
        product_amount={product.product_amount}
        product_description={product.product_description}
        product_image={product.product_image}
        buttonDelete={(product_id) => { delete_product(product_id) }}
        buttonEdit={(index, product_id, product_name, product_type_id, product_brand_id, product_price, product_amount, product_description, product_image) => { edit_product(index, product_id, product_name, product_type_id, product_brand_id, product_price, product_amount, product_description, product_image) }}
      />
    })
    return element;
  }

  function handleImageChange(e) {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();

      reader.onload = function (e) {
        setImage(e.target.result)
        setIsUploaded(true)
      }

      reader.readAsDataURL(e.target.files[0])
      setImageUpload(e.target.files[0])
    }
  }

  const handleSubmit = (event) => {

    let formData = new FormData();
    formData.append('file', imageUpload);
    event.preventDefault();
    const dataSubmit = new FormData(event.currentTarget);


    if (isAddProductNew) {
      axios.post('http://localhost:3003/image',
        formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      ).then(function (res) {
        //upload image thanh cong th?? g???i to??n b??? th??ng tin s???n ph???m l??n backend
        const dataAddProduct = {
          "token": localStorage.getItem('token'),
          "product_brand_id": dataSubmit.get('product_brand_id'),
          "product_type_id": dataSubmit.get('product_type_id'),
          "product_name": dataSubmit.get('product_name'),
          "product_price": dataSubmit.get('product_price'),
          "product_description": product_description,
          "product_amount": dataSubmit.get('product_amount'),
          "product_sold": "0",
          "product_image": res.data.filePath
        }
        axios({
          method: 'post',
          url: 'http://localhost:3003/products',
          data: dataAddProduct
        })
          .then(function (response) {
            console.log(response);
            alert("S???n ph???m ???? ???????c th??m!")
          })
          .catch(function (error) {
            console.log(error);
            alert("Kh??ng th??? th??m s???n ph???m ng??y b??y gi??? vui l??ng th??? l???i!")
          });
        console.log(dataAddProduct)
      })
        .catch(function () {
          console.log('FAILURE!!');
          alert("Vui l??ng nh???p ?????y ????? c??c tr?????ng ????? th???c hi???n th??m s???n ph???m!")
        });

    }
    else {
      if (imageUpload === "") {
        const dataFixProduct = {
          "product_id": product_id,
          "token": localStorage.getItem('token'),
          "product_brand_id": dataSubmit.get('product_brand_id'),
          "product_type_id": dataSubmit.get('product_type_id'),
          "product_name": dataSubmit.get('product_name'),
          "product_price": dataSubmit.get('product_price'),
          "product_description": product_description,
          "product_amount": dataSubmit.get('product_amount'),
          "product_sold": "0",
          "product_image": product_image
        }
        axios({
          method: 'post',
          url: 'http://localhost:3003/products/edit',
          data: dataFixProduct
        })
          .then(function (response) {
            console.log(response);
            alert('S???n ph???m ???? ???????c ch???nh s???a th??nh c??ng!')
          })
          .catch(function (error) {
            console.log(error);
            alert('Kh??ng th??? ch???nh s???a s???n ph???m v??o l??c n??y vui l??ng th??? l???i!')
          });
      }
      else {
        axios.post('http://localhost:3003/image',
          formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
        ).then(function (res) {
          //upload image thanh cong th?? g???i to??n b??? th??ng tin s???n ph???m l??n backend
          const dataFixProduct = {
            "product_id": product_id,
            "token": localStorage.getItem('token'),
            "product_brand_id": dataSubmit.get('product_brand_id'),
            "product_type_id": dataSubmit.get('product_type_id'),
            "product_name": dataSubmit.get('product_name'),
            "product_price": dataSubmit.get('product_price'),
            "product_description": product_description,
            "product_amount": dataSubmit.get('product_amount'),
            "product_sold": "0",
            "product_image": res.data.filePath
          }
          axios({
            method: 'post',
            url: 'http://localhost:3003/products/edit',
            data: dataFixProduct
          })
            .then(function (response) {
              console.log(response);
              alert('S???n ph???m ???? ???????c ch???nh s???a th??nh c??ng!')
            })
            .catch(function (error) {
              console.log(error);
              alert('Kh??ng th??? ch???nh s???a s???n ph???m v??o l??c n??y vui l??ng th??? l???i!')
            });
          console.log(dataFixProduct)
        })
          .catch(function () {
            console.log('FAILURE!!');
            alert('Kh??ng th??? ch???nh s???a s???n ph???m v??o l??c n??y vui l??ng th??? l???i!')
          });
      }
    }




  }

  return (
    <div style={bodyStyle}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={box3}>
          <div className="admin_title1">
            <Link to='/admin/thongke' >
              Th???ng k??
            </Link>
          </div>
          <div className="admin_title2" >
            <Link to='/admin/sanpham'>
              Qu???n l?? s???n ph???m
            </Link>
          </div>
          <div className="admin_title1" >
            <Link to='/admin/nhanhang'>
              Qu???n l?? nh??n h??ng
            </Link>
          </div>
          <div className="admin_title1">
            <Link to='/admin/dathang' >
              Qu???n l?? ?????t h??ng
            </Link>
          </div>
          <div className="admin_title1" >
            <Link to='/admin/danhanhang'>
              Qu???n l?? nh???n h??ng
            </Link>
          </div>
        </div>
        <div style={box4}>
          <div style={{ float: 'right' }}>
            <button onClick={add_product} className="button-add-product">Th??m s???n ph???m</button>
          </div>
          <div style={divStyle1}>
            <div style={divStyle3}>
              ID
            </div>
            <div style={divStyle3}>
              T??n s???n ph???m
            </div>
            <div style={divStyle3}>
              Gi?? b??n
            </div>
            <div style={divStyle3}>
              ???? b??n
            </div>
            <div style={divStyle3}>
              C??n l???i
            </div>
            <div style={divStyle3}>
              Th????ng hi???u
            </div>
            <div style={divStyle4}>
              Tu??? ch???nh
            </div>
          </div>
          <div style={divStyleScroll}>
            {renderList()}
          </div>
        </div>
      </div>
      <div className={hide} onClick={exit_modal}>
        <div className="modal__inner">
          <div className="modal__header">
            <p>{titleModal}</p>
            <FontAwesomeIcon icon={faXmarkCircle} fontSize={35} onClick={close_modal} />
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal__body">
              <div style={modalStyle}>
                <div>
                  <h3>T??n s???n ph???m</h3>
                  <input id="product_name" name="product_name" className="input-add-product" type="text" placeholder="Nh???p t??n s???n ph???m" />
                </div>
                <div>
                  <h3>Lo???i s???n ph???m</h3>
                  <select id="product_type_id" name="product_type_id" className="input-add-product" >
                    <option value="1">Th???c ??n c??n</option>
                    <option value="2">Th???c ??n m??o</option>
                    <option value="3">????? ch??i th?? c??ng</option>
                    <option value="4">Ph??? ki???n th?? c??ng</option>
                    <option value="5">Chu???ng th?? c??ng</option>
                  </select>
                </div>
                <div>
                  <h3>Th????ng hi???u</h3>
                  <select id="product_brand_id" name="product_brand_id" className="input-add-product" >
                    {render_product_brand()}
                  </select>
                </div>

                <div style={{ width: '150px' }}>
                  <h3>Gi?? b??n</h3>
                  <input id="product_price" name="product_price" className="input-add-product" type="number" placeholder="Nh???p gi?? s???n ph???m" />
                </div>
                <div style={{ width: '150px' }}>
                  <h3>S??? l?????ng</h3>
                  <input id="product_amount" name="product_amount" className="input-add-product" type="number" placeholder="Nh???p s??? l?????ng" />
                </div>
              </div>
              <div style={modalStyle2}>
                <div style={{ width: '635px', height: '300px' }}>
                  <h3>M?? t??? s???n ph???m</h3>

                  <div>
                    <CKEditor
                      editor={ClassicEditor}
                      data={product_description}
                      onReady={editor => {
                        // You can store the "editor" and use when it is needed.
                        // console.log('Editor is ready to use!', editor);
                        editor.editing.view.change((writer) => {
                          writer.setStyle(
                            "height",
                            "200px",
                            editor.editing.view.document.getRoot()
                          );


                        });

                      }}
                      onChange={(event, editor) => {
                        const data = editor.getData();
                        setProduct_description(data);
                        // console.log(product_description);
                      }}
                    />
                  </div>
                </div>
                <div style={{ width: '400px', height: '300px' }}>

                  <div style={modalStyle}>
                    <h3 style={{ paddingLeft: '10px' }}>H??nh ???nh s???n ph???m</h3>
                  </div>
                  <div style={preview}>
                    {
                      !isUploaded ? (
                        <>
                          <label htmlFor="upload-input" className="upload-image">
                            <img src='../assets/img/image_upload.svg' alt='logo' width='50px' ></img>
                            <div>T???i ???nh l??n</div>
                            <input
                              hidden
                              type="file"
                              id="upload-input"
                              accept=".jpg,.jpeg,.png"
                              onChange={handleImageChange}
                            />
                          </label>

                        </>
                      ) : (
                        <>
                          <label htmlFor="upload-input">
                            <input
                              hidden
                              type="file"
                              id="upload-input"
                              accept=".jpg,.jpeg,.png"
                              onChange={handleImageChange}
                            />
                            <img className="uploaded-img" id="uploaded-img" src={image} alt="uploaded-img" />
                          </label>

                        </>

                      )
                    }
                  </div>
                </div>

              </div>
            </div>



            <div className="modal__footer">
              <button type="submit" className="modal-save">L??u</button>
              <button type="reset" className="modal-cancel" onClick={clear_all}>Xo?? t???t c???</button>
            </div>
          </form>
        </div>

      </div>
    </div>
  )
}

function Item(props) {
  const buttonDelete = () => {
    props.buttonDelete(props.product_id)
  }
  const buttonEdit = () => {
    props.buttonEdit(props.index, props.product_id, props.product_name, props.product_type_id, props.product_brand_id, props.product_price, props.product_amount, props.product_description, props.product_image)
  }
  return (
    <div style={divStyle1}>
      <div style={divStyle2}>
        {props.product_id}
      </div>
      <div style={divStyle2}>
        {props.product_name}
      </div>
      <div style={divStyle2}>
        {props.product_price}
      </div>
      <div style={divStyle2}>
        {props.product_sold}
      </div>
      <div style={divStyle2}>
        {props.product_amount - props.product_sold}
      </div>
      <div style={divStyle2}>
        {props.product_brand_name}
      </div>
      <div style={divStyle4}>
        <button className="button-sanpham-hover" onClick={buttonDelete} style={buttonStyle1}>Xo??</button>
        <button className="button-sanpham-hover" onClick={buttonEdit} style={buttonStyle2}>S???a</button>
      </div>
    </div>
  )
}