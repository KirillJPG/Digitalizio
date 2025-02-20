import { Advantages } from "@/widgets/Advantages";
import { GetStarted } from "@/widgets/GetStarted";
import { OurService } from "@/widgets/OurService";
import { OurTestimonials } from "@/widgets/OurTestimonials";
import { OurWorks } from "@/widgets/OurWorks";
import { FAQ } from "@/widgets/FAQ";
import styles from './MainPage.module.scss';
import { Suspense } from "react";
import { Loader } from "@/widgets/Loader";

const MainPage = () => {
    return (
        <Suspense fallback={<Loader />}>
            <div className={styles.mainPage}>
                <GetStarted />
                <Advantages />
                <OurService />
                <OurWorks />
                <OurTestimonials />
                <FAQ />
            </div>
        </Suspense>
    );
};


export default MainPage; 