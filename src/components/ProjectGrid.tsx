import ProjectCard from "./ProjectCard";
import styles from "../styles/ProjectGrid.module.css"

const ProjectGrid =()=> {
    return(
        <div className={styles.grid}>

            <ProjectCard
            thumbnail='/pages/hackutd/HackUTD-thumb.png'
            title='HackUTD IX Marketing'
            roles='GRAPHIC DESIGN - MARKETING'
            desc='Designing an incredible experience for the third largest hackathon in the US'
            href='/hackutd'
            />

            <ProjectCard
            thumbnail='/pages/greenup/GreenUp-thumb.png'
            title='GreenUp!'
            roles='UI/UX DESIGN - WIREFRAMES'
            desc='Encouraging sustainability and recycling initiatives throughout a corporate campus'
            href='/hackutd'
            />

            <ProjectCard
            thumbnail='/pages/trailquility/Trailquility-thumb.png'
            title='trailquility.'
            roles='REACT WEB APP'
            desc='Reimagining the presence of the largest student-led Computer Science organization on campus'
            href='/hackutd'
            />

            <ProjectCard
            thumbnail='/pages/acm/ACM-thumb.png'
            title='ACM UTD Rebrand'
            roles='GRAPHIC DESIGN'
            desc='Reimagining the presence of the largest student-led Computer Science organization on campus'
            href='/hackutd'
            />

        </div>
    )
}
export default ProjectGrid;