import styles from "./Accueil.module.css";
import home from '../assets/Hotel.jpg'
export default function Accueil() {
  return (
    <div className={styles.home}>
      <img
        src={home}
        className={styles.image}
        alt="home"
      />

      <div className={styles.content}>
        <h2>A propos</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At reiciendis rerum id delectus sequi harum quos, perferendis eligendi possimus, omnis voluptatum recusandae in. Nobis ullam quisquam deleniti dolorum optio sint?</p>
      </div>
    </div>
  );
}