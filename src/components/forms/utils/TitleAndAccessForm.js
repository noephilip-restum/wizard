import React from "react";
import useForm from "react-hook-form";

import { getDefaultValues } from "../getDefaultFormValues";
import { InputError } from "../input/InputError";
import { InputContainer } from "../input/InputContainer";
import { StepControl } from "../../StepControl";

export const TitleAndAccessForm = ({ formKey, formData, next, prev }) => {
  const { register, errors, formState, getValues } = useForm({
    mode: "onChange",
    defaultValues: getDefaultValues(formKey, formData)
  });

  return (
    <form name="titleAndAccessForm">
      <InputContainer>
        <input
          name="jobTitle"
          type="text"
          placeholder="Job Title"
          ref={register({
            required: "Job Title is required"
          })}
        />
        <InputError error={errors.jobTitle} />
        <select
          name="jobLevel"
          ref={register({
            required: "Email Address is required"
          })}
        >
          <option value="">Choose a Type</option>
          <option value="Administrator">Adminitrator</option>
          <option value="Employee">Employee</option>
        </select>
        <InputError error={errors.jobLevel} />
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
