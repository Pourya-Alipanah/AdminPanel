import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Heading,
  Input,
  VStack,
  HStack,
  Text,
  Link,
  FormErrorMessage,
  useColorMode,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Link as RouterLink,
  useActionData,
  useNavigate,
  useNavigation,
  useRouteError,
  useSubmit,
} from "react-router-dom";
import { BsPersonFillAdd } from "react-icons/bs";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

const Register = () => {
  const resolver = yup.object({
    mobile: yup
      .string()
      .min(11, "شماره تماس میبایست 11 رقم باشد")
      .max(11, "شماره تماس میبایست 11 رقم باشد")
      .required("وارد کردن شماره تماس الزامی است"),
    password: yup
      .string()
      .min(8, "طول رمز عبور میبایست بیشتر از 8 کاراکتر باشد"),
    confirmPassword: yup
      .string()
      .min(8, "تکرار رمزعبور الزامی است")
      .oneOf([yup.ref("password"), null], "عدم تطابق رمز وارد شده"),
  });

  const [showPass, setShowPass] = useState(false);

  const { colorMode } = useColorMode();

  const navigation = useNavigation();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(resolver) });

  const isSubmitting = navigation.state !== "idle";

  const submitForm = useSubmit();

  const onSubmit = (data) => {
    // eslint-disable-next-line no-unused-vars
    const { confirmPassword, ...userData } = data;

    submitForm(userData, { method: "POST" });
  };

  const isSuccsessOperation = useActionData() || false;

  const routeErrors = useRouteError() || false;

  const errorMessage = routeErrors.response?.data
    .map((error) => error.code)
    .join();

  useEffect(() => {
    if (isSuccsessOperation) {
      toast.success("ثبت نام با موفقیت انجام شد. به صفحه ورود منتقل میشوید", {
        position: "top-center",
        autoClose: 1300,
        pauseOnHover: false,
        draggable: true,
        closeButton: false,
        theme: colorMode === "dark" ? "dark" : "light",
      });
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccsessOperation]);

  useEffect(() => {
    if (routeErrors) {
      toast.error(
        errorMessage === "DuplicateUserName"
          ? "این شماره موبایل قبلا در سیستم ثبت شده است"
          : "خطای ناشناخته",
        {
          position: "top-center",
          autoClose: false,
          pauseOnHover: false,
          draggable: true,
          theme: colorMode === "dark" ? "dark" : "light",
        }
      );
    }
  }, [routeErrors]);

  return (
    <>
      <Heading as={"h2"} size={"lg"} color={"siteTheme.white"}>
        ثبت نام
      </Heading>

      <VStack as={"form"} spacing={4} onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.mobile}>
          <FormLabel
            fontSize={"13px"}
            fontWeight={"bold"}
            color={"siteTheme.white"}
          >
            شماره موبایل
          </FormLabel>
          <Input
            {...register("mobile")}
            errorBorderColor="red.500"
            focusBorderColor={errors.mobile ? "red.500" : "siteTheme.blue"}
            bg={colorMode === "dark" ? "siteTheme.grey" : "siteTheme.white"}
            type="tel"
            color={colorMode === "dark" ? "siteTheme.white" : "siteTheme.grey"}
          />
          <FormErrorMessage fontSize={"10px"}>
            {errors.mobile?.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.password}>
          <FormLabel
            fontSize={"13px"}
            fontWeight={"bold"}
            color={"siteTheme.white"}
          >
            رمز عبور
          </FormLabel>
          <Input
            {...register("password")}
            errorBorderColor="red.500"
            focusBorderColor={errors.password ? "red.500" : "siteTheme.blue"}
            bg={colorMode === "dark" ? "siteTheme.grey" : "siteTheme.white"}
            dir="ltr"
            type={showPass ? "text" : "password"}
            color={colorMode === "dark" ? "siteTheme.white" : "siteTheme.grey"}
          />
          <FormErrorMessage fontSize={"10px"}>
            {errors.password?.message}
          </FormErrorMessage>
        </FormControl>

        <HStack as={FormControl} mt={"-6px"}>
          <FormLabel
            m={0}
            userSelect={"none"}
            fontSize={"13px"}
            fontWeight={"bold"}
            color={"siteTheme.white"}
          >
            نمایش رمز
          </FormLabel>
          <Checkbox
            colorScheme="messenger"
            isChecked={showPass}
            onChange={() => setShowPass(!showPass)}
          />
        </HStack>

        <FormControl isInvalid={errors.confirmPassword}>
          <FormLabel
            fontSize={"13px"}
            fontWeight={"bold"}
            color={"siteTheme.white"}
          >
            تکرار رمز عبور
          </FormLabel>
          <Input
            {...register("confirmPassword")}
            errorBorderColor="red.500"
            focusBorderColor={
              errors.confirmPassword ? "red.500" : "siteTheme.blue"
            }
            bg={colorMode === "dark" ? "siteTheme.grey" : "siteTheme.white"}
            dir="ltr"
            type={showPass ? "text" : "password"}
            color={colorMode === "dark" ? "siteTheme.white" : "siteTheme.grey"}
          />
          <FormErrorMessage fontSize={"10px"}>
            {errors.confirmPassword?.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl>
          <Button
            type="submit"
            my={"8px"}
            w={"100%"}
            colorScheme="messenger"
            display={"flex"}
            flexDir={"row"}
            justifyContent={"center"}
            gap={2}
            alignContent={"center"}
            fontSize={"18px"}
            p={0}
            isLoading={isSubmitting}
          >
            ثبت نام <BsPersonFillAdd />
          </Button>
          <Text fontSize={"13px"} color={"siteTheme.white"}>
            {" "}
            حساب کاربری دارید؟{" "}
            <Link as={RouterLink} to="/login" color={"siteTheme.blue"}>
              ورود
            </Link>{" "}
          </Text>
        </FormControl>
      </VStack>
    </>
  );
};

export default Register;
