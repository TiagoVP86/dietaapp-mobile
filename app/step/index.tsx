import { Text, View, StyleSheet, Pressable, ScrollView } from "react-native";
import { colors } from "../../constants/colors";
import { Header } from "../../components/header";
import { Input } from "../../components/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(1, { message: "O nome é obrigatorio" }),
  weight: z.string().min(1, { message: "O peso é obrigatorio" }),
  age: z.string().min(1, { message: "A idade é obrigatoria" }),
  height: z.string().min(1, { message: "A altura é obrigatoria" }),
});

type FormData = z.infer<typeof schema>;

export default function Step() {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  return (
    <View style={styles.container}>
      <Header step="Passo 1" title="Vamos começar" />

      <ScrollView style={styles.content}>
        <Text style={styles.label}>Nome:</Text>
        <Input
          name="name"
          control={control}
          placeholder="Digite seu nome"
          error={errors.name?.message}
          keyboardTypes="default"
        />
        <Text style={styles.label}>Seu peso atual:</Text>
        <Input
          name="weight"
          control={control}
          placeholder="Ex: 80.5"
          error={errors.weight?.message}
          keyboardTypes="numeric"
        />
        <Text style={styles.label}>Sua altura atual:</Text>
        <Input
          name="height"
          control={control}
          placeholder="Ex: 1.80"
          error={errors.height?.message}
          keyboardTypes="numeric"
        />
        <Text style={styles.label}>Sua idade atual:</Text>
        <Input
          name="age"
          control={control}
          placeholder="Ex: 30"
          error={errors.age?.message}
          keyboardTypes="numeric"
        />

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Avançar</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  content: {
    paddingHorizontal: 16,
  },

  label: {
    fontSize: 16,
    color: colors.white,
    fontWeight: "bold",
  },

  button: {
    backgroundColor: colors.blue,
    borderRadius: 4,
    padding: 16,
    marginTop: 44,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "bold",
  },
});
