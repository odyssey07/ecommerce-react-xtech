import styles from './Success.module.css'

import { Link } from "react-router-dom"

const Success = ({ orderId }) => {
    document.title = "Xtech AR | Compra exitosa!"
    return (
        <div className={styles.success_container}>
            <div className={styles.message}>
                <div className={styles.img_container}>
                    <img src="https://res.cloudinary.com/dews3zbls/image/upload/v1680647858/elements/81-818222_check-mark-white-png_nydyoh.png" alt="" />
                </div>
                <p>¡Tu compra ha sido registrada con éxito!</p>
                <p>Te avisaremos cuando los productos esten a camino.</p>

            </div>
            <div className={styles.action}>
                <p>Tu ID de compra</p>
                <p>{orderId}</p>
                <p>¡Lo necesitas para recibir el producto!</p>
                <button>
                    <Link to="/" style={{ textDecoration: "none", color:"white" }}>
                        Continuar comprando
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default Success