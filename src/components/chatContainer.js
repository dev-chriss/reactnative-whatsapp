import { View, Text, FlatList, StyleSheet, TouchableOpacity,  } from "react-native";
import React, { useEffect } from "react";
import { chatStyle } from "../styles/chatStyle";

const now = new Date();

export default function ChatContainer({ messages }) {

  const senderId = 'abc';
  
    const renderMessage = ({ item }) => (
      <TouchableOpacity onLongPress={() => console.log('message longpress')}>
        <View
          style={
            item.sender === senderId ? chatStyle.chatBoxRight : chatStyle.chatBoxLeft
          }
        >
            <View>
              <Text style={chatStyle.chatText}>
                {item.message}
              </Text>
            </View>
            <Text style={chatStyle.chatTime}>{item.time} pm</Text>
          
        </View>
      </TouchableOpacity>
    );
  
return (
    <View style={chatStyle.chatContainer}>
        <FlatList
          data={messages}
          renderItem={renderMessage}
          keyExtractor={(item) => item.id.toString()}
        />
    </View>
  );

}
