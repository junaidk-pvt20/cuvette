import React from 'react'
import styles from "./Skill.module.scss"
import TestStatistic from './TestStatistic.jsx'
import ComparisonGraph from './ComparisonGraph.jsx'
import QuestionAnalysis from './QuestionAnalysis.jsx'
import SyllabusAnalysis from './SyllabusAnalysis.jsx'
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