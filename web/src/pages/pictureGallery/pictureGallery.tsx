import {
  Heading,
  Stack,
  Text,
  useBreakpointValue,
  Spinner,
} from "@chakra-ui/react";
import { useCallback, useState, useEffect } from "react";
import PhotoAlbum, { PhotoProps } from "react-photo-album";
import usePhotos from "./photos"; // Corrected import

export default function PictureGallery() {
  const photos = usePhotos();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (photos.length > 0) {
      setLoading(false);
    }
  }, [photos]);

  const columns = useBreakpointValue(
    {
      base: 1,
      md: 2,
      xl: 3,
    },
    {
      fallback: "base",
    }
  );
  const spacing = useBreakpointValue(
    {
      base: 5,
      md: 15,
    },
    {
      fallback: "base",
    }
  );
  const padding = useBreakpointValue(
    {
      base: 5,
      md: 15,
    },
    {
      fallback: "base",
    }
  );
  const renderPhoto = useCallback(
    ({ imageProps: { alt, style, ...rest } }: PhotoProps) => (
      <img
        alt={alt}
        style={{
          ...style,
          backgroundColor: "white",
          borderRadius: "2px",
          // boxShadow:
          //   "0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)",
          // transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        }}
        {...rest}
      />
    ),
    []
  );

  return (
    <Stack
      w={"full"}
      id="picture-gallery"
      p={{ base: 1, md: 5 }}
      alignContent={"center"}
    >
      <Heading
        textAlign={"center"}
        fontSize={{ base: "4xl", md: "5xl" }}
        mb={{ md: "5vw" }}
      >
        <Text fontWeight={400}>Gracias por acompañarnos</Text>
      </Heading>
      {loading ? (
        <Spinner />
      ) : (
        <PhotoAlbum
          layout="masonry"
          columns={columns}
          spacing={spacing}
          padding={padding}
          photos={photos}
          renderPhoto={renderPhoto}
        />
      )}
    </Stack>
  );
}
