import React from "react";
import useForm from "react-hook-form";

import { getDefaultValues } from "../getDefaultFormValues";
import { InputError } from "../input/InputError";
import { StepControl } from "../../StepControl";

export const BusinessSizeForm = ({ formKey, formData, next, prev }) => {
  const { register, errors, formState, getValues } = useForm({
    mode: "onChange",
    defaultValues: getDefaultValues(formKey, formData)
  });
  return (
    <form name="businessSizeForm">
      <fieldset>
        <legend>Number of Employees</legend>
        <select
          name="numberOfEmployee"
          ref={register({
            required: "Number of Employees is required"
          })}
        >
          <option value="">Choose a range of number</option>
          <option value="1-50">1-50</option>
          <option value="50-100">50-100</option>
          <option value="100-500">100-500</option>
          <option value="501-1000">501-1000</option>
          <option value="1000">1000</option>
        </select>
        <InputError error={errors.numberOfEmployee} />
      </fieldset>
      <fieldset>
        <legend>Typical Deal Size</legend>
        <select
          name="typicalDealSize"
          ref={register({
            required: "Typical Deal Size is required"
          })}
        >
          <option value="">Choose an ideal size</option>
          <option value="$1-$20">$1-$20</option>
          <option value="$21-$50">$21-$50</option>
          <option value="$51-$500">$51-$500</option>
          <option value="$100-$500">$100-$500</option>
          <option value="$501-$1000">$501-$1000</option>
          <option value="$1001-$10000">$1001-$10000</option>
          <option value="$1000">$10000</option>
        </select>
        <InputError error={errors.typicalDealSize} />
      </fieldset>
      <fieldset>
        <legend>Publicly Traded</legend>
        <label>
          <input
            value="yes"
            type="radio"
            name="publiclyTraded"
            ref={register({
              required: "Publicly Traded is required"
            })}
          />
          Yes
        </label>
        <label>
          <input
            value="no"
            type="radio"
            name="publiclyTraded"
            ref={register({
              required: "Publicly Traded is required"
            })}
          />
          No
        </label>
        <InputError error={errors.publiclyTraded} />
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
