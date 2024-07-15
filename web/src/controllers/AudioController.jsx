import React, { useRef, useState } from "react";
import { Button, Icon } from "@chakra-ui/react";
import AudioPlayer from "../components/audioPlayer/audioPlayer";
import { PlayIcon, PauseIcon } from "../components/icons/icons";

function AudioController() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div>
      <AudioPlayer
        audioRef={audioRef}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        visible={false}
      />
      <Button onClick={togglePlayPause}>
        {isPlaying ? <Icon as={PauseIcon} /> : <Icon as={PlayIcon} />}
      </Button>
    </div>
  );
}

export default AudioController;
