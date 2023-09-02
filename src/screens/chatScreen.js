import { Image, View } from "react-native";
import React, { useState, useEffect } from "react";
import { chatStyle } from "../styles/chatStyle";
import ChatHeader from "../components/chatHeader";
import ChatContainer from "../components/chatContainer";
import ChatMessage from "../components/chatMessage";

export default function ChatScreen({ navigation, route }) {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    fetch(`https://private-3f049-chatyoripe.apiary-mock.com/chats/questions`).then((data) => {
      return data.json().then((data)=>{
        setMessages(data)
      })
    })
  }, [])

  return (
    <View style={chatStyle.container}>
      <Image
        source={require("../../assets/wpBackGround.jpg")}
        style={chatStyle.backGrounImage}
      />
      <ChatHeader item={route.params.item} navigation={navigation} />
      <ChatContainer messages={messages} />
      <ChatMessage setMessages={setMessages} messages={messages} />
    </View>
  );
}
