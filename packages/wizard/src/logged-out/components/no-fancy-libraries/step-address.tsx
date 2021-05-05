import { Address, CompareForm, streetTypes } from "@ctm-multi-stage-wizard/common/data-type/compare-form";
import React, { useState } from "react";

type Props = {
  activeStep: number;
  step: number;
  onNext: (value: CompareForm) => void;
  onPrev: () => void;
  value?: CompareForm;
};

export default function StepAddress(props: Props) {
  const [streetNumber, setStreetNumber] = useState<string | undefined>();
  const [streetName, setStreetName] = useState<string | undefined>();
  const [streetType, setStreetType] = useState<string | undefined>();
  const [suburb, setSuburb] = useState<string | undefined>();
  const [postcode, setPostcode] = useState<string | undefined>();

  if (props.activeStep !== props.step) {
    return null;
  }

  function next(event: React.FormEvent<HTMLFormElement>) {
    if (
      streetNumber === undefined ||
      streetName === undefined ||
      streetType === undefined ||
      suburb === undefined ||
      postcode === undefined
    ) {
      return;
    }
    const address: Address = {
      streetNumber,
      streetName,
      streetType,
      suburb,
      postcode,
    };

    props.onNext({
      ...props.value,
      address: address,
    });

    event.preventDefault();
  }

  function prev() {
    props.onPrev();
  }

  return (
    <>
      <form id="address-form" onSubmit={next}>
        <div className="StepperForm-root container-sm">
          <h1>Address</h1>
          <div className="mb-3">
            <label htmlFor="streetNumber" className="form-label">
              Street Number *
            </label>
            <input
              type="number"
              min="1"
              max="10000"
              className="form-control"
              required
              id={"streetNumber"}
              name={"streetNumber"}
              value={streetNumber ?? ""}
              maxLength={16}
              onChange={(event) => {
                setStreetNumber(event.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="streetName" className="form-label">
              Street Name *
            </label>
            <input
              className="form-control"
              required
              id={"streetName"}
              name={"streetName"}
              maxLength={16}
              value={streetName ?? ""}
              onChange={(event) => {
                setStreetName(event.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              Street Type *
            </label>
            <select
              required
              value={streetType ?? ""}
              className="form-select form-control"
              id={"streetType"}
              name={"streetType"}
              onChange={(event) => {
                setStreetType(event.target.value);
              }}
            >
              <option value="" disabled key="Choose Street Type">
                Choose Street Type
              </option>
              {streetTypes.map((s) => (
                <option value={s} key={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="suburb" className="form-label">
              Suburb *
            </label>
            <input
              className="form-control"
              required
              id={"suburb"}
              name={"suburb"}
              maxLength={30}
              value={suburb ?? ""}
              onChange={(event) => {
                setSuburb(event.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="postcode" className="form-label">
              Postcode *
            </label>
            <input
              className="form-control"
              required
              id={"postcode"}
              name={"postcode"}
              maxLength={20}
              value={postcode ?? ""}
              onChange={(event) => {
                setPostcode(event.target.value);
              }}
              pattern="^(0[8][0-9]{2})|([1-7][0-9]{3})$"
              title="Postcode: 0800-7999"
            />
          </div>
          <div className="StepperActions-root">
            <button className="btn btn-secondary m-3" onClick={prev}>
              Back
            </button>
            <button type="submit" className="btn btn-primary">
              Next
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
