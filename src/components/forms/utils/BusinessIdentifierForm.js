import React from "react";
import useForm from "react-hook-form";

import { getDefaultValues } from "../getDefaultFormValues";
import { InputError } from "../input/InputError";
import { InputContainer } from "../input/InputContainer";
import { StepControl } from "../../StepControl";

export const BusinessIdentifierForm = ({ formKey, formData, next, prev }) => {
  const { register, errors, formState, getValues } = useForm({
    mode: "onChange",
    defaultValues: getDefaultValues(formKey, formData)
  });

  return (
    <form name="businessIdentifierForm">
      <InputContainer>
        <input
          name="businessName"
          type="text"
          placeholder="Business Name"
          ref={register({
            required: "Business Name is required"
          })}
        />{" "}
        <InputError error={errors.businessName} />
        <input
          name="url"
          type="url"
          placeholder="Website URL"
          ref={register({
            required: "Website URL is required"
          })}
        />{" "}
        <InputError error={errors.url} />
        <input
          name="phoneNumber"
          type="text"
          placeholder="Phone no."
          ref={register({
            required: "Phonenumber is required"
          })}
        />{" "}
        <InputError error={errors.phoneNumber} />
      </InputContainer>
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
