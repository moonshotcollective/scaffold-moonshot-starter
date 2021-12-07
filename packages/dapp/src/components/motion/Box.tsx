import { chakra, HTMLChakraProps } from "@chakra-ui/react";
import { motion, HTMLMotionProps } from "framer-motion";

import { Merge } from "core/types/merge";

type MotionBoxProps = Merge<HTMLChakraProps<"div">, HTMLMotionProps<"div">>;

// eslint-disable-next-line import/prefer-default-export
export const MotionBox: React.FC<MotionBoxProps> = motion(chakra.div);
