import Link from 'next/link';
import Image from 'next/future/image'
import styles from '@/styles/Home.module.css'


const Header = () => (
<div className={styles.headerStyle}>
    <div className={styles.upperlinksStyle}>
        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/donate">Donate</Link></li>
            <li><Link href="/learn">Learn</Link></li>
        </ul> 
    </div>
</div>
);

export default Header;