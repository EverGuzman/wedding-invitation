import { Box, Text } from "@chakra-ui/react";
import "./audioPlayer.css"; // Assuming your styles are in this file

const audioStyle = {
  bg: "transparent",
};

function AudioPlayer() {
  return (
    <Box padding="4" bg="transparent" borderRadius="md">
      <div class="audio-player">
        <audio id="audio">
          <source src="/audio/BeautifulThings.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <div class="controls">
          <button class="play-pause">Play</button>
          <input type="range" class="seek-bar" value="0" />
          <span class="duration">00:00 / 00:00</span>
        </div>
      </div>
    </Box>
  );
}

export default AudioPlayer;
