import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import CategoryTable from "@features/category/CategoryTable";
import AddCourse from "../features/category/AddCourse";

const Category = () => {
  return (
    <>
      <Tabs variant="line" colorScheme="messenger">
        <TabList>
          <Tab fontSize={{ md: "md", sm: "sm", base: "9.9px" }}>دسته بندی دوره ها</Tab>
          <Tab fontSize={{ md: "md", sm: "sm", base: "9.9px" }}>افزودن دوره جدید</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <CategoryTable/>
          </TabPanel>
          <TabPanel>
            <AddCourse/>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default Category;
