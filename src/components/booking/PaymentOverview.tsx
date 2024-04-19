import { IPaymentInfo, IRoomBooking } from "@/models/Booking";
import { displayThousands } from "@/utils/functions";
import { Add } from "@mui/icons-material";
import { Button, Stack, Typography, useMediaQuery } from "@mui/material";

const contentWidth = "900px";
const mobileWidth = "100%";

const PaymentOverview = (props: {
  roomBookings: IRoomBooking[];
  paymentInfo: IPaymentInfo;
  taxPercentage: string;
}) => {
  return (
    <>
      <RoomPricingSection {...props} />
      <PromotionSection {...props} />
      <TotalBillSection {...props} />
    </>
  );
};

const RoomPricingSection = (props: { roomBookings: IRoomBooking[] }) => {
  const isHandheldDevice = useMediaQuery("(max-width:1050px)");
  return (
    <Stack
      spacing={1}
      width={isHandheldDevice ? mobileWidth : contentWidth}
      borderTop={1}
      paddingY={3}
    >
      {props.roomBookings.map((roomBooking, index) => (
        <Stack
          key={index}
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={isHandheldDevice ? "end" : "start"}
          width={"100%"}
        >
          <Stack>
            <Typography variant="h6" fontWeight={700}>
              {roomBooking.roomType}{" "}
              {roomBooking.zone ? `(${roomBooking.zone})` : ""} for{" "}
              {roomBooking.duration} hours
            </Typography>
            <Typography>
              {roomBooking.quantity} X RM{roomBooking.price}
            </Typography>
          </Stack>
          <Typography variant="h6" fontWeight={700}>
            RM
            {displayThousands(roomBooking.quantity * roomBooking.price)}
          </Typography>
        </Stack>
      ))}
    </Stack>
  );
};

const PromotionSection = (props: { paymentInfo: IPaymentInfo }) => {
  const isHandheldDevice = useMediaQuery("(max-width:1050px)");
  return (
    <Stack
      spacing={1}
      width={isHandheldDevice ? mobileWidth : contentWidth}
      borderTop={1}
      paddingY={3}
      alignItems={"start"}
    >
      <Stack direction={"row"} justifyContent={"space-between"} width={"100%"}>
        <Typography>Exclude Tax</Typography>
        <Typography>RM{displayThousands(props.paymentInfo.sum)}</Typography>
      </Stack>
      <Button sx={{ color: "black", paddingX: 0 }}>
        Add Promo Code <Add />
      </Button>
    </Stack>
  );
};

const TotalBillSection = (props: {
  paymentInfo: IPaymentInfo;
  taxPercentage: string;
}) => {
  const isHandheldDevice = useMediaQuery("(max-width:1050px)");
  return (
    <Stack
      spacing={1}
      width={isHandheldDevice ? mobileWidth : contentWidth}
      borderTop={1}
      borderBottom={1}
      paddingY={3}
      alignItems={"start"}
    >
      <Stack direction={"row"} justifyContent={"space-between"} width={"100%"}>
        <Typography>Service Tax {props.taxPercentage}</Typography>
        <Typography>
          RM{displayThousands(props.paymentInfo.taxAmount)}
        </Typography>
      </Stack>
      <Stack direction={"row"} justifyContent={"space-between"} width={"100%"}>
        <Typography variant="h6" fontWeight={700}>
          Total Payable Price
        </Typography>
        <Typography variant="h5">
          RM{displayThousands(props.paymentInfo.debitAmount)}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default PaymentOverview;
