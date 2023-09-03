import { View, Text, FlatList, StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { chatStyle } from "../styles/chatStyle";
import { useDispatch, useSelector } from 'react-redux'
import allActions from "../store/actions";

export default ChatContainer = ({ messages, markedId }) => {
  const senderId = 'abc';
  const dispatch = useDispatch()

  const handleSelectMessage = (id) => {
    dispatch(allActions.messages.markMessage(id));
  };

  const renderMessage = ({ item }) => {
    return (
      <TouchableOpacity style={[chatStyle.chatLine, item.id === markedId ? chatStyle.chatHighlight : '']} 
        onLongPress={() => {
          handleSelectMessage(item.id)
        }}>
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
            <View style={chatStyle.chatBottomText}>
              <View>
                {item.star ? (<MaterialCommunityIcons name="star" style={chatStyle.chatMarked} /> ) :
                  (<></>)
                }
              </View>
              <View>
                <Text style={chatStyle.chatTime}>{item.time} pm</Text>
              </View>
            </View>
          
        </View>
      </TouchableOpacity>
    );
  };

  return (
      <View style={chatStyle.chatContainer}>
        <SafeAreaView style={{flex: 1}}>
          <FlatList
            data={messages}
            renderItem={renderMessage}
            keyExtractor={(item, index) => {
              return index;
            }}
            // getItemLayout = {(data, index) => ({
            //   length: 70,
            //   offset: 70 * index,
            //   index
            // })}
          />
        </SafeAreaView>
      </View>
  );

}
