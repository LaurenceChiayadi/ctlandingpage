import {
  Box,
  Button,
  IconButton,
  Stack,
  Typography,
  useTheme,
  useThemeProps,
} from "@mui/material";
import { useState } from "react";
import CTButton from "../global/CTButton";
import {
  ChevronLeft,
  Help,
  HelpOutline,
  HelpOutlineOutlined,
} from "@mui/icons-material";
import Image from "next/image";
import IconArrowRight from "@/assets/icons/general/btn-icon-arrow-left.svg";

interface IKLIAOptions {
  terminalName: string;
  location: {
    name: string;
    description?: string;
    remarks: string;
    hotels: string[];
  }[];
}

const options = [{ title: "KLIA Terminal 1" }, { title: "KLIA Terminal 2" }];

const KLIA1Options: IKLIAOptions = {
  terminalName: "KLIA Terminal 1",
  location: [
    {
      name: "Public Area",
      description:
        "At KLIA Terminal 1, our hotel provides a single-servie sleep-only lounge for you to rest and take a nap",
      remarks:
        "If you are landing in Malaysia, you will need valid entry into Malaysia (visa, landing card) to clear Malaysian Imigration and access our Sleep Lounge",
      hotels: ["Sleep Lounge"],
    },
  ],
};

const KLIA2Options: IKLIAOptions = {
  terminalName: "KLIA Terminal 2",
  location: [
    {
      name: "Restricted Area",
      remarks:
        "If you are departing from Malaysia, you will need valid documents for flight check-in (boarding pass, passport, or visa) to enter to restricted area and access our Airside",
      hotels: ["Airside"],
    },
    {
      name: "Public Area",
      remarks:
        "If you are landing in Malaysia, you will need valid entry into Malaysia (visa, landing card) to clear Malaysian Imigration and access our Landside and MAX",
      hotels: ["Landside", "MAX"],
    },
  ],
};

const StaySection = (props: {
  handleChangeSelectedHotel: (value: string) => void;
}) => {
  const [staySectionStepper, setStaySectionStepper] = useState<string>("");

  const handleChangeStaySectionStepper = (title: string) => {
    setStaySectionStepper(title);
  };

  if (staySectionStepper === "") {
    return (
      <StaySectionHome
        handleChangeStaySectionStepper={handleChangeStaySectionStepper}
      />
    );
  } else if (staySectionStepper === options[0].title) {
    return (
      <KLIAStaySection
        content={KLIA1Options}
        handleChangeStaySectionStepper={handleChangeStaySectionStepper}
        handleChangeSelectedHotel={props.handleChangeSelectedHotel}
      />
    );
  } else if (staySectionStepper === options[1].title) {
    return (
      <KLIAStaySection
        content={KLIA2Options}
        handleChangeStaySectionStepper={handleChangeStaySectionStepper}
        handleChangeSelectedHotel={props.handleChangeSelectedHotel}
      />
    );
  }
};

const informationText =
  "If you wish to travel between KLIA Terminal 1 and Terminal 2, you can take either the free shuttle bus service or ERL (Train).";

const StaySectionHome = (props: {
  handleChangeStaySectionStepper: (title: string) => void;
}) => {
  const theme = useTheme();

  const [informationHovered, setInformationHovered] = useState<boolean>(false);
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      height={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
      paddingY={10}
    >
      <Typography variant="h4">Where are you departing/landing?</Typography>
      <Box display={"flex"}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          width={"500px"}
          height={"600px"}
        >
          <Typography variant="h4" textAlign={"center"} marginBottom={5}>
            {options[0].title}
          </Typography>
          <CTButton
            onClick={() =>
              props.handleChangeStaySectionStepper(options[0].title)
            }
            text="SELECT LOCATION"
            variant="secondary"
          />
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          width={"300px"}
          onMouseEnter={() => setInformationHovered(true)}
          onMouseLeave={() => setInformationHovered(false)}
        >
          <Box>
            {informationHovered ? (
              <Help color="primary" />
            ) : (
              <HelpOutline color="primary" />
            )}
          </Box>
          {informationHovered && (
            <Box
              display={"flex"}
              border={1}
              bgcolor={theme.palette.primary.main}
              padding={2}
            >
              {informationText}
            </Box>
          )}
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          width={"500px"}
          height={"600px"}
        >
          <Typography variant="h4" textAlign={"center"} marginBottom={5}>
            {options[1].title}
          </Typography>
          <CTButton
            onClick={() =>
              props.handleChangeStaySectionStepper(options[1].title)
            }
            text="SELECT LOCATION"
            variant="secondary"
          />
        </Box>
      </Box>
    </Box>
  );
};

const KLIAStaySection = (props: {
  content: IKLIAOptions;
  handleChangeStaySectionStepper: (title: string) => void;
  handleChangeSelectedHotel: (value: string) => void;
}) => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      height={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
      paddingY={10}
      paddingX={3}
    >
      <Stack direction={"row"} width={"100%"} marginBottom={6}>
        <Box display={"flex"} width={"33%"}>
          <Button onClick={() => props.handleChangeStaySectionStepper("")}>
            <ChevronLeft />
            <Typography variant="h6" color={"primary"} fontWeight={600}>
              Back
            </Typography>
          </Button>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          width={"33%"}
        >
          <Typography variant="h4">{props.content.terminalName}</Typography>
        </Box>
      </Stack>
      <Stack
        direction={"row"}
        width={"100%"}
        justifyContent={"center"}
        spacing={5}
      >
        {props.content.location.map((location, index) => (
          <Box
            key={index}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            marginTop={10}
            width={"480px"}
          >
            <Stack spacing={2}>
              <Typography variant="h6" fontWeight={600} textAlign={"center"}>
                {location.name}
              </Typography>
              <Typography textAlign={"center"}>
                {location.description}
              </Typography>
              <Typography textAlign={"center"}>{location.remarks}</Typography>
            </Stack>
            <Stack spacing={3} marginTop={10}>
              {location.hotels.map((hotel, index) => (
                <Button
                  onClick={() => props.handleChangeSelectedHotel(hotel)}
                  key={index}
                >
                  <Typography variant="h4" marginRight={3}>
                    {hotel}
                  </Typography>
                  <Image src={IconArrowRight} alt="CT-Right-Up" />
                </Button>
              ))}
            </Stack>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default StaySection;
