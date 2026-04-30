import { services } from "../data/Service";
import ServiceCard from "./Servicecard";
import style from "./Services.module.css";

export default function Services() {
  return (
    <section id="services">
      <h2>Nos Services</h2>

      <div className={style.grid}>
        {services.map((s) => (
          <ServiceCard key={s.id} info={s} />
        ))}
      </div>
    </section>
  );
}