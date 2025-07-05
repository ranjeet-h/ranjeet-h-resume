import { motion } from 'motion/react';
import { sectionVariants } from './animation';

interface PersonalInfo {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string[];
    github: string;
    experience: number;
}

interface PersonalInfoProps {
    personalInfo: PersonalInfo;
}

const PersonalInfo = ({ personalInfo }: PersonalInfoProps) => {
    return (
        <motion.div
            className="code-section half-width"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="section-header">
                <span className="token comment">// Personal Information</span>
            </div>
            <div className="code-line">
                <span className="token keyword">const</span> <span className="token variable">personalInfo</span> <span className="token operator">=</span> <span className="token punctuation">{'{'}</span>
            </div>
            <div className="code-block">
                <motion.div
                    className="code-line indent"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    <span className="token property">name</span><span className="token punctuation">:</span> <span className="token string">"{personalInfo.name}"</span><span className="token punctuation">,</span>
                </motion.div>
                <motion.div
                    className="code-line indent"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <span className="token property">title</span><span className="token punctuation">:</span> <span className="token string">"{personalInfo.title}"</span><span className="token punctuation">,</span>
                </motion.div>
                <motion.div
                    className="code-line indent"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <span className="token property">email</span><span className="token punctuation">:</span> <span className="token string">"{personalInfo.email}"</span><span className="token punctuation">,</span>
                </motion.div>
                <motion.div
                    className="code-line indent"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <span className="token property">phone</span><span className="token punctuation">:</span> <span className="token string">"{personalInfo.phone}"</span><span className="token punctuation">,</span>
                </motion.div>
                <motion.div
                    className="code-line indent"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <span className="token property">location</span><span className="token punctuation">:</span> <span className="token punctuation">[</span>
                    {personalInfo.location.map((loc, index) => (
                        <span key={index}>
                            <span className="token string">"{loc}"</span>
                            {index < personalInfo.location.length - 1 && <span className="token punctuation">, </span>}
                        </span>
                    ))}
                    <span className="token punctuation">],</span>
                </motion.div>
                <motion.div
                    className="code-line indent"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    <span className="token property">github</span><span className="token punctuation">:</span> <span className="token string">"{personalInfo.github}"</span><span className="token punctuation">,</span>
                </motion.div>
                <motion.div
                    className="code-line indent"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                >
                    <span className="token property">experience</span><span className="token punctuation">:</span> <span className="token number">{personalInfo.experience}</span> <span className="token comment">// years</span>
                </motion.div>
            </div>
            <div className="code-line">
                <span className="token punctuation">{'}'}</span><span className="token punctuation">;</span>
            </div>
        </motion.div>
    );
};

export default PersonalInfo; 