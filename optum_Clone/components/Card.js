import React from 'react'
import Styles from '../styles/Card.module.css'
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareArrowUpRight,
} from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';

const Card = (props) => {
  return (
    <section className={Styles.card_section} style={{flexDirection:props.direction}}>
        <Image src={props.image} width="450" height="400" alt='customer Images' loading='lazy'></Image>
        <div className={Styles.card_information}>
            <Link href={props.link}>
            <a>{props.heading}</a>
            </Link>
            <p>{props.content}</p>
            <Link href={props.link}>
            <button className='vibrant_button'>Explore<FontAwesomeIcon
                  icon={faSquareArrowUpRight}
                  style={{ color: "white" }}
                  /></button>
                  </Link>
        </div>
    </section>
  )
}

export default Card