import { useState } from 'react'
import Image from 'next/image'
import styles from '../../styles/info.module.scss'
function Info(props) {
  return (
    <section className={styles.info}>
      <div>
        <h3>{props.title}</h3>
        <hr/>
        <p>{props.children}</p>
      </div>
      <figure>
        <Image src={props.image} width="150px" height="150px" layout="fixed" className={styles.img}/>
      </figure>
    </section>
  );
}
export default Info;
