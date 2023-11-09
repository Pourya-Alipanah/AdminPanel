import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import CategoryTable from "@features/category/CategoryTable";
import AddCourse from "../features/category/AddCourse";
import { Suspense, useState } from "react";
import { Await, useLoaderData, useNavigation } from "react-router-dom";
import CategorySkeleton from "./CategorySkeleton";

const Category = () => {
  const courseCategories = useLoaderData();
  const navigation = useNavigation()
  const [tabIndex, setTabIndex] = useState(0)

  return (
    <>
      <Tabs variant="line" colorScheme="messenger" index={tabIndex}>
        <TabList>
          <Tab onClick={()=>setTabIndex(0)} fontSize={{ md: "md", sm: "sm", base: "9.9px" }}>دسته بندی دوره ها</Tab>
          <Tab onClick={()=>setTabIndex(1)} fontSize={{ md: "md", sm: "sm", base: "9.9px" }}>افزودن دسته جدید</Tab>
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
          <TabPanel display={'flex'} justifyContent={'center'} pt={16} >
            <AddCourse setTabIndex={setTabIndex}/>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default Category;
