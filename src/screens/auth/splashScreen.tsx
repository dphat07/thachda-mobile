import { localAnimated } from "@assets/lottie";
import { Block, Button, MainContainer, Text } from "@components";
import theme, { makeStyles } from "@theme";
import { EDGES } from "@utils/helper";
import { LinearGradient } from "expo-linear-gradient";
import LottieView from "lottie-react-native";

const SplashScreen = () => {
  const styles = useStyle();
  return (
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
        <Block flex={1} mx="l" gap="_10" my={"_150"}>
          <LottieView
            style={{ flex: 1 }}
            source={localAnimated().chruch}
            autoPlay
            loop
          />
          <Block justifyContent={"center"} alignItems={"center"} pb={"_20"}>
            <Text color={"yellow_400"} fontWeight={"700"} fontSize={24}>
              Đoàn Thiếu Nhi Thánh Thể
            </Text>
            <Text
              color={"blueAF"}
              fontWeight={"700"}
              fontSize={24}
              textDecorationLine={"underline"}
            >
              Phanxico Xavie GX. Thạch Đà
            </Text>
          </Block>
          <Button label="Get Started" textStyle={{ fontWeight: "700" }} />
        </Block>
      </LinearGradient>
    </MainContainer>
  );
};

export default SplashScreen;

const useStyle = makeStyles(() => ({
  container: {
    flex: 1,
  },
}));
