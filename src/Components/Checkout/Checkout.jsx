import styles from './Checkout.module.css'

const Checkout = ({ handleSubmit, userData, setUserData }) => {
    return (
        <div className={styles.checkout_container}>
            <form onSubmit={handleSubmit}>
                <input
                    name="name"
                    type="text"
                    placeholder="Nombre y Apellido"
                    value={userData.name}
                    onChange={e => setUserData({ ...userData, name: e.target.value })} />
                <input
                    name="email"
                    type="text"
                    placeholder="Email"
                    value={userData.email}
                    onChange={e => setUserData({ ...userData, email: e.target.value })} />
                <input
                    name="phone"
                    type="text"
                    placeholder="Teléfono"
                    value={userData.phone}
                    onChange={e => setUserData({ ...userData, phone: e.target.value })} />
                <button type="submit">Finalizar compra</button>
            </form>
        </div>
    )
}

export default Checkout