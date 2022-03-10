
import Product from "./Product" 
export default function Thucanmeo(){
    return(
        <div>
        <h5>Trang chủ / Sản phẩm / Thức ăn mèo</h5>
        <div className="row center my-2">
          <img width="800px" height="250" alt="Thức ăn cún" src="https://petshopsaigon.vn/wp-content/uploads/2019/08/pet-shop-sai-gon-1.jpg"></img>
        </div>
        <div className="row center my-40">
        <h1>Thức ăn mèo</h1>
        </div>
        <div className="row center my-2">
        <Product
            key={5}
            id={5}
            src={'https://www.petcity.vn/media/product/250_4682_d78981fa9e3776e197e8415ed4c18f46.jpg'}
            name={'ANF - 6Free - Thức ăn hạt hữu cơ'}
            price={100000}
        />
        <Product
            key={6}
            id={6}
            src={'https://www.petcity.vn/media/product/250_4681_thuc_an_organic_cho_meo_con_anf_6_free_indoor_1.jpg'}
            name={'ANF - 6Free - Thức ăn hạt hữu cơ'}
            price={105000}
        />
        <Product
            key={7}
            id={7}
            src={'https://www.petcity.vn/media/product/250_4661_np_indoor_400g_424x600.jpg'}
            name={"Nature's Protection Indoor Thức ăn"}
            price={139000}
        />
        <Product
            key={8}
            id={8}
            src={'https://www.petcity.vn/media/product/250_4660_np_kitten_400g_424x600.jpg'}
            name={"Nature's Protection Kitten Thức ăn"}
            price={127000}
        />
        </div>
    </div>
)
}