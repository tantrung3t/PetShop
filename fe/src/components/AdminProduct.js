import React, { useState, useEffect } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import axios from 'axios';

import './AdminProduct.css';

const modalStyle = {
    'paddingLeft': '10px',
    'display': 'flex',
    'width': '100%',
    'justifyContent': 'space-between',
    'alignItems': 'center'
}
const modalStyle2 = {
    'paddingLeft': '10px',
    'display': 'flex',
    'width': '100%',
    'alignItems': 'center'
}

const bodyStyle = {
    'paddingLeft': '120px',
    'paddingRight': '120px',
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

const divStyleScroll = {
    'width': '100%',
    'height': '400px',
    'overflow': 'auto',
}
const divStyle4 = {
    'width': '160px',
    'fontSize': '700',
    'fontWeight': 'bold',
    'color': '#005d80'
};
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
    'border': '2px dashed #91c2cc',
    'width': '320px',
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
export default function AdminProduct() {

    const [hide, setHide] = useState("modal");
    const [titleModal, settitleModal] = useState("");
    const [image, setImage] = useState("");
    const [imageUpload, setImageUpload] = useState("")
    const [isUploaded, setIsUploaded] = useState(false);
    const [dataProductBrand, setDataProductBrand] = useState([]);

    //state product upload
    // const [product_name, setProduct_name] = useState("");
    // const [product_brand_id, setProduct_brand_id] = useState("");
    // const [product_type_id, setProduct_type_id] = useState("");
    // const [product_price, setProduct_price] = useState("");
    // const [product_amount, setProduct_amount] = useState("");
    const [product_description, setProduct_description] = useState("");


    //init data product brand
    useEffect(() => {

        loadData_product_brand()
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
    //

    const data = [
        {
            product_id: 7,
            product_name: "Pate vị gà cho chó lớn",
            product_price: 50000,
            product_image: "/image/patevigachocholon.png",
            product_sold: 47,
            product_brand_name: "Smartheart",
            product_type_name: "Thức ăn cho cún"
        },
        {
            product_id: 8,
            product_name: "Thức ăn dinh dưỡng",
            product_price: 50000,
            product_image: "/image/thucandinhduong.png",
            product_sold: 34,
            product_brand_name: "Smartheart",
            product_type_name: "Thức ăn cho cún"
        },
        {
            product_id: 9,
            product_name: "Thức ăn hạt hữu cơ",
            product_price: 140000,
            product_image: "/image/thucanhathuuco.png",
            product_sold: 32,
            product_brand_name: "ANF",
            product_type_name: "Thức ăn cho mèo"
        },
        {
            product_id: 10,
            product_name: "Thức ăn hạt hữu cơ cho mèo con",
            product_price: 120000,
            product_image: "/image/thucanhathuucochomeocon.png",
            product_sold: 21,
            product_brand_name: "ANF",
            product_type_name: "Thức ăn cho mèo"
        }
    ]

    const delete_product = (index, id) => {
        alert("Đã xoá sản phẩm có id = " + id + " và index = " + index);
    }

    const edit_product = (index, id) => {
        settitleModal("Chỉnh sửa cho sản phẩm có ID = " + id + " index = " + index);
        setHide("modal");
        setIsUploaded(true);
        setImage("https://pdp.edu.vn/wp-content/uploads/2021/06/hinh-anh-hoat-hinh-de-thuong-1.jpg")

    }

    const add_product = () => {
        settitleModal("Thêm sản phẩm mới")
        setIsUploaded(false);
        setImage("");
        setHide("modal");

    }
    const save_modal = () => {
        // alert("Đã lưu")
        // setIsUploaded(false);
        // setImage("");
        // setProduct_image("")
        // uploadImage()

    }
    const close_modal = () => {
        setHide("modal hide");
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
                buttonDelete={(index, product_id) => { delete_product(index, product_id) }}
                buttonEdit={(index, product_id) => { edit_product(index, product_id) }}
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


        axios.post('http://localhost:3003/image',
            formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        ).then(function (res) {
            //upload image thanh cong thì gửi toàn bộ thông tin sản phẩm lên backend
            const dataProduct = {
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
                data: dataProduct
            })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
            console.log(dataProduct)
        })
            .catch(function () {
                console.log('FAILURE!!');
            });

        //



    }

    return (
        <div style={bodyStyle}>
            <div>
                <button onClick={add_product}>Thêm sản phẩm</button>
            </div>
            <div style={divStyle1}>
                <div style={divStyle3}>
                    ID
                </div>
                <div style={divStyle3}>
                    Tên sản phẩm
                </div>
                <div style={divStyle3}>
                    Giá bán
                </div>
                <div style={divStyle3}>
                    Số lượng bán
                </div>
                <div style={divStyle3}>
                    Thương hiệu
                </div>
                <div style={divStyle4}>
                    Tuỳ chỉnh
                </div>
            </div>
            <div style={divStyleScroll}>
                {renderList()}
            </div>
            <div className={hide}>
                <form onSubmit={handleSubmit}>
                    <div className="modal__inner">
                        <div className="modal__header">
                            <p>{titleModal}</p>
                        </div>
                        <div className="modal__body">
                            <div style={modalStyle}>
                                <div>
                                    <h3>Tên sản phẩm</h3>
                                    <input name="product_name" className="input-add-product" type="text" placeholder="Nhập tên sản phẩm" />
                                </div>
                                <div>
                                    <h3>Thương hiệu</h3>
                                    <select name="product_brand_id" className="input-add-product" id="product_brand">
                                        {render_product_brand()}
                                    </select>
                                </div>
                                <div>
                                    <h3>Loại sản phẩm</h3>
                                    <select name="product_type_id" className="input-add-product" id="product_brand">
                                        <option value="1">Thức ăn cún</option>
                                        <option value="2">Thức ăn mèo</option>
                                        <option value="3">Đồ chơi thú cưng</option>
                                        <option value="4">Phụ kiện thú cưng</option>
                                        <option value="5">Chuồng thú cưng</option>
                                    </select>
                                </div>
                                <div>
                                    <h3>Giá bán</h3>
                                    <input name="product_price" className="input-add-product" type="number" placeholder="Nhập giá sản phẩm" />
                                </div>
                                <div>
                                    <h3>Số lượng</h3>
                                    <input name="product_amount" className="input-add-product" type="number" placeholder="Nhập số lượng" />
                                </div>
                            </div>
                            <div style={modalStyle2}>
                                <div style={{ width: '635px', height: '300px' }}>
                                    <h3>Mô tả sản phẩm</h3>

                                    <div>
                                        <CKEditor
                                            editor={ClassicEditor}
                                            data=""
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
                                        <h3 style={{ paddingLeft: '10px' }}>Hình ảnh sản phẩm</h3>
                                        <button>Đổi</button>
                                    </div>
                                    <div style={preview}>
                                        {
                                            !isUploaded ? (
                                                <>
                                                    <label htmlFor="upload-input" className="upload-image">
                                                        <img src='../assets/img/image_upload.svg' alt='logo' width='50px' ></img>
                                                        <div>Tải ảnh lên</div>
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
                                                    <img id="uploaded-img" src={image} alt="uploaded-img" />
                                                </>

                                            )
                                        }
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="modal__footer">
                            <button type="submit" className="modal-save" onClick={save_modal}>Lưu</button>
                            <button className="modal-cancel" onClick={close_modal}>Huỷ</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

function Item(props) {
    const buttonDelete = () => {
        props.buttonDelete(props.index, props.product_id)
    }
    const buttonEdit = () => {
        props.buttonEdit(props.index, props.product_id)
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
                {props.product_brand_name}
            </div>
            <div style={divStyle4}>
                <button className="button-sanpham-hover" onClick={buttonDelete} style={buttonStyle1}>Xoá</button>
                <button className="button-sanpham-hover" onClick={buttonEdit} style={buttonStyle2}>Sửa</button>
            </div>
        </div>
    )
}