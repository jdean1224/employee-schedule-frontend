import styles from '../styles/CreateEmployeePage.module.css';
import { useState } from 'react';
import axios from 'axios';

function CreateEmployeePage() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    yearsExp: '',
    gender: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5780/api/v1/employees', formData);

      setFormData({
        name: '',
        age: '',
        yearsExp: '',
        gender: '',
      });
    } catch (error) {
      console.error('There was an error submitting the form!', error);
    }
  };

  return (
    <div className={styles.createEmployeePage}>
      <form onSubmit={handleSubmit} className={styles.createEmployeeForm}>
        <input
          onChange={handleChange}
          name='name'
          value={formData.name}
          className={styles.input}
          type='text'
          placeholder='Employee name'
        />
        <input
          onChange={handleChange}
          name='age'
          value={formData.age}
          className={styles.input}
          type='text'
          placeholder='Employee age'
        />
        <input
          onChange={handleChange}
          name='yearsExp'
          value={formData.yearsExp}
          className={styles.input}
          type='text'
          placeholder='Years of experience'
        />
        <input
          onChange={handleChange}
          name='gender'
          value={formData.gender}
          className={styles.input}
          type='text'
          placeholder='Employee gender'
        />
        <button type='submit' className={styles.submitFormBtn}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreateEmployeePage;
