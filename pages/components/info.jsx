import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import styles from '../../styles/info.module.scss'
function Info(props) {
  const [visible, setVisible] = useState(0);
  const [direction, setDirection] = useState("row");
  const info = useRef(null);
  let scroll;
  useEffect(() => {
    if (props.direction == "normal" || props.direction == "flex" || props.direction == "to-right" || props.direction == "") {
      setDirection("row");
    }
    else if (props.direction == "reverse"){
      setDirection("row-reverse");
    }
  }, []);
  useEffect(() => {
    scroll = info.current.getBoundingClientRect();
    scroll = scroll.top;
  }, [info]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.onscroll = () => {
          if (window.scrollY >= scroll) {
            setVisible(1);
          }
          else {
            setVisible(0);
          }
        }
      }
  }, []);
  return (
    <section ref={info} className={styles.info} style={{opacity: visible, flexDirection: direction}}>
      <div>
        <h3>{props.title}</h3>
        <hr/>
        <p>{props.children}</p>
      </div>
      <figure>
        <Image src={props.image} width="150px" height="150px" layout="responsive" className={styles.img}/>
      </figure>
    </section>
  );
}
export default Info;
