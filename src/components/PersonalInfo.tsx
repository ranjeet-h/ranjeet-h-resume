import { motion } from 'motion/react';
import { containerVariants, itemVariants } from './animation';

interface PersonalInfoData {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string[];
    github: string;
    experience: number;
}

interface PersonalInfoProps {
    personalInfo: PersonalInfoData;
}

interface InfoRow {
    label: string;
    value: string;
    href?: string;
}

const formatExternalValue = (value: string) => value.replace(/^https?:\/\//, '');

const PersonalInfo = ({ personalInfo }: PersonalInfoProps) => {
    const profileHighlights = [
        { label: 'Role', value: personalInfo.title },
        { label: 'Experience', value: `${personalInfo.experience}+ years` },
        { label: 'Location', value: personalInfo.location.join(' · ') },
    ];

    const infoRows: InfoRow[] = [
        { label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
        { label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
        { label: 'GitHub', value: formatExternalValue(personalInfo.github), href: personalInfo.github },
    ];

    return (
        <motion.section className="panel personal-panel" aria-labelledby="profile-title">
            <div className="panel-head">
                <p className="section-kicker">About</p>
                <h2 id="profile-title" className="section-title" tabIndex={-1}>
                    Profile & contact
                </h2>
                <p className="section-copy">Role, location, and contact details.</p>
            </div>

            <motion.div className="profile-tags" aria-label="Profile highlights" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
                {profileHighlights.map((item) => (
                    <motion.div className="profile-chip" key={item.label} variants={itemVariants} whileHover={{ y: -2, transition: { duration: 0.2 } }}>
                        <span className="profile-chip-label">{item.label}</span>
                        <span className="profile-chip-value">{item.value}</span>
                    </motion.div>
                ))}
            </motion.div>

            <motion.dl className="info-grid" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
                {infoRows.map((row) => {
                    const isExternalLink = row.href?.startsWith('http');

                    return (
                        <motion.div className="info-item" key={row.label} variants={itemVariants} whileHover={{ y: -2, transition: { duration: 0.2 } }}>
                            <dt className="info-label">{row.label}</dt>
                            <dd className="info-value">
                                {row.href ? (
                                    <a href={row.href} target={isExternalLink ? '_blank' : undefined} rel={isExternalLink ? 'noopener noreferrer' : undefined}>
                                        {row.value}
                                    </a>
                                ) : (
                                    <span>{row.value}</span>
                                )}
                            </dd>
                        </motion.div>
                    );
                })}
            </motion.dl>

            <motion.div className="contact-actions" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
                <motion.a className="info-button info-button-primary" href={`mailto:${personalInfo.email}`} variants={itemVariants} whileHover={{ y: -2, transition: { duration: 0.2 } }}>
                    Email me
                </motion.a>
                <motion.a className="info-button info-button-secondary" href={personalInfo.github} target="_blank" rel="noopener noreferrer" variants={itemVariants} whileHover={{ y: -2, transition: { duration: 0.2 } }}>
                    GitHub
                </motion.a>
            </motion.div>
        </motion.section>
    );
};

export default PersonalInfo;
