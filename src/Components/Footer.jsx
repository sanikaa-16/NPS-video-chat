import { useAVToggle, useHMSActions } from "@100mslive/react-sdk";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrophone,
  faMicrophoneSlash,
  faVideo,
  faVideoSlash,
  faPhoneSlash,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const {
    isLocalAudioEnabled,
    toggleAudio,
    isLocalVideoEnabled,
    toggleVideo,
  } = useAVToggle();
  const hmsActions = useHMSActions();

  const handleLeave = () => {
    hmsActions.leave(); // Leave the call
  };

  return (
    <div className="control-bar">
      <button className="btn-control" onClick={toggleAudio}>
        <FontAwesomeIcon icon={isLocalAudioEnabled ? faMicrophone : faMicrophoneSlash} />
      </button>
      <button className="btn-control" onClick={toggleVideo}>
        <FontAwesomeIcon icon={isLocalVideoEnabled ? faVideo : faVideoSlash} />
      </button>
      <button className="btn-control leave-btn" onClick={handleLeave}>
        <FontAwesomeIcon icon={faPhoneSlash} /> {/* 🚫 Leave call */}
      </button>
    </div>
  );
};

export default Footer;
