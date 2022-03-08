import React from 'react'
// This is the import method for component based css
import styles from '../styles/home.module.css'

export default function home() {
    return (
        <div>
            {/* As a javascript object you can use css file */}
            <h1 className = {styles.homeHeading}>This is home page</h1>
        </div>
    )
}
