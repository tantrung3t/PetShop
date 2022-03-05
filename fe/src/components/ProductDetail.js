import { React } from 'react';
import { Link } from 'react-router-dom'

export default function Product(props) {
  const loadData = () => {
    axios.get(`http://localhost:3003/product/` + props.id)
      .then(res => {
        const data = res.data;
        setData(data);
        console.log(data)
      })
      .catch(error => console.log(error));
  }


  useEffect(() => {
    loadData()
  }, []);

  return (
    <div>

    </div>

  )
}