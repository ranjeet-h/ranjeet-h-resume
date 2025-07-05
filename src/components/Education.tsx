import { motion } from 'motion/react';
import { sectionVariants } from './animation';

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
        <motion.div
            className="code-section full-width"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className="section-header">
                <span className="token comment">// Education</span>
            </div>
            <div className="code-line">
                <span className="token keyword">const</span> <span className="token variable">education</span> <span className="token operator">=</span> <span className="token punctuation">[</span>
            </div>
            <div className="code-block">
                {education.map((edu, eduIndex) => (
                    <motion.div
                        key={eduIndex}
                        initial={{ opacity: 0, rotateY: -15 }}
                        whileInView={{ opacity: 1, rotateY: 0 }}
                        transition={{ delay: eduIndex * 0.2, duration: 0.8 }}
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
                                <span className="token property">degree</span><span className="token punctuation">:</span> <span className="token string">"{edu.degree}"</span><span className="token punctuation">,</span>
                            </motion.div>
                            <motion.div
                                className="code-line indent2"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <span className="token property">university</span><span className="token punctuation">:</span> <span className="token string">"{edu.university}"</span><span className="token punctuation">,</span>
                            </motion.div>
                            <motion.div
                                className="code-line indent2"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <span className="token property">year</span><span className="token punctuation">:</span> <span className="token number">{edu.year}</span><span className="token punctuation">,</span>
                            </motion.div>
                            <motion.div
                                className="code-line indent2"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                <span className="token property">grade</span><span className="token punctuation">:</span> <span className="token string">"{edu.grade}"</span>
                            </motion.div>
                        </div>
                        <div className="code-line indent">
                            <span className="token punctuation">{'}'}</span>
                            {eduIndex < education.length - 1 && <span className="token punctuation">,</span>}
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

export default Education; 