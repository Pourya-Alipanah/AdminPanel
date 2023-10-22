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
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link as RouterLink } from "react-router-dom";
import { GoSignIn } from "react-icons/go"

const Login = () => {
  const [showPass, setShowPass] = useState(false);

  const { colorMode } = useColorMode()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

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
            {...register("mobile", {
              required: "موبایل الزامی است",
              minLength: 11,
              maxLength: 11,
            })}
            errorBorderColor="red.500"
            focusBorderColor={errors.mobile ? "red.500" : "siteTheme.blue"}
            bg={colorMode === "dark" ? "siteTheme.grey" : "siteTheme.white"}
            type="tel"
            color={colorMode === "dark" ? "siteTheme.white" : "siteTheme.grey"}
          />
          {errors.mobile &&
          (errors.mobile.type === "minLength" ||
            errors.mobile.type === "maxLength") ? (
            <FormErrorMessage fontSize={"10px"}>
              موبایل باید 11 رقم باشد
            </FormErrorMessage>
          ) : (
            <FormErrorMessage fontSize={"10px"}>
              {errors.mobile?.message}
            </FormErrorMessage>
          )}
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
            {...register("password", {
              required: "رمز عبور الزامی است",
            })}
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
            ورود<GoSignIn/>
          </Button>
          <Text fontSize={"13px"} color={"siteTheme.white"}>
            {" "}
            حساب کاربری ندارید؟{" "}
            <Link
              as={RouterLink}
              to="/AdminPanel/register"
              color={"siteTheme.blue"}
            >
              ثبت نام
            </Link>{" "}
          </Text>
        </FormControl>
      </VStack>
    </>
  );
};

export default Login;
