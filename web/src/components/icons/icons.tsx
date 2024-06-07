import { createIcon } from "@chakra-ui/react";

export const PlayIcon = createIcon({
  displayName: "PlayIcon",
  viewBox: "0 0 24 24",
  path: <path fill="currentColor" d="M8 5v14l11-7z" />,
});

export const PauseIcon = createIcon({
  displayName: "PauseIcon",
  viewBox: "0 0 24 24",
  path: <path fill="currentColor" d="M6 19h4V5H6v14zM14 5v14h4V5h-4z" />,
});
