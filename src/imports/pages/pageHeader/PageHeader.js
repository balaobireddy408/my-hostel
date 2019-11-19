import React from "react";

import Link from "../../molecules/Link";
import * as Routes from "../../routes/Routes";
import { Box } from "./styledComponents";

const PageHeader = () => {
  return (
    <Box>
      <Link pageUrl={Routes.Home} label="Home" />
      <Link pageUrl={Routes.ContactUs} label="Contact Us" />
      <Link pageUrl={Routes.AboutUs} label="About Us" />
    </Box>
  );
};

export default PageHeader;
