import React from "react";
import useForm from "react-hook-form";

import { getDefaultValues } from "../getDefaultFormValues";
import { InputError } from "../input/InputError";
import { InputContainer } from "../input/InputContainer";
import { StepControl } from "../../StepControl";

export const EmailForm = ({ formKey, formData, next, prev }) => {
  const { register, errors, formState, getValues } = useForm({
    mode: "onChange",
    defaultValues: getDefaultValues(formKey, formData)
  });
  return (
    <form name="emailForm">
      <InputContainer>
        <input
          name="email"
          type="text"
          placeholder="Email Address"
          ref={register({
            required: "Email Address is required"
          })}
        />
        <InputError error={errors.email} />
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
