import { Box, Flex, Link, useColorMode } from "@chakra-ui/react";

const ScaffoldIcon = ({ size = "19px" }: { size: string }) => {
  const { colorMode } = useColorMode();
  return (
    <Box width="full" alignContent="center">
      <Flex alignItems="center" justifyContent="center">
        <Link
          href="https://github.com/scaffold-eth"
          target="_blank"
          rel="noopener noreferrer"
        >
          {colorMode === "dark" ? (
            <svg width={size} height={size} viewBox="0 0 132 190" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 66L66 95" stroke="#F5D070" strokeWidth="16" />
              <path d="M124 8L8 66V124L124 182" stroke="#F5D070" strokeWidth="16" />
              <path d="M8 8L124 66V124L8 182" stroke="#F5D070" strokeWidth="16" />
              <path d="M124 66L66 95" stroke="#F5D070" strokeWidth="16" />
              <path d="M66 153V95" stroke="#F5D070" strokeWidth="16" />
              <path d="M8 66L66 95" stroke="#F5D070" strokeWidth="16" />
              <path d="M124 8L8 66V124L124 182" stroke="#F5D070" strokeWidth="16" />
              <path d="M8 8L124 66V124L8 182" stroke="#F5D070" strokeWidth="16" />
              <path d="M124 66L66 95" stroke="#F5D070" strokeWidth="16" />
              <path d="M66 153V95" stroke="#F5D070" strokeWidth="16" />
            </svg>
          ) : (
            <svg width={size} height={size} viewBox="0 0 132 190" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 66L66 95" stroke="#0F0A1E" strokeWidth="16" />
              <path d="M124 8L8 66V124L124 182" stroke="#0F0A1E" strokeWidth="16" />
              <path d="M8 8L124 66V124L8 182" stroke="#0F0A1E" strokeWidth="16" />
              <path d="M124 66L66 95" stroke="#0F0A1E" strokeWidth="16" />
              <path d="M66 153V95" stroke="#0F0A1E" strokeWidth="16" />
              <path d="M8 66L66 95" stroke="#0F0A1E" strokeWidth="16" />
              <path d="M124 8L8 66V124L124 182" stroke="#0F0A1E" strokeWidth="16" />
              <path d="M8 8L124 66V124L8 182" stroke="#0F0A1E" strokeWidth="16" />
              <path d="M124 66L66 95" stroke="#0F0A1E" strokeWidth="16" />
              <path d="M66 153V95" stroke="#0F0A1E" strokeWidth="16" />
            </svg>
          )}
        </Link>
      </Flex>
    </Box>
  );
};

export default ScaffoldIcon;
