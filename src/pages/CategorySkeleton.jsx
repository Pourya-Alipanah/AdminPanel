import {
  Flex,
  Skeleton,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { RiDeleteBinLine, RiEdit2Line } from "react-icons/ri";

const CategorySkeleton = () => {
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
          <Tr>
            <Td fontSize={{ md: "md", base: "sm" }} pe={{ sm: 6, base: 0 }}>
              <Skeleton maxW={'140px'}>Programming</Skeleton>
            </Td>
            <Td
              fontSize={{ md: "md", base: "sm" }}
              ps={{ sm: 6, base: 6 }}
              pe={0}
            >
              <Flex gap={4}>
                <button>
                  <RiEdit2Line />
                </button>

                <button>
                  <RiDeleteBinLine />
                </button>
              </Flex>
            </Td>
          </Tr>
          <Tr>
            <Td fontSize={{ md: "md", base: "sm" }} pe={{ sm: 6, base: 0 }}>
              <Skeleton maxW={'140px'}>Programming</Skeleton>
            </Td>
            <Td
              fontSize={{ md: "md", base: "sm" }}
              ps={{ sm: 6, base: 6 }}
              pe={0}
            >
              <Flex gap={4}>
                <button>
                  <RiEdit2Line />
                </button>

                <button>
                  <RiDeleteBinLine />
                </button>
              </Flex>
            </Td>
          </Tr>
          <Tr>
            <Td fontSize={{ md: "md", base: "sm" }} pe={{ sm: 6, base: 0 }}>
              <Skeleton maxW={'140px'}>Programming</Skeleton>
            </Td>
            <Td
              fontSize={{ md: "md", base: "sm" }}
              ps={{ sm: 6, base: 6 }}
              pe={0}
            >
              <Flex gap={4}>
                <button>
                  <RiEdit2Line />
                </button>

                <button>
                  <RiDeleteBinLine />
                </button>
              </Flex>
            </Td>
          </Tr>
          <Tr>
            <Td fontSize={{ md: "md", base: "sm" }} pe={{ sm: 6, base: 0 }}>
              <Skeleton maxW={'140px'}>Programming</Skeleton>
            </Td>
            <Td
              fontSize={{ md: "md", base: "sm" }}
              ps={{ sm: 6, base: 6 }}
              pe={0}
            >
              <Flex gap={4}>
                <button>
                  <RiEdit2Line />
                </button>

                <button>
                  <RiDeleteBinLine />
                </button>
              </Flex>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default CategorySkeleton;
