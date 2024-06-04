import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/birthstone";
import "@fontsource/birthstone-bounce";
import "@fontsource/charm";
import "@fontsource/damion";
import { BrowserRouter as Router } from "react-router-dom";
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

export const App = () => (
  <ChakraProvider theme={theme}>
    <ForceLightMode>
      <Router>
        <NavigationBar></NavigationBar>
        <Landing />
        <br />
        <SaveTheDate />
        <br />
        <EventDetails />
        <br />
        <GiftTable />
        <br />
        {/* <UsefulInformation /> */}
        <br />
        <RSVP />
        <br />
        <PictureGallery />
      </Router>

      {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
    </ForceLightMode>
  </ChakraProvider>
);
