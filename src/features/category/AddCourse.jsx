import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  useColorMode,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";

import { httpInterceptedServices } from "@core/http-service";

// eslint-disable-next-line react/prop-types
const AddCourse = ({setTabIndex }) => {
  
  const [ ,setSearchParams] = useSearchParams();

  const resolver = yup.object({
    name: yup.string().required("وارد کردن نام دسته بندی الزامی است"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(resolver) });

  const { colorMode } = useColorMode();

  const onSubmit = (data) => {

    const res = httpInterceptedServices.post(`/CourseCategory/`, data);
    toast.promise(
      res,
      {
        pending: "در حال افزودن دسته جدید",
        success: {
          render() {
            setSearchParams({ page: 1 });
            reset()
            setTabIndex(0)
            return "عملیات افزودن با موفقیت انجام شد";
          },
        },
        error: {
          render({ data }) {
            const errMsg = data.response.data.code;
            return errMsg === "DuplicateCategory"
              ? "مقدار ثبت شده تکراری میباشد"
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
    <Flex
      alignItems={"center"}
      justifyContent={"center"}
      bg={colorMode === "dark" ? "siteTheme.black" : "siteTheme.grey"}
      w={"50%"}
      minH={"200px"}
      rounded={"xl"}
      color={"siteTheme.white"}
    >
      <Flex
        as={"form"}
        flexDir={"column"}
        gap={5}
        overflowX={"hidden"}
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormControl
          isInvalid={errors.name}
          display={"flex"}
          flexDir={"column"}
          alignItems={"center"}
        >
          <FormLabel fontSize={{ md: "md", sm: "sm", base: "xs" }}>
            نام دسته
          </FormLabel>
          <Input
            {...register("name")}
            size={{ md: "md", sm: "sm", base: "xs" }}
            rounded={"md"}
            w={"80%"}
            errorBorderColor="red.500"
            focusBorderColor={errors.name ? "red.500" : "siteTheme.blue"}
            bg={colorMode === "dark" ? "siteTheme.grey" : "siteTheme.white"}
            color={colorMode === "dark" ? "siteTheme.white" : "siteTheme.grey"}
          />
          <FormErrorMessage fontSize={"10px"}>
            {errors.name?.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl display={"flex"} justifyContent={"center"}>
          <Button
            colorScheme="messenger"
            type="submit"
            size={{ md: "md", sm: "sm", base: "xs" }}
            display={{ sm: "block", base: "none" }}
          >
            افزودن دسته
          </Button>
          <Button
            colorScheme="messenger"
            type="submit"
            size={{ md: "md", sm: "sm", base: "xs" }}
            display={{ sm: "none", base: "block" }}
          >
            افزودن
          </Button>
        </FormControl>
      </Flex>
    </Flex>
  );
};

export default AddCourse;
