import {
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import CategoryTable from "@features/category/CategoryTable";
import AddCourse from "../features/category/AddCourse";
import { Suspense } from "react";
import { Await, useLoaderData, useNavigation } from "react-router-dom";
import CategorySkeleton from "./CategorySkeleton";

const Category = () => {
  const courseCategories = useLoaderData();
  const navigation = useNavigation()

  return (
    <>
      <Tabs variant="line" colorScheme="messenger">
        <TabList>
          <Tab fontSize={{ md: "md", sm: "sm", base: "9.9px" }}>دسته بندی دوره ها</Tab>
          <Tab fontSize={{ md: "md", sm: "sm", base: "9.9px" }}>افزودن دسته جدید</Tab>
        </TabList>
        <TabPanels>
          <TabPanel display={'flex'} justifyContent={'center'}>
            <Suspense fallback={<CategorySkeleton/>}>
              <Await resolve={courseCategories.categories} >
                {navigation.state !== 'idle' ? <CategorySkeleton/> : (
                  (loadedCategories) => <CategoryTable categories={loadedCategories} />
                )}
              </Await>
            </Suspense>
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
