import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
export const chatStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  header: {
    width: "100%",
    // height: height * 8 / 100,
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    gap: 1,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "#1f2c34",
  },
  backButton: {
    width: "20%",
    height: "80%",
  },
  backButtonIcon: {
    fontSize: 25,
    color: "white",
  },
  backButtonImage: {
    width: 35,
    height: 35,
    borderRadius: 20,
    marginLeft: 5,
  },
  backButtonContent: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  nameButton:{
    width: "50%",
    height: "100%",
    marginLeft:15
  },
  nameContent:{
    width: "100%",
    height: "100%",
    justifyContent:"center",
    alignItems: "flex-start",
    gap:4,
  },
  nameText:{
    fontSize: 15,
    color:"#ecf4f6",
    fontWeight:"700",
  },
  lastSeen:{
    color:"#cfd7dc",
    fontSize:12,
    fontWeight:"500",
  },
  headerIcons:{
    width: "25%",
    height: "100%",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
  },
  headerButton:{
    height:"80%",
    width:"33%",
    borderRadius:20,
    alignItems:"center",
    justifyContent:"center",
  },
  headerIcon:{
    fontSize:25,
    color:"white",
    marginRight: 10
  },
  messageContent:{
    width:"100%",
    height:height * 7 / 100,
    position:"absolute",
    bottom: 7,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    paddingHorizontal: 10
  },
  messageBox:{
    width:"80%",
    height:"100%",
    backgroundColor:"#1f2c34",
    flexDirection:"row",
    alignItems:"center",
    borderRadius:30,
    paddingHorizontal:5,
    marginRight:10
  },
  messageButton:{
    width: 35,
    height:35,
    borderRadius:30,
    justifyContent:"center",
    alignItems:"center",
  },
  messageInput:{
    height:"80%",
    width:"60%",
    alignItems:"center",
    color:"white"
  },
  messageIcon:{
    fontSize:25,
    color:"#8b99a4"
  },
  voiceMessageButton:{
    width: 55,
    height: 55,
    borderRadius:30,
    backgroundColor:"#00a884",
    justifyContent:"center",
    alignItems:"center",
    marginLeft:5,
    marginBottom:5
  },
  voiceMessageIcon:{
    fontSize:30,
    color:"white",
  },
  chatContainer:{
    width: "100%",
    height: "100%",
    position:"absolute",
    bottom:0,
    // paddingHorizontal:10,
    paddingBottom:65,
    justifyContent:"flex-end",
    zIndex:-1,
    paddingTop: 62,
  },
  chatBoxRight:{
    height:"auto",
    backgroundColor:"#005d4b",
    borderRadius: 10,
    paddingVertical:5,
    paddingHorizontal: 10,
    alignSelf:"flex-end",
    marginHorizontal: 10
    // marginBottom:10,
  },
  chatBoxLeft:{
    height:"auto",
    backgroundColor:"#1f2c34",
    borderRadius: 10,
    paddingVertical:5,
    paddingHorizontal: 10,
    alignSelf:"flex-start",
    marginHorizontal: 10
    // marginBottom:10,
  },
  chatLine:{
    marginBottom:10,
  },
  chatHighlight:{
    backgroundColor: 'rgba(52, 52, 52, 0.8)'
  },
  chatText:{
    color:"white",
    fontSize: 16,
    fontWeight:"600",
  },
  chatBottomText:{
    display: "flex",
    flexDirection:"row",
    justifyContent:"space-between",
  },
  chatMarked:{
    left:0,
    color:"#FFA500",
    textAlign:"left",
    fontSize: 16,
  },
  chatTime:{
    right:0,
    color:"#89bdb4",
    textAlign:"right",
    fontSize: 12,
  },
  backGrounImage:{
    position:"absolute",
    zIndex:-1,
    width:width,
    // height:height,
    height: '100%'
  }
});
