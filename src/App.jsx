import {
  selectIsConnectedToRoom,
  useHMSActions,
  useHMSStore,
} from "@100mslive/react-sdk";
import "./App.css";
import JoinForm from "./Components/JoinForm";
import { useEffect } from "react";
import Conference from "./Components/Conference";
import Footer from "./Components/Footer";
import Chat from "./Components/Chat";

function App() {
  const isConnected = useHMSStore(selectIsConnectedToRoom);
  const hmsActions = useHMSActions();

  useEffect(() => {
    window.onunload = () => {
      if (isConnected) {
        hmsActions.leave();
      }
    };
  }, [hmsActions, isConnected]);

  return (
    <div className="App">
      {isConnected ? (
        <>
          <div className="main-layout">
            <Conference />
            <Chat /> {/* 👈 Add it here */}
          </div>
          <Footer />
        </>
      ) : (
        <JoinForm />
      )}
    </div>
  );
  
}

export default App;
