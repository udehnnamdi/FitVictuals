import { useContext } from 'react';

import VictualItemForm from './VictualItemForm';
import classes from './VictualItem.module.css';
import CartContext from '../../../store/cart-context';

const VictualItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `€${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.victual}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <VictualItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default VictualItem;
