import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <Box margin="0 auto" maxWidth={1100} transition="0.5s ease-out">
        <Box margin={[4, 8, 16]}>
          <Box as="main">{children}</Box>
          <Footer />
        </Box>
      </Box>
    </>
  );
};

export default Layout;
