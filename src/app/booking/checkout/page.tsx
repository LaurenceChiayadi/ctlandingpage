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

  const merchantCode = "M05633";
  const merchantKey = "aCngOtFUyu";
  const currency = "MYR";
  useEffect(() => {
    const apiUrl = "https://payment.ipay88.com.my/epayment/entry.asp";

    if (amount) {
      const signatureBeforeEncrypt =
        merchantKey +
        merchantCode +
        refNo +
        Number(amount).toFixed(2).replace(/[\.,]/g, "") +
        currency;

      const formData = {
        MerchantCode: merchantCode,
        RefNo: refNo,
        Amount: Number(amount).toFixed(2),
        Curreny: currency,
        ProdDesc: `${hotelName} Capsule Transit`,
        UserName: userName,
        UserEmail: userEmail,
        UserContact: userContact,
        SignatureType: "SHA256",
        Signature: encryptStringToSha256(signatureBeforeEncrypt),
        ResponseUrl:
          "https://capsuletransitprod.southeastasia.cloudapp.azure.com/api/v1/ipay88/confirmation/",
        BackendUrl:
          "https://capsuletransitprod.southeastasia.cloudapp.azure.com/api/v1/ipay88/manual-confirm/",
      };

      axios
        .post(apiUrl, formData, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Sec-Fetch-Mode": "navigate",
          },
        })
        .then((result) => console.log(result));
    }
  }, []);

  const encryptStringToSha256 = (input: string) => {
    const hash = crypto.createHash("sha256");
    hash.update(input);
    return hash.digest("hex");
  };

  return <div>Sending payment request to iPay88...</div>;
};

export default CheckOutPage;
