import { motion } from 'motion/react';

interface Project {
    name: string;
    url?: string;
    website?: string;
}

interface ProjectQuickLinksProps {
    projects: Project[];
}

const ProjectQuickLinks = ({ projects }: ProjectQuickLinksProps) => {
    return (
        <motion.div
            className="quick-links-section"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
        >
            <h3 className="quick-links-header">// Projects I'm proud of</h3>
            <div className="quick-links-list">
                {projects.map((project, index) => (
                    <motion.a
                        key={index}
                        href={project.website || project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="quick-link-chip"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.5 + index * 0.1 }}
                        whileHover={{
                            y: -3,
                            boxShadow: "0 6px 20px var(--glow-color)",
                            borderColor: "var(--primary-color)"
                        }}
                    >
                        {project.name}
                    </motion.a>
                ))}
            </div>
        </motion.div>
    );
};

export default ProjectQuickLinks; 