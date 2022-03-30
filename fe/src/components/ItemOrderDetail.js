
const styleItem = {
    'display': 'flex',
    'borderBottom': '1px solid #91c2cc',
    'height': '50px',
    'justifyContent': 'space-between',
    'alignItems': 'center'
}

const divStyle2 = {
    'width': '120px',
};
export default function ItemOrderDetail(props) {
    return (
        <div>
            <div style={styleItem}>
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
                    {props.orders_detail_quantity}
                </div>
                <div style={divStyle2}>
                    {props.product_total.toString().replace(/\B(?=(\d{3})+(?!\d))/g,',')}đ
                </div>
            </div>
        </div>
    )
}