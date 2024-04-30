import {
  Box,
  Button,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import Image from "next/image";
import { useRouter } from "next/navigation";
import ContentWrapper from "../global/ContentWrapper";
import { FAQs } from "./faqData";

import IconArrow from "@/assets/icons/general/btn-icon-arrow-left.svg";

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
                <Typography variant="h6" fontWeight={600} marginTop={4}>
                  {faq.title}
                </Typography>
                <Typography marginTop={1}>{faq.description}</Typography>
              </Stack>
              <Button
                onClick={() => router.push(`/faq/${faq.title}`)}
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
