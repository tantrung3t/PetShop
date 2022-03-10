import Product from "./Product"
export default function Chuongthucung(){
    return(
        <div>
        <h5>Trang chủ / Sản phẩm / Chuồng thú cưng</h5>
        <div className="row center my-2">
          <img width="800px" height="250" alt="Thức ăn cún" src="https://petshopsaigon.vn/wp-content/uploads/2019/08/pet-shop-sai-gon-1.jpg"></img>
        </div>
        <div className="row center my-40">
        <h1>Chuồng thú cưng</h1>
        </div>
        <div className="row center my-2">
        <Product
            key={13}
            id={13}
            src={'https://www.petcity.vn/media/product/250_2742_'}
            name={'Lồng vận chuyển Ferplast Atlan'}
            price={5200000}
        />
        <Product
            key={14}
            id={14}
            src={'https://www.petcity.vn/media/product/250_1094_dem_da_nang_abc_mau_do____.jpg'}
            name={'Nhà đa năng ABC màu đỏ 30*30*40'}
            price={200000}
        />
        <Product
            key={15}
            id={15}
            src={'https://www.petcity.vn/media/product/250_1119_nha_abc_hinh_qua_dua_hau_lon_vang_38x45x38cm_.jpg'}
            name={'Nhà hình quả dưa hấu lớn ABC vàng'}
            price={300000}
        />
        <Product
            key={16}
            id={16}
            src={'https://www.petcity.vn/media/product/250_1114_nha_tho_abc_mau_tim_34x34x_24cm.jpg'}
            name={'Nhà nhỏ ABC màu tím cỡ 34*34*24'}
            price={270000}
        />
        </div>
    </div>
)
}