import styles from "~/components/MessageBar/MessageBar.module.css"

const MessageBar = ({ handleSubmit, setInputValue, inputValue }: any) => {
  

  return (
    <div className={styles.barContainer}>
      <form onSubmit={handleSubmit} className={styles.formParts}>
        <input type="text" placeholder="Type a message"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
         />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default MessageBar
