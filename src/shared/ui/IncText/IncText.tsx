import { useEffect, useState } from 'react';
import styles from './IncText.module.scss';

export function IncText({ numbers, className }: { numbers: number; className?: string }) {
  const [num, setNum] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (num != numbers && numbers != 0) {
        setNum(prev => prev +  Math.ceil((numbers - prev)*0.05));
      }
      if (numbers == 0) {
        setNum(0)
      }
    }, 10);
    return () => clearInterval(interval);
  }, [numbers]);

  return (
    <div className={className}>
      {num}
    </div>
  );
}

