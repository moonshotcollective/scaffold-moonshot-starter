import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  IconButton,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { Step, Steps, useSteps } from "chakra-ui-steps";
import { FormProvider, useForm } from "react-hook-form";
import { SiDiscord, SiGitbook, SiGithub, SiTwitter } from "react-icons/si";

type IconWithStateProps = {
  icon: string;
  active?: boolean;
};

function IconWithState({ icon, active = false }: IconWithStateProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    handleSubmit,
    register,
    control,
    formState: { errors, isSubmitting },
  } = useForm();

  function onSubmit(values: any) {
    console.log(values);
  }

  const { nextStep, prevStep, activeStep } = useSteps({
    initialStep: 0,
  });

  const UsernameForm = () => {
    return <FormControl isInvalid={errors.name}>
    <FormLabel htmlFor="name">Username</FormLabel>
    <Input
      placeholder="Project name"
      {...register("name", {
        required: "This is required",
        maxLength: {
          value: 150,
          message: "Maximum length should be 150",
        },
      })}
    />
    <FormErrorMessage>
      {errors.name && errors.name.message}
    </FormErrorMessage>
  </FormControl>
  }

  const steps = [
    {
      label: "Step 1",
      content: UsernameForm,
    },
  ];

  const methods = useForm({
    defaultValues: {
      logo: null,
      squads: [
        {
          name: "Genesis",
          members: ["0x0000000000000"],
          image: null,
        },
      ],
    },
  });

  let SiIcon;
  switch (icon) {
    case "discord":
      SiIcon = SiDiscord;
      break;
    case "gitbook":
      SiIcon = SiGitbook;
      break;
    case "github":
      SiIcon = SiGithub;
      break;
    case "twitter":
      SiIcon = SiTwitter;
      break;
    default:
      SiIcon = SiDiscord;
  }
  return (
    <FormProvider {...methods}>
      <IconButton
        variant="unstyled"
        aria-label="Discord"
        w="8"
        h="8"
        as={SiIcon}
        onClick={onOpen}
        color={active ? "aqua.200" : "stone"}
        _hover={{ color: "aqua.300" }}
      />
      <Modal onClose={onClose} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent bg="space">
          <ModalHeader>Discord</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Steps colorScheme="purple" activeStep={activeStep}>
              {steps.map(({ label, content }) => (
                <Step label={label} key={label}>
                  {content}
                </Step>
              ))}
            </Steps>
            <VStack w="full" onSubmit={handleSubmit(onSubmit)}>
              <UsernameForm />
            </VStack>
          </ModalBody>
          <ModalFooter alignSelf="center">
            <Button
              mt={4}
              colorScheme="pink"
              isLoading={isSubmitting}
              type="submit"
            >
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </FormProvider>
  );
}

export default IconWithState;
