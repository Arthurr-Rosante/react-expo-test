import { View, Text, TextInput, Button, StatusBar } from "react-native";
import { loginFormSchema, LoginFormSchema } from "../schemas/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";

import "../app/global.css";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
  });
  const onSubmit: SubmitHandler<LoginFormSchema> = async () => {};

  return (
    <SafeAreaView>
      <View>
        <TextField label="Username" />
        <TextField label="Email" />
        <TextField label="Password" />
        <Button title="Login" />
      </View>
    </SafeAreaView>
  );
};

function TextField({ label }: { label: string }) {
  return (
    <View>
      <Text>{label}:</Text>
      <TextInput />
    </View>
  );
}

export default Form;
