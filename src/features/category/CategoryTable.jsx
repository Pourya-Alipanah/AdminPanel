/* eslint-disable react/prop-types */
import {
  Flex,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import { RiDeleteBinLine, RiEdit2Line } from "react-icons/ri";

import Pagination from "@components/Pagination";
import DeleteModal from "./DeleteModal";
import { useCategoryContext } from "@context/categoryContext";
import EditDrawer from "../category/EditDrawer";

const CategoryTable = ({ categories: { data, totalRecords } }) => {
  const { isOpen, onOpen, onClose } = useDisclosure(); //for drawer

  const {
    isOpen: isOpen2,
    onOpen: onOpen2,
    onClose: onClose2,
  } = useDisclosure(); //for modal

  const { setCategory } = useCategoryContext();
  const { setSelectedCategory } = useCategoryContext();

  const deleteCategory = (categoryId) => {
    setSelectedCategory(categoryId);
    onOpen2();
  };

  const editCategory = (categoryData) => {
    setCategory(categoryData);
    onOpen();
  };

  return (
    <>
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
                    <button onClick={() => editCategory(category)}>
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
              {data.red}
            <Pagination totalRecords={totalRecords} />

          </TableCaption>

        </Table>

        <EditDrawer isOpen={isOpen} onClose={onClose} />

        <DeleteModal
          isOpen={isOpen2}
          onClose={onClose2}
          totalRecords={totalRecords}
        />

      </TableContainer>
    </>
  );
};

export default CategoryTable;
