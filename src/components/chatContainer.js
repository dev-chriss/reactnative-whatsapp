import { View, Text, FlatList, StyleSheet, TouchableOpacity,  } from "react-native";
import React, { useEffect } from "react";
import { chatStyle } from "../styles/chatStyle";
import { useDispatch, useSelector } from 'react-redux'
import allActions from "../store/actions";

const now = new Date();

export default function ChatContainer({ messages }) {
<<<<<<< HEAD
  const dispatch = useDispatch()
  const senderId = 'abc';
  const messagesRedux = useSelector((state) => state.messages.data);

  useEffect(() => {
    if (messagesRedux) {
      // console.log("\n\n\nmessageRedux:", messagesRedux)
    }
  }, [messagesRedux]);

  const renderMessage = ({ item }) => {
    return (
      <TouchableOpacity onLongPress={() => {
          // console.log('message longpress', item.id);
          dispatch(allActions.messages.updateMessage(item.id));
        }}>
        <View
          style={
            item?.sender === senderId ? chatStyle.chatBoxRight : chatStyle.chatBoxLeft
=======

  const senderId = 'abc';
  
    const renderMessage = ({ item }) => (
      <TouchableOpacity onLongPress={() => console.log('message longpress')}>
        <View
          style={
            item.sender === senderId ? chatStyle.chatBoxRight : chatStyle.chatBoxLeft
>>>>>>> e5ed6fd (first commit)
          }
        >
            <View>
              <Text style={chatStyle.chatText}>
                {item?.message}
              </Text>
            </View>
<<<<<<< HEAD
            <View style={chatStyle.chatBottomText}>
              <Text style={chatStyle.chatMarked}>{item?.marked ? 'marked' : 'not marked'} </Text>
              <Text style={chatStyle.chatTime}>{item?.time} pm</Text>
            </View>
=======
            <Text style={chatStyle.chatTime}>{item.time} pm</Text>
>>>>>>> e5ed6fd (first commit)
          
        </View>
      </TouchableOpacity>
    );
<<<<<<< HEAD
  }

  return (
    <View style={chatStyle.chatContainer}>
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item?.id.toString()}
      />
=======
  
return (
    <View style={chatStyle.chatContainer}>
        <FlatList
          data={messages}
          renderItem={renderMessage}
          keyExtractor={(item) => item.id.toString()}
        />
>>>>>>> e5ed6fd (first commit)
    </View>
  );

}
