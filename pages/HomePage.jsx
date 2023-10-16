import Sphere from '../components/Sphere';
import styles from '../styles/HomePage.module.css';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className={styles.homepage}>
      <Sphere />
      <h1 className={styles.title}>IntelliCare</h1>
      <header className={styles.header}></header>
      <div
        onClick={() => navigate('/staff-portal')}
        className={styles.staffPortal}
      >
        Staff Portal
      </div>
      <div className={styles.patientPortal}>Patient Portal</div>
      <div className={styles.healthPlans}>Health Plans</div>
      <div className={styles.intelliblog}>IntelliCare Blog</div>
      <div className={styles.advanceMedicine}>Advancing Medicine</div>
      <div className={styles.discovery}>Analytics & Discovery</div>
    </div>
  );
}

export default HomePage;
