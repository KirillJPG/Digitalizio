
import { useRef } from 'react';
import styles from './CrashRocket.module.scss';

export function CrashRocket() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    return (
        <div className={styles.crashRocket}>
            <canvas className={styles.canvas} ref={canvasRef}></canvas>
        </div>
    );
}
