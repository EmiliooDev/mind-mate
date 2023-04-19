import styles from "~/components/Messages/Messages.module.css"

const Messages = ({ chatLog }: any) => { 
  return (
    <div className={styles.messagesContainer}>
      {
        chatLog.map((message: any, index: any) => (
          message.role === "bot" ? (
            <div key={index} className={styles.botMessage}>
              {message.message}
            </div>
          ) : (
            <div key={index} className={styles.userMessage}>
              {message.message}
            </div>
          )
        ))
      } 
    </div>
  )
}

export default Messages