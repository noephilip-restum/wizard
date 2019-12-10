import React from 'react';
import {
  Switch,
  Route,
  useRouteMatch,
  useHistory,
  useLocation,
} from 'react-router-dom';

import { NameForm } from '../forms/NameForm';
import { EmailForm } from '../forms/EmailForm';
import { AccessForm } from '../forms/AccessForm';
import { BusinessNameForm } from '../forms/BusinessNameForm';
import { PhonenumberForm } from '../forms/PhonenumberForm';
import { WebsiteForm } from '../forms/WebsiteForm';
import { BusinessAddressForm } from '../forms/BusinessAddressForm';
import { IndustryForm } from '../forms/IndustryForm';
import { EmployeeCountForm } from '../forms/EmployeeCountForm';

const styles = {
  backgroundColor: '#ceddce',
  padding: '8px',
};

const stepStyle = {
  backgroundColor: '#f6beb3',
  padding: '8px',
  margin: '8px',
};

const Step = ({ step, nextStep, previousStep, children }) => (
  <div style={stepStyle}>
    <h1>Step {step}</h1>
    {children}
    {!!previousStep && (
      <button onClick={() => previousStep(step)}>Previous</button>
    )}
    {!!nextStep && <button onClick={() => nextStep(step)}>Next</button>}
  </div>
);

const hasStep = path => {
  const parts = path.split('/');
  const step = parts[parts.length - 1];
  return /step-[1-9]$/.test(step);
};

export const Onboarding = () => {
  const { path } = useRouteMatch();
  const location = useLocation();
  const history = useHistory();

  React.useEffect(() => {
    if (!hasStep(location.pathname)) {
      history.push(`${path}/step-1`);
    }
  }, [location.pathname, history, path]);

  const nextStep = step => history.push(`${path}/step-${step + 1}`);
  const previousStep = step => history.push(`${path}/step-${step - 1}`);

  return (
    <div style={styles}>
      <h1>Onboarding</h1>
      <Switch>
        <Route path={`${path}/step-1`}>
          <Step step={1} nextStep={nextStep}>
            <NameForm />
          </Step>
        </Route>
        <Route path={`${path}/step-2`}>
          <Step step={2} nextStep={nextStep} previousStep={previousStep}>
            <EmailForm />
          </Step>
        </Route>
        <Route path={`${path}/step-3`}>
          <Step step={3} nextStep={nextStep} previousStep={previousStep}>
            <AccessForm />
          </Step>
        </Route>
        <Route path={`${path}/step-4`}>
          <Step step={4} nextStep={nextStep} previousStep={previousStep}>
            <BusinessNameForm />
          </Step>
        </Route>
        <Route path={`${path}/step-5`}>
          <Step step={5} nextStep={nextStep} previousStep={previousStep}>
            <WebsiteForm />
          </Step>
        </Route>
        <Route path={`${path}/step-6`}>
          <Step step={6} nextStep={nextStep} previousStep={previousStep}>
            <PhonenumberForm />
          </Step>
        </Route>
        <Route path={`${path}/step-7`}>
          <Step step={7} nextStep={nextStep} previousStep={previousStep}>
            <BusinessAddressForm />
          </Step>
        </Route>
        <Route path={`${path}/step-8`}>
          <Step step={8} nextStep={nextStep} previousStep={previousStep}>
            <EmployeeCountForm />
          </Step>
        </Route>
        <Route path={`${path}/step-9`}>
          <Step step={9} previousStep={previousStep}>
            <IndustryForm />
          </Step>
        </Route>
      </Switch>
    </div>
  );
};
