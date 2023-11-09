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
import { httpInterceptedServices } from "@core/http-service";
import { useCategoryContext } from "@context/CategoryContext";
import { toast } from "react-toastify";
import { useSearchParams } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const DeleteModal = ({ isOpen, onClose, totalRecords /* actionClick */ }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;

  const { selectedCategory } = useCategoryContext();

  const { colorMode } = useColorMode();

  const pageSize = import.meta.env.VITE_PAGE_SIZE;

  const handleDeleteCategory = async () => {
    onClose();
    const res = httpInterceptedServices.delete(
      `/CourseCategory/${selectedCategory}`
    );

    toast.promise(
      res,
      {
        pending: "در حال حذف دسته بندی",
        success: {
          render() {
            if (totalRecords % pageSize === 1) {
              setSearchParams({ page: currentPage - 1 });
            } else {
              setSearchParams({ page: currentPage });
            }
            return "عملیات حذف با موفقیت انجام شد";
          },
        },
        error: {
          render({ data }) {
            const errMsg = data.response.data.code;

            return errMsg === "DeleteIsNotPossible"
              ? "امکان حذف این دسته بندی وجود ندارد"
              : "خطا در انجام عملیات";
          },
        },
      },
      {
        position: "top-left",
        autoClose: 1500,
        draggable: true,
        theme: colorMode === "dark" ? "dark" : "light",
      }
    );
  };

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
            onClick={handleDeleteCategory}
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
