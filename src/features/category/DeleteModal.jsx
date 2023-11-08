import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useColorMode,
} from "@chakra-ui/react";

// eslint-disable-next-line react/prop-types
const DeleteModal = ({ isOpen, onClose , actionClick }) => {

  const { colorMode } = useColorMode();
  return (
    <Modal
      size={{ md: "md", base: "xs" }}
      blockScrollOnMount
      closeOnEsc
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent
        bg={colorMode === "dark" ? "siteTheme.black" : "siteTheme.grey"}
        color="siteTheme.white"
      >
        <ModalCloseButton left={3} right={"unset"} />
        <ModalHeader fontSize={{ md: "xl", base: "md" }}>
          حذف دسته بندی
        </ModalHeader>
        <ModalBody>
          <Text fontWeight="bold" mb="1rem" fontSize={{ md: "md", base: "sm" }}>
            آیا از حذف این دوره مطمئنید؟
          </Text>
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="red"
            onClick={actionClick}
            size={{ md: "md", base: "sm" }}
          >
            حذف
          </Button>
          <Button
            colorScheme="messenger"
            mr={3}
            onClick={onClose}
            size={{ md: "md", base: "sm" }}
          >
            انصراف
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DeleteModal;
