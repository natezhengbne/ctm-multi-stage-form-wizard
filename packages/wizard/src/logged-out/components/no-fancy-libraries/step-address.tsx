import { Address, CompareForm } from "@ctm-multi-stage-wizard/common/data-type/compare-form";
import React, { useState } from "react";

type Props = {
  activeStep: number;
  step: number;
  onNext: (value: CompareForm) => void;
  onPrev: () => void;
  value?: CompareForm;
};

export default function StepAddress(props: Props) {
  const [streetNumber, setStreetNumber] = useState("");
  const [streetName, setStreetName] = useState("");
  const [streetType, setStreetType] = useState("");
  const [suburb, setSuburb] = useState("");
  const [postcode, setPostcode] = useState("");

  if (props.activeStep !== props.step) {
    return null;
  }

  function next() {
    const address: Address = {
      streetNumber: streetNumber,
      streetName: streetName,
      streetType: streetType,
      suburb: suburb,
      postcode: postcode,
    };

    props.onNext({
      ...props.value,
      address: address,
    });
  }

  function prev() {
    props.onPrev();
  }

  return (
    <>
      <div id="personal-form" className="StepperForm-root container-sm">
        <h1>Address</h1>
        <div className="mb-3">
          <label htmlFor="streetNumber" className="form-label">
            Street Number
          </label>
          <input
            className="form-control"
            required
            id={"streetNumber"}
            name={"streetNumber"}
            value={streetNumber}
            maxLength={16}
            onChange={(event) => {
              setStreetNumber(event.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="streetName" className="form-label">
            Street Name
          </label>
          <input
            className="form-control"
            required
            id={"streetName"}
            name={"streetName"}
            maxLength={16}
            value={streetName}
            onChange={(event) => {
              setStreetName(event.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="streetType" className="form-label">
            Street Type
          </label>
          <input
            className="form-control"
            required
            id={"streetType"}
            name={"streetType"}
            maxLength={20}
            value={streetType}
            onChange={(event) => {
              setStreetType(event.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="suburb" className="form-label">
            Suburb
          </label>
          <input
            className="form-control"
            required
            id={"suburb"}
            name={"suburb"}
            maxLength={20}
            value={suburb}
            onChange={(event) => {
              setSuburb(event.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="postcode" className="form-label">
            Postcode
          </label>
          <input
            className="form-control"
            id={"postcode"}
            name={"postcode"}
            type="postcode"
            maxLength={20}
            value={postcode}
            onChange={(event) => {
              setPostcode(event.target.value);
            }}
          />
        </div>
        <div className="StepperActions-root">
          <button className="btn btn-secondary m-3" onClick={prev}>
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
