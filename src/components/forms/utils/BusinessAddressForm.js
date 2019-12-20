import React from "react";
import useForm from "react-hook-form";

import { getDefaultValues } from "../getDefaultFormValues";
import { InputError } from "../input/InputError";
import { InputContainer } from "../input/InputContainer";
import { StepControl } from "../../StepControl";

export const BusinessAddressForm = ({ formKey, formData, next, prev }) => {
  const { register, errors, formState, getValues } = useForm({
    mode: "onChange",
    defaultValues: getDefaultValues(formKey, formData)
  });

  return (
    <form name="businessAddressForm">
      <InputContainer>
        <input
          name="street"
          type="text"
          placeholder="Street"
          ref={register({
            required: "Street is required"
          })}
        />
        <InputError error={errors.street} />
        <input
          name="city"
          type="text"
          placeholder="City"
          ref={register({
            required: "City is required"
          })}
        />
        <InputError error={errors.city} />
        <select
          name="province"
          ref={register({
            required: "Province is required"
          })}
        >
          <option value="">Choose a Province</option>
          <option value="Utah">Utah</option>
          <option value="Albay">Albay</option>
        </select>
        <InputError error={errors.province} />
        <select
          name="country"
          ref={register({
            required: "Country is required"
          })}
        >
          <option value="">Choose a Country</option>
          <option value="U.S.A">U.S.A</option>
          <option value="Philippines">Philippines</option>
        </select>
        <InputError error={errors.country} />
        <input
          name="postalCode"
          type="text"
          placeholder="Postal Code"
          ref={register({
            required: "Postal Code is required"
          })}
        />
        <InputError error={errors.postalCode} />
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
