import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/birthstone";
import "@fontsource/birthstone-bounce";
import "@fontsource/charm";
import "@fontsource/damion";
import { BrowserRouter as Router } from "react-router-dom";
import { useRef, useState } from "react";
import ForceLightMode from "./components/forceLightMode/forceLightMode";
import NavigationBar from "./components/navigantionBar/navigationBar";
import EventDetails from "./pages/eventDetails/eventDetails";
import GiftTable from "./pages/giftTable/giftTable";
import Landing from "./pages/landing/landing";
import PictureGallery from "./pages/pictureGallery/pictureGallery";
import RSVP from "./pages/rsvp/rsvp";
import UsefulInformation from "./pages/usefulInformation/usefulInformation";
import theme from "./theme/extendTheme";
import SaveTheDate from "./pages/saveTheDate/saveTheDate";
import "./App.css"; // Make sure to import your CSS file
import useIntersectionObserver from "./components/useIntersectionObserver/useIntersectionObserver";
import EndLogo from "./pages/endLogo/endLogo";
import TextAfterLanding from "./pages/textAfterLanding/textAfterLanding";
import { AudioProvider } from "./contexts/AudioContext";

export const App = () => {
  const sections = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  const [visibleSections, setVisibleSections] = useState(
    new Array(sections.length).fill(false)
  );

  const setVisible = (index: number, visible: boolean) => {
    setVisibleSections((prev) => {
      const updated = [...prev];
      updated[index] = visible;
      return updated;
    });
  };

  useIntersectionObserver(sections, setVisible);

  return (
    <ChakraProvider theme={theme}>
      <ForceLightMode>
        <Router>
          <AudioProvider>
            <NavigationBar />
            <div
              ref={sections[0]}
              className={visibleSections[0] ? "fade-in" : "fade-out"}
            >
              <Landing />
            </div>
          </AudioProvider>
          <br />
          <div
            ref={sections[1]}
            className={visibleSections[1] ? "fade-in" : "fade-out"}
          >
            <TextAfterLanding />
          </div>
          <br />
          <div
            ref={sections[2]}
            className={visibleSections[2] ? "fade-in" : "fade-out"}
          >
            <SaveTheDate />
          </div>
          <br />
          <div
            ref={sections[3]}
            className={visibleSections[3] ? "fade-in" : "fade-out"}
          >
            <EventDetails />
          </div>
          <br />
          <div
            ref={sections[4]}
            className={visibleSections[4] ? "fade-in" : "fade-out"}
          >
            <GiftTable />
          </div>
          <br />
          <div
            ref={sections[5]}
            className={visibleSections[5] ? "fade-in" : "fade-out"}
          >
            <RSVP />
          </div>
          <br />
          <div
            ref={sections[6]}
            className={visibleSections[6] ? "fade-in" : "fade-out"}
          >
            <PictureGallery />
          </div>
          <br />
          <div
            ref={sections[7]}
            className={visibleSections[7] ? "fade-in" : "fade-out"}
          >
            <EndLogo />
          </div>
        </Router>
      </ForceLightMode>
    </ChakraProvider>
  );
};

export default App;
