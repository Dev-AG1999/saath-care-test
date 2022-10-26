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
  width: WINDOW_WIDTH > 720 ? "500px" : "300px",
  height: WINDOW_WIDTH > 720 ? "70%" : "90%",
  backgroundColor: "#FFFFFF",
  borderWidth: "5px",
  borderRadius: "20px",
  boxShadow: "0px 0px 9px 0px #b8b8b8",
  margin: "4em",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  flexDirection: "column" as "column",
};

export const ProfileStyle = {
  display: "flex",
  flexDirection: "column" as "column",
  height: "35%",
  alignItems: "center",
  justifyContent: "space-between",
};
