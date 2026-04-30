import { chambres } from "../data/Chambres";
import ChambreCard from "../components/ChambreCard";
import style from "./Chambres.module.css";

export default function Chambres() {
  return (
    <section id="rooms">
      <h2>Nos Chambres</h2>

      <div className={style.grid}>
        {chambres.map((c) => (
          <ChambreCard key={c.id} info={c} />
        ))}
      </div>
    </section>
  );
}