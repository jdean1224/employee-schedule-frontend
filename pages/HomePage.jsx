import Sphere from '../components/Sphere';
import styles from '../styles/HomePage.module.css';

function HomePage() {
  return (
    <div className={styles.homepage}>
      <Sphere />
      <h1 className={styles.title}>IntelliCare</h1>
      <header className={styles.header}></header>
      <div className={styles.staffPortal}>Staff Portal</div>
    </div>
  );
}

export default HomePage;
