import Image from 'next/image';
import styles from "../styles/Title.module.css"

const Title = () => {
    return(
        <div className={styles.TitleBody}>
            <div className={styles.line}></div>
            <h2>Hello, my name is</h2>
            <div className={styles.picContainer}>
                <Image
                    src="/me.jpg"
                    layout ="fill"
                    objectFit="cover"
                    alt="it me"
                />
            </div>
            <div className={styles.titles}>
                <h2>Software Engineer</h2>
                <h2>UI/UX Enthusiast</h2>
            </div>
        </div>
        
        
    )
}

export default Title;