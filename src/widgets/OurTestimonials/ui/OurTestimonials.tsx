import styles from './OurTestimonials.module.scss';
import { TestimonialCard } from './TestimonialCard';

export interface TestimonialItem {
    text:string,
    name:string,
    avatar:string,
    profession:string,

}

const testimonials: TestimonialItem[] = [
    {
        text:"Working with DigitX was a pleasure. Their web design team created a stunning website that perfectly captured our brand's essence. The feedback from our customers has been overwhelmingly positive.",
        name:"Mark Roberts",
        avatar:"/public/avatars/three.png",
        profession:"Founder of GreenEarth Eco Store",
    },
    {
        text:"The mobile app DigitX developed for us exceeded our expectations. Its user-friendly interface and seamless functionality have earned us rave reviews from our users.",
        name:"Lisa Williams",
        avatar:"/public/avatars/one.png",
        profession:"Head of Product at HealthTech Innovations",
    },
    {
        text:"DigitX transformed our outdated website into a modern, responsive platform. Their attention to detail and ability to understand our vision made the entire process smooth and hassle-free.",
        name:"Michael Johnson",
        avatar:"/public/avatars/two.png",
        profession:"Marketing Manager at GlobalTech Solutions.",
    },
    
];

export function OurTestimonials() {
    return (
        <div className={styles.testimonials}>
            <div className={styles.header}>
                <div className={styles.title}> Our <span>Testimonials</span></div>
                <div className={styles.description}>
                Don't just take our word for it; hear what our satisfied clients have to say about their experience with DigitX. We take pride in building lasting relationships and delivering exceptional results.
                </div>
            </div>
            <div className={styles.shadowLeft}></div>
            <div className={styles.shadowRight}></div>
            <div className={styles.scroll}>
                <div className={styles.cards}>
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} {...testimonial} />
                    ))}
                </div>
                <div className={styles.cards}>
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} {...testimonial} />
                    ))}
                </div>
            </div>
        </div>
    );
}; 