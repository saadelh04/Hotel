import style from "./Header.module.css";

export default function Header() {
  return (
    <header className={style.header}>
      <h1>Hôtel Lumière</h1>
      <nav>
        <a href="#home">Accueil</a>
        <a href="#services">Services</a>
        <a href="#rooms">Chambres</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}