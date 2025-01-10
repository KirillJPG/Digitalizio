import { AdvantageCard, AdvantageCardProps } from "./AdvantageCard";
import style from "./Advantages.module.scss"
import CuttingIcon from   "@public/advan/cutting.svg?react"
import ExpertiseIcon from "@public/advan/expertise.svg?react"
import MarketingIcon from "@public/advan/marketing.svg?react"
import MobileIcon from    "@public/advan/mobile.svg?react"
import SearchIcon from    "@public/advan/search.svg?react"
import TailoredIcon from  "@public/advan/tailored.svg?react"


const advantages: AdvantageCardProps[] = [
    {
        title: 'Expertise That Drives Results',
        description: 'Our team of seasoned professionals brings years of experience and expertise to the table.',
        icon: <ExpertiseIcon />
    },
    {
        title: 'Tailored Business Solutions ',
        description: 'We understand that every business is unique. That\'s why our solutions are customized.',
        icon: <TailoredIcon />
    },
    {
        title: 'Cutting-Edge Web Design',
        description: 'Leave a lasting impression on your audience with our top-notch web design services.',
        icon: <CuttingIcon />
    },
    {
        title: 'Mobile-First Approach',
        description: 'In today\'s mobile-centric world, we prioritize mobile-first design to ensure your website.',
        icon: <MobileIcon />
    },
    {
        title: 'Marketing Strategies',
        description: 'Our data-driven marketing strategies allow us to target the right audience with precision',
        icon: <MarketingIcon />
    },
    {
        title: 'Search Engine Optimization',
        description: '(SEO) Mastery Boost your online visibility with our expert SEO techniques.',
        icon: <SearchIcon />
    },

];

export const Advantages = () => {
    return (
        <div className={style.advantages}>
            <div className={style.header}>
                <div className={style.title}>
                    Reasons to Choose DigitX for <br />
                    <span>Your Digital Journey</span>
                </div>
                <div className={style.description}>
                    Partnering with DigitX offers a multitude of advantages. Experience increased brand visibility, improved customer engagement, and higher ROI. Our tailored solutions are designed to meet your unique business needs, ensuring lasting success.
                </div>
            </div>
            <div className={style.cards}>
                {advantages.map((advantage) => (
                    <AdvantageCard key={advantage.title} {...advantage} />
                ))}
            </div>
        </div>
    );
}; 