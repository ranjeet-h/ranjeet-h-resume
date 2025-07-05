import { motion } from 'motion/react';
import { sectionVariants } from './animation';

interface Skills {
    [key: string]: string[];
}

interface SkillsProps {
    skills: Skills;
}

const Skills = ({ skills }: SkillsProps) => {
    return (
        <motion.div
            className="code-section half-width"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="section-header">
                <span className="token comment">// Skills & Technologies</span>
            </div>
            <div className="code-line">
                <span className="token keyword">const</span> <span className="token variable">skills</span> <span className="token operator">=</span> <span className="token punctuation">{'{'}</span>
            </div>
            <div className="code-block">
                {Object.entries(skills).map(([key, value], index) => (
                    <motion.div
                        key={key}
                        className="code-line indent"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + index * 0.1 }}
                    >
                        <span className="token property">{key}</span><span className="token punctuation">:</span> <span className="token punctuation">[</span>
                        {(value as string[]).map((item, itemIndex) => (
                            <motion.span
                                key={itemIndex}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 + itemIndex * 0.05 }}
                            >
                                <span className="token string">"{item}"</span>
                                {itemIndex < value.length - 1 && <span className="token punctuation">, </span>}
                            </motion.span>
                        ))}
                        <span className="token punctuation">]</span>
                        {index < Object.entries(skills).length - 1 && <span className="token punctuation">,</span>}
                    </motion.div>
                ))}
            </div>
            <div className="code-line">
                <span className="token punctuation">{'}'}</span><span className="token punctuation">;</span>
            </div>
        </motion.div>
    );
};

export default Skills; 