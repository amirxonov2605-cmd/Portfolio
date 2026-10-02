import styles from "./ThatsMe.module.css";
import phone from "../../images/shukrullo/phone.png";
import workplace from "../../images/shukrullo/workplace.png";
import desk from "../../images/shukrullo/desk.png";
import team from "../../images/shukrullo/team.png";

export default function ThatsMe() {
  return (
    <section className={styles.about}>
      <div className={styles.top}>
        <div>
          <p className={styles.label}>PRODUCT DESIGNER</p>
          <h1 className={styles.title}>That's me!</h1>
        </div>
        <p className={styles.text}>
          Over the past 12 years, I've worked with a diverse range of clients,
          from startups to Fortune 500 companies. I love crafting interfaces
          that delight users and help businesses grow.
        </p>
      </div>

      <div className={styles.gallery}>
        <img className={styles.tall} src={phone} alt="Phone" />
        <img className={styles.tall} src={workplace} alt="Workplace" />
        <img src={desk} alt="Desk" />
        <img src={team} alt="Team" />
      </div>
    </section>
  );
}