import Image from 'next/image';
import styles from '../styles/Banner.module.css';

const Banner = (props: {
    bannerImage: string;
}) => {
    return(
        <div className={styles.container}>
            <Image
                src={props.bannerImage}
                layout ="fill"
                objectFit="cover"
                alt={props.bannerImage}
            />
        </div>
    )
}

export default Banner;