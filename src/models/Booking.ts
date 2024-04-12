export interface IBookingSchedule {
  date?: Date;
  duration?: number;
  promotion: string;
}

export const BookingScheduleInitial: IBookingSchedule = {
  promotion: "",
};
