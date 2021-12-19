import React from 'react';
import { Meta, Story } from '@storybook/react';
import { QButton, ButtonProps } from '../src/components/button';
import { Title } from '../src/components/text';

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
  Center,
  Flex,
  useTheme,
  Badge,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
  Skeleton,
  Stack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from '@chakra-ui/react';
import { SearchIcon, ExternalLinkIcon } from '@chakra-ui/icons';

import useColor from './hooks/useColor';

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
  const theme = useTheme();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const { titleColor, textVioletColor, accentColorScheme } = useColor();

  const {
    isOpen: isOpenDrawer,
    onOpen: onOpenDrawer,
    onClose: onCloseDrawer,
  } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <VStack>
        <ColorModeToggleBar />

        {/* Use Text as designed to be responsive with textStyle which does not work on Heading */}
        <Heading>Heading</Heading>
        <Text as="h1" textStyle="h1" fontWeight="bold" color={titleColor}>
          Hello world with Text
        </Text>
        <Title>Title</Title>
        <Divider />
        <HStack>
          <Box layerStyle="gradient-border">
            <Center boxSize="150px" layerStyle="solid-card">
              <Text color={textVioletColor}>Accent Text in Card</Text>
            </Center>
          </Box>
          <Center boxSize="150px" layerStyle="outline-card">
            <Text color={textVioletColor}>Accent Text in Card</Text>
          </Center>
          <Center boxSize="150px" layerStyle="no-border-card">
            <Text color={textVioletColor}>Accent Text in Card</Text>
          </Center>
        </HStack>
        <HStack>
          <Center boxSize="150px" layerStyle="solid-hover">
            <Text color={textVioletColor}>Accent Text in Card</Text>
          </Center>
          <Center boxSize="150px" layerStyle="outline-hover">
            <Text color={textVioletColor}>Accent Text in Card</Text>
          </Center>
          <Center boxSize="150px" layerStyle="no-border-hover">
            <Text color={textVioletColor}>Accent Text in Card</Text>
          </Center>
        </HStack>
        <HStack>
          <Center boxSize="150px" layerStyle="solid-hover2">
            <Text color={textVioletColor}>Accent Text in Card</Text>
          </Center>
          <Center boxSize="150px" layerStyle="outline-hover2">
            <Text color={textVioletColor}>Accent Text in Card</Text>
          </Center>
          <Center boxSize="150px" layerStyle="no-border-hover2">
            <Text color={textVioletColor}>Accent Text in Card</Text>
          </Center>
        </HStack>
        <HStack>
          <Center boxSize="150px" layerStyle="solid-hover3">
            <Text color={textVioletColor}>Accent Text in Card</Text>
          </Center>
          <Center boxSize="150px" layerStyle="outline-hover3">
            <Text color={textVioletColor}>Accent Text in Card</Text>
          </Center>
          <Center boxSize="150px" layerStyle="no-border-hover3">
            <Text color={textVioletColor}>Accent Text in Card</Text>
          </Center>
        </HStack>

        <Text textStyle="h1">
          Lorem ipsum dolor sit amet,
          <Box as="span" layerStyle="gradient-text">
            {' '}
            consetetur{' '}
          </Box>
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua.
        </Text>
        <Text textStyle="h2" color={textVioletColor}>
          Lorem ipsum dolor sit amet, sadipscing elitr, sed diam nonumy eirmod
          tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
          voluptua.
        </Text>
        <Text textStyle="p">
          Lorem ipsum dolor sit amet, sadipscing elitr, sed diam nonumy eirmod
          tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
          voluptua.
        </Text>
        <Text textStyle="small" color={textVioletColor}>
          Lorem ipsum dolor sit amet, sadipscing elitr, sed diam nonumy eirmod
          tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
          voluptua.
        </Text>
        <Text textStyle="glow">
          Lorem ipsum dolor sit amet, sadipscing elitr
        </Text>

        <HStack>
          <Button onClick={() => console.log(theme)}>Hello</Button>
          <Button variant="outline">Hello</Button>
          <Button variant="ghost">Hello</Button>

          <IconButton aria-label="Search database" icon={<SearchIcon />} />
        </HStack>

        <HStack>
          <Button
            colorScheme={accentColorScheme}
            onClick={() => console.log(theme)}
          >
            Hello
          </Button>
          <Button colorScheme={accentColorScheme} variant="outline">
            Hello
          </Button>
          <Button colorScheme={accentColorScheme} variant="ghost">
            Hello
          </Button>
        </HStack>
        <Button layerStyle="gradient-bg">Hello</Button>

        <Button onClick={onOpenDrawer}>Open Drawer</Button>
        <Drawer isOpen={isOpenDrawer} placement="left" onClose={onCloseDrawer}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create your account</DrawerHeader>

            <DrawerBody>
              <Input placeholder="Type here..." />
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onCloseDrawer}>
                Cancel
              </Button>
              <Button>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>

        <Input />
        <Select placeholder="Select option"></Select>
        <Textarea placeholder="Select option"></Textarea>

        <Switch />
        {/* set to subtle default variant="subtle" colorScheme="cyan" */}
        <HStack>
          <Text>Tags</Text>
          <Tag>hello</Tag>
          <Tag colorScheme="blue">hello</Tag>
          <Tag variant="solid" colorScheme="green">
            hello
          </Tag>
          <Tag variant="outline" colorScheme="teal">
            hello
          </Tag>
          <Tag variant="subtle" colorScheme="teal">
            hello
          </Tag>
        </HStack>

        <HStack>
          <Text>Badges</Text>
          <Badge>hello</Badge>
          <Badge colorScheme="teal">hello</Badge>
        </HStack>

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

        <Tabs variant="soft-rounded">
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

        <Tabs variant="line">
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

        <Checkbox />
        <Link isExternal>
          Link <ExternalLinkIcon mx="2px" />
        </Link>

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
            <MenuDivider />
            <MenuOptionGroup defaultValue="asc" title="Order" type="radio">
              <MenuItemOption value="asc">Ascending</MenuItemOption>
              <MenuItemOption value="desc">Descending</MenuItemOption>
            </MenuOptionGroup>
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

        <Box layerStyle="outline-card" p="0" w="full">
          <Accordion w="full" allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Section 1 title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Section 2 title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>

        <Table variant="simple">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
            </Tr>
            <Tr>
              <Td>feet</Td>
              <Td>centimetres (cm)</Td>
              <Td isNumeric>30.48</Td>
            </Tr>
            <Tr>
              <Td>yards</Td>
              <Td>metres (m)</Td>
              <Td isNumeric>0.91444</Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Tfoot>
        </Table>
      </VStack>
    </>
  );
};
