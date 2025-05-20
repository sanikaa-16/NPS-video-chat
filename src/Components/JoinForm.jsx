import { useHMSActions } from "@100mslive/react-sdk";
import { useState } from "react";

const JoinForm = () => {
  const hmsActions = useHMSActions();
  const [inputValues, setInputValues] = useState({
    name: "",
    roomCode: "", // ✅ Corrected: changed from 'token' to 'roomCode'
  });

  const handleInputChange = (e) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name = "", roomCode = "" } = inputValues; // ✅ Corrected: destructuring correct keys

    try {
      const authToken = await hmsActions.getAuthTokenByRoomCode({ roomCode });

      await hmsActions.join({
        userName: name, // ✅ Corrected: sending actual name as userName
        authToken,
      });
    } catch (e) {
      console.error("Failed to join room:", e);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Join Room</h2>
      <div className="input-container">
        <input
          required
          id="name"
          type="text"
          name="name"
          value={inputValues.name}
          onChange={handleInputChange}
          placeholder="Your Name"
        />
      </div>
      <div className="input-container">
        <input
          required
          id="room-code"
          type="text"
          name="roomCode"
          value={inputValues.roomCode}
          onChange={handleInputChange}
          placeholder="Room Code"
        />
      </div>
      <button type="submit" className="btn-primary">Join</button>
    </form>
  );
};

export default JoinForm;
