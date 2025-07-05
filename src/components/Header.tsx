import { motion } from 'motion/react';
import { headerVariants, profileImageVariants, textVariants } from './animation';

interface PersonalInfo {
    image: string;
    name: string;
}

interface HeaderProps {
    personalInfo: PersonalInfo;
    summary: string;
}

const Header = ({ personalInfo, summary }: HeaderProps) => {
    return (
        <motion.div
            className="header-section"
            variants={headerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="profile-section">
                <motion.div
                    className="profile-image"
                    variants={profileImageVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover={{
                        scale: 1.08,
                        rotateY: 8,
                        transition: { duration: 0.4, ease: "easeOut" }
                    }}
                >
                    <motion.div
                        className="image-container"
                        whileHover={{
                            boxShadow: "0 20px 60px rgba(86, 156, 214, 0.5)",
                            borderColor: "#4FC3F7",
                            transition: { duration: 0.3 }
                        }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <motion.img
                            src={personalInfo.image}
                            alt={`${personalInfo.name} - Profile`}
                            className="profile-img"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            whileHover={{
                                scale: 1.05,
                                filter: "brightness(1.1) saturate(1.2)",
                                transition: { duration: 0.3 }
                            }}
                        />
                        <motion.div
                            className="image-overlay"
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <motion.div
                                className="code-hint"
                                initial={{ y: 20, opacity: 0 }}
                                whileHover={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.1 }}
                            >
                                &lt;Developer /&gt;
                            </motion.div>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className="image-tag"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                    >
                        &lt;img src="profile.jpg" alt="Ranjeet" /&gt;
                    </motion.div>
                </motion.div>
            </div>

            <motion.div
                className="summary-section"
                variants={textVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="comment-block">
                    <motion.div
                        className="comment summary-header"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        <span className="summary-icon">💡</span> &lt;summary&gt;
                    </motion.div>
                    {summary.split('\n\n').map((paragraph, pIndex) => (
                        <motion.p
                            key={pIndex}
                            className="summary-line"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7 + pIndex * 0.15 }}
                        >
                            {paragraph}
                        </motion.p>
                    ))}
                    <motion.div
                        className="comment summary-header"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.2 }}
                    >
                        &lt;/summary&gt;
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Header; 