import { IconButton, Link } from "@chakra-ui/react";
import { RiDiscordFill } from "react-icons/ri";

const DiscordButton = () => {
  return (
    <Link
      href="https://discord.gg/3A3kxBSb62"
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconButton
        backgroundColor="#738adb"
        aria-label="discord"
        icon={<RiDiscordFill fontSize="24" />}
      />
    </Link>
  );
};

export default DiscordButton;
