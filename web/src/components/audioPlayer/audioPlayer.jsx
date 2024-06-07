import {
  Box,
  Text,
  HStack,
  Button,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Icon,
} from "@chakra-ui/react";
import "./audioPlayer.css"; // Assuming your styles are in this file
import React, { useState, useRef, useEffect } from "react";
import { PlayIcon, PauseIcon } from "../icons/icons";

function AudioPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.05); // Default volume to 10%

  const MAX_VOLUME = 0.05; // Define maximum volume

  const togglePlayPause = () => {
    const audio = audioRef.current;
    audio.volume = volume; // Ensure the volume is set to the current state value

    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    audio.muted = !audio.muted;
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (value) => {
    const audio = audioRef.current;
    const newVolume = Math.min(value, MAX_VOLUME); // Ensure volume doesn't exceed MAX_VOLUME
    audio.volume = newVolume;
    setVolume(newVolume);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  useEffect(() => {
    const audio = audioRef.current;

    const updateCurrentTime = () => {
      setCurrentTime(audio.currentTime);
      if (audio.currentTime === audio.duration) {
        audio.play();
        setCurrentTime(0);
      }
    };

    const updateDuration = () => {
      setDuration(audio.duration);
    };

    audio.addEventListener("timeupdate", updateCurrentTime);
    audio.addEventListener("loadedmetadata", updateDuration);

    return () => {
      audio.removeEventListener("timeupdate", updateCurrentTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
    };
  }, []);

  return (
    <Box bg="transparent" borderRadius="md">
      <div className="audio-player">
        <audio id="audio" ref={audioRef}>
          <source
            src={`${process.env.PUBLIC_URL}/audio/BeautifulThings.mp3`}
            type="audio/mpeg"
          />
          Your browser does not support the audio element.
        </audio>
        <div className="controls">
          <HStack spacing="10px" align="center">
            <Button
              onClick={togglePlayPause}
              bg={"transparent"}
              _hover={{ bg: "transparent" }}
              _active={{ bg: "transparent" }}
            >
              {isPlaying ? (
                <Icon as={PauseIcon} boxSize={6} color="#000035" />
              ) : (
                <Icon as={PlayIcon} boxSize={6} color="#000035" />
              )}
            </Button>
            {/* <Button onClick={toggleMute}>{isMuted ? "Unmute" : "Mute"}</Button> */}
            <Slider
              aria-label="time-slider"
              value={currentTime}
              min={0}
              max={duration}
              onChange={(val) => {
                const audio = audioRef.current;
                audio.currentTime = val;
                setCurrentTime(val);
              }}
              width={"50px"}
            >
              <SliderTrack bg="gray.200">
                <SliderFilledTrack bg="blue.500" />
              </SliderTrack>
              <SliderThumb boxSize={3} />
            </Slider>
            <Text className="duration">{formatTime(currentTime)}</Text>
            {/* <Slider
              aria-label="volume-slider"
              value={volume}
              min={0}
              max={MAX_VOLUME} // Set max volume to 10%
              step={0.01}
              onChange={handleVolumeChange}
            >
              <SliderTrack bg="gray.200">
                <SliderFilledTrack bg="blue.500" />
              </SliderTrack>
              <SliderThumb boxSize={4} />
            </Slider> */}
          </HStack>
        </div>
      </div>
    </Box>
  );
}

export default AudioPlayer;
