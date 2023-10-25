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
import { Link as RouterLink, useNavigate, useNavigation, useSubmit } from "react-router-dom";
import { BsPersonFillAdd } from "react-icons/bs";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";


const Register = () => {

  const resolver = yup.object({
    email: yup
      .string()
      .email("ایمیل وارد شده نامعتبر است")
      .required("وارد کردن ایمیل الزامی است"),
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

  const navigation = useNavigation()

  
  // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate();
  
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(resolver) });
  
  
  const isSubmitting = navigation.state !== 'idle'
  
  const submitForm = useSubmit()

  const onSubmit = (data) => {
    // eslint-disable-next-line no-unused-vars
    const {confirmPassword , ...userData} = data

    submitForm(userData , {method:'POST'})
  };

  return (
    <>
      <Heading as={"h2"} size={"lg"} color={"siteTheme.white"}>
        ثبت نام
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
