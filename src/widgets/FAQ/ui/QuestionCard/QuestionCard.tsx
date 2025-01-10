import { useState } from "react";
import { FAQItem } from "../FAQ";
import styles from './QuestionCard.module.scss';
import clsx from "clsx";

export function QuestionCard({question, answer}:FAQItem) {
    const [isOpen, setIsOpen] = useState(false);



    return (
        <div 
            className={styles.card}
            onClick={() => setIsOpen(isOpen => !isOpen)}
        >
            <div className={styles.header}>
                <div className={styles.question}>
                    {question}
                </div>
                <div className={styles.toggle}>
                    {isOpen ? '−' : '+'}
                </div>
            </div>
            <div 
                className={clsx(
                    styles.answer,
                    isOpen && styles.open
                )}
            >
                {answer}
            </div>
        </div>
    );
}; 