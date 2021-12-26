import styles from '../styles/comp.module.css'

const Comp = () => {
    return (
        <div className={styles.bod}>
            <div>
  <h1 className={styles.h1}>404</h1>
  <div className={styles.cloak__wrapper}>
    <div className={styles.cloak__container}>
      <div className={styles.cloak} />
    </div>
  </div>
  <div className={styles.info}>
    <h2 className={styles.h2}>{"This Page Won't Exist"}</h2>
    <p className={styles.p}>GO BACK TO HOME PAGE</p><a className={styles.a} href="https://jhey.dev" target="_blank" rel="noreferrer noopener">Home</a>
  </div>
</div>


        </div>
    );
}

export default Comp; 