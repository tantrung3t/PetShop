import Product from "./Product"
export default function Phukienthucung(){
    return(
        <div>
        <h5>Trang chủ / Sản phẩm / Phụ kiện thú cưng</h5>
        <div className="row center my-2">
          <img width="800px" height="250" alt="Thức ăn cún" src="https://petshopsaigon.vn/wp-content/uploads/2019/08/pet-shop-sai-gon-1.jpg"></img>
        </div>
        <div className="row center my-40">
        <h1>Phụ kiện thú cưng</h1>
        </div>
        <div className="row center my-2">
        <Product
            key={9}
            id={9}
            src={'https://www.petcity.vn/media/product/250_3359_ferplast_ergoflex_dog_lead_grey_petcity_1.jpg'}
            name={'Ferplast - Dây dắt Ergoflex'}
            price={570000}
        />
        <Product
            key={10}
            id={10}
            src={'https://www.petcity.vn/media/product/250_2433_vong_co_hoa_tiet_zigizag_petcity.JPG'}
            name={'Vòng cỏ chuông họa tiết zigzag'}
            price={40000}
        />
        <Product
            key={11}
            id={11}
            src={'https://www.petcity.vn/media/product/250_2524_ro_mom_mo_vit_4_petcity_1.png'}
            name={'Rọ mõm mỏ vịt size S'}
            price={39000}
        />
        <Product
            key={12}
            id={12}
            src={'https://www.petcity.vn/media/product/250_2573_untitled_mat_kinh.jpg'}
            name={'Petstar - Rọ mõm ngắn mắt kính'}
            price={220000}
        />
        </div>
    </div>
)
}