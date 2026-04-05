import { motion } from 'motion/react';
import { containerVariants, itemVariants, sectionVariants } from './animation';

interface Skills {
    [key: string]: string[];
}

interface SkillsProps {
    skills: Skills;
}

const formatCategory = (category: string) => category.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/^./, (char) => char.toUpperCase());

const Skills = ({ skills }: SkillsProps) => {
    return (
        <motion.section className="panel skills-panel" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} aria-labelledby="skills-title">
            <div className="panel-head">
                <p className="section-kicker">Capabilities</p>
                <h2 id="skills-title" className="section-title">
                    Systems I ship with
                </h2>
                <p className="section-copy">Frontend, backend, data, and infrastructure tools I use to ship fast, maintainable products.</p>
            </div>

            <motion.div className="skills-grid" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                {Object.entries(skills).map(([category, values]) => (
                    <motion.article
                        key={category}
                        className="skill-card"
                        variants={itemVariants}
                        whileHover={{ y: -3, transition: { duration: 0.2 } }}
                    >
                        <div className="skill-card-head">
                            <h3 className="skill-category">{formatCategory(category)}</h3>
                            <span className="skill-count">{values.length}</span>
                        </div>

                        <div className="skill-chip-list">
                            {values.map((item) => (
                                <span key={item} className="skill-chip">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </motion.article>
                ))}
            </motion.div>
        </motion.section>
    );
};

export default Skills;
