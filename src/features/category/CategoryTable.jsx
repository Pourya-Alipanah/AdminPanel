/* eslint-disable react/prop-types */
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import { RiDeleteBinLine, RiEdit2Line } from "react-icons/ri";
import { useEffect, useState } from "react";

import Pagination from "@components/Pagination";
import { httpInterceptedServices } from "@core/http-service";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import DeleteModal from "./DeleteModal";

const CategoryTable = ({ categories: { data, totalRecords } }) => {
  const { colorMode } = useColorMode();

  const { isOpen, onOpen, onClose } = useDisclosure(); //for drawer
  const {
    isOpen: isOpen2,
    onOpen: onOpen2,
    onClose: onClose2,
  } = useDisclosure(); //for modal

  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    console.log(selectedCategory);
  }, [selectedCategory]);

  const navigate = useNavigate();

  const deleteCategory = (categoryId) => {
    setSelectedCategory(categoryId);
    onOpen2();
  };

  const handleDeleteCategory = async () => {
    onClose2();
    const res = httpInterceptedServices.delete(
      `/CourseCategory/${selectedCategory}`
    );

    toast.promise(
      res,
      {
        pending: "در حال حذف دسته بندی",
        success: {
          render() {
            const url = new URL(window.location.href);
            navigate(url.pathname + url.search);
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
        autoClose: 3000,
        draggable: true,
        theme: colorMode === "dark" ? "dark" : "light",
      }
    );
  };

  return (
    <TableContainer w={"80%"} overflowX={"hidden"} pt={10}>
      <Table variant="striped" colorScheme="messenger">
        <Thead>
          <Tr>
            <Th>نام دوره</Th>
            <Th>عملیات</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((category) => (
            <Tr key={category.id}>
              <Td fontSize={{ md: "md", base: "sm" }} pe={{ sm: 6, base: 0 }}>
                {category.name}
              </Td>
              <Td
                fontSize={{ md: "md", base: "sm" }}
                ps={{ sm: 6, base: 6 }}
                pe={0}
              >
                <Flex gap={4}>
                  <button onClick={onOpen}>
                    <RiEdit2Line />
                  </button>

                  <button onClick={() => deleteCategory(category.id)}>
                    <RiDeleteBinLine />
                  </button>
                </Flex>
              </Td>
            </Tr>
          ))}
        </Tbody>
        <TableCaption>
          <Pagination totalRecords={totalRecords} />
        </TableCaption>
      </Table>
      <Drawer placement={"top"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader
            borderBottomWidth="1px"
            fontSize={{ md: "xl", base: "md" }}
          >
            ویرایش
          </DrawerHeader>
          <DrawerBody fontSize={{ md: "md", base: "sm" }}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
          <DrawerFooter>
            <Button colorScheme="messenger" size={{ md: "md", base: "sm" }}>
              ویرایش
            </Button>
            <Button
              variant="outline"
              mr={3}
              onClick={onClose}
              size={{ md: "md", base: "sm" }}
            >
              انصراف
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      
      <DeleteModal
        isOpen={isOpen2}
        onClose={onClose2}
        actionClick={handleDeleteCategory}
      />
    </TableContainer>
  );
};

export default CategoryTable;
