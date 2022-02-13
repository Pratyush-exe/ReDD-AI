import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../Styles/Accordion.css"

const Accordion = ({ i, expanded, setExpanded, answer, question }) => {
  const isOpen = i === expanded;

  return (
    <div className="Accordion-card"> 
      <motion.header
        className="Questions"
        initial={false}
        animate={{ backgroundColor: isOpen ? "#FF0088" : "#0055FF" }}
        onClick={() => setExpanded(isOpen ? false : i)}
      > {question} </motion.header>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="Answers"
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto", marginTop: '20px', marginBottom: '10px' },
              collapsed: { opacity: 0, height: 0, marginTop: '0px', marginBottom: '0px'}
            }}
            transition={{ duration: 0.3}}
          ><p>{answer}</p></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;