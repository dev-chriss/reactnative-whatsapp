import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { routeStyles } from "../styles/routeStyle";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useDispatch, useSelector } from 'react-redux'

let data = [
    {
      "_id": "64712fbf112f1db7ed7f029a",
      "image": "https://picsum.photos/id/1/80/80",
      "name": "Willie Russo",
<<<<<<< HEAD
      "lastmessage": "Her daily goal was to improve on yesterday",
=======
      "about": "Her daily goal was to improve on yesterday",
>>>>>>> e5ed6fd (first commit)
      "isActive": true,
      "registered": "2023-05-24 05:48"
    },
    {
      "_id": "64712fbfbb7b9b873c30ac61",
      "image": "https://picsum.photos/id/29/80/80",
      "name": "Hahn Beach",
<<<<<<< HEAD
      "lastmessage": "I hate cassowaries inside a house",
=======
      "about": "I hate cassowaries inside a house",
>>>>>>> e5ed6fd (first commit)
      "isActive": false,
      "registered": "2023-05-24 10:33"
    },
    {
      "_id": "64712fbf6f8ffb55cb07cf22",
      "image": "https://picsum.photos/id/63/80/80",
      "name": "Jasmine Avila",
<<<<<<< HEAD
      "lastmessage": "Oh, ducks are SO BIG!",
=======
      "about": "Oh, ducks are SO BIG!",
>>>>>>> e5ed6fd (first commit)
      "isActive": true,
      "registered": "2023-05-24 13:38"
    },
    {
      "_id": "64712fbf1f035bf4bf54d8c2",
      "image": "https://picsum.photos/id/52/80/80",
      "name": "Thomas Kramer",
<<<<<<< HEAD
      "lastmessage": "I like dogs inside an onion",
=======
      "about": "I like dogs inside an onion",
>>>>>>> e5ed6fd (first commit)
      "isActive": true,
      "registered": "2023-05-24 18:52"
    },
    {
      "_id": "64712fbf12f7297a9d1760cb",
      "image": "https://picsum.photos/id/41/80/80",
      "name": "Casandra Cabrera",
<<<<<<< HEAD
      "lastmessage": "Awwww! The gharial will kick that laptop",
=======
      "about": "Awwww! The gharial will kick that laptop",
>>>>>>> e5ed6fd (first commit)
      "isActive": false,
      "registered": "2023-05-26 22:09"
    },
    {
      "_id": "64712fbf57d1294bbce80635",
      "image": "https://picsum.photos/id/42/80/80",
      "name": "Mabel Gilbert",
<<<<<<< HEAD
      "lastmessage": "This hyrax is so helpful!",
=======
      "about": "This hyrax is so helpful!",
>>>>>>> e5ed6fd (first commit)
      "isActive": true,
      "registered": "2023-05-27 00:40"
    },
    {
      "_id": "64712fbf153eafd807a10e58",
      "image": "https://picsum.photos/id/8/80/80",
      "name": "Atkins Walsh",
<<<<<<< HEAD
      "lastmessage": "There must be at least 53 hippos over there!",
=======
      "about": "There must be at least 53 hippos over there!",
>>>>>>> e5ed6fd (first commit)
      "isActive": false,
      "registered": "2023-05-02 04:55"
    },
    {
      "_id": "64712fbfa32108a582eea1ce",
      "image": "https://picsum.photos/id/72/80/80",
      "name": "Fuentes Montgomery",
<<<<<<< HEAD
      "lastmessage": "That meerkat is so cute!",
=======
      "about": "That meerkat is so cute!",
>>>>>>> e5ed6fd (first commit)
      "isActive": true,
      "registered": "2023-05-27 13:57"
    },
    {
      "_id": "64712fbf7098fd85acae102e",
      "image": "https://picsum.photos/id/88/80/80",
      "name": "Knight Roberson",
<<<<<<< HEAD
      "lastmessage": "Awwww! A rabbit will grin at that house",
=======
      "about": "Awwww! A rabbit will grin at that house",
>>>>>>> e5ed6fd (first commit)
      "isActive": true,
      "registered": "2023-05-27 09:23"
    },
    {
      "_id": "64712fbfb6694fc5dea8fa21",
      "image": "https://picsum.photos/id/85/80/80",
      "name": "Daniels Goodman",
<<<<<<< HEAD
      "lastmessage": "I hate cassowaries inside a keyboard",
=======
      "about": "I hate cassowaries inside a keyboard",
>>>>>>> e5ed6fd (first commit)
      "isActive": true,
      "registered": "2023-05-27 20:56"
    }
  ].sort((a,b) => (Date.parse(a.registered) > Date.parse(b.registered) ? -1 : 1));

