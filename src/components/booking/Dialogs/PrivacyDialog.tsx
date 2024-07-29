import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

import CloseIcon from "@/assets/icons/general/icon-menu-close.svg";
import Image from "next/image";
import { useEffect, useRef } from "react";

const termsOfUse = {
  title: "Capsule Transit Hotel Personal Data Protection Act",
  contents: [
    {
      title: "What is the Personal Data Protection Act (PDPA)",
      content:
        "The Personal Data Protection Act 2010 was introduced by the Government to regulate the processing of personal data in commercial transactions. This Privacy Policy describes how and when we collect your personal information, what that information may be used for, who uses it, when it may be disclosed to other parties, how you can access your details and seek correction of your details, how you control your own personal information and how you can contact us.",
    },
    {
      title: "Update of information pertaining to the PDPA.",
      content:
        "We may make updates to the PDPA from time to time. We will notify visitors of our website of these changes. Please check our website regularly for updates.",
    },
    {
      title: "How your information is collected and what it will be used for.",
      content: [
        "a) We may collect and hold personal information/data about you or other parties traveling with you, information relating to you or such other parties, as an identifiable person. Personal Information includes without limitation, your full name, gender, postal and email address, telephone number, nationality, passport number, date and place of birth, visa or other government-issued identification data, other contact details, identification details, credit and debit card number or other payment details, booking and travel information, membership or loyalty program data, participation in contests or marketing promotions, booking preferences, correspondences and other information relevant to providing you with the services you and/or your travel parties, via a variety of sources, including without limitation, our website, booking engines, voice or telephone reservations facilities, self check-in facilities, social media sites or campaigns, direct marketing campaigns, contests, walk-in or distribution channels, including online travel agencies. If you submit Personal Information of any persons not yourself to us, you agree that you have obtained the consent of such parties to provide us with their Personal Information and to view or change their information and you permit us to use the Personal Information in accordance with the PDPA. You agree to indemnify us in the event we suffer any loss or damage as a result of your failure to comply with the same.",
        ,
        "b) We may also use closed circuit television (CCTV) and other security measures at our property that may capture or record your image and information related to your location while you are staying via keycards and other technologies. We may also use other technologies that record sound or video to protect its guests, staff and property.",
        "c) We may collect other data which do not generally reveal your specific identity or do not directly relate to you or your travel parties as an individual. This includes without limitation, a catalogue of the site pages you visited, number of visits to our Website, browser and device data, app usage data, data collected through cookies, pixel tags and other technologies, demographic data and other data provided by you and aggregated data.",
      ],
    },
    {
      title:
        "We may use and process your Personal Data for the purposes relating to the business and activities of Capsule Transit Hotel which shall include, without limitation:",
      content: [
        "(a) to process your registration or reservation to stay;",
        "(b) to communicate with you regarding your reservation or stay;",
        "(c) to provide you with the goods and services you have requested;",
        "(d) for purposes of billing and payments relating to your stay at CapsuleTransit and for any goods and services you have purchased or requested;",
        "(e) to respond to questions, comments and feedback from you;",
        "(f) to provide you with a better and more personalized level of service;",
        "(g) to provide for your safety and security as well as the safety and security of staff, guests and other visitors;",
        "(h) for our internal administrative purposes including auditing, accounting, data analysis and to improve our services;",
        "(i) for our Hotel to comply with regulatory requirements and obligations under the law.",
      ],
    },
    {
      title:
        "We may also use and process your Personal Data for other purposes such as to send you updates on promotional events which may be of interest to you via short message service (SMS), email and/or social networking sites.",
    },
    {
      title:
        "The Website may contain links to third parties’ websites. Please note that we are not responsible for the collection, use, maintenance, sharing, or disclosure of data and information by such third parties. If you provide information directly to such sites, the privacy policy and terms of service on those sites are applicable and we are not responsible for the information processing practices or privacy policies of such sites.We may also use and process your Personal Data for other purposes such as to send you updates on promotional events which may be of interest to you via short message service (SMS), email and/or social networking sites.",
    },
    {
      title:
        "We do not knowingly collect Personal Data from individuals under 18 years of age. As a parent or legal guardian, please do not allow the minor under your care to submit Personal Data to us. In the event that such Personal Data is given to us, you hereby consent to the processing of the minor’s Personal Data and personally accept and agree to be bound by this Notice and take responsibility for his or her actions.",
    },
  ],
};

const PrivacyDialog = (props: { open: boolean; handleClose: VoidFunction }) => {
  const dialogContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (props.open) {
      const timer = setTimeout(() => {
        if (dialogContentRef.current) {
          dialogContentRef.current.scrollTo(0, 0);
        }
      }, 0);

      return () => clearTimeout(timer);
    }
  }, [props.open]);
  return (
    <Dialog open={props.open} onClose={props.handleClose}>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <DialogTitle fontSize={"1.5rem"} fontWeight={700}>
          Privacy Policy
        </DialogTitle>
        <Button onClick={props.handleClose} sx={{ paddingX: "24px" }}>
          <Image src={CloseIcon} alt="close-icon" style={{ width: "30px" }} />
        </Button>
      </Stack>
      <DialogContent sx={{ maxHeight: "60vh" }} ref={dialogContentRef}>
        <Typography variant="h6">{termsOfUse.title}</Typography>
        <ol style={{ paddingLeft: "20px" }}>
          {termsOfUse.contents.map((content, index) => (
            <>
              <li>
                <DialogContentText>{content.title}</DialogContentText>
              </li>
              {content.content &&
                (typeof content.content === "string" ? (
                  <DialogContentText key={index}>
                    {content.content}
                  </DialogContentText>
                ) : (
                  content.content.map((text, arrayIndex) => (
                    <DialogContentText key={arrayIndex}>
                      {text}
                    </DialogContentText>
                  ))
                ))}
            </>
          ))}
        </ol>

        <DialogActions>
          <Button onClick={props.handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

export default PrivacyDialog;
