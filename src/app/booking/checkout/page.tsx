"use client";

import React, { useEffect } from "react";
import axios from "axios";

import crypto from "crypto";
import { useSearchParams } from "next/navigation";

const CheckOutPage = () => {
  const searchParams = useSearchParams();

  const amount = searchParams.get("amount");
  const refNo = searchParams.get("refNo");
  const userContact = searchParams.get("contact");
  const userEmail = searchParams.get("email");
  const userName = searchParams.get("name");
  const hotelName = searchParams.get("lot");
  useEffect(() => {
    const apiUrl = "https://payment.ipay88.com.my/epayment/entry.asp";

    const encryptStringToSha256 = (input: string) => {
      const hash = crypto.createHash("sha256");
      hash.update(input);
      return hash.digest("hex");
    };

    const formData = {
      MerchantCode: "M05633",
      RefNo: refNo,
      // Amount: amount,
      Amount: 1,
      Curreny: "MYR",
      ProdDesc: `${hotelName} Capsule Transit`,
      UserName: userName,
      UserEmail: userEmail,
      UserContact: userContact,
      SignatureType: "SHA256",
    };

    axios.post(apiUrl, formData).then((result) => console.log(result));
  }, []);

  return <div>Sending payment request to iPay88...</div>;
};

export default CheckOutPage;
