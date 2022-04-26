-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th4 22, 2022 lúc 03:18 PM
-- Phiên bản máy phục vụ: 10.4.21-MariaDB
-- Phiên bản PHP: 7.4.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `webbanhang`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `accounts`
--

CREATE TABLE `accounts` (
  `account_id` int(11) NOT NULL,
  `account_username` varchar(50) DEFAULT NULL,
  `account_password` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `accounts`
--

INSERT INTO `accounts` (`account_id`, `account_username`, `account_password`) VALUES
(1, 'admin', 'admin'),
(2, 'user2', 'user2'),
(25, 'khiem', 'khiem'),
(30, 'user3', 'user3'),
(38, 'user4', 'user4'),
(39, 'user5', 'user5'),
(43, '1234', '1234'),
(46, 'trung1', 'trung1'),
(47, 'trung12', 'trung12');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `infomation`
--

CREATE TABLE `infomation` (
  `account_id` int(11) DEFAULT NULL,
  `info_fname` text DEFAULT NULL,
  `info_lname` text DEFAULT NULL,
  `info_date` text DEFAULT NULL,
  `info_address` text DEFAULT NULL,
  `info_phone_number` varchar(15) DEFAULT NULL,
  `info_email` varchar(50) DEFAULT NULL,
  `info_avatar` text DEFAULT NULL,
  `info_sex` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `infomation`
--

INSERT INTO `infomation` (`account_id`, `info_fname`, `info_lname`, `info_date`, `info_address`, `info_phone_number`, `info_email`, `info_avatar`, `info_sex`) VALUES
(1, 'Admin', 'Admin', '2000-09-13', 'Admin', 'Admin', 'Admin', 'Admin', 0),
(2, 'Thị Hoà', 'Trần', '2000-09-13', 'Ninh Kiều, Cần Thơ', '0327171195', 'tantrung.dmc@gmail.com', NULL, 1),
(25, 'Nhật Khiêm', 'Phạm', '2000-09-13', NULL, NULL, 'pk.22092000@gmail.com', NULL, NULL),
(30, 'Thị Hoà', 'Trần', '2000-09-13', NULL, NULL, 'hoa@gmail.com', NULL, NULL),
(38, 'Cẩm Tú', 'Trần', '2000-09-13', NULL, NULL, 'tu@gmail.com', NULL, NULL),
(39, 'Tấn Khải', 'Trần', '2000-09-13', NULL, NULL, 'khai@gmail.com', NULL, NULL),
(43, 'Trung', '', '', NULL, NULL, 'tuasdhfj@gmail.com', NULL, NULL),
(46, 'Trung', '', '', NULL, NULL, 'trung@gmail.com', NULL, NULL),
(47, 'Tấn Trung', 'Trần', '2000-09-13', 'Vũng Liêm, Vĩnh Long', '0327171195', 'tantrung.dmc@gmail.com', NULL, 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `orders`
--

CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL,
  `account_id` int(11) DEFAULT NULL,
  `order_status` int(11) DEFAULT NULL,
  `order_date` date NOT NULL DEFAULT current_timestamp(),
  `order_address` text NOT NULL,
  `order_payment_momo` int(11) NOT NULL,
  `order_total` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `orders`
--

INSERT INTO `orders` (`order_id`, `account_id`, `order_status`, `order_date`, `order_address`, `order_payment_momo`, `order_total`) VALUES
(1, 2, 1, '2022-02-21', 'Hưng Lợi, Ninh Kiều, Cần Thơ', 0, 790000),
(16, 2, 1, '2022-03-29', 'Trung Thành, Vũng Liêm, Vĩnh Long', 0, 781000),
(17, 2, 1, '2022-04-09', 'Trà Cú, Trà Vinh', 0, 1018000),
(18, 2, 0, '2022-04-11', 'Càng Long, Trà Vinh', 0, 1018000),
(70, 2, 1, '2022-04-20', 'Hưng Lợi, Ninh Kiều, Cần Thơ', 2, 15000),
(71, 2, 0, '2022-04-21', 'Ninh Kiều, Cần Thơ', 2, 50000),
(72, 2, 0, '2022-04-21', 'Ninh Kiều, Cần Thơ', 0, 15000),
(74, 2, 0, '2022-04-21', 'Ninh Kiều, Cần Thơ', 2, 15000),
(77, 47, 1, '2022-04-22', 'Vũng Liêm, Vĩnh Long', 0, 20000),
(78, 47, 1, '2022-04-22', 'Vũng Liêm, Vĩnh Long', 0, 67000);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `orders_detail`
--

CREATE TABLE `orders_detail` (
  `order_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `orders_detail_quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `orders_detail`
--

INSERT INTO `orders_detail` (`order_id`, `product_id`, `orders_detail_quantity`) VALUES
(1, 7, 3),
(1, 9, 2),
(1, 5, 1),
(1, 2, 1),
(16, 1, 1),
(16, 10, 2),
(16, 15, 1),
(17, 1, 2),
(18, 1, 2),
(70, 12, 1),
(71, 7, 1),
(72, 12, 1),
(74, 12, 1),
(77, 13, 1),
(78, 13, 1),
(78, 12, 1),
(78, 15, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `products`
--

CREATE TABLE `products` (
  `product_id` int(11) NOT NULL,
  `product_brand_id` int(11) DEFAULT NULL,
  `product_type_id` int(11) DEFAULT NULL,
  `product_name` text DEFAULT NULL,
  `product_price` int(11) DEFAULT NULL,
  `product_description` text DEFAULT NULL,
  `product_amount` int(11) DEFAULT NULL,
  `product_sold` int(11) NOT NULL,
  `product_image` text NOT NULL,
  `isDelete` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `products`
--

INSERT INTO `products` (`product_id`, `product_brand_id`, `product_type_id`, `product_name`, `product_price`, `product_description`, `product_amount`, `product_sold`, `product_image`, `isDelete`) VALUES
(1, 9, 5, 'Lồng vận chuyển', 509000, '<p><strong>Lồng vận chuyển Ferplast Atlas Professional 70 (91x61x67cm)</strong><br>Có nắp cà tiện dụng, thiết kế hiện đại thoáng mát, giúp thú cưng nhà bạn cực kỳ thoải mái trong các chuyến đi xa.Lồng vận chuyển cho chó mèo, chất liệu tốt, bền, đẹp, chắc chắn.</p><p>Chất liệu nhựa cao cấp, không chứa chất độc hại, không gây kích ứng</p><p>Vali đạt chuẩn qui định IATA giúp có thể vận chuyển dễ dàng thú cưng khi đi máy bay, tàu thủy hoặc tàu hỏa. Với thiết kế khóa an toàn, tay cầm tiện lợi cùng với loại nhựa tốt đến từ Ý sẽ tạo sự an toàn nhất cho thú cưng.</p><p>Kích thước: 91x61x67cm</p>', 50, 14, '/image/longvanchuyen.png', 0),
(2, 9, 4, 'Dây dắt Ergoflex', 230000, '<p><strong>Dây dắt Ergoflex 1.8cm/110cm</strong><br>Sản phẩm được thiết kế từ cao su tự nhiên giúp không gây dị ứng da. Sản phẩm chắc chắn và có độ co dãn cao, vệ sinh dễ dàng và không thấm nước.</p><p>&nbsp;</p>', 30, 10, '/image/daydatergoflex.png', 0),
(5, 7, 4, 'Cát thuỷ tinh silica', 130000, '<p><strong>Cát vệ sinh Sanicat Silica Diamonds 15L</strong></p><p><br><strong>ĐẶC ĐIỂM NỔI BẬT</strong><br>- Thành phần 100% Silica trắng tự nhiên, cát vệ sinh cho mèo không mùi mang đến tính năng kiểm soát vi khuẩn, khử mùi khó chịu và khả năng vón cục tốt với các hạt cát siêu trắng.</p><p>- Cách sử dụng đơn giản: chỉ cần loại bỏ khối chất bẩn được vón cục và đổ thêm cát sạch vào.</p><p><strong>THÔNG TIN THƯƠNG HIỆU</strong><br>Sanicat là một thương hiệu của Tolsa, đến từ Tây Ban Nha, là một trong những nhà sản xuất sản phẩm chăm sóc thú cưng hàng đầu Châu Âu. Sanicat đã chăm sóc vật nuôi trên toàn thế giới với các sản phẩm sáng tạo và chất lượng hàng đầu trong hơn 35 năm qua.</p><p>Tại Sanicat, quá trình kiểm soát tỉ mỉ từng chi tiết trong khâu sản xuất vô cùng nghiêm ngặt để tuân thủ các tiêu chuẩn về chất lượng sản phẩm.</p><p>Chất lượng sản phẩm, quy trình và dịch vụ của Sanicat được đảm bảo bởi:</p><p>Quản lý chất lượng: ISO 9001<br>Quản lý môi trường: ISO 14001<br>Nguồn cấp dữ liệu chuyên ngành: FAMI QS<br>An toàn thực phẩm: giấy chứng nhận BRC<br>Sự nhận thức về môi trường</p><p>Sanicat biết rõ tầm quan trọng của môi trường. Hơn bao giờ hết, Sanicat tôn trọng và quan tâm đến vấn đề môi trường, đó không phải là vấn đề tuân thủ quy định nhưng đó chính là nguyên tắc cần phải thực hiện.</p><p>Đây là lí do Sanicat điều chỉnh cách tiếp cận theo từng bước: từ khai thác nguyên liệu không có chất nổ, quá trình sản xuất, đóng gói và vận chuyển đều sử dụng năng lượng sạch, giảm thiểu rác thải và sự lãng phí nguyên vật liệu</p>', 70, 32, '/image/catthuytinhsilica.png', 0),
(6, 7, 4, 'Cát thuỷ tinh silica Lô hội', 140000, '<p><strong>Cát vệ sinh Sanicat Silica Diamonds Aloe Vera 15L</strong><br>&nbsp;</p><p><strong>ĐẶC ĐIỂM NỔI BẬT</strong><br>- Thành phần 100% Silica trắng tự nhiên, cát vệ sinh cho mèo với mùi hương lô hội mang đến tính năng kiểm soát vi khuẩn, khử mùi khó chịu và khả năng vón cục tốt với các hạt cát siêu trắng.</p><p>- Cách sử dụng đơn giản: chỉ cần loại bỏ khối chất bẩn được vón cục và đổ thêm cát sạch vào.</p><p><strong>THÔNG TIN THƯƠNG HIỆU</strong><br>Sanicat là một thương hiệu của Tolsa, đến từ Tây Ban Nha, là một trong những nhà sản xuất sản phẩm chăm sóc thú cưng hàng đầu Châu Âu. Sanicat đã chăm sóc vật nuôi trên toàn thế giới với các sản phẩm sáng tạo và chất lượng hàng đầu trong hơn 35 năm qua.</p><p>Tại Sanicat, quá trình kiểm soát tỉ mỉ từng chi tiết trong khâu sản xuất vô cùng nghiêm ngặt để tuân thủ các tiêu chuẩn về chất lượng sản phẩm.</p><p>Chất lượng sản phẩm, quy trình và dịch vụ của Sanicat được đảm bảo bởi:</p><p>Quản lý chất lượng: ISO 9001<br>Quản lý môi trường: ISO 14001<br>Nguồn cấp dữ liệu chuyên ngành: FAMI QS<br>An toàn thực phẩm: giấy chứng nhận BRC<br>Sự nhận thức về môi trường</p><p>Sanicat biết rõ tầm quan trọng của môi trường. Hơn bao giờ hết, Sanicat tôn trọng và quan tâm đến vấn đề môi trường, đó không phải là vấn đề tuân thủ quy định nhưng đó chính là nguyên tắc cần phải thực hiện.</p><p>Đây là lí do Sanicat điều chỉnh cách tiếp cận theo từng bước: từ khai thác nguyên liệu không có chất nổ, quá trình sản xuất, đóng gói và vận chuyển đều sử dụng năng lượng sạch, giảm thiểu rác thải và sự lãng phí nguyên vật liệu.</p>', 50, 14, '/image/catthuytinhsilicalohoi.png', 0),
(7, 4, 1, 'Pate vị gà cho chó lớn', 50000, '<p><strong>Pate Smartheart vị gà cho chó lớn 130gr</strong><br>- Dễ tiêu hóa, vì vậy chất dinh dưỡng được hấp thu dễ dàng.</p><p>- Để giúp chó con của bạn theo kịp với những con chó lớn,Pate Smarthear cung cấp dinh dưỡng hoàn hảo cho Chó con, để phát triển một hệ thống miễn dịch mạnh mẽ.</p><p>- Công thức bao gồm DHA cho sự phát triển não bộ khỏe mạnh và canxi và phospho cho răng khỏe mạnh và xương chắc khỏe</p><p>- Sản phẩm giàu dinh dưỡng, &nbsp;giúp thúc đẩy sự phát triển toàn diện cho chó con và bổ sung các dưỡng chất cần thiết cho chó</p><p>- Thức ăn đồng thời hỗ trợ quá trình tạo máu và tăng miễn dịch cho cơ thể.</p>', 70, 47, '/image/patevigachocholon.png', 0),
(8, 4, 1, 'Thức ăn dinh dưỡng', 50000, '<p><strong>Thức ăn dinh dưỡng Smartheart vị bò nướng cho chó to</strong><br></p><p>Chó lớn hơn 1 tuổi hoặc chó trưởng thành Cần các chất dinh dưỡng thiết yếu phù hợp với độ tuổi Thức ăn cho chó Smart Smart ® chọn protein chất lượng từ các loại thịt, bao gồm ngũ cốc, khoáng chất và vitamin, do đó cung cấp dinh dưỡng thực sự đầy đủ. Với giá trị của dầu cá biển với DHA và Omega 3 (Omega-3) và Lecithin với Choline giúp phát triển trí nhớ tốtVà tăng cường phát triển trí não và tăng cường tim</p><p><strong>Giới thiệu về Smartheart :</strong></p><p>SmartHeart – thức ăn chứa hàm lượng dinh dưỡng tốt nhất dành cho Cún cưng được sản xuất tại Thái Lan, với các dòng sản phẩm chuyên biệt với chức năng và chất dinh dưỡng được nghiên cứu đặc biệt để đáp ứng nhu cầu sức khỏe và thể chất của những giống chó khác nhau.</p>', 60, 34, '/image/thucandinhduong.png', 0),
(9, 10, 2, 'Thức ăn hạt hữu cơ', 140000, '<p><strong>Thức ăn hạt hữu cơ cho chó vị vịt ANF 6 Free 400g</strong></p><p><strong>Thành phần</strong></p><p>Sản phẩm ANF - Thức ăn hạt cho chó vị vịt được cấu tạo bởi những nguyên liệu tự nhiên, có đầy đủ các thành phần dưỡng chất cho cơ thể của mọi chú chó. Chúng tôi cam kết không sử dụng những chất gây hại hay hóa học nhưng chỉ sử dụng nguyên liệu đã qua khâu kiểm tra sát sao để chế biến ra sản phẩm tốt nhất trên thị trường.</p><p><strong>Một số dưỡng chất cần thiết cho cơ thể thú cưng của bạn:</strong></p><p>Chất đạm cao cấp, bổ sung thành phần thịt tươi<br>Chất béo không bão hòa, an toàn cho cơ thể<br>Chất sắt giúp bổ sung máu cho cơ thể.<br>Với 95% nguyên liệu hữu cơ thiên nhiên, sản phẩm thức ăn cho chó của chúng tôi tự tin giúp cho thú cưng của bạn khỏe mạnh và đẹp đẽ mỗi ngày.</p><p><strong>Tại sao lại lựa chọn sản phẩm ANF?</strong></p><p>Tại sao lại lựa chọn sản phẩm của chúng tôi? 6 KHÔNG. Với nguyên tắc 6 không đảm bảo vệ sinh an toàn thực phẩm, Fusiongroup muốn mang đến cho người tiêu dùng sản phẩm tốt nhất, an toàn nhất để đảm bảo thú cưng của bạn có thể sống dài lâu cùng người chủ.</p><p><strong>Nguyên tắc 6 không của ANF</strong></p><p>KHÔNG thuốc kháng sinh<br>KHÔNG thuốc trừ sâu<br>KHÔNG hoocmon<br>KHÔNG chất đột biến gen<br>KHÔNG màu nhân tạo<br>KHÔNG chất bảo quản hóa học<br>Chúng tôi sử dụng tới 95% nguồn hữu cơ thiên nhiên để chế biến nên sản phẩm. Vì vậy mọi vấn đề đáng lo ngại về an toàn thực phẩm được giải quyết triệt để nhằm cung cấp một sản phẩm chất lượng trên thị trường.</p><p>Vì có nguồn gốc từ nguyên liệu hữu cơ nên sản phẩm có tới hơn 40% chất chống oxy hóa so với các sản phẩm thông thường, giúp giảm thiểu khả năng dị ứng cho cơ thể. Sản phẩm thức ăn cho chó dạng hạt vị vịt này còn có tác dụng tăng cường hệ miễn dịch, phòng trừ bệnh tim mạch, cải thiện tuần hoàn máu và giúp chú chó của bạn có một bộ lông mượt mà, đẹp đẽ.</p>', 50, 32, '/image/thucanhathuuco.png', 0),
(10, 10, 2, 'Thức ăn hạt hữu cơ cho mèo con', 120000, '<p><strong>Thức ăn hạt hữu cơ cho mèo con ANF 6 Free 400g</strong></p><p>Việc tìm hiểu và lựa chọn dòng sản phẩm thức ăn dành cho mèo con luôn khiến các Sen đau đầu phải không nào? Đừng quá lo lắng, đã có ANF 6 Free Indoor Kitten - thức ăn hạt hữu cơ cao cấp dành cho mèo con phục vụ Hoàng thượng của bạn!</p><p>Thức ăn hạt cho mèo nhỏ ANF 6 Free Indoor Kitten đang là sản phẩm thức ăn cho mèo bán chạy và được rất nhiều người chủ tin dùng.</p><p><strong>THÔNG TIN SẢN PHẨM</strong></p><p>Dưới đây là thông tin cơ bản của sản phẩm:</p><p>Loại sản phẩm: thức ăn cho mèo<br>Dạng sản phẩm: thức ăn dạng hạt<br>Tên sản phẩm: thức ăn cho nhỏ ANF 6 Free Indoor Kitten<br>Áp dụng: các chú mèo nhỏ, dưới 6 tháng tuổi, mọi loại mèo<br>Xuất xứ: sản phẩm nhập khẩu Hàn Quốc</p><p><strong>THÀNH PHẦN CẤU TẠO</strong></p><p>Thức ăn cho mèo nhỏ ANF 6 Free Indoor Kitten là sản phẩm mang giá trị dinh dưỡng cao. Chỉ cần xem thông tin thành phần cấu tạo dưới đây, quý khách có thể cảm nhận được sự khác biệt trong chất lượng sản phẩm mà chúng tôi cung cấp so với các sản phẩm khác trên thị trường.</p><p>Protein khô: tối thiểu 34%<br>Tro thôi: tối đa 12%<br>Canxi: 0,6 đến 1,8%<br>Năng lượng trao đổi: tối thiểu 3590Kcal.kg<br>Phốt pho: 0,5 đến 1,4%<br>Béo thô: tối thiểu 12%<br>Xơ thô: tối đa 5%</p><p>&nbsp;</p><p><strong>NGUYÊN TẮC 6 KHÔNG</strong></p><p>Thức ăn hạt cho mèo nhỏ ANF 6 Free Indoor Kitten tuân thủ theo nguyên tắc 6 không, đảm bảo vệ sinh và an toàn tiêu dùng cho mọi giống mèo. Quý khách có thể tham khảo nguyên tắc 6 không dưới đây để có thể yên tâm sử dụng sản phẩm của ANF nhé!</p><p>Tiêu chuẩn 6 KHÔNG của sản phẩm:</p><p>1. Không hoocmon<br>2. Không chất đột biến gen<br>3. Không chất bảo quản<br>4. Không thuốc kháng sinh<br>5. Không màu nhân tạo<br>6. Không thuốc trừ sâu</p><p>&nbsp;</p><p><strong>CÔNG DỤNG SẢN PHẨM</strong></p><p>Thức ăn ANF 6 Free Indoor Kitten là sản phẩm chất lượng, cung cấp rất nhiều dinh dưỡng cho mọi chú mèo. Sản phẩm mang đến nhiều công dụng hữu ích như:</p><p>- Giúp duy trì cân nặng<br>- Cải thiện hệ tiêu hóa<br>- Duy trì miễn dịch tốt<br>- Phòng chống ung thư<br>- Làm đẹp da và lông<br>- Giúp lông mượt hơn<br>- Hỗ trợ lợi khuẩn đường ruột<br>- Hỗ trợ loại bỏ lông thừa trong ruột<br>- Hạn chế mùi hôi của phân mèo<br>- Phòng tránh quáng gà ở mèo</p><p><strong>LIỀU LƯỢNG KHUYÊN DÙNG</strong></p><p>- Mèo từ 1-2kg: 25-50g<br>- Mèo từ 2-3kg: 50-75g<br>- Mèo từ 3-4kg: 75-90g<br>- Mèo từ 4-5kg: 90-125g</p><p>&nbsp;</p><p><strong>Bảo quản: </strong>Nơi khô ráo, thoáng mát, tránh ánh nắng mặt trời.</p>', 50, 21, '/image/thucanhathuucochomeocon.png', 0),
(11, 1, 3, 'Banh nhựa cuộn nhỏ', 23000, '<p><strong>Banh nhựa cuộn nhỏ cho chó mèo</strong></p><p>Banh nhựa cuộn, đồ chơi sắc màu vui nhộn cho vật nuôi nhà bạn</p><p>Màu sắc: nhiều màu</p><p>Chất liệu: Nhựa</p><p>Loại: Đồ chơi</p><p>Xuất xứ: Trung Quốc</p>', 40, 12, '/image/banhnhuacuon.png', 0),
(12, 1, 3, 'Bóng lật đật', 15000, '<p><strong>Bóng lật đật cho chó mèo</strong></p><p>Bóng lật đật đồ chơi cho mèo, hấp dẫn, vui nhộn, ngộ nghĩnh, kích thích bản năng của mèo cưng nhà bạn</p><p>+ Dùng để chơi đùa cùng thú cưng của bạn.</p><p>+ Đủ màu sắc ngộ nghĩnh đáng yêu, thu hút thú cưng nhà bạn chơi đùa cùng Bóng lật đật, tăng cương khả năng vận động hoạt bát của thú cưng.</p>', 40, 12, '/image/bonglatdat.png', 0),
(13, 1, 5, 'Đồ chơi', 20000, '<p>Đồ chơi</p>', 20, 9, '/image/dochoiconthu.png', 0),
(14, 1, 3, 'Đồ chơi gà bông 7cm', 30000, '<p>Đồ chơi gà bông là một món đồ cho thú cưng gặm hoặc vui đùa</p>', 40, 6, '/image/dochoigabong.png', 0),
(15, 8, 3, 'Đồ chơi mèo câu cá', 32000, '<p><strong>Đồ chơi mèo câu cá</strong></p><p>Sản phẩm gồm hai phần là cần câu được làm từ loại nhựa cao cấp có độ đàn hồi cao và cá được làm từ vải, bông bền chắc.</p><p><strong>Giới thiệu về Mon Ami :</strong></p><p>Cityzoo có mặt tại Việt Nam từ năm 1999, công ty có vốn đầu tư của Pháp. Với niềm đam mê thú cưng, Cityzoo đã tìm hiểu và cho ra đời dòng sản phẩm mang tên Mon Ami, đáp ứng đầy đủ các nhu cầu giải trí, chăm sóc cho vật nuôi của bạn.</p><p>Cityzoo thành công và trở thành công ty dẫn đầu trong trong lĩnh vực phụ kiện chăm sóc vật nuôi tại thị trường Việt Nam do lợi thế có nhà máy sản xuất đủ tiêu chuẩn xuất khẩu đi các nước châu Âu và kho chứa hàng nhập khẩu rộng trên 15.000m2 tại Củ Chi – TPHCM.</p><p>Chất lượng luôn là quan tâm hàng đầu mà Mon Ami mong muốn mang đến cho khách hàng, chính vì vậy tất cả những sản phẩm của Mon Ami đều phải trải qua những khâu kiểm tra nghiêm ngặt nhất trước khi sản xuất ra thị trường trong và ngoài nước.</p><p>Mang sứ mệnh chăm sóc thú cưng, Cityzoo nói chung và Mon Ami nói riêng mong muốn được tạo ra những điều tốt đẹp nhất cũng như đạt được sự hài lòng cho bạn và vật cưng.</p>', 40, 25, '/image/dochoimeocauca.png', 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `products_brand`
--

CREATE TABLE `products_brand` (
  `product_brand_id` int(11) NOT NULL,
  `product_brand_name` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `products_brand`
--

INSERT INTO `products_brand` (`product_brand_id`, `product_brand_name`) VALUES
(1, 'Không có'),
(2, 'Iskhan'),
(3, 'Monge'),
(4, 'Smartheart'),
(5, 'Royal Canin'),
(6, 'Makar'),
(7, 'Sanicat'),
(8, 'Mon Ami'),
(9, 'Ferplast'),
(10, 'ANF');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `products_image`
--

CREATE TABLE `products_image` (
  `product_id` int(11) DEFAULT NULL,
  `product_image_link` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `products_type`
--

CREATE TABLE `products_type` (
  `product_type_id` int(11) NOT NULL,
  `product_type_name` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `products_type`
--

INSERT INTO `products_type` (`product_type_id`, `product_type_name`) VALUES
(1, 'Thức ăn cho cún'),
(2, 'Thức ăn cho mèo'),
(3, 'Đồ chơi thú cưng'),
(4, 'Phụ kiện thú cưng'),
(5, 'Chuồng thú cưng');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `promotions`
--

CREATE TABLE `promotions` (
  `promotion_id` int(11) NOT NULL,
  `product_id` int(11) DEFAULT NULL,
  `promotion_price` int(11) DEFAULT NULL,
  `promotion_start_date` date NOT NULL,
  `promotion_finish_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `promotions`
--

INSERT INTO `promotions` (`promotion_id`, `product_id`, `promotion_price`, `promotion_start_date`, `promotion_finish_date`) VALUES
(1, 6, 70, '2022-01-04', '2022-02-04'),
(2, 13, 70, '2022-02-04', '2022-03-04');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `shopping_cart`
--

CREATE TABLE `shopping_cart` (
  `product_id` int(11) DEFAULT NULL,
  `account_id` int(11) DEFAULT NULL,
  `shopping_cart_amount` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `shopping_cart`
--

INSERT INTO `shopping_cart` (`product_id`, `account_id`, `shopping_cart_amount`) VALUES
(7, 43, 1),
(7, 2, 3),
(5, 2, 1);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`account_id`),
  ADD UNIQUE KEY `account_username` (`account_username`);

--
-- Chỉ mục cho bảng `infomation`
--
ALTER TABLE `infomation`
  ADD KEY `account_id` (`account_id`);

--
-- Chỉ mục cho bảng `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`),
  ADD KEY `account_id` (`account_id`);

--
-- Chỉ mục cho bảng `orders_detail`
--
ALTER TABLE `orders_detail`
  ADD KEY `orders_detail_ibfk_1` (`order_id`),
  ADD KEY `orders_detail_ibfk_2` (`product_id`);

--
-- Chỉ mục cho bảng `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`),
  ADD KEY `product_brand_id` (`product_brand_id`),
  ADD KEY `product_type_id` (`product_type_id`);

--
-- Chỉ mục cho bảng `products_brand`
--
ALTER TABLE `products_brand`
  ADD PRIMARY KEY (`product_brand_id`);

--
-- Chỉ mục cho bảng `products_image`
--
ALTER TABLE `products_image`
  ADD KEY `product_id` (`product_id`);

--
-- Chỉ mục cho bảng `products_type`
--
ALTER TABLE `products_type`
  ADD PRIMARY KEY (`product_type_id`);

--
-- Chỉ mục cho bảng `promotions`
--
ALTER TABLE `promotions`
  ADD PRIMARY KEY (`promotion_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Chỉ mục cho bảng `shopping_cart`
--
ALTER TABLE `shopping_cart`
  ADD KEY `product_id` (`product_id`),
  ADD KEY `account_id` (`account_id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `accounts`
--
ALTER TABLE `accounts`
  MODIFY `account_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT cho bảng `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=79;

--
-- AUTO_INCREMENT cho bảng `products`
--
ALTER TABLE `products`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT cho bảng `products_brand`
--
ALTER TABLE `products_brand`
  MODIFY `product_brand_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT cho bảng `products_type`
--
ALTER TABLE `products_type`
  MODIFY `product_type_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `infomation`
--
ALTER TABLE `infomation`
  ADD CONSTRAINT `infomation_ibfk_1` FOREIGN KEY (`account_id`) REFERENCES `accounts` (`account_id`);

--
-- Các ràng buộc cho bảng `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`account_id`) REFERENCES `accounts` (`account_id`);

--
-- Các ràng buộc cho bảng `orders_detail`
--
ALTER TABLE `orders_detail`
  ADD CONSTRAINT `orders_detail_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`),
  ADD CONSTRAINT `orders_detail_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`);

--
-- Các ràng buộc cho bảng `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`product_brand_id`) REFERENCES `products_brand` (`product_brand_id`),
  ADD CONSTRAINT `products_ibfk_2` FOREIGN KEY (`product_type_id`) REFERENCES `products_type` (`product_type_id`);

--
-- Các ràng buộc cho bảng `products_image`
--
ALTER TABLE `products_image`
  ADD CONSTRAINT `products_image_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`);

--
-- Các ràng buộc cho bảng `promotions`
--
ALTER TABLE `promotions`
  ADD CONSTRAINT `promotions_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`);

--
-- Các ràng buộc cho bảng `shopping_cart`
--
ALTER TABLE `shopping_cart`
  ADD CONSTRAINT `shopping_cart_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`),
  ADD CONSTRAINT `shopping_cart_ibfk_2` FOREIGN KEY (`account_id`) REFERENCES `accounts` (`account_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
