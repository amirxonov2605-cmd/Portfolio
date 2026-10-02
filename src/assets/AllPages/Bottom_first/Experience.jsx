import styles from "./Experience.module.css";
import rocket from "../../images/shukrullo/rocket.png";
import music from "../../images/shukrullo/music.png";
import crown from "../../images/shukrullo/crown.png";

const education = [
  { id: 1, title: "Stanford University", subtitle: "MSc (Human Computer Interaction)", date: "2013-2015" },
  { id: 2, title: "MIT Summer School", subtitle: "UX Training Bootcamp", date: "2013-2014" },
  { id: 3, title: "California State University", subtitle: "BSc in Software Engineering", date: "2009-2012" },
];

const work = [
  { id: 1, title: "SpaceFleet", subtitle: "Senior Product Designer", date: "April 2019 - Current", icon: rocket },
  { id: 2, title: "MusicMash", subtitle: "Information Architect", date: "April 2016 - May 2017", icon: music },
  { id: 3, title: "Kingdom", subtitle: "UI Designer", date: "April 2016 - May 2017", icon: crown },
];

function Item({ title, subtitle, date, icon }) {
  return (
    <div className={styles.item}>
      {icon && <img className={styles.icon} src={icon} alt="" />}
      <div className={styles.info}>
        <h3 className={styles.name}>{title}</h3>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      <p className={styles.date}>• {date}</p>
      <span className={styles.arrow}>↗</span>
    </div>
  );
}

export default function Experience() {
  return (
    <section className={styles.experience}>
      <div>
        <h2 className={styles.heading}>📚 Education</h2>
        {education.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>

      <div>
        <h2 className={styles.heading}>💼 Work Experience</h2>
        {work.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}