import { useRef, useEffect, useState } from "react"
import axios from "axios"

const ChatCompletion = () => {
  const [inputValue, setInputValue] = useState('')
  const [chatLog, setChatLog] = useState<{ type: string, message: string}[]>([])
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
  
    if (isLoading) {
      return;
    }
  
    // Add the user message to the chat log
    setChatLog(prevChatLog => [
      ...prevChatLog,
      { type: 'user', message: inputValue }
    ]);
  
    sendMessage(inputValue)
      .then(() => {
        // Clear the input value after the API response is received
        setInputValue('');
      });
  };

  const sendMessage = (message: any) => {
    const url = "/api/chat"
    const data = {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message }]
    }
  
    setIsLoading(true);
  
    // Add an auto-generated message to the chat log
    setChatLog(prevChatLog => [
      ...prevChatLog,
      { type: "bot", message: "Thinking...", role: "bot" }
    ]);
  
    return axios.post(url, data)
      .then((response) => {
        console.log(response);
        // Remove the auto-generated message from the chat log
        setChatLog(prevChatLog => prevChatLog.slice(0, -1));
  
        // Add the bot's response to the chat log
        const responseString = response.data.choices[0].message.content;
        setChatLog(prevChatLog => [
          ...prevChatLog,
          { type: "bot", message: responseString, role: "bot" }
        ]);
  
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
        setError("Something went wrong. Please try again later.");
      });
  };

  return {
    inputValue,
    setInputValue,
    chatLog,
    setChatLog,
    isLoading,
    setIsLoading,
    handleSubmit,
    sendMessage,
    error
  }
}

export default ChatCompletion;