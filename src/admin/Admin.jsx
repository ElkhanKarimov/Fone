import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCategory,
  deleteCategory,
  editCategory,
  fetchCategories,
} from "../slice/CategorySlice";
import { addBasket, removeItem } from "../slice/BasketSlice";
import "./Card.css";

const Admin = () => {
  const dispatch = useDispatch();

  const Categories = useSelector((state) => state.categories.items);
  const Basket = useSelector((state) => state.basket.items);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDeafult();
    if (editingId) {
      console.log(editingId);
      dispatch(editCategory(editingId, formData));
    } else {
      dispatch(addCategory(formData));
    }
    setFormData({ name: "", description: "" });
    setEditingId(null);
  };

  const handleEdit = (category) => {
    setFormData({ name: category.name, description: category.description });
    setEditingId(category.id);
  };

  const handleDelete = (id) => {
    dispatch(deleteCategory(id));
  };

  const handleAddBakset = (item) => {
    dispatch(addBasket(item));
    console.log(Basket);
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <div>
      <div>
        <div className='best'>BEST SELLER</div>
        <div className='line2'></div>
      </div>
      <div className='seller'>Best Seller Product This Week!</div>
      <div className="cards">
        {Categories &&
          Categories.map((item) => (
            <div className='box' key={item.id}>
              <img className='seller-img'
                src={item.image}
                alt={item.name}
              />
              <p className='boxtexts'>{item.name}</p>
              <p className='total'>${item.price}</p>

              <div>
                <button className="addbasket" onClick={() => handleAddBakset(item)}>
                  Add Basket
                </button>
              </div>
            </div>
          ))}
      </div>
      <div className="basket">
        {Basket ? (
          Basket.map((item) => (
            <div>dkdkn</div>,
            <div key={item.id} style={{padding: "10px", display: "flex", gap: "10px", flexDirection: "row" }}>
              <p>{item.name}</p>
              <img style={{ width: "60px" }} src={item.image} alt={item.name} />
              <p>Price:{item.price}$</p>
              <p onClick={() => handleRemove(item)}>-</p>
              <p>Count:{item.count}</p>
              <p onClick={() => handleAddBakset(item)}>+</p>

              <div></div>
            </div>
          ))
        ) : (
          <p>empty</p>
        )}
      </div>
    </div>
  );
};

export default Admin;
