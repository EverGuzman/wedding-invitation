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
import React, { useState, useEffect } from "react";
import { PlayIcon, PauseIcon } from "../icons/icons";
import { useAudio } from "../../contexts/AudioContext";

function AudioPlayer() {
  const { audioRef, isPlaying, togglePlayPause } = useAudio();
  // const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  // const [volume, setVolume] = useState(0.02); // Default volume to 10%

  // const MAX_VOLUME = 0.1; // Define maximum volume
  const OFFSET = 6; // Define the offset in seconds

  // const toggleMute = () => {
  //   const audio = audioRef.current;
  //   if (audio) {
  //     audio.muted = !audio.muted;
  //     setIsMuted(!isMuted);
  //   }
  // };

  // const handleVolumeChange = (value) => {
  //   const audio = audioRef.current;
  //   if (audio) {
  //     const newVolume = Math.min(value, MAX_VOLUME); // Ensure volume doesn't exceed MAX_VOLUME
  //     audio.volume = newVolume;
  //     setVolume(newVolume);
  //   }
  // };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  useEffect(() => {
    const audio = audioRef.current;

    const updateCurrentTime = () => {
      if (audio) {
        setCurrentTime(audio.currentTime - OFFSET);
        if (audio.currentTime === audio.duration) {
          audio.play();
          setCurrentTime(0);
        }
      }
    };

    const updateDuration = () => {
      if (audio) {
        setDuration(audio.duration);
      }
    };

    const setStartTime = () => {
      if (audio) {
        audio.currentTime = OFFSET; // Set the start time to 6 seconds
      }
    };

    if (audio) {
      audio.addEventListener("timeupdate", updateCurrentTime);
      audio.addEventListener("loadedmetadata", updateDuration);
      audio.addEventListener("loadedmetadata", setStartTime);
    }

    return () => {
      if (audio) {
        audio.removeEventListener("timeupdate", updateCurrentTime);
        audio.removeEventListener("loadedmetadata", updateDuration);
        audio.removeEventListener("loadedmetadata", setStartTime);
      }
    };
  }, [audioRef]);

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
            <Slider
              aria-label="time-slider"
              value={currentTime}
              min={6}
              max={duration}
              onChange={(val) => {
                const audio = audioRef.current;
                if (audio) {
                  audio.currentTime = val;
                  setCurrentTime(val);
                }
              }}
              width={"50px"}
            >
              <SliderTrack bg="gray.200">
                <SliderFilledTrack bg="blue.500" />
              </SliderTrack>
              <SliderThumb boxSize={3} />
            </Slider>
            <Text className="duration">{formatTime(currentTime)}</Text>
          </HStack>
        </div>
      </div>
    </Box>
  );
}

export default AudioPlayer;
