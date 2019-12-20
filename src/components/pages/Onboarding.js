import React from "react";
import {
  useRouteMatch,
  Route,
  Switch,
  useHistory,
  useLocation
} from "react-router-dom";

import { NameForm } from "../forms/utils/NameForm";
import { EmailForm } from "../forms/utils/EmailForm";
import { TitleAndAccessForm } from "../forms/utils/TitleAndAccessForm";
import { BusinessIdentifierForm } from "../forms/utils/BusinessIdentifierForm";
import { BusinessAddressForm } from "../forms/utils/BusinessAddressForm";
import { BusinessIndustryForm } from "../forms/utils/BusinessIndustryForm";
import { BusinessSizeForm } from "../forms/utils/BusinessSizeForm";

import { WizardStep } from "../WizardStep";

const styles = {
  backgroundColor: "#ceddce",
  padding: "8px"
};

const hasStep = path => {
  const result = /step-[1-7]$/.test(path);

  return result;
};

export const Onboarding = () => {
  const { path } = useRouteMatch();
  const history = useHistory();
  const location = useLocation();

  const [formData, setFormData] = React.useState({});

  React.useEffect(() => {
    if (!hasStep(location.pathname)) {
      history.push(`${path}/step-1`);
    }
  }, [path, history, location]);

  const nextStep = step => formValues => {
    console.log("Values FromStep: ", step, formValues);
    setFormData({
      ...formData,
      ...formValues
    });
    history.push(`${path}/step-${step + 1}`);
  };

  const previousStep = step => formValues => {
    setFormData({
      ...formData,
      ...formValues
    });
    history.push(`${path}/step-${step - 1}`);
  };

  return (
    <div style={styles}>
      <h1>Onboarding</h1>
      <p>{JSON.stringify(formData, null, 4)}</p>
      <Switch>
        <Route path={`${path}/step-1`}>
          {" "}
          <WizardStep title="Step 1">
            <NameForm formKey="names" next={nextStep(1)} formData={formData} />
          </WizardStep>
        </Route>
        <Route path={`${path}/step-2`}>
          {" "}
          <WizardStep title="Step 2">
            <EmailForm
              formKey="email"
              formData={formData}
              next={nextStep(2)}
              prev={previousStep(2)}
            />
          </WizardStep>
        </Route>
        <Route path={`${path}/step-3`}>
          {" "}
          <WizardStep title="Step 3">
            <TitleAndAccessForm
              formKey="titleAndAccess"
              formData={formData}
              next={nextStep(3)}
              prev={previousStep(3)}
            />
          </WizardStep>
        </Route>
        <Route path={`${path}/step-4`}>
          {" "}
          <WizardStep title="Step 4">
            <BusinessIdentifierForm
              formKey="businessIdentifier"
              formData={formData}
              next={nextStep(4)}
              prev={previousStep(4)}
            />
          </WizardStep>
        </Route>
        <Route path={`${path}/step-5`}>
          {" "}
          <WizardStep title="Step 5">
            <BusinessAddressForm
              formKey="businessAddress"
              formData={formData}
              next={nextStep(5)}
              prev={previousStep(5)}
            />
          </WizardStep>
        </Route>
        <Route path={`${path}/step-6`}>
          {" "}
          <WizardStep title="Step 6">
            <BusinessIndustryForm
              formKey="businessIndustry"
              formData={formData}
              next={nextStep(6)}
              prev={previousStep(6)}
            />
          </WizardStep>
        </Route>
        <Route path={`${path}/step-7`}>
          {" "}
          <WizardStep title="Step 7">
            <BusinessSizeForm
              formKey="businessSize"
              formData={formData}
              next={nextStep(7)}
              prev={previousStep(7)}
            />
          </WizardStep>
        </Route>
      </Switch>
    </div>
  );
};
