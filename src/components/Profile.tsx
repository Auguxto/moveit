import styles from '../styles/components/Profile.module.css'

function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/Auguxto.png" alt="Victor Augusto"/>

      <div>
        <strong>Victor Augusto Ferreira</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level 1
        </p>
      </div>
    </div>
  );
}

export default Profile;