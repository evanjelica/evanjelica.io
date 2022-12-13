import Image from 'next/image';
import styles from '../styles/ProjectCard.module.css';

const ProjectCard = (props: {
    thumbnail: string;
    title: string;
    roles: string;
    desc: string;
    href: string;
}) => {
    return(
        <div className={styles.cardContainer}>
            <a
                className={styles.projectButton}
                href={props.href}
            >
                <div className={styles.thumbContainer}>
                    <Image
                        src={props.thumbnail}
                        layout="fill"
                        objectFit="cover"
                        alt={props.thumbnail}
                    />
                </div>
            </a>
            <div className={styles.projectText}>
                <div className={styles.projectTitle}>{props.title}</div>
                <div className={styles.projectRoles}>{props.roles}</div>
                <div>{props.desc}</div>
            </div>
            
        </div>
    )
}

export default ProjectCard;