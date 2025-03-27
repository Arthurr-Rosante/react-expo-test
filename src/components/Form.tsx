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
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView>
      <View>
        <Controller control={control} name="username" render={({ field: { onChange, value } }) => (
          <View>
            <Text>Usuário: </Text>
            <TextInput onChangeText={onChange} value={value || ""}/>
          </View>
        )} />
      </View>

      <View>
        <Controller control={control} name="email" render={({ field: { onChange, value } }) => (
          <View>
            <Text>Email: </Text>
            <TextInput keyboardType="email-address" onChangeText={onChange} value={value}/>
          </View>
        )} />
      </View>

      <View>
        <Controller control={control} name="password" render={({ field: { onChange, value } }) => (
          <View>
            <Text>Senha: </Text>
            <TextInput secureTextEntry onChangeText={onChange} value={value}/>
          </View>
        )} />
      </View>

      <Button title={isSubmitting ? "Enviando..." : "Login"} onPress={handleSubmit(onSubmit)} disabled={isSubmitting} />
    </SafeAreaView>
  );
};

// --------- TESTE MAS NAO DEU NADA CERTO

// interface ControllerTextInputProps {
//   control: any;
//   name: string;
//   label: string;
//   keyboardType: 'default' | 'email-addres';
//   secureTextEntry: boolean;
// }

// function ControllerTextInput({control, name, label}: {control:any; name: string; label: string}) {
//   <View>
//     <Controller control={control} name={name} render={ ({ field: {onChange, value } }) => {
//       <View>
//       <Text>{ label }:</Text>
//       <TextInput keyboardType={keyboardType} secureTextEntry={secureTextEntry} />
//     </View>
//     }} />
//   </View>
// }

// function ControllerTextInput({ control, name, label, keyboardTypeProp='default', secureTextEntry=false}: ControllerTextInputProps) {
//   return (
//     <View>
//       <Controller control={control} name={name} render={({ field: { onChange, value } }) => (
//           <View>
//             <Text>{label}:</Text>
//             <TextInput onChangeText={onChange} value={value} keyboardType={keyboardType} secureTextEntry={secureTextEntry}
//             />
//     </View>
//   )
// }

export default Form;