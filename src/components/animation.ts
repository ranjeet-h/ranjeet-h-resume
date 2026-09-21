const springEase = [0.22, 1, 0.36, 1] as const;

export const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.07,
            delayChildren: 0.05,
        },
    },
};

export const sectionVariants = {
    hidden: {
        opacity: 1,
        y: 22,
        scale: 0.98,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.58,
            ease: springEase,
            staggerChildren: 0.05,
            delayChildren: 0.06,
        },
    },
};

export const scrollVariants = {
    hidden: {
        opacity: 1,
        y: 26,
        scale: 0.98,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.64,
            ease: springEase,
            staggerChildren: 0.05,
            delayChildren: 0.06,
        },
    },
};

export const headerVariants = {
    hidden: {
        opacity: 1,
        y: 16,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.58,
            ease: springEase,
            staggerChildren: 0.1,
            delayChildren: 0.08,
        },
    },
};

export const profileImageVariants = {
    hidden: {
        opacity: 1,
        x: -20,
        scale: 0.97,
        rotate: 0,
    },
    visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        rotate: 0,
        transition: {
            duration: 0.7,
            ease: springEase,
        },
    },
};

export const textVariants = {
    hidden: {
        opacity: 1,
        y: 14,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.48,
            ease: springEase,
            staggerChildren: 0.05,
            delayChildren: 0.06,
        },
    },
};

export const statsVariants = {
    hidden: {
        opacity: 1,
        y: 12,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.36,
            ease: springEase,
            staggerChildren: 0.05,
            delayChildren: 0.05,
        },
    },
};

export const itemVariants = {
    hidden: {
        opacity: 1,
        y: 12,
        scale: 0.985,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.36,
            ease: springEase,
        },
    },
};
