import styles from '../src/styles/HackUTD.module.css'
import Banner from "../src/components/Banner";

export default function Hackutd(){
    return (
        <main className={styles.main}>
        <div>
            <Banner
                bannerImage='/pages/hackutd/HackUTD-banner.svg'
            />
            <h1>HackUTD IX Marketing</h1>
            <h3>Graphic Designer - Product Design - Marketing</h3>
        </div>
        </main>
    )
}