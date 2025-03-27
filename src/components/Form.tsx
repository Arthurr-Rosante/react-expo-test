import { View, Text, TextInput, Button } from "react-native";
import { loginFormSchema, LoginFormSchema } from "../schemas/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";

import "../app/global.css";

const Form = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
  });

  const onSubmit: SubmitHandler<LoginFormSchema> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 250));
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      reset();
    }
  };

  return (
    <SafeAreaView>
      <View>
        <Text>Usuário: </Text>
        <Controller control={control} name="username" render={({ field: { onChange, value } }) => (
            <TextInput onChangeText={onChange} value={value || ""}/>
        )} />
      </View>

      <View>
        <Text>Email: </Text>
        <Controller control={control} name="email" render={({ field: { onChange, value } }) => (
            <TextInput keyboardType="email-address" onChangeText={onChange} value={value}/>
        )} />
        {errors.email && (
          <Text>{errors.email.message}</Text>
        )}
      </View>

      <View>
        <Text>Senha: </Text>
        <Controller control={control} name="password" render={({ field: { onChange, value } }) => ( 
            <TextInput secureTextEntry onChangeText={onChange} value={value}/> 
        )} />
        {errors.password && (
          <Text>{errors.password.message}</Text>
        )}
      </View>

      <Button title={isSubmitting ? "Enviando..." : "Login"} onPress={handleSubmit(onSubmit)} disabled={isSubmitting} />
    </SafeAreaView>
  );
};

export default Form;