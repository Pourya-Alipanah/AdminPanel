import { Button, Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, FormControl, FormErrorMessage, FormLabel, Input, useColorMode } from "@chakra-ui/react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSearchParams } from "react-router-dom";


import { httpInterceptedServices } from "@core/http-service";
import { useEffect } from "react";
import { useCategoryContext } from "@context/CategoryContext";

// eslint-disable-next-line react/prop-types
const EditDrawer = ({onClose , isOpen }) => {

    const { category } = useCategoryContext();

    const resolver = yup.object({
        name: yup.string().required("وارد کردن نام دسته بندی الزامی است"),
      });

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
      } = useForm({ resolver: yupResolver(resolver) });

      useEffect(() => {
        if (category) {
          setValue("name", category.name);
          setValue("id", category.id);
        }
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [category]);

    const { colorMode } = useColorMode();

    const [searchParams, setSearchParams] = useSearchParams();
    const currentPage = Number(searchParams.get("page")) || 1;

    const onSubmit = (data) => {
        console.log(data);
        onClose();
        const res = httpInterceptedServices.post(`/CourseCategory/`, data);
        toast.promise(
          res,
          {
            pending: "درحال ویرایش اطلاعات",
            success: {
              render() {
                setSearchParams({ page: currentPage });
                return "عملیات ویرایش با موفقیت انجام شد";
              },
            },
            error: {
              render({ data }) {
                const errMsg = data.response.data.code;
                return errMsg === "DuplicateCategory"
                  ? "مقدار جدید میبایست با مقدار قبلی متفاوت باشد"
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
    <Drawer placement={"top"} onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent
        bg={colorMode === "dark" ? "siteTheme.black" : "siteTheme.grey"}
        color="siteTheme.white"
      >
        <DrawerHeader
          borderBottomWidth="1px"
          fontSize={{ md: "xl", base: "md" }}
        >
          ویرایش دسته بندی
        </DrawerHeader>
        <DrawerBody fontSize={{ md: "md", base: "sm" }}>
          <Flex
            as={"form"}
            onSubmit={handleSubmit(onSubmit)}
            id="editForm"
            mt={5}
          >
            <FormControl
              display={"flex"}
              flexDir={"column"}
              isInvalid={errors.name}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Flex
                w={"100%"}
                gap={5}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <FormLabel>نام دسته بندی</FormLabel>
                <Input
                  maxW={"20%"}
                  {...register("name")}
                  errorBorderColor="red.500"
                  focusBorderColor={errors.name ? "red.500" : "siteTheme.blue"}
                  bg={
                    colorMode === "dark" ? "siteTheme.grey" : "siteTheme.white"
                  }
                  color={
                    colorMode === "dark" ? "siteTheme.white" : "siteTheme.grey"
                  }
                />
              </Flex>
              <FormErrorMessage fontSize={"10px"}>
                {errors.name?.message}
              </FormErrorMessage>
            </FormControl>
          </Flex>
        </DrawerBody>
        <DrawerFooter>
          <Button
            type="submit"
            form="editForm"
            colorScheme="messenger"
            size={{ md: "md", base: "sm" }}
          >
            ثبت تغییرات
          </Button>
          <Button
            variant="outline"
            mr={3}
            onClick={onClose}
            size={{ md: "md", base: "sm" }}
            color="siteTheme.white"
          >
            انصراف
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default EditDrawer;
