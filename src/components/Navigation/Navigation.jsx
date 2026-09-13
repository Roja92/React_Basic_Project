import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.nav_content}>
        <div className={styles.logo}>
        <img src="images/logo.png" alt="logo"/>
        </div>
        <ul>
            <li>Menu</li>
             <li>Location</li>
              <li>About</li>
               <li>Contact</li>
        </ul>
        <div >
            <button>Login</button>
        </div>
      </nav>
    </div>
  )
}

export default Navigation


