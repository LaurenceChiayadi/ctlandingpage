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

const termsOfUse = {
  title: "WEBSITE TERMS OF USE",
  contents: [
    "BY CONTINUING TO ACCESS THIS WEBSITE YOU ACCEPT THESE WEBSITE TERMS OF USE BELOW. IF YOU DO NOT ACCEPT THESE WEBSITE TERMS OF USE, YOU SHOULD LEAVE THIS WEBSITE IMMEDIATELY.",
    "These Website Terms of Use (“Terms of Use”) apply to the websites of CapsuleTransit, its subsidiaries and affiliates (“CapsuleTransit”).",
    "CapsuleTransit reserves the right, at its sole discretion, to change, modify, add or remove any portions of these Terms of Use, at any time. The new version of these Terms of Use will be posted on the Website and will take effect and govern all use of the Website upon posting. It is your responsibility to check these Terms of Use periodically for changes. As long as you comply with these Terms of Use, CapsuleTransit grants you a personal, revocable, non-exclusive, non-transferable, limited licence to enter and use the Website and such licence may be withdrawn, suspended, cancelled or amended at any time by us at our sole discretion.",
    "For the purposes of these Terms of Use any reference to 'we', 'us' and 'our' is to CapsuleTransit.",
    "Your use of the Website indicates your agreement to be bounded by these Terms of Use.",
    "1. Ownership of materials and appropriate use",
    "The Website and the materials, including but not limited to all text, graphics, user interfaces, visual interfaces, photographs, trademarks, logos, sounds, music, artwork and computer code on it are protected by copyright, trademark and other intellectual property rights and laws throughout the world. The materials on this Website are either owned by or licensed to us. You may not alter, broadcast, copy, distribute, modify, publish, sell or transfer any materials on the Website although you are permitted to display the materials on the Website on a computer screen and to download and print a hard copy for your personal, non-commercial informational use provided you do not alter or remove any copyright, trademark or other proprietary notices and do not make any modifications to any such information.",
    "2. Website availability",
    "The Website is provided free of charge and we make no guarantee that it will be uninterrupted or error free. We reserve the right to update, suspend or withdraw the whole or materials or information on the Website at any time without notice.",
    "3. Links from the Website",
    "We may from time to time provide links from the Website to websites that are owned and controlled by third parties. These links are provided for your convenience only and do not imply any affiliation or endorsement by CapsuleTransit. We have no control over and shall have no liability whatsoever in respect of those websites.",
    "4. Accuracy of Information",
    "We take reasonable care to ensure that all products and services information and/or pricing featured (where applicable) on the Website is accurate and up-to-date. However, our products and services are continually updated and the images, specifications and any prices (where applicable) on the Website are for general illustrative guidance only. For accurate up-to-date information you should contact us directly using the details in the 'Contact us' section of the Website and must rely on your own investigations.",
    "5. Disclaimer",
    "We do not warrant, represent or undertake that the materials on the Website is accurate, complete, uninterrupted or current or that the Website will be free of error, defects or viruses and all conditions and warranties that might otherwise be implied by statute or at common law are excluded to the fullest extent permitted by law. The Website and its materials are delivered on an “as-is” and “as-available” basis. We do not accept any liability for any losses or claims arising from any liability to access the Website, use of the Website, downloading of viruses, the loss or corruption to material that is downloaded and any website browser incompatibility problems. All software products downloaded from the Website are downloaded, installed and used at the user's own risk. CapsuleTransit disclaims all warranties, express or implied, including any warranties of accuracy, non-infringement, merchantability and fitness for a particular purpose. CapsuleTransit disclaims any and all liability for the acts, omissions and conduct of any third parties in connection with or related to your use of the Website.",
    "6. Limitation of Liability",
    "Except where prohibited by law, in no event will CapsuleTransit be liable to you for any indirect, consequential, exemplary, incidental or punitive damages, including lost profits.",
    "If CapsuleTransit is found to be liable to you for any damage or loss which arises out of or is in any way connected with your use of the Website, CapsuleTransit’s liability shall in no event exceed the total fees with respect to any service or feature of or on the Website paid in the six months prior to the date of the initial claim made against CapsuleTransit. Some jurisdictions do not allow limitations of liability, so the foregoing limitation may not apply to you.",
    "7. Indemnity",
    "You agree to indemnify and hold CapsuleTransit, its officers, directors, shareholders, predecessors, successors in interest, employees, agents, subsidiaries and affiliates, harmless from any demands, loss, liability, claims or expenses (including attorneys’ fees), made against CapsuleTransit by any third party due to or arising out of or in connection with your use of the Website.",
    "8. Privacy Policy",
    "CapsuleTransit’s Privacy Policy applies to use of this Website, and its terms are made a part of these Terms of Use by this reference. To view CapsuleTransit’s Privacy Policy, please visit “Privacy Policy” of the Website. By using the Website, you are consenting to the terms of our Privacy Policy.",
  ],
};

const TermsConditionDialog = (props: {
  open: boolean;
  handleClose: VoidFunction;
}) => {
  return (
    <Dialog open={props.open} onClose={props.handleClose}>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <DialogTitle fontSize={"1.5rem"} fontWeight={700}>
          Terms and Condition
        </DialogTitle>
        <Button sx={{ paddingX: "24px" }}>
          <Image src={CloseIcon} alt="close-icon" style={{ width: "30px" }} />
        </Button>
      </Stack>
      <DialogContent sx={{ maxHeight: "60vh" }}>
        <Typography variant="h6">{termsOfUse.title}</Typography>
        {termsOfUse.contents.map((content, index) => (
          <DialogContentText key={index} sx={{ marginY: 3 }}>
            {content}
          </DialogContentText>
        ))}

        <DialogActions>
          <Button onClick={props.handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

export default TermsConditionDialog;
