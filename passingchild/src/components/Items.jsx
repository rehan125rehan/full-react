import FoodItems from "./FoodItems";
import styles from "./Item.module.css";
const Items = ({foodItem}) => {

  const handleBuyClick = (event) => {
    console.log(`${foodItem} being bought`);
    console.log(event);

  }
  return (
   
    <li  className={`${styles["kg-item"]} list-group-item `}>
     <span className={styles["kg-span"]}>{foodItem}</span>
     <button
        className={`${styles.button} btn btn-info`}
        onClick={(event) => handleBuyClick(event) } 
      >
        Buy
      </button>
    </li>

  );

};
export default Items;

