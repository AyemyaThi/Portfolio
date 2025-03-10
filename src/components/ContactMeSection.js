import React, {useEffect} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";

const ContactMeSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      type: '',
      comment: '',
    },

    validationSchema: Yup.object({
      firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),

      email: Yup.string()
      .email('Invalid email')
      .required('Required'),

      type: Yup.string()
      .oneOf( ['hireMe', 'openSource' ,'other'], 'Invalid Enquiry Type'),

      comment: Yup.string()
      .min(25, 'Atleast 25 characters are required')
      .required('Required'),
    }),

    onSubmit: async (values) => {

      //alert(JSON.stringify(values, null, 2));
      // console.log('data::', JSON.stringify(values));
      // submit('', values);
      // console.log('submit!');

      if (values.email) {
        const success = await submit(values);
      }

    },

  });

  // const handleSubmit = async () => {
  //   if (email) {
  //     const success = await submit(email);
  //     if (success) {
  //       alert("Email sent successfully!");
  //       setEmail("");
  //     } else {
  //       alert("Failed to send email.");
  //     }
  //   }
  // };

  useEffect(() => {

    console.log('Get response!', response);

    if(response !== null) {

      const {type, message} = response;
      onOpen(type, message);

      if(type === 'success') {
        formik.resetForm();
      }

    }


  }, [response]);


  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#1360a6"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">

          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  {...formik.getFieldProps('firstName')}
                  />

                {formik.touched.firstName && formik.errors.firstName ? (
                    <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
                ) : null}

               </FormControl>
              <FormControl isInvalid={formik.touched.email && formik.errors.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  {...formik.getFieldProps('email')}
                />
                {formik.touched.email && formik.errors.email ? (
                  <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                ) : null}
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select id="type" name="type"
                  {...formik.getFieldProps('type')}
                >
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">
                    Open source consultancy session
                  </option>
                  <option value="other">Other</option>
                </Select>

                {formik.touched.type && formik.errors.type ? (
                  <FormErrorMessage>{formik.errors.type}</FormErrorMessage>
                ) : null}

              </FormControl>
              <FormControl isInvalid={formik.touched.comment && formik.errors.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  {...formik.getFieldProps('comment')}
                />
                {formik.touched.comment && formik.errors.comment ? (
                  <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
                ) : null}
              </FormControl>
              <Button isLoading={isLoading} type="submit" colorScheme="blue" width="full">
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default ContactMeSection;
