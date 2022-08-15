import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareArrowUpRight,
} from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';
import Styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <footer className={Styles.footer}>
        <div className={`${Styles.links} flex`}>
            <h1>UHG</h1>
            <ul className='flex'>
                <li>
                    <Link href=""><a>Contact Us</a></Link>
                </li>
                <li>
                    <Link href=""><a>Health Plan Notices</a></Link>
                </li>
                <li>
                    <Link href=""><a>Suppliers</a></Link>
                </li>
                <li>
                    <Link href=""><a>Privacy Policy</a></Link>
                </li>
                <li>
                    <Link href=""><a>Terms of Use</a></Link>
                </li>
                <li>
                    <Link href=""><a>Site Map</a></Link>
                </li>
                <li>
                    <Link href=""><a>United Health Foundation</a></Link>
                </li>
                <li>
                    <Link href=""><a>Careers<FontAwesomeIcon
                  icon={faSquareArrowUpRight}
                  /></a></Link>
                </li>
                <li>
                    <Link href=""><a>Optum<FontAwesomeIcon
                  icon={faSquareArrowUpRight}
                  /></a></Link>
                </li>
                <li>
                    <Link href=""><a>UnitedHealthCare<FontAwesomeIcon
                  icon={faSquareArrowUpRight}
                  /></a></Link>
                </li>
            </ul>
        </div>
        <div className={`${Styles.rights} flex`}>
            <p>©2022 UnitedHealth Group. All rights reserved.</p>
            <div className={Styles.socialMedia}>
                <h3>Follow Us</h3>
                <ul className='flex'>
                    <li>
                        <Link href=""><a>Twitter</a></Link>
                    </li>
                    <li>
                        <Link href=""><a>Linkdin</a></Link>
                    </li>
                    <li>
                        <Link href=""><a>Facebook</a></Link>
                    </li>
                    <li>
                        <Link href=""><a>Wifi</a></Link>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer