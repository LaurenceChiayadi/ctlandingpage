import {
  Box,
  Button,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import IconArrow from "@/assets/icons/general/btn-icon-arrow-left.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ContentWrapper from "../global/ContentWrapper";

const FAQs = [
  {
    title: "CT Member",
    description: "All member enquiries",
    icon: IconArrow,
  },
  {
    title: "General",
    description: "Announcements, General Hotel Informations, FAQs",
    icon: IconArrow,
  },
  {
    title: "Locations",
    description: "Locations and how to get to our hotels",
    icon: IconArrow,
  },
  {
    title: "Booking and Reservations",
    description: "Booking and Reservation related enquiries",
    icon: IconArrow,
  },
  {
    title: "Check-in and Check-out",
    description:
      "Check-in & Check-out, late check-out, early check-in, late arrival related enquiries",
    icon: IconArrow,
  },
  {
    title: "Parking",
    description: "Parking availability, location, and parking charges",
    icon: IconArrow,
  },
  {
    title: "Billing and Charges",
    description: "Billing and charges enquiries",
    icon: IconArrow,
  },
  {
    title: "Contactless Service",
    description: "Contactless service enquiries",
    icon: IconArrow,
  },
  {
    title: "Bags, Luggage and Parcels",
    description: "Bag drops and luggage storage, parcels and deliveries",
    icon: IconArrow,
  },
  {
    title: "Facilities",
    description: "Hotels facilities & amenities, WI-FI, pet, child policies",
    icon: IconArrow,
  },
  {
    title: "Special Request",
    description: "Special requests, room types and special occasions",
    icon: IconArrow,
  },
];

const FAQContent = () => {
  const router = useRouter();
  return (
    <ContentWrapper noMarginTop>
      <Grid
        container
        borderTop={1}
        columnSpacing={4}
        rowSpacing={4}
        marginBottom={"100px"}
      >
        {FAQs.map((faq, index) => (
          <Grid key={index} item xs={6} sm={6} md={4} lg={3} xl={3}>
            <Stack
              borderBottom={1}
              height={"380px"}
              paddingBottom={4}
              justifyContent={"space-between"}
              paddingTop={6}
            >
              <Stack>
                <Image src={faq.icon} alt={faq.title} />
                <Typography variant="h6" fontWeight={600} marginTop={6}>
                  {faq.title}
                </Typography>
                <Typography marginTop={1}>{faq.description}</Typography>
              </Stack>
              <Button
                onClick={() => router.push(`/faq/${faq.title}}`)}
                sx={{ width: "30px", padding: 0 }}
              >
                <Image src={IconArrow} alt="CT-Right-Up" />
              </Button>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </ContentWrapper>
  );
};

export default FAQContent;
