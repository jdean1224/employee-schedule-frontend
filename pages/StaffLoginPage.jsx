import styles from '../styles/StaffLoginPage.module.css';
import { useNavigate } from 'react-router-dom';

function StaffLoginPage() {
  const navigate = useNavigate();

  return (
    <div className={styles.staffLoginPage}>
      <h1>Staff Login Page</h1>
      <button
        onClick={() => navigate('/create-employee')}
        className={styles.createEmployeeBtn}
      >
        Create employee
      </button>
    </div>
  );
}

export default StaffLoginPage;
