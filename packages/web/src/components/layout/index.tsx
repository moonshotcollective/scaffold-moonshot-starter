import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box margin="0 auto" maxWidth={1100} transition="0.5s ease-out">
      <Box margin="8">
        <Navbar />
        <Box as="main" marginY={22}>
          {children}
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
