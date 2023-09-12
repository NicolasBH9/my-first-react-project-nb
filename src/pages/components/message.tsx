import styles from './message.module.css'

function Message() {
    
    const name = 'Nicolás Barragán'

    return (
        <main className={styles.title}>
            <h1>Hello World!</h1>
            <h1>My name is {name} </h1>
        </main>
    )
}

export default Message;