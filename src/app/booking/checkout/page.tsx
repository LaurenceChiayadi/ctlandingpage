"use client";

import React, { useEffect, useRef } from "react";
import axios from "axios";

import crypto from "crypto";
import { useRouter, useSearchParams } from "next/navigation";

const CheckOutPage = () => {
  const searchParams = useSearchParams();
  const formRef = useRef<HTMLFormElement>(null);

  const apiUrl = "https://payment.ipay88.com.my/epayment/entry.asp";

  const amount = searchParams.get("amount");
  const refNo = searchParams.get("refNo");
  const userContact = searchParams.get("contact");
  const userEmail = searchParams.get("email");
  const userName = searchParams.get("name");
  const hotelName = searchParams.get("lot");

  const merchantCode = "M05633";
  const merchantKey = "aCngOtFUyu";
  const currency = "MYR";

  const signatureBeforeEncrypt =
    merchantKey +
    merchantCode +
    refNo +
    Number(amount).toFixed(2).replace(/[\.,]/g, "") +
    currency;

  const encryptStringToSha256 = (input: string) => {
    const hash = crypto.createHash("sha256");
    hash.update(input);
    return hash.digest("hex");
  };

  useEffect(() => {
    if (formRef && formRef.current) {
      formRef.current.submit();
    }
  }, []);

  // const formData = {
  //   MerchantCode: merchantCode,
  //   RefNo: refNo,
  //   Amount: Number(amount).toFixed(2),
  //   Curreny: currency,
  //   ProdDesc: `${hotelName} Capsule Transit`,
  //   UserName: userName,
  //   UserEmail: userEmail,
  //   UserContact: userContact,
  //   SignatureType: "SHA256",
  //   Signature: encryptStringToSha256(signatureBeforeEncrypt),
  //   ResponseUrl:
  //     "https://capsuletransitprod.southeastasia.cloudapp.azure.com/api/v1/ipay88/confirmation/",
  //   BackendUrl:
  //     "https://capsuletransitprod.southeastasia.cloudapp.azure.com/api/v1/ipay88/manual-confirm/",
  // };

  if (refNo && amount && userName && userEmail && userContact) {
    return (
      <>
        <div>Sending payment request to iPay88...</div>
        <form ref={formRef} method="post" name="ePayment" action={apiUrl}>
          <input type="hidden" name="MerchantCode" value={merchantCode} />
          {/* <input type="hidden" name="PaymentId" value={} /> */}
          <input type="hidden" name="RefNo" value={refNo} />
          <input
            type="hidden"
            name="Amount"
            value={Number(amount).toFixed(2)}
          />
          <input type="hidden" name="Currency" value={currency} />
          <input
            type="hidden"
            name="ProdDesc"
            value={`${hotelName} Capsule Transit`}
          />
          <input type="hidden" name="UserName" value={userName} />
          <input type="hidden" name="UserEmail" value={userEmail} />
          <input type="hidden" name="UserContact" value={userContact} />
          {/* <input type="hidden" name="Remark" value="" /> */}
          <input type="hidden" name="Lang" value="UTF-8" />
          <input type="hidden" name="SignatureType" value="SHA256" />
          <input
            type="hidden"
            name="Signature"
            value={encryptStringToSha256(signatureBeforeEncrypt)}
          />
          <input
            type="hidden"
            name="ResponseURL"
            value="https://capsuletransitprod.southeastasia.cloudapp.azure.com/api/v1/ipay88/confirmation/"
          />
          <input
            type="hidden"
            name="BackendURL"
            value="https://capsuletransitprod.southeastasia.cloudapp.azure.com/api/v1/ipay88/manual-confirm/"
          />
          <input
            type="submit"
            value="Proceed with Payment"
            name="Submit"
            style={{ display: "none" }}
          />
        </form>
      </>
    );
  } else {
    <>...</>;
  }
};

export default CheckOutPage;
