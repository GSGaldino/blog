import {MdKeyboardArrowRight} from 'react-icons/md';

import styles from '../styles/Header.module.css';

export default function Header(){
  return (
    <div className={styles.header}>
      <div className={styles.title}>
        <h1>Gabriel Soares</h1>
        <div className={styles.subtitle}>
          <h2>Fullstack Javascript Developer</h2>
          <MdKeyboardArrowRight />
          <MdKeyboardArrowRight />
        </div>
      </div>
    </div>
  )
}
