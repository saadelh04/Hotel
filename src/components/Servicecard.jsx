import style from "./ServiceCard.module.css";

export default function ServiceCard({ info }) {
  return (
    <div className={style.card}>
      <img src={info.image} alt={info.title} />
      <h3>{info.title}</h3>
    </div>
  );
}