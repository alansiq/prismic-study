import styles from './nav.module.scss';
import NavLink from '../NavLink';
import Link from 'next/link';
import React, { useState } from 'react';

import { FaGithub, FaLinkedin, FaDribbble } from 'react-icons/fa';


export default function Nav() {

    const [menuIsExpanded, setMenuIsExpanded] = useState(false);


    return (
        <>
            <nav className={menuIsExpanded ? `${styles.container} ${styles.expanded}` : `${styles.container}`}>
                <h1 className={styles.logo}> 
                    <Link href="/"><a>AlanSiqueira</a></Link>
                </h1>

                <div onClick={() => setMenuIsExpanded(!menuIsExpanded)} className={styles.toggler}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                {/* <ul className={styles.navlinks}>
                    <li>
                        <NavLink onClick={() => setMenuIsExpanded(false)} className={styles.navlink} activeClassName={styles.active} href='/'>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink onClick={() => setMenuIsExpanded(false)} className={styles.navlink} activeClassName={styles.active} href='/work'>
                            My Work
                        </NavLink>
                    </li>
                    <li>
                        <NavLink onClick={() => setMenuIsExpanded(false)} className={`${styles.navlink} ${styles.bloglink}`} activeClassName={styles.active} href='/blog'>
                            Blog
                        </NavLink>
                    </li>
                </ul> */}
                <ul className={styles.social}>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/alansiq"><FaGithub /></a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/alanpsiqueira/"><FaLinkedin /></a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://dribbble.com/alansiqueira"><FaDribbble /></a></li>
                </ul>
            </nav>
        </>
    )
}