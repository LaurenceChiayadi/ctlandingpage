import IconArrow from "@/assets/icons/general/btn-icon-arrow-left.svg";

import MemberIcon from "./images/icon-faq-member.svg";
import GeneralIcon from "./images/icon-faq-general.svg";
import LocationIcon from "./images/icon-faq-location.svg";
import BookingIcon from "./images/icon-faq-booking.svg";
import CheckInOutIcon from "./images/icon-faq-checkin-out.svg";
// import ParkingIcon from "./images/icon-faq-parking.svg";
import BillingIcon from "./images/icon-faq-billing.svg";
// import ContactlessIcon from "./images/icon-faq-.svg";
import BagsIcon from "./images/icon-faq-luggage.svg";
import FacilitiesIcon from "./images/icon-faq-facilities.svg";
import SpecialRequestIcon from "./images/icon-faq-special-requests.svg";

export const FAQs = [
  {
    title: "General",
    description: "Announcements, General Hotel Informations, FAQs",
    icon: GeneralIcon,
    qna: [
      {
        question: "How do i make a room reservation?",
        answer: [
          "You may log on to our website https://www.capsuletransit.com to book or walk in (subject to room availability).",
          "You may also make bookings from an Online Travel Agent (OTA). Some of the more popular OTAs are Agoda",
        ],
      },
      {
        question: "Where do i get the cheapest rates?",
        answer: ["-"],
      },
      {
        question: "Do I need to complete the payment to secure my booking?",
        answer: ["-"],
      },
      {
        question: "Can I amend my booking after the booking is confirmed?",
        answer: ["-"],
      },
      {
        question: "Is it possible to cancel my booking?",
        answer: ["-"],
      },
      {
        question: "What are the terms and conditions to cancel my booking?",
        answer: [
          "Below are the details of the terms and conditions",
          [
            "Travel restrictions due to the current Covid-19 pandemic.",
            "Flight cancellation - you are allowed to cancel your booking if your flight is canceled (supporting documentation of flight cancellation is required",
            "Hospitalization - you are required to supplement cancellation requests with an official letter from a certified doctor barring travel due to during the dates booked.",
          ],
        ],
      },
      {
        question: "Can I transfer my bookings to other friends and family?",
        answer: ["-"],
      },
      {
        question:
          "How long do I have to wait for my money to be refunded after I have cancelled my booking?",
        answer: ["-"],
      },
      {
        question:
          "My flight has been cancelled at the very last minute (same as my check-in date), is it possible to cancel my booking?",
        answer: ["-"],
      },
    ],
  },
  {
    title: "Locations",
    description: "Locations and how to get to our hotels",
    icon: LocationIcon,
    qna: [],
  },
  {
    title: "Booking and Reservations",
    description: "Booking and Reservation related enquiries",
    icon: BookingIcon,
    qna: [],
  },
  {
    title: "Check-in and Check-out",
    description:
      "Check-in & Check-out, late check-out, early check-in, late arrival related enquiries",
    icon: CheckInOutIcon,
    qna: [],
  },
  {
    title: "Billing and Charges",
    description: "Billing and charges enquiries",
    icon: BillingIcon,
    qna: [],
  },
  {
    title: "Bags, Luggage and Parcels",
    description: "Bag drops and luggage storage, parcels and deliveries",
    icon: BagsIcon,
    qna: [],
  },
  {
    title: "Facilities",
    description: "Hotels facilities & amenities, WI-FI, pet, child policies",
    icon: FacilitiesIcon,
    qna: [],
  },
  {
    title: "Special Request",
    description: "Special requests, room types and special occasions",
    icon: SpecialRequestIcon,

    qna: [],
  },
];
