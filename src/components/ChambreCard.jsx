import style from "./ChambreCard.module.css";

export default function ChambreCard({ info }) {
  return (
    <div className={style.card}>
      <img src={info.image} alt="" />
      <h3>{info.title}</h3>
      <p>{info.description}</p>
      <span>{info.price} € / nuit</span>
      <button>Réserver</button>
    </div>
  );
}