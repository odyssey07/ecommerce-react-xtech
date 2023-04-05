import styles from "./Loading.module.css"
import ClipLoader from "react-spinners/ClipLoader";

const Loading = () => {
    return (
        <div className={styles.loading_container}>
            <ClipLoader className={styles.clip_loader}
                color="white"
                size={100}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    )
}

export default Loading