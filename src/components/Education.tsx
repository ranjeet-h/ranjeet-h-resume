import { motion } from 'motion/react';
import { containerVariants, itemVariants, sectionVariants } from './animation';

interface EducationEntry {
    degree: string;
    university: string;
    year: number;
    grade: string;
}

interface EducationProps {
    education: EducationEntry[];
}

const Education = ({ education }: EducationProps) => {
    return (
        <motion.section className="panel education-panel" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} aria-labelledby="education-title">
            <div className="panel-head">
                <p className="section-kicker">Education</p>
                <h2 id="education-title" className="section-title">
                    Academic foundation
                </h2>
                <p className="section-copy">The formal base behind the product work.</p>
            </div>

            <motion.div className="education-grid" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
                {education.map((edu) => (
                    <motion.article
                        key={`${edu.degree}-${edu.year}`}
                        className="education-card"
                        variants={itemVariants}
                        whileHover={{ y: -3, transition: { duration: 0.2 } }}
                    >
                        <div className="education-card-head">
                            <div>
                                <p className="education-degree">{edu.degree}</p>
                                <p className="education-university">{edu.university}</p>
                            </div>
                            <span className="meta-chip">{edu.year}</span>
                        </div>

                        <div className="education-foot">
                            <span className="education-grade">Grade {edu.grade}</span>
                        </div>
                    </motion.article>
                ))}
            </motion.div>
        </motion.section>
    );
};

export default Education;
