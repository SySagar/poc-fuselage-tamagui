import { createAnimations } from "@tamagui/animations-react-native";
import { createInterFont } from "@tamagui/font-inter";
import { createMedia } from "@tamagui/react-native-media-driver";
import { shorthands } from "@tamagui/shorthands";
import { themes, tokens } from "@tamagui/themes";
import { createTamagui } from "tamagui";
import * as externalTokens from "./token";

const { customTokens } = externalTokens;

const animations = createAnimations({
  bouncy: {
    type: "spring",
    damping: customTokens.bouncyDamping,
    mass: customTokens.bouncyMass,
    stiffness: customTokens.bouncyStiffness,
  },
  lazy: {
    type: "spring",
    damping: customTokens.lazyDamping,
    stiffness: customTokens.lazyStiffness,
  },
  quick: {
    type: "spring",
    damping: customTokens.quickDamping,
    mass: customTokens.quickMass,
    stiffness: customTokens.quickStiffness,
  },
});

const headingFont = createInterFont();

const bodyFont = createInterFont();

const config = createTamagui({
  animations,
  defaultTheme: "dark",
  shouldAddPrefersColorThemes: false,
  themeClassNameOnRoot: false,
  shorthands,
  fonts: {
    heading: headingFont,
    body: bodyFont,
  },
  themes,
  tokens,
  media: createMedia({
    xs: { maxWidth: customTokens.extraSmallMaxWidth },
    sm: { maxWidth: customTokens.smallMaxWidth },
    md: { maxWidth: customTokens.mediumMaxWidth },
    lg: { maxWidth: customTokens.largeMaxWidth },
    xl: { maxWidth: customTokens.extraLargeMaxWidth },
    xxl: { maxWidth: customTokens.doubleExtraLargeMaxWidth },
    gtXs: { minWidth: customTokens.extraSmallMinWidth },
    gtSm: { minWidth: customTokens.smallMinWidth },
    gtMd: { minWidth: customTokens.mediumMinWidth },
    gtLg: { minWidth: customTokens.largeMinWidth },
    short: { maxHeight: customTokens.shortMaxHeight },
    tall: { minHeight: customTokens.tallMinHeight },
    hoverNone: { hover: "none" },
    pointerCoarse: { pointer: "coarse" },
  }),
});

export type AppConfig = typeof config;

declare module "tamagui" {
  interface TamaguiCustomConfig extends AppConfig {}
}

export default config;