import { CompareForm } from "@ctm-multi-stage-wizard/common/data-type/compare-form";
import React from "react";

type Props = {
  activeStep: number;
  step: number;
  onPrev: () => void;
  value?: CompareForm;
};

export default function StepSummary(props: Props) {
  if (props.activeStep !== props.step) {
    return null;
  }

  function save() {
    console.log(props.value);
    alert(JSON.stringify(props.value));
  }

  function prev() {
    props.onPrev();
  }

  return (
    <>
      <div id="summary-form" className="StepperForm-root container-sm">
        <h1>Summary</h1>
        <div className="row g-3">
          <div className="col-md-6 mb-3">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input readOnly className="form-control" id="firstName" value={props.value?.personal?.firstName} />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input readOnly className="form-control" id="lastName" value={props.value?.personal?.lastName} />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input readOnly className="form-control" id="email" value={props.value?.personal?.email} />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input readOnly className="form-control" id="phone" value={props.value?.personal?.phone} />
          </div>

          <div className="col-md-4 mb-3">
            <label htmlFor="streetNumber" className="form-label">
              Street Number
            </label>
            <input readOnly className="form-control" id="streetNumber" value={props.value?.address?.streetNumber} />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="streetName" className="form-label">
              Street Name
            </label>
            <input readOnly className="form-control" id="streetName" value={props.value?.address?.streetName} />
          </div>
          <div className="col-md-2 mb-3">
            <label htmlFor="streetType" className="form-label">
              Street Type
            </label>
            <input readOnly className="form-control" id="streetType" value={props.value?.address?.streetType} />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="suburb" className="form-label">
              Suburb
            </label>
            <input readOnly className="form-control" id="suburb" value={props.value?.address?.suburb} />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="postcode" className="form-label">
              Postcode
            </label>
            <input readOnly className="form-control" id="postcode" value={props.value?.address?.postcode} />
          </div>
        </div>
        <div className="StepperActions-root">
          <button className="btn btn-secondary m-3" onClick={prev}>
            Back
          </button>
          <button type="submit" className="btn btn-primary" onClick={save}>
            Save
          </button>
        </div>
      </div>
    </>
  );
}
