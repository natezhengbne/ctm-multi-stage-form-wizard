import { CompareForm, Personal } from "@ctm-multi-stage-wizard/common/data-type/compare-form";
import React, { useState } from "react";
import { START_STEP } from ".";
import CSS from "csstype";

const h1Styles: CSS.Properties = {
  backgroundColor: "rgba(255, 255, 255, 0.85)",
  position: "absolute",
  right: 0,
  bottom: "2rem",
  padding: "0.5rem",
  fontFamily: "sans-serif",
  fontSize: "1.5rem",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
};

type Props = {
  activeStep: number;
  step: number;
  onNext: (value: CompareForm) => void;
  onPrev: () => void;
  value?: CompareForm;
};

export default function StepPersonal(props: Props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  if (props.activeStep !== props.step) {
    return null;
  }

  function next() {
    const personal: Personal = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
    };
    props.onNext({
      ...props.value,
      personal: personal,
    });
  }

  function prev() {
    props.onPrev();
  }

  return (
    <>
      <div id="personal-form" className="StepperForm-root container-sm">
        <h1>Personal</h1>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input
            className="form-control"
            required
            id={"firstName"}
            name={"firstName"}
            type="text"
            value={firstName}
            maxLength={16}
            onChange={(event) => {
              setFirstName(event.target.value);
            }}
          />
          <div className="invalid-feedback">Please input your first name.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input
            className="form-control"
            required
            id={"lastName"}
            name={"lastName"}
            maxLength={16}
            value={lastName}
            onChange={(event) => {
              setLastName(event.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            className="form-control"
            required
            id={"email"}
            name={"email"}
            type="email"
            maxLength={20}
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            className="form-control"
            id={"phone"}
            name={"phone"}
            type="phone"
            maxLength={20}
            value={phone}
            onChange={(event) => {
              setPhone(event.target.value);
            }}
          />
        </div>
        <div className="StepperActions-root">
          <button className="btn btn-secondary m-3" onClick={prev} disabled={props.step === START_STEP}>
            Back
          </button>
          <button type="submit" className="btn btn-primary" onClick={next}>
            Next
          </button>
        </div>
      </div>
    </>
  );
}
