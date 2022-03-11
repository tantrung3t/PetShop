import React from "react"
import Product from "./Product"
export default function Dochoithucung(){
    return(
        <div>
        <h5>Trang chủ / Sản phẩm / Đồ chơi thú cưng</h5>
        <div className="row center my-2">
          <img width="800px" height="250" alt="Thức ăn cún" src="https://petshopsaigon.vn/wp-content/uploads/2019/08/pet-shop-sai-gon-1.jpg"></img>
        </div>
        <div className="row center my-40">
        <h1>Đồ chơi thú cưng</h1>
        </div>
        <div className="row center my-2">
        <Product
            key={17}
            id={17}
            src={'https://www.petcity.vn/media/product/250_900_1_banh_nh___a_cu___n.jpg'}
            name={'Banh nhựa cuộn nhỏ'}
            price={20000}
        />
        <Product
            key={18}
            id={18}
            src={'https://www.petcity.vn/media/product/250_522_bong_lat_dat.jpg'}
            price={10000}
        />
        <Product
            key={19}
            id={19}
            src={'https://www.petcity.vn/media/product/250_4879_sp60_ban_lo_xo_meo_tap_tat_05.jpg'}
            name={'Bàn lo xo mèo tập tát'}
            price={90000}
        />
        <Product
            key={20}
            id={20}
            src={'https://www.petcity.vn/media/product/250_4877_24dd9fc2f3135001e565a82d269efeee.jpg'}
            name={'Bàn cào móng hình ngói'}
            price={70000}
        />
        </div>
    </div>
)
}