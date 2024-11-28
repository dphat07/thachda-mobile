import { memo, useEffect } from "react";
import { Block, Button, MainContainer, Text, Input } from "@components";
import KeyboardDismissWrapper from "@components/keyboard-dismiss-wrapper";
import { EDGES } from "@utils/helper";
import { LinearGradient } from "expo-linear-gradient";
import theme from "@theme";
import { localImage } from "@assets/images";
import { Image } from "expo-image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { validateUser } from "@utils/validate";
import axios from "axios";
import { Alert } from "react-native";

type LoginForm = {
  email: string;
  password: string;
};

function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: zodResolver(validateUser),
    mode: "onChange",
    defaultValues: {
      email: "bddquan@gmail.com",
      password: "123456",
    },
  });
  const handleLogin = async (data: LoginForm) => {
    try {
      const response = await axios.post(
        "http://13.213.192.94:3000/api/v1/auth/login",
        data
      );
      if (response.status === 200 && response.data?.data?.accessToken) {
        Alert.alert("Đăng nhập thành công", "Chào mừng bạn!");
      } else {
        Alert.alert("Đăng nhập thất bại", "Dữ liệu phản hồi không hợp lệ.");
      }
    } catch (error) {
      Alert.alert("Đăng nhập thất bại");
    }
  };
  return (
    <KeyboardDismissWrapper>
      <MainContainer edges={EDGES.LEFT_RIGHT}>
        <LinearGradient
          colors={[
            theme.colors.bluePatelDC,
            theme.colors.bluePatelED,
            theme.colors.white,
          ]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 0.8 }}
          style={{ flex: 1 }}
        >
          <Block flex={1} justifyContent="center" mx="l" gap="_10">
            <Image
              contentFit="contain"
              style={{
                width: 100,
                height: 100,
                alignSelf: "center",
                marginBottom: 20,
              }}
              source={localImage().ic_logo}
            />
            <Block
              flex={0.8}
              backgroundColor={"background"}
              borderWidth={0}
              borderRadius={"m"}
            >
              <Text
                color={"blueAF"}
                paddingVertical={"_20"}
                fontWeight={"900"}
                fontSize={26}
                textAlign={"center"}
              >
                Đăng nhập
              </Text>
              <Text
                mb={"_15"}
                textAlign={"center"}
                fontSize={14}
                color={"grey6C"}
              >
                Vui lòng đăng nhập để sử dụng ứng dụng
              </Text>

              <Block marginHorizontal={"_28"} gap={"_15"}>
                <Input
                  name="email"
                  label="Email"
                  placeholder="Nhập email"
                  labelStyle={{
                    color: theme.colors.grey6C,
                    marginBottom: 2,
                    paddingTop: 6,
                  }}
                  control={control}
                />
                <Input
                  name="password"
                  label="Mật khẩu"
                  placeholder="Nhập mật khẩu"
                  labelStyle={{
                    color: theme.colors.grey6C,
                    marginBottom: 2,
                    paddingTop: 6,
                  }}
                  control={control}
                  secureTextEntry={true}
                />
              </Block>
              <Button
                buttonStyle={{
                  marginHorizontal: 28,
                  justifyContent: "center",
                  marginTop: 20,
                }}
                label="Đăng nhập"
                textStyle={{ color: "white", fontWeight: "bold" }}
                onPress={handleSubmit(handleLogin)}
              />
            </Block>
          </Block>
        </LinearGradient>
      </MainContainer>
    </KeyboardDismissWrapper>
  );
}

export default memo(Login);
