import { WINDOW_WIDTH } from "../constants";


export const MainLayoutStyle = {
  width: "100%",
  height: "100vh",
  background:
    "linear-gradient(162deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 34%, rgba(0,212,255,1) 65%, rgba(0,11,255,1) 99%)",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",

  
};

export const CardStyle = {
  backgroundColor: "#FFFFFF",
  borderWidth: "5px",
  borderRadius: "20px",
  boxShadow: "0px 0px 9px 0px #b8b8b8",
  margin: "4em",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "column" as "column",
  paddingTop:"50px",
};

export const ProfileStyle = {
  display: "flex",
  flexDirection: "column" as "column",
  height: "35%",
  alignItems: "center",
  justifyContent: "space-between",
};

export const ButtonStyle = {
  backgroundColor: "#6877CA",
  color: "#fff",
  fontSize: "15px",
  width: "150px",
  padding: "15px 20px",
  display: "inline-block",
  textAlign: "center" as "center",
  margin: "4px 2px",
  fontWeight: "bold",
  borderWidth: "1px",
  borderColor: "#6877CA",
  borderRadius: "50px",
  cursor:"pointer"
};

export const BackButtonStyle = {
  fontSize: "15px",
  display: "flex",
  width:"100%", 
  fontWeight: "bold",
  border:"none",
  background:"transparent",
  margin:"0 10px",
  color:"#9b9999",
  marginTop:"-20px",
  cursor:"pointer"
 
};

export const InputStyle = {
  height: "30px",
  borderWidth: "1px",
  borderRadius: "30px",
  borderColor: "#6877CA",
  padding: "10px",
  fontSize: "20px",
};

export const ForgotPasswordWrapper = {
  width: "100%",
  display: "flex",
  flexDirection: "row" as 'row',
  alignItems: "center",
  justifyContent: "center",
};

export const ResetLinkStyle = {
  fontSize: "14px",
  marginBottom: "10px",
  marginLeft: "5px",
  color: "#6877CA",
  fontWeight: "bold",
};

export const CheckBoxBtnWrapper = {
  width: "100%",
  height: "100%",
  alignItems: "center",
  justifyContent: "space-between",
  display: "flex",
  flexDirection: "row" as "row",
  marginTop: "20px",
};

