import React from "react";
import useForm from "react-hook-form";

import { getDefaultValues } from "../getDefaultFormValues";
import { InputError } from "../input/InputError";
import { StepControl } from "../../StepControl";

export const BusinessIndustryForm = ({ formKey, formData, next, prev }) => {
  const { register, errors, formState, getValues } = useForm({
    mode: "onChange",
    defaultValues: getDefaultValues(formKey, formData)
  });

  return (
    <form name="businessIndustryForm">
      <fieldset>
        <legend>Industry</legend>
        <select
          name="industry"
          ref={register({
            required: "Industry is required"
          })}
        >
          <option value="">Choose an Industry</option>
          <option value="Enterprise Software">Enterprise Software</option>
          <option value="Sales">Sales</option>
          <option value="Marketing">Marketing</option>
          <option value="Ecommerce">Ecommerce</option>
          <option value="Construction">Construction</option>
          <option value="Logistic">Logistic</option>
          <option value="SAAS">SAAS</option>
          <option value="Telephony">Telephony</option>
          <option value="Consumer Electronics">Consumer Electronics</option>
          <option value="Transportation">Transportation</option>
        </select>
        <InputError error={errors.industry} />
      </fieldset>
      <fieldset>
        <legend>Customer Segment</legend>
        <select
          name="customerSegment"
          ref={register({
            required: "Customer Segment is required"
          })}
        >
          <option value="">Choose a Customer Segment</option>
          <option value="Consumer">Consumer</option>
          <option value="Enterprise">Enterprise</option>
          <option value="Both">Both</option>
        </select>
      </fieldset>
      <StepControl
        valid={formState.isValid}
        onNext={() =>
          next({
            [formKey]: getValues()
          })
        }
        onPrev={() =>
          prev({
            [formKey]: getValues()
          })
        }
      />
    </form>
  );
};
