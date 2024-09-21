import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardTypeOptions,
} from "react-native";
import { Controller } from "react-hook-form";
import { colors } from "../../constants/colors";

interface InputProps {
  name: string;
  control: any;
  placeholder?: string;
  rules?: object;
  error?: string;
  keyboardTypes: KeyboardTypeOptions;
}

export function Input({
  name,
  control,
  placeholder,
  rules,
  error,
  keyboardTypes,
}: InputProps) {
  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder={placeholder}
            placeholderTextColor={"#9E9E9E"}
            onChangeText={onChange}
            value={value}
            keyboardType={keyboardTypes}
            onBlur={onBlur}
          />
        )}
      />

      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },

  input: {
    backgroundColor: colors.white,
    borderRadius: 4,
    paddingHorizontal: 10,
    height: 44,
  },

  errorText: {
    fontSize: 12,
    color: "red",
    marginTop: 4,
  },
});
