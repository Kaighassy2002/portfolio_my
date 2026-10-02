import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const motionTags = {
  div: motion.div,
  li: motion.li,
  section: motion.section,
  article: motion.article,
  footer: motion.footer,
};

const staticTags = {
  div: "div",
  li: "li",
  section: "section",
  article: "article",
  footer: "footer",
};

export default function ScrollReveal({
  as = "div",
  children,
  className = "",
  delay = 0,
  duration = 0.7,
  y = 22,
  x = 0,
  once = true,
  amount = 0.18,
}) {
  const reduceMotion = useReducedMotion();
  const StaticTag = staticTags[as] || "div";

  if (reduceMotion) {
    return <StaticTag className={className}>{children}</StaticTag>;
  }

  const MotionComponent = motionTags[as] || motion.div;

  return (
    <MotionComponent
      className={className}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, amount, margin: "0px 0px -10% 0px" }}
      transition={{ duration, delay, ease }}
    >
      {children}
    </MotionComponent>
  );
}
