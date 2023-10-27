import React from 'react'
import styles from "./skill.module.scss"
import TestStatistic from './TestStatistic'
import ComparisonGraph from './ComparisonGraph'
import QuestionAnalysis from './QuestionAnalysis'
import SyllabusAnalysis from './SyllabusAnalysis'
const SkillTest = () => {
    return (

        <div className={styles.skillsContainer}>
            <p className={styles.heading}> Skill Test</p>
            <div className={styles.skillsDiv}>
                <div className={styles.skillSection} >
                    <TestStatistic />
                    <ComparisonGraph />
                </div>
                <div className={styles.skillSection}>
                    <SyllabusAnalysis />
                    <QuestionAnalysis />
                </div>
            </div>
        </div>

    )
}

export default SkillTest