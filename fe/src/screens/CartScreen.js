import React from "react"
import CartItem from '../components/CartItem'

export default function CartScreens() {
  const url = "http://localhost:3003";

  const productsCart = [
    {
      product:
      {
        product_id: 1,
        product_name: 'Lồng vận chuyểnLồng vận chuyểnLồng vận chuyểnLồng vận chuyểnLồng vận chuyển',
        product_price: 509000,
        product_image: '/image/longvanchuyen.png',
        product_amount: 100,
        product_sold: 14,
        product_description: '<p><strong>Lồng vận chuyển Ferplast Atlas Professional 70 (91x61x67cm)</strong><br>Có nắp cà tiện dụng, thiết kế hiện đại thoáng mát, giúp thú cưng nhà bạn cực kỳ thoải mái trong các chuyến đi xa.Lồng vận chuyển cho chó mèo, chất liệu tốt, bền, đẹp, chắc chắn.</p><p>Chất liệu nhựa cao cấp, không chứa chất độc hại, không gây kích ứng</p><p>Vali đạt chuẩn qui định IATA giúp có thể vận chuyển dễ dàng thú cưng khi đi máy bay, tàu thủy hoặc tàu hỏa. Với thiết kế khóa an toàn, tay cầm tiện lợi cùng với loại nhựa tốt đến từ Ý sẽ tạo sự an toàn nhất cho thú cưng.</p><p>Kích thước: 91x61x67cm</p>',
        product_brand_name: 'Ferplast',
        product_type_name: 'Chuồng thú cưng'
      },
      quantity: 1
    },
    {
      product:
      {
        product_id: 2,
        product_name: 'Lồng vận chuyểnLồng vận chuyểnLồng vận chuyểnLồng vận chuyểnLồng vận chuyển',
        product_price: 509000,
        product_image: '/image/longvanchuyen.png',
        product_amount: 100,
        product_sold: 14,
        product_description: '<p><strong>Lồng vận chuyển Ferplast Atlas Professional 70 (91x61x67cm)</strong><br>Có nắp cà tiện dụng, thiết kế hiện đại thoáng mát, giúp thú cưng nhà bạn cực kỳ thoải mái trong các chuyến đi xa.Lồng vận chuyển cho chó mèo, chất liệu tốt, bền, đẹp, chắc chắn.</p><p>Chất liệu nhựa cao cấp, không chứa chất độc hại, không gây kích ứng</p><p>Vali đạt chuẩn qui định IATA giúp có thể vận chuyển dễ dàng thú cưng khi đi máy bay, tàu thủy hoặc tàu hỏa. Với thiết kế khóa an toàn, tay cầm tiện lợi cùng với loại nhựa tốt đến từ Ý sẽ tạo sự an toàn nhất cho thú cưng.</p><p>Kích thước: 91x61x67cm</p>',
        product_brand_name: 'Ferplast',
        product_type_name: 'Chuồng thú cưng'
      },
      quantity: 3
    }
  ]

  return (
    <div className="grid">
      <div className="my-3">
        <div className="cart__title">
          <div className="px-4" >
            <input className="cbx" type={"checkbox"} />
          </div>
          <span style={{ flex: "1", textAlign: "left" }}>Sản phẩm</span>
          <span>Đơn giá</span>
          <span>Số lượng</span>
          <span>Thành tiền</span>
          <span>Thao tác</span>
        </div>
      </div>
      {
        productsCart.map((productCart, index) =>
          <CartItem
            key={index}
            id={productCart.product.product_id}
            src={url + productCart.product.product_image}
            name={productCart.product.product_name}
            price={productCart.product.product_price}
            amount={productCart.product.product_amount}
            quantity={productCart.quantity}
          />
        )
      }
      {/* <div style={{position: "fixed", bottom: "0", width: "100"}}> */}

        <div className="cart__footer--wrap">
          <div className="grid cart__footer">
            <div className="px-4">
              <input
                id={"cbx"}
                className="cbx__item"
                type={"checkbox"}
              />
              &nbsp;Chọn tất cả
            </div>
            <div>Xóa</div>
            <div>Tổng hóa đơn:</div>
            <div 
              className="btn btn-primary"
              style={{fontSize: "16px"}}
              
            >Thanh Toán</div>
          </div>

        </div>
      </div>
    // </div>
  );
}