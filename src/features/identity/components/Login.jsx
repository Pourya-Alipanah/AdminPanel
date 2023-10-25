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
  Divider,
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link as RouterLink, useSubmit } from "react-router-dom";
import { GoSignIn } from "react-icons/go";
import { FcGoogle } from "react-icons/fc";
// eslint-disable-next-line no-unused-vars
import { appAuth } from "@components/firebaseConfig";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const googleAuth = new GoogleAuthProvider();

const Login = () => {
  const resolver = yup.object({
    email: yup
      .string()
      .email("ایمیل وارد شده نامعتبر است")
      .required("وارد کردن ایمیل الزامی است"),
    password: yup
      .string()
      .min(8, "طول رمز عبور میبایست بیشتر از 8 کاراکتر باشد"),
  });

  const [showPass, setShowPass] = useState(false);

  const { colorMode } = useColorMode();

  const auth = getAuth();

  const submitForm = useSubmit()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(resolver) });

  const onSubmit = (data) => {
    submitForm(data , {method:'POST'})
  };

  const googleSignIn = async (e) => {
    e.preventDefault();
    try {
      const googleSign = await signInWithPopup(auth, googleAuth);
      const res = googleSign.user.accessToken;
      localStorage.setItem("token", res);
    } catch (error) {
      throw new Error("problem in req");
    }
  };

  return (
    <>
      <Heading as={"h2"} size={"lg"} color={"siteTheme.white"}>
        ورود
      </Heading>

      <VStack as={"form"} spacing={4} onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.email}>
          <FormLabel
            fontSize={"13px"}
            fontWeight={"bold"}
            color={"siteTheme.white"}
          >
            آدرس ایمیل
          </FormLabel>
          <Input
            {...register("email")}
            errorBorderColor="red.500"
            focusBorderColor={errors.email ? "red.500" : "siteTheme.blue"}
            bg={colorMode === "dark" ? "siteTheme.grey" : "siteTheme.white"}
            type="email"
            color={colorMode === "dark" ? "siteTheme.white" : "siteTheme.grey"}
          />
          <FormErrorMessage fontSize={"10px"}>
            {errors.email?.message}
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
      <Divider w={"50%"} />
      <Flex
        flexDir={"column"}
        alignItems={"center"}
        gap={5}
        as={"form"}
        onSubmit={googleSignIn}
        mt={"-1rem"}
      >
        <Text color={"siteTheme.white"}>یا</Text>
        <Button
          type="submit"
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          rightIcon={<FcGoogle fontSize={23} />}
        >
          Sign in with Google
        </Button>
      </Flex>
    </>
  );
};

export default Login;