const getDate = (registered) => {
  const today = new Date();
  const dateIso = new Date(registered);
  const date = (today - dateIso) / (1000 * 60 * 60 * 24);
  if (date < 2 && date > 1) {
    return("Yesterday");
  } else if (date >= 2) {
    return (registered.split(" ",1));
  } else {
    if (dateIso.getDay() < today.getDay()) return("Yesterday");
    if (dateIso.getHours() >= 5 && dateIso.getHours() < 12)
    return(
        "Morning " +
        dateIso.getHours().toString() +
        ":" +
        dateIso.getMinutes().toString()
      );
    else if (dateIso.getHours() >= 12 && dateIso.getHours() < 17)
    return(
        "Afternoon " +
        dateIso.getHours().toString() +
        ":" +
        dateIso.getMinutes().toString()
      );
    else if (dateIso.getHours() >= 17 && dateIso.getHours() < 21)
    return(
        "Evening " +
        dateIso.getHours().toString() +
        ":" +
        dateIso.getMinutes().toString()
      );
    else
    return(
        "Night " +
        dateIso.getHours().toString() +
        ":" +
        dateIso.getMinutes().toString()
      );
  }
};

const onChatBox = (item, navigation) => {
  navigation.navigate("ChatScreen", {item:item});
}

const GetChatList = ({ item, navigation }) => (
  <TouchableOpacity style={routeStyles.chatBox} onPress={()=>onChatBox(item,navigation)}>
    <TouchableOpacity style={routeStyles.fotoButton}>
      <Image source={{ uri: item.image }} style={routeStyles.chatFoto} />
    </TouchableOpacity>
    <View style={routeStyles.chatInfo}>
      <View style={routeStyles.chatTopInfo}>
        <Text style={routeStyles.chatName}>{item.name}</Text>
        <Text style={routeStyles.chatDate}>{getDate(item.registered)}</Text>
      </View>
      <View style={routeStyles.chatBottomInfo}>
        {!item.isActive ? (
          <Ionicons
            name="ios-checkmark-outline"
            style={routeStyles.chechMark}
          />
        ) : (
          <Ionicons
            name="ios-checkmark-done-sharp"
            style={routeStyles.chechMarkDone}
          />
        )}
        <Text style={routeStyles.message}>
          {item.lastmessage.length > 36
            ? item.lastmessage.slice(0, 36) + "..."
            : item.lastmessage}
        </Text>
      </View>
    </View>
  </TouchableOpacity>
);
export default function ChatListComponent({navigation}) {
  const searchPhrase = useSelector((state) => state.search.searchPhrase);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (searchPhrase) {
      setFilteredData(data.filter(item => 
        String(item.name).toLowerCase().includes(searchPhrase.toLowerCase()) || 
<<<<<<< HEAD
        String(item.lastmessage).toLowerCase().includes(searchPhrase.toLowerCase())
=======
        String(item.about).toLowerCase().includes(searchPhrase.toLowerCase())
>>>>>>> e5ed6fd (first commit)
      ))
    } else {
      setFilteredData(data);
    }
  }, [searchPhrase]);

  return (
    <View style={routeStyles.listContainer}>
      {!filteredData.length? (<Text style={routeStyles.dataNotFound}>Data not found</Text>) :
      (<FlatList
        data={filteredData}
        renderItem={({ item }) => <GetChatList item={item} navigation={navigation} />}
        keyExtractor={(item) => item._id}
      />)
    }
    </View>
  );
}
