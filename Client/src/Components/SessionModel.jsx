import { Box, Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Textarea, useDisclosure } from "@chakra-ui/react"
import React from "react"

function SessionModel({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure()


  return (
    <>
      <span onClick={onOpen}>{children}</span>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader >Create session</ModalHeader>
          <Box ml='23px' mb='25px'>Create a sharing session.</Box>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <Input placeholder="Title" />
            </FormControl>

            <FormControl mt={4}>
              <Textarea placeholder="Description: Session for managing and sharing files for the developmenet of the micrp club app" size="lg" width="400px" />
            </FormControl>
            <FormControl mt={4}>
              <Input placeholder="Budget" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default SessionModel
