import React from "react";

import { Wrapper } from "components/PageWrapper/Styled";
import SideBar from "components/SideBar";

const PageWrapper = ({ children }) => {
  return (
    <Wrapper>
      <SideBar />
      {children}
    </Wrapper>
  );
};

export default PageWrapper;
