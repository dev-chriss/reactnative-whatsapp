import { Image, View } from "react-native";
import React, { useState, useEffect } from "react";
import { chatStyle } from "../styles/chatStyle";
import ChatHeader from "../components/chatHeader";
import ChatContainer from "../components/chatContainer";
import ChatMessage from "../components/chatMessage";
import { useDispatch, useSelector } from 'react-redux'
import allActions from "../store/actions";

export default function ChatScreen({ navigation, route }) {
  const dispatch = useDispatch()
  const [messages, setMessages] = useState([])
  const messagesRedux = useSelector((state) => state.messages.data);

  useEffect(() => {
    // doesnt need repeat API call twice
    if (!(messagesRedux && messagesRedux.length)){
      fetch(`https://private-3f049-chatyoripe.apiary-mock.com/chats/questions`).then((data) => {
        return data.json().then((data)=>{
          dispatch(allActions.messages.setMessages(data));
        })
      })
    }
  }, [])

  useEffect(() => {
    if (messagesRedux) {
      setMessages(messagesRedux);
    }
  }, [messagesRedux]);

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
