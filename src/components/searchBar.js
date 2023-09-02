import React, {useState} from "react";
import { StyleSheet, TextInput, View, Keyboard, Button } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
import { useDispatch, useSelector } from 'react-redux'
import allActions from "../store/actions";

const searchBar = ({searchPhrase, setSearchPhrase, setClicked}) => {
  const dispatch = useDispatch()
  const [text, setText] = useState(searchPhrase);
  
  return (
    <View style={styles.container}>
        <View style={styles.searchBar} >
            {/* search Icon */}
            <Feather
                name="arrow-left"
                size={20}
                color="black"
                style={{ marginRight: 10 }}
                onPress={() => {
                    Keyboard.dismiss();
                    setClicked(false);
                }}
            />
            {/* Input field */}
            <TextInput
                style={styles.input}
                placeholder="Search..."
                value={text}
                onChangeText={setText}
                onSubmitEditing={(event) => {
                    setSearchPhrase(event.nativeEvent.text);
                    dispatch(allActions.search.setSearchPhrase(event.nativeEvent.text));
                }}
            />
            {/* cross Icon, depending on whether the search bar is clicked or not */}
            <Entypo name="cross" size={20} color="black" style={{ padding: 1 }} onPress={() => {
                setText("");
                setSearchPhrase("")
                dispatch(allActions.search.resetSearchPhrase());
            }}/>
        </View>
    </View>
  );
};
export default searchBar;

// styles
const styles = StyleSheet.create({
  container: {
    height: 65,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: 13,

  },
  searchBar: {
    height: "100%",
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: "row",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    fontSize: 16,
    marginLeft: 10,
    width: "90%",
  },
});