import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Modal,
} from "react-native";
import { Controller } from "react-hook-form";
import { colors } from "../../constants/colors";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";

interface OptionsProps {
  label: string;
  value: string | number;
}

interface InputProps {
  name: string;
  control: any;
  placeholder?: string;
  error?: string;
  options: OptionsProps[];
}

export function Select({
  name,
  control,
  placeholder,
  error,
  options,
}: InputProps) {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setVisible(true)}
            >
              <Text>
                {value
                  ? options.find((item) => item.value === value)?.label
                  : placeholder}
              </Text>
              <Feather name="chevron-down" size={24} color={colors.black} />
            </TouchableOpacity>

            <Modal
              visible={visible}
              animationType="fade"
              transparent={true}
              onRequestClose={() => setVisible(false)}
            >
              <TouchableOpacity
                style={styles.modalContainer}
                activeOpacity={1}
                onPress={() => setVisible(false)}
              >
                <TouchableOpacity style={styles.modalContent} activeOpacity={1}>
                  <FlatList
                    contentContainerStyle={{ gap: 4 }}
                    data={options}
                    keyExtractor={(item) => String(item.value)}
                    renderItem={({ item }) => (
                      <TouchableOpacity
                        style={styles.options}
                        onPress={() => {
                          onChange(item.value);
                          setVisible(false);
                        }}
                      >
                        <Text>{item.label}</Text>
                      </TouchableOpacity>
                    )}
                  />
                </TouchableOpacity>
              </TouchableOpacity>
            </Modal>
          </>
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

  errorText: {
    fontSize: 12,
    color: "red",
    marginTop: 4,
  },

  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.white,
    borderRadius: 4,
    paddingHorizontal: 16,
    height: 44,
  },

  modalContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },

  modalContent: {
    backgroundColor: colors.white,
    marginHorizontal: 10,
    borderRadius: 8,
    padding: 20,
  },

  options: {
    backgroundColor: "rgba(208,208,208,0.4)",
    borderRadius: 4,
    paddingVertical: 14,
    paddingHorizontal: 8,
  },
});
