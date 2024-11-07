import React, { memo } from "react";
import { Block, Button, MainContainer, Text, Input } from "@components";
import KeyboardDismissWrapper from "@components/keyboard-dismiss-wrapper";
import { EDGES } from "@utils/helper";
import { LinearGradient } from "expo-linear-gradient";
import theme, { makeStyles } from "@theme";
import { Image } from "react-native";
import { localImage } from "@assets/images";

import { useForm, Controller } from "react-hook-form";

function login (){
  const styles = useStyle();
  const { control } = useForm();

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
          style={styles.container}
        >
          <Block
            flex={1}
            justifyContent="center"
            mx="l"
            gap="_10"
            style={styles.content}
          >
            <Image
              resizeMode="contain"
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
              <Text style={styles.headerText}>Đăng nhập</Text>
              <Text style={[styles.subHeaderText, { marginBottom: 15 }]}>
                Vui lòng đăng nhập để sử dụng ứng dụng
              </Text>

              <Block marginHorizontal={"_28"} gap={"_15"}>
                <Input
                  name="username"
                  label="Email"
                  placeholder="Nhập email"
                  labelStyle={styles.labelStyle}
                  control={control}
                />
                <Input
                  name="password"
                  label="Mật khẩu"
                  placeholder="Nhập mật khẩu"
                  labelStyle={styles.labelStyle}
                  control={control}
                  secureTextEntry={true}
                />
              </Block>
              <Button
                buttonStyle={styles.buttonStyle}
                label="Đăng nhập"
                textStyle={{ color: "white", fontWeight: "bold" }}
                onPress={() => {}}
              />
            </Block>
          </Block>
        </LinearGradient>
      </MainContainer>
    </KeyboardDismissWrapper>
  );
};

export default memo(login);

const useStyle = makeStyles((theme) => ({
  container: {
    flex: 1,
  },
  content: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  msgErrorContainer: {
    alignSelf: "center",
    backgroundColor: "rgba(228, 93, 93, 0.06)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 6,
    paddingVertical: 8,
    borderRadius: 5,
  },
  headerText: {
    color: theme.colors.blueAF,
    textAlign: "center",
    fontSize: 26,
    fontWeight: "900",
    paddingVertical: 20,
  },
  subHeaderText: {
    textAlign: "center",
    fontSize: 14,
    color: theme.colors.grey6C,
  },
  labelStyle: {
    fontSize: 12,
    color: theme.colors.grey6C,
    marginBottom: 2,
    paddingTop: 6,
  },

  buttonStyle: {
    marginHorizontal: 28,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.blueAF,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonGoogle: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  errorMessage: {
    color: "red",
    marginTop: 5,
    fontSize: 12,
  },
}));
