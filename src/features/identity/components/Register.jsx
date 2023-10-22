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
import {BsPersonFillAdd} from 'react-icons/bs'

const Register = () => {
  const [showPass, setShowPass] = useState(false);

  const { colorMode } = useColorMode()


  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

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

        <FormControl isInvalid={errors.confirmPassword}>
          <FormLabel
            fontSize={"13px"}
            fontWeight={"bold"}
            color={"siteTheme.white"}
          >
            تکرار رمز عبور
          </FormLabel>
          <Input
            {...register("confirmPassword", {
              required: "تکرار رمز عبور الزامی است",
              validate: (value) =>
                watch("password") !== value ? "عدم تطابق رمز وارد شده" : null,
            })}
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
          >
            ثبت نام <BsPersonFillAdd/> 
          </Button>
          <Text fontSize={"13px"} color={"siteTheme.white"}>
            {" "}
            حساب کاربری دارید؟{" "}
            <Link
              as={RouterLink}
              to="/AdminPanel/login"
              color={"siteTheme.blue"}
            >
              ورود
            </Link>{" "}
          </Text>
        </FormControl>
      </VStack>
    </>
  );
};

export default Register;
