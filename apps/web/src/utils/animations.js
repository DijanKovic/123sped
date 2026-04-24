// Animation variants for motion components
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
  transition: { duration: 0.5, ease: "easeOut" },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
};

export const slideInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
};

export const slideInRight = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" },
};

// Stagger container for animating children sequentially
export const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const itemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Hover animations
export const hoverScale = {
  whileHover: { scale: 1.03 },
  whileTap: { scale: 0.98 },
  transition: { duration: 0.2 },
};

export const hoverLift = {
  whileHover: { y: -4, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" },
  transition: { duration: 0.2 },
};

// Rotating animations
export const spinAnimation = {
  animate: { rotate: 360 },
  transition: { duration: 3, repeat: Infinity, ease: "linear" },
};

// Breathing animation
export const breatheAnimation = {
  animate: { scale: [1, 1.05, 1] },
  transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
};

// Gradient animation
export const gradientAnimation = {
  animate: { backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] },
  transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
};
