import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

import Footer from "./Footer";
import Navbar from "./Navbar";
import BottomBar from "../../../../dapp/src/components/layout/BottomBar";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <Box margin="0 auto" maxWidth="7xl" transition="0.5s ease-out">
        <Box margin={[4, 8, 16]}>
          <Box as="main">{children}</Box>
          <Footer />
        </Box>
      </Box>
      <BottomBar />
    </>
  );
};

export default Layout;
