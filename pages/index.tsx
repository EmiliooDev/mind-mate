import Head from 'next/head'
import styles from '~/styles/Home.module.css'
import ChatCompletion from '~/hooks/ChatCompletion'
import MessageBar from '~/components/MessageBar/MessageBar'
import Messages from '~/components/Messages/Messages'

export default function Home() {

  const {
    inputValue,
    setInputValue,
    handleSubmit,
    chatLog,
  } = ChatCompletion()
  

  return (
    <>
      <Head>
        <title>Mind Mate</title>
        <meta name="description" content="I'm your mate, mate." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content='#4B4B4B'/>
        <link rel="manifest" href="manifest.json" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.header}>
          <h2>Mind Mate</h2>
        </div>   

        <Messages chatLog={chatLog} /> 

        <MessageBar handleSubmit={handleSubmit} setInputValue={setInputValue} inputValue={inputValue} />
      </main>
    </>
  )
}
