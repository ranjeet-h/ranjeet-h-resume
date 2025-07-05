import { motion } from 'motion/react';
import { scrollVariants } from './animation';

interface Project {
    name: string;
    description: string;
}

interface Highlight {
    title: string;
    details: string[];
}

interface ExperienceEntry {
    company: string;
    position: string;
    duration: string;
    website?: string;
    workType?: string;
    description: string;
    achievements?: string[];
    highlights?: Highlight[];
    projects?: Project[];
}

interface ExperienceProps {
    experience: ExperienceEntry[];
}

const Experience = ({ experience }: ExperienceProps) => {
    return (
        <motion.div
            className="code-section full-width"
            variants={scrollVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >
            <div className="section-header">
                <span className="token comment">// Professional Experience</span>
            </div>
            <div className="code-line">
                <span className="token keyword">const</span> <span className="token variable">experience</span> <span className="token operator">=</span> <span className="token punctuation">[</span>
            </div>
            <div className="code-block">
                {experience.map((exp, expIndex) => (
                    <motion.div
                        key={expIndex}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: expIndex * 0.2, duration: 0.8 }}
                    >
                        <div className="code-line indent">
                            <span className="token punctuation">{'{'}</span>
                        </div>
                        <div className="code-block">
                            <motion.div
                                className="code-line indent2"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 }}
                            >
                                <span className="token property">company</span><span className="token punctuation">:</span> <span className="token string">"{exp.company}"</span><span className="token punctuation">,</span>
                            </motion.div>
                            <motion.div
                                className="code-line indent2"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <span className="token property">position</span><span className="token punctuation">:</span> <span className="token string">"{exp.position}"</span><span className="token punctuation">,</span>
                            </motion.div>
                            <motion.div
                                className="code-line indent2"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <span className="token property">duration</span><span className="token punctuation">:</span> <span className="token string">"{exp.duration}"</span><span className="token punctuation">,</span>
                            </motion.div>
                            {exp.website && (
                                <motion.div
                                    className="code-line indent2"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    <span className="token property">website</span><span className="token punctuation">:</span> <span className="token string">"{exp.website}"</span><span className="token punctuation">,</span>
                                </motion.div>
                            )}
                            {exp.workType && (
                                <motion.div
                                    className="code-line indent2"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    <span className="token property">workType</span><span className="token punctuation">:</span> <span className="token string">"{exp.workType}"</span><span className="token punctuation">,</span>
                                </motion.div>
                            )}
                            <motion.div
                                className="code-line indent2"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6 }}
                            >
                                <span className="token property">description</span><span className="token punctuation">:</span> <span className="token string">"{exp.description}"</span><span className="token punctuation">,</span>
                            </motion.div>

                            {exp.achievements && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.7 }}
                                >
                                    <div className="code-line indent2">
                                        <span className="token property">achievements</span><span className="token punctuation">:</span> <span className="token punctuation">[</span>
                                    </div>
                                    <div className="code-block">
                                        {exp.achievements.map((achievement, achIndex) => (
                                            <motion.div
                                                key={achIndex}
                                                className="code-line indent3"
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.8 + achIndex * 0.1 }}
                                            >
                                                <span className="token string">"{achievement}"</span>
                                                {achIndex < exp.achievements!.length - 1 && <span className="token punctuation">,</span>}
                                            </motion.div>
                                        ))}
                                    </div>
                                    <div className="code-line indent2">
                                        <span className="token punctuation">],</span>
                                    </div>
                                </motion.div>
                            )}

                            {exp.highlights && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.9 }}
                                >
                                    <div className="code-line indent2">
                                        <span className="token property">highlights</span><span className="token punctuation">:</span> <span className="token punctuation">[</span>
                                    </div>
                                    <div className="code-block">
                                        {exp.highlights.map((highlight, hlIndex) => (
                                            <motion.div
                                                key={hlIndex}
                                                initial={{ opacity: 0, scale: 0.95 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 1 + hlIndex * 0.2 }}
                                            >
                                                <div className="code-line indent3">
                                                    <span className="token punctuation">{'{'}</span>
                                                </div>
                                                <div className="code-line indent4">
                                                    <span className="token property">title</span><span className="token punctuation">:</span> <span className="token string">"{highlight.title}"</span><span className="token punctuation">,</span>
                                                </div>
                                                <div className="code-line indent4">
                                                    <span className="token property">details</span><span className="token punctuation">:</span> <span className="token punctuation">[</span>
                                                </div>
                                                <div className="code-block">
                                                    {highlight.details.map((detail, detIndex) => (
                                                        <motion.div
                                                            key={detIndex}
                                                            className="code-line indent5"
                                                            initial={{ opacity: 0, x: -20 }}
                                                            whileInView={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: 1.2 + detIndex * 0.1 }}
                                                        >
                                                            <span className="token string">"{detail}"</span>
                                                            {detIndex < highlight.details.length - 1 && <span className="token punctuation">,</span>}
                                                        </motion.div>
                                                    ))}
                                                </div>
                                                <div className="code-line indent4">
                                                    <span className="token punctuation">]</span>
                                                </div>
                                                <div className="code-line indent3">
                                                    <span className="token punctuation">{'}'}</span>
                                                    {hlIndex < exp.highlights!.length - 1 && <span className="token punctuation">,</span>}
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                    <div className="code-line indent2">
                                        <span className="token punctuation">],</span>
                                    </div>
                                </motion.div>
                            )}

                            {exp.projects && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.4 }}
                                >
                                    <div className="code-line indent2">
                                        <span className="token property">projects</span><span className="token punctuation">:</span> <span className="token punctuation">[</span>
                                    </div>
                                    <div className="code-block">
                                        {exp.projects.map((project, projIndex) => (
                                            <motion.div
                                                key={projIndex}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 1.5 + projIndex * 0.1 }}
                                            >
                                                <div className="code-line indent3">
                                                    <span className="token punctuation">{'{'}</span>
                                                </div>
                                                <div className="code-line indent4">
                                                    <span className="token property">name</span><span className="token punctuation">:</span> <span className="token string">"{project.name}"</span><span className="token punctuation">,</span>
                                                </div>
                                                <div className="code-line indent4">
                                                    <span className="token property">description</span><span className="token punctuation">:</span> <span className="token string">"{project.description}"</span>
                                                </div>
                                                <div className="code-line indent3">
                                                    <span className="token punctuation">{'}'}</span>
                                                    {projIndex < exp.projects!.length - 1 && <span className="token punctuation">,</span>}
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                    <div className="code-line indent2">
                                        <span className="token punctuation">]</span>
                                    </div>
                                </motion.div>
                            )}
                        </div>
                        <div className="code-line indent">
                            <span className="token punctuation">{'}'}</span>
                            {expIndex < experience.length - 1 && <span className="token punctuation">,</span>}
                        </div>
                    </motion.div>
                ))}
            </div>
            <div className="code-line">
                <span className="token punctuation">]</span><span className="token punctuation">;</span>
            </div>
        </motion.div>
    );
};

export default Experience; 