import { ButtonHTMLAttributes, FC } from 'react';
import styles from './Button.module.scss';
import clsx from 'clsx';


export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' ;
}

export function Button({variant = 'primary',...props}: ButtonProps){

    let styleClass:string;
    switch(variant){
        case 'primary':
            styleClass = styles.primary;
            break;
        case 'secondary':
            styleClass = styles.secondary;
            break;
    }
    return (
        <button {...props} className={clsx(styleClass,styles.button,props.className)} />
    );
}; 