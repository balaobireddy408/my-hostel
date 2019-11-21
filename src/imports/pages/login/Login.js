import React from "react";
import TextField from "@material-ui/core/TextField";

import { Panel, Section, PrimaryButton } from "./styledComponent";

const Login = () => {
  return (
    <form>
      <Section>
        <div>
          <div>
            <TextField id="standard-basic" label="user name" margin="normal" />
          </div>
          <div>
            <TextField id="standard-basic" label="password" margin="normal" />
          </div>
        </div>
        <Panel>
          <PrimaryButton variant="contained" color="primary">
            Login
          </PrimaryButton>
          <PrimaryButton variant="contained" color="default">
            Cancel
          </PrimaryButton>
        </Panel>
      </Section>
    </form>
  );
};

export default Login;
