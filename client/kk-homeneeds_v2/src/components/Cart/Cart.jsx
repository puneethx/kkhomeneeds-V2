import React from 'react'
import "./cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined"
import { useDispatch, useSelector } from "react-redux";
import { removeItem,resetCart } from '../../redux/cartReducer';
import { Link } from "react-router-dom";


const Cart = () => {
    const products = useSelector(state=>state.cart.products);
    const dispatch = useDispatch();
    const totalPrice = () => {
        let total = 0;
        products.forEach((item) => (total += item.quantity * item.price));
        return total;
    }
  return (
    <div className='cart'>
        <h2 className='shop'>Shopping Cart</h2>
        {products?.map(item=>(
            <div className='item' key={item.id}>
                <img src={item.img} alt="" />
                <div className="details">
                    <h2>{item.title}</h2>
                    <p id='small'>{item.desc?.substring(0,100)}</p>
                    <div className="price">{item.quantity} x ₹{item.price}</div>
                </div>
                <DeleteOutlinedIcon className='delete' onClick = {()=> dispatch(removeItem(item.id))}/>
            </div>
            
        ))}
        <div className="total">
            <span>SUBTOTAL</span>
            <span>₹{totalPrice()}</span>
        </div>
            <Link className="link" to={`/delivery`}>
                <button >PROCEED TO CHECKOUT</button>
            </Link>
        <span className="reset" onClick={()=> dispatch(resetCart())}>Reset Cart</span>
    </div>
  )
}

export default Cart