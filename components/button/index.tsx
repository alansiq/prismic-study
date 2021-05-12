import styles from './button.module.scss';
import Link from 'next/link';

interface ButtonProps {
    href: string;
    onClick?: any;
    className?: string;
    id?: string;
    disabled?: boolean;
    children?: any;
    externalLink?: boolean;
}


const button = (props: ButtonProps) => {

    let classArray = [styles.buttonComponent];
    props.className ? classArray.push(props.className) : '';
    props.disabled ? classArray.push(styles.buttonDisabled) : '';

    const classList = classArray.join(' ');


    return (
            <Link href={props.href}>
                <a className={classList} id={props.id} onClick={props.onClick}>{props.children}</a>
            </Link>

    )
}
export default button;