"use client";

import { IBookingInformation } from "@/models/Booking";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type BookingProviderType = {
  bookingData: IBookingInformation | null;
  setBookingData: React.Dispatch<
    React.SetStateAction<IBookingInformation | null>
  >;
};

const BookingContext = createContext<BookingProviderType | undefined>(
  undefined
);

// Custom hook to use the context
export const useBookingData = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBookingData must be used within a MyProvider");
  }
  return context;
};

// Create a provider
export const BookingProvider = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  const [bookingData, setBookingData] = useState<IBookingInformation | null>(
    null
  );

  useEffect(() => {
    const savedData = localStorage.getItem("bookingData");
    setBookingData(savedData ? JSON.parse(savedData) : null);
    console.log(savedData);
  }, []);

  useEffect(() => {
    if (bookingData !== null) {
      localStorage.setItem("bookingData", JSON.stringify(bookingData));
    }
  }, [bookingData]);

  return (
    <BookingContext.Provider value={{ bookingData, setBookingData }}>
      {children}
    </BookingContext.Provider>
  );
};
