import style from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={style.contact}>
      <h2>Contact</h2>

      <input type="text" placeholder="Nom" className={style.input}/>
      <input type="email" placeholder="Email" className={style.input}/>
      <textarea placeholder="Message" className={style.input}></textarea>

      <p>12 Rue de Rivoli, Paris</p>
      <p>+33 123 456 789</p>
    </section>
  );
}