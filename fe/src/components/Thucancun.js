import React from "react"
import Product from "./Product" 
export default function Thucancun(){
    return(
        <div>
            <h5>Trang chủ / Sản phẩm / Thức ăn cún</h5>
            <div className="row center my-2">
              <img width="800px" height="250" alt="Thức ăn cún" src="https://petshopsaigon.vn/wp-content/uploads/2019/08/pet-shop-sai-gon-1.jpg"></img>
            </div>
            <div className="row center my-40">
            <h1>Thức ăn cún</h1>
            </div>
            <div className="row center my-2">
            <Product
                key={1}
                id={1}
                src={'https://www.petcity.vn/media/product/250_3690_'}
                name={'Thức ăn cao cấp NutriSource thịt'}
                price={20000}
            />
            <Product
                key={2}
                id={2}
                src={'https://www.petcity.vn/media/product/250_3537_smartheart.jpg'}
                name={'SmartHeart - Thức ăn dinh dưỡng'}
                price={170000}
            />
            <Product
                key={3}
                id={3}
                src={'https://www.petcity.vn/media/product/250_4683_z2315270662193_0f380be800fb596c747fdbe50beff58a.jpg'}
                name={'ANF - 6Free - Thức ăn hạt hữu cơ'}
                price={90000}
            />
            <Product
                key={4}
                id={4}
                src={'https://www.petcity.vn/media/product/250_2115_monge_pate_th____heo_100g.jpg'}
                name={'Monge-Pate thịt heo 100g'}
                price={27000}
            />
            </div>
        </div>
    )
}