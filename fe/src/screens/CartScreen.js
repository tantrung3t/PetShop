import React from "react"
import { ProductCart } from "../components/Product";

export default function CartScreens() {
  const url = "http://localhost:3003";

  const productCart = [
    {
      product_id: 1,
      product_name: 'Lồng vận chuyểnLồng vận chuyểnLồng vận chuyểnLồng vận chuyểnLồng vận chuyển',
      product_price: 509000,
      product_image: '/image/longvanchuyen.png',
      product_sold: 14,
      product_description: '<p><strong>Lồng vận chuyển Ferplast Atlas Professional 70 (91x61x67cm)</strong><br>Có nắp cà tiện dụng, thiết kế hiện đại thoáng mát, giúp thú cưng nhà bạn cực kỳ thoải mái trong các chuyến đi xa.Lồng vận chuyển cho chó mèo, chất liệu tốt, bền, đẹp, chắc chắn.</p><p>Chất liệu nhựa cao cấp, không chứa chất độc hại, không gây kích ứng</p><p>Vali đạt chuẩn qui định IATA giúp có thể vận chuyển dễ dàng thú cưng khi đi máy bay, tàu thủy hoặc tàu hỏa. Với thiết kế khóa an toàn, tay cầm tiện lợi cùng với loại nhựa tốt đến từ Ý sẽ tạo sự an toàn nhất cho thú cưng.</p><p>Kích thước: 91x61x67cm</p>',
      product_brand_name: 'Ferplast',
      product_type_name: 'Chuồng thú cưng'
    },
    {
      product_id: 1,
      product_name: 'Lồng vận chuyển',
      product_price: 509000,
      product_image: '/image/longvanchuyen.png',
      product_sold: 14,
      product_description: '<p><strong>Lồng vận chuyển Ferplast Atlas Professional 70 (91x61x67cm)</strong><br>Có nắp cà tiện dụng, thiết kế hiện đại thoáng mát, giúp thú cưng nhà bạn cực kỳ thoải mái trong các chuyến đi xa.Lồng vận chuyển cho chó mèo, chất liệu tốt, bền, đẹp, chắc chắn.</p><p>Chất liệu nhựa cao cấp, không chứa chất độc hại, không gây kích ứng</p><p>Vali đạt chuẩn qui định IATA giúp có thể vận chuyển dễ dàng thú cưng khi đi máy bay, tàu thủy hoặc tàu hỏa. Với thiết kế khóa an toàn, tay cầm tiện lợi cùng với loại nhựa tốt đến từ Ý sẽ tạo sự an toàn nhất cho thú cưng.</p><p>Kích thước: 91x61x67cm</p>',
      product_brand_name: 'Ferplast',
      product_type_name: 'Chuồng thú cưng'
    }
  ]

  return (
    <div className="grid">
      {
        productCart.map((product, index) =>
        <ProductCart
          key={index}
          id={product.product_id}
          src={url + product.product_image}
          name={product.product_name}
          price={product.product_price}
        />
      )
      }
    </div>
  );
}