import { IconButton, Link } from "@chakra-ui/react";
import { RiTwitterFill } from "react-icons/ri";

const TwitterButton = () => {
  return (
    <Link
      href="https://twitter.com/gitcoindao"
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconButton
        backgroundColor="#1DA1F2"
        aria-label="twitter"
        icon={<RiTwitterFill fontSize="24" />}
      />
    </Link>
  );
};

export default TwitterButton;
