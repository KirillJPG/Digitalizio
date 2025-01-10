import styles from './FAQ.module.scss';
import { QuestionCard } from './QuestionCard/QuestionCard';


export interface FAQItem {
    question: string;
    answer: string;
}

const faqItems: FAQItem[] = [
    {
        question: 'How long does it take to complete a web development project?',
        answer: 'The timeline varies depending on the project\'s complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.'
    },
    {
        question: 'How long does it take to complete a web development project?',
        answer: 'The timeline varies depending on the project\'s complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.'
    },
    {
        question: 'How long does it take to complete a web development project?',
        answer: 'The timeline varies depending on the project\'s complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.'
    },
    {
        question: 'How long does it take to complete a web development project?',
        answer: 'The timeline varies depending on the project\'s complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.'
    },{
        question: 'How long does it take to complete a web development project?',
        answer: 'The timeline varies depending on the project\'s complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.'
    },
];

export function FAQ() {

    return (
        <div className={styles.faq}>
            <div className={styles.header}>
                <div className={styles.title}>
                    Frequently <span>Asked Questions</span>
                </div>
                <div className={styles.description}>
                    Got questions? We've got answers. Check out our frequently asked questions section to find valuable insights into our processes, pricing, and more. Transparency is at the core of our client interactions.
                </div>
            </div>
            <div className={styles.faqs}>
                {faqItems.map((item, index) => (
                    <QuestionCard key={index} question={item.question} answer={item.answer} />
                ))}
            </div>
        </div>
    );
}; 