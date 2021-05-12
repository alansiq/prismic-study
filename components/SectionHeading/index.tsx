import styles from "./SectionHeading.module.scss";


interface HeadingProps {
  number?: number,
  text: string,
}

const SectionHeading:React.FC<HeadingProps> = (props) => {

    return (
        <>
            <div className={styles.HeadingContainer}>
                <small>{props.number}</small>
                <h1>{props.text}</h1>
            </div>            

        </>
    )
}


export default SectionHeading;