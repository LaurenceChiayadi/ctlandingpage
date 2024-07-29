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

const paymentCancellationPolicy = {
  title: "PAYMENT AND CANCELLATION POLICY",
  contents: [
    "Full payment will be charged once your booking is confirmed. No are no additional fees for credit or debit cards and all prices shown are inclusive of local taxes.",
    "Discounted and promotional rates are non-refundable. Any amendments or cancellation bookings with discounted or promotional rates will be charged in full.",
    "In the case of modification of check-in dates, cancellation or no-show will, 100% of the room rate including any other applicable charges and taxes will be charged to your credit/debit card.",
  ],
};

const importantInformation = {
  title: "IMPORTANT INFORMATION",
  contents: [
    "Please make sure that the hotel and location you have selected matches the area of the airport your flight will depart from. If you are entering Malaysia or in transit to another destination, you will need valid entry into Malaysia (visa, landing card) to clear Malaysian immigration and access our hotel. The hotel will not be liable to any cost and will not refund any charges if the wrong booking have been made.",
    "If you are departing from Malaysia, you can easily access the hotel as It is located before immigration and customs checkpoint.",
    "If you are landing at KLIA1, proceed through immigration, customs checkpoints and baggage reclaim, embark either the free shuttle bus service or ERL (Train) to the South Terminal and follow the directions to our hotel.",
    "Please log on to http://www.imi.gov.my/index.php/en/visa/types-of-visa.html should you require a VISA to enter Malaysia and to exit the airport departure hall to access CapsuleTransit.",
  ],
};

const HotelPolicyDialog = (props: {
  open: boolean;
  handleClose: VoidFunction;
}) => {
  return (
    <Dialog open={props.open} onClose={props.handleClose}>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <DialogTitle fontSize={"1.5rem"} fontWeight={700}>
          Hotel Policy
        </DialogTitle>
        <Button sx={{ paddingX: "24px" }}>
          <Image src={CloseIcon} alt="close-icon" style={{ width: "30px" }} />
        </Button>
      </Stack>
      <DialogContent sx={{ maxHeight: "60vh" }}>
        <Typography variant="h6">{paymentCancellationPolicy.title}</Typography>
        {paymentCancellationPolicy.contents.map((content, index) => (
          <DialogContentText key={index}>{content}</DialogContentText>
        ))}
        <Typography variant="h6" marginTop={5}>
          {importantInformation.title}
        </Typography>
        {importantInformation.contents.map((content, index) => (
          <DialogContentText key={index}>{content}</DialogContentText>
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

export default HotelPolicyDialog;
