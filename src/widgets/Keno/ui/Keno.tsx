import { KenoGrid } from "@/features/KenoGrid";
import styles from "./Keno.module.scss";
import { KenoForm } from "@/features/KenoForm/ui/KenoForm";
import { XList } from "./XList";

export function Keno() {
    return (
        <div className={styles.keno}>
           <XList />
           <KenoGrid />
           <KenoForm />
        </div>
    );
}
