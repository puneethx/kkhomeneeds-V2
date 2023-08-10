import React from 'react'
import "./cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined"

const Cart = () => {
    const data=[
        {
            id:1,
            img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
            isNew: true,
            title: "Butterfly 1.5L 1500W Electric Kettle, Dry Boil Protection, EKN" ,
            desc: "Prepare hot water, instant tea etc. in a matter of minutes with Butterfly EKN Kettle. With attractive features like automatic cut-off, ergonomically designed handles, unique designs with attractive finishes, lightweight and compact, making it easy to carry. To top it off, it also comes with the better safety features, making it safe to use. It will quickly heats and lasts the heat of the water for a long.",
            oldPrice: 1299,
            price: 699,
        },
        {
            id:2,
            img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
            isNew: true,
            title: "Coat",
            desc: "Prepare hot water, instant tea etc. in a matter of minutes with Butterfly EKN Kettle. With attractive features like automatic cut-off, ergonomically designed handles, unique designs with attractive finishes, lightweight and compact, making it easy to carry. To top it off, it also comes with the better safety features, making it safe to use. It will quickly heats and lasts the heat of the water for a long.",
            oldPrice: 1299,
            price: 599,
        },
    ]
  return (
    <div className='cart'>
        <div className='carter'>  
        <h2 className='shop'>Shopping Cart</h2>
        {data?.map(item=>(
            <div className='item' key={item.id}>
                <img src={item.img} alt="" />
                <div className="details">
                    <h2>{item.title}</h2>
                    <p>{item.desc?.substring(0,100)}</p>
                    <div className="price">1 x ₹{item.price}</div>
                </div>
                <DeleteOutlinedIcon className='delete'/>
            </div>
            
        ))}
        <div className="total">
            <span>SUBTOTAL</span>
            <span>₹799</span>
        </div>
        <button>PROCEED TO CHECKOUT</button>
        <span className="reset">Reset Cart</span>
        </div>
    </div>
  )
}

export default Cart