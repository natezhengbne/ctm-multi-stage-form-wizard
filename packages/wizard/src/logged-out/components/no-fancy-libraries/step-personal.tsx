import { CompareForm, Personal } from "@ctm-multi-stage-wizard/common/data-type/compare-form";
import React, { useState } from "react";

type Props = {
  activeStep: number;
  step: number;
  onNext: (value: CompareForm) => void;
  onPrev: () => void;
  value?: CompareForm;
};

export default function StepPersonal(props: Props) {
  const [firstName, setFirstName] = useState<string | undefined>();
  const [lastName, setLastName] = useState<string | undefined>();
  const [email, setEmail] = useState<string | undefined>();
  const [phone, setPhone] = useState<string | undefined>();

  if (props.activeStep !== props.step) {
    return null;
  }

  function next(event: React.FormEvent<HTMLFormElement>) {
    if (firstName === undefined || lastName === undefined || email === undefined) {
      return;
    }
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
    event.preventDefault();
  }

  return (
    <>
      <form id="personal-form" onSubmit={next}>
        <div className="StepperForm-root container-sm">
          <h1>Personal</h1>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
              First Name *
            </label>
            <input
              className="form-control"
              required
              id={"firstName"}
              name={"firstName"}
              type="text"
              value={firstName ?? ""}
              maxLength={16}
              onChange={(event) => {
                setFirstName(event.target.value);
              }}
            />
            <div className="invalid-feedback">Please input your first name.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              Last Name *
            </label>
            <input
              className="form-control"
              required
              id={"lastName"}
              name={"lastName"}
              maxLength={16}
              value={lastName ?? ""}
              onChange={(event) => {
                setLastName(event.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email *
            </label>
            <input
              className="form-control"
              required
              id={"email"}
              name={"email"}
              type="email"
              maxLength={20}
              value={email ?? ""}
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
              maxLength={20}
              value={phone ?? ""}
              onChange={(event) => {
                setPhone(event.target.value);
              }}
              pattern="^(\+?\(61\)|\(\+?61\)|\+?61|\(0[1-9]\)|0[1-9])?( ?-?[0-9]){7,9}$"
              title="Please input valid phone number"
            />
          </div>
          <div className="StepperActions-root">
            <button type="submit" className="btn btn-primary">
              Next
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
