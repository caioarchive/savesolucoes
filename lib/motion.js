export const smoothEase = [0.22, 1, 0.36, 1];

export const durations = {
  fast: 0.2,
  normal: 0.6,
  slow: 0.72,
};

export const navigationSpring = {
  type: "spring",
  stiffness: 260,
  damping: 30,
  mass: 0.7,
};

export const cursorSpring = {
  stiffness: 500,
  damping: 35,
  mass: 0.35,
};

export const parallaxSpring = {
  stiffness: 90,
  damping: 25,
  mass: 0.8,
};

export const viewportOnce = {
  once: true,
  amount: 0.2,
};

export const fadeUpVariants = {
  hidden: {
    opacity: 0,
    y: 26,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.normal,
      ease: smoothEase,
    },
  },
};

export const staggerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export const subtleFadeVariants = {
  hidden: {
    opacity: 0,
    y: 14,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: smoothEase,
    },
  },
};
