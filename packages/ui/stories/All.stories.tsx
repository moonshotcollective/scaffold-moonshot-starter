import React from 'react';
import { Meta, Story } from '@storybook/react';
import { QButton, ButtonProps } from '../src/components/button';

import { ColorModeToggleBar } from './ColorMode';

import { AddIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  HStack,
  IconButton,
  Input,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Radio,
  RadioGroup,
  Select,
  Switch,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
  Text,
  Textarea,
  useDisclosure,
  useToast,
  VStack,
} from '@chakra-ui/react';

const meta: Meta = {
  title: 'Components/All',
  component: QButton,
  argTypes: {
    text: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};
export default meta;

export const All = () => {
  const toast = useToast();

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <VStack>
        <Button>Hello</Button>
        <Button variant="outline">Hello</Button>
        <Button variant="ghost">Hello</Button>
        <Input />
        <Select placeholder="Select option"></Select>
        <Textarea placeholder="Select option"></Textarea>

        <Switch />
        {/* set to subtle default variant="subtle" colorScheme="cyan" */}
        <Tag>hello</Tag>
        <Tag colorScheme="blue">hello</Tag>
        <Tag colorScheme="green">hello</Tag>
        <Tag colorScheme="teal">hello</Tag>

        <Button
          onClick={() =>
            toast({
              title: 'Account created.',
              description: "We've created your account for you.",
              status: 'success',
              duration: 9000,
              isClosable: true,
            })
          }
        >
          Show Toast
        </Button>

        <Tabs>
          <TabList>
            <Tab>One</Tab>
            <Tab>Two</Tab>
            <Tab>Three</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
        <Heading>Hello world</Heading>
        <Checkbox />
        <Link p={2}>project 1</Link>
        <Link>project 2</Link>

        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
          />
          <MenuList>
            <MenuItem icon={<AddIcon />} command="⌘T">
              New Tab
            </MenuItem>
            <MenuItem command="⌘N">New Window</MenuItem>
            <MenuItem>Open Closed Tab</MenuItem>
            <MenuItem>Open File...</MenuItem>
          </MenuList>
        </Menu>

        <>
          <Button onClick={onOpen}>Trigger modal</Button>

          <Modal onClose={onClose} isOpen={isOpen}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Modal Title</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
                ipsum
              </ModalBody>
              <ModalFooter>
                <Button onClick={onClose}>Close</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>

        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>

        <FormControl id="email" isRequired>
          <FormLabel as="legend">Favorite Naruto Character</FormLabel>
          <RadioGroup defaultValue="Itachi">
            <HStack spacing="24px">
              <Radio value="Sasuke">Sasuke</Radio>
              <Radio value="Nagato">Nagato</Radio>
              <Radio value="Itachi">Itachi</Radio>
              <Radio value="Sage of the six Paths">Sage of the six Paths</Radio>
            </HStack>
          </RadioGroup>
        </FormControl>

        <FormControl id="email">
          <FormLabel>Amount</FormLabel>
          <NumberInput max={50} min={10}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
      </VStack>
    </>
  );
};
