import Typewriter from 'typewriter-effect';
import Image from 'next/image'
import styles from '../../styles/main.module.scss'
function Main(props) {
  return (
    <main className={styles.main}>
      <div>
        <h2 className={styles.h2}>Olá, sou</h2>
        <Typewriter options={{
            strings: [
              "Paulo.", "Estu-<br>dante.", "Front-End Dev."
            ],
            autoStart: true,
            loop: true
          }}/>
      </div>
      <figure>
        <Image src={props.image} className={props.visible, styles.img} layout="fixed" width="170px" height="150px"/>
      </figure>
    </main>
  );
}
export default Main;
