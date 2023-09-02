import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { routeStyles } from '../styles/routeStyle'
import Ionicons from "react-native-vector-icons/Ionicons";
import SearchBar from "./searchBar";
import { useDispatch, useSelector } from 'react-redux'

export default function TopBarLinks() {
  const searchPhraseRedux = useSelector((state) => state.search.searchPhrase) || "";
  const [searchPhrase, setSearchPhrase] = useState(searchPhraseRedux);
  const [clicked, setClicked] = useState(false);
  
  return (
    <View>
      {
        clicked ? (
          <SearchBar
              searchPhrase = {searchPhrase}
              setSearchPhrase={setSearchPhrase}
              setClicked={setClicked}
            />
        ):
        <View style={routeStyles.topLinksContent}>
          <Text style={routeStyles.logo}>WhatsApp</Text>
          <View style={routeStyles.topButtons}>
            <Ionicons name="camera-outline" style={routeStyles.topButton}/>
            <TouchableOpacity onPress={() => { setClicked(true); }}>
              <Ionicons name="search" style={routeStyles.topButton}/>
            </TouchableOpacity>
            <Ionicons name='ellipsis-vertical' style={routeStyles.topButton}/>
          </View>
        </View>
    }
    </View>
  )
}