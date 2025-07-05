import { motion } from 'motion/react';
import { sectionVariants } from './animation';

interface Project {
    name: string;
    url?: string;
    description: string;
    details?: string;
    learning?: string;
    tech: string[];
}

interface ProjectsProps {
    projects: Project[];
}

const Projects = ({ projects }: ProjectsProps) => {
    return (
        <motion.div
            className="code-section half-width"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className="section-header">
                <span className="token comment">// Personal Projects</span>
            </div>
            <div className="code-line">
                <span className="token keyword">const</span> <span className="token variable">projects</span> <span className="token operator">=</span> <span className="token punctuation">[</span>
            </div>
            <div className="code-block">
                {projects.map((project, projIndex) => (
                    <motion.div
                        key={projIndex}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: projIndex * 0.3, duration: 0.8 }}
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
                                <span className="token property">name</span><span className="token punctuation">:</span> <span className="token string">"{project.name}"</span><span className="token punctuation">,</span>
                            </motion.div>
                            {project.url && (
                                <motion.div
                                    className="code-line indent2"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <span className="token property">url</span><span className="token punctuation">:</span> <span className="token string">"{project.url}"</span><span className="token punctuation">,</span>
                                </motion.div>
                            )}
                            <motion.div
                                className="code-line indent2"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <span className="token property">description</span><span className="token punctuation">:</span> <span className="token string">"{project.description}"</span><span className="token punctuation">,</span>
                            </motion.div>
                            {project.details && (
                                <motion.div
                                    className="code-line indent2"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    <span className="token property">details</span><span className="token punctuation">:</span> <span className="token string">"{project.details}"</span><span className="token punctuation">,</span>
                                </motion.div>
                            )}
                            {project.learning && (
                                <motion.div
                                    className="code-line indent2"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    <span className="token property">learning</span><span className="token punctuation">:</span> <span className="token string">"{project.learning}"</span><span className="token punctuation">,</span>
                                </motion.div>
                            )}
                            <motion.div
                                className="code-line indent2"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6 }}
                            >
                                <span className="token property">tech</span><span className="token punctuation">:</span> <span className="token punctuation">[</span>
                                {project.tech.map((tech, techIndex) => (
                                    <motion.span
                                        key={techIndex}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.7 + techIndex * 0.05 }}
                                    >
                                        <span className="token string">"{tech}"</span>
                                        {techIndex < project.tech.length - 1 && <span className="token punctuation">, </span>}
                                    </motion.span>
                                ))}
                                <span className="token punctuation">]</span>
                            </motion.div>
                        </div>
                        <div className="code-line indent">
                            <span className="token punctuation">{'}'}</span>
                            {projIndex < projects.length - 1 && <span className="token punctuation">,</span>}
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

export default Projects; 