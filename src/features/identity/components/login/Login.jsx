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
import { GoSignIn } from "react-icons/go";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

const Login = () => {
  const resolver = yup.object({
    mobile: yup
      .string()
      .min(11, "شماره تماس میبایست 11 رقم باشد")
      .max(11, "شماره تماس میبایست 11 رقم باشد")
      .required("وارد کردن شماره تماس الزامی است"),
    password: yup
      .string()
      .min(8, "طول رمز عبور میبایست بیشتر از 8 کاراکتر باشد"),
  });

  const [showPass, setShowPass] = useState(false);

  const { colorMode } = useColorMode();

  const submitForm = useSubmit();

  const navigation = useNavigation();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(resolver) });

  const isSubmitting = navigation.state !== "idle";

  const onSubmit = (data) => {
    submitForm(data, { method: "POST" });
  };

  const isSuccsessOperation = useActionData() || false;

  const routeErrors = useRouteError() || false;

  const errorMessage = routeErrors.response?.data
    .map((error) => error.code)
    .join();

  const token = localStorage.getItem("token");
  const RedirectToastDialog = () => (
    <>
      <div>شما قبلا وارد شده اید</div>
      <div>به صفحه اصلی منتقل میشوید</div>
    </>
  );
  useEffect(() => {
    if (token && !isSuccsessOperation) {
      toast.info(<RedirectToastDialog />, {
        position: "top-center",
        autoClose: 1300,
        pauseOnHover: false,
        draggable: true,
        closeButton: false,
        theme: colorMode === "dark" ? "dark" : "light",
      });
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  useEffect(() => {
    if (isSuccsessOperation) {
      toast.success("در حال ورود", {
        position: "top-center",
        autoClose: 1300,
        pauseOnHover: false,
        draggable: true,
        closeButton: false,
        theme: colorMode === "dark" ? "dark" : "light",
      });
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccsessOperation]);

  useEffect(() => {
    if (routeErrors) {
      toast.error(
        errorMessage === "IncorrectUserNameOrPassword"
          ? "شماره موبایل و یا رمز عبور نادرست است"
          : "خطای ناشناخته",
        {
          position: "top-center",
          autoClose: 5000,
          pauseOnHover: false,
          draggable: true,
          theme: colorMode === "dark" ? "dark" : "light",
        }
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [routeErrors]);

  return (
    <>
      <Heading as={"h2"} size={"lg"} color={"siteTheme.white"}>
        ورود
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
            color={colorMode === "dark" ? "siteTheme.white" : "siteTheme.grey"}
            type="tel"
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
        <FormControl>
          <Button
            colorScheme="messenger"
            type="submit"
            my={"8px"}
            w={"100%"}
            display={"flex"}
            flexDir={"row"}
            justifyContent={"center"}
            alignContent={"center"}
            fontSize={"18px"}
            gap={2}
            isLoading={isSubmitting}
          >
            ورود
            <GoSignIn />
          </Button>
          <Text fontSize={"13px"} color={"siteTheme.white"}>
            {" "}
            حساب کاربری ندارید؟{" "}
            <Link as={RouterLink} to="/register" color={"siteTheme.blue"}>
              ثبت نام
            </Link>{" "}
          </Text>
        </FormControl>
      </VStack>
    </>
  );
};

export default Login;
