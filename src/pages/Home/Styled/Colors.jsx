import { Checkbox, InlineGrid, Text } from "@shopify/polaris";
import InputColorPicker from "../../../components/InputColorPicker";
import { useContext } from "react";
import { StyleContext } from "../../../App";

function Colors() {
  const [styleDetails, setStyleDetails] = useContext(StyleContext);
  const {
    iconColor,
    subTitleColor,
    isTransparent,
    titleColor,
    backgroundColor,
  } = styleDetails;

  return (
    <>
      <Text variant="headingMd" as="h6">
        COLORS
      </Text>
      <InlineGrid
        alignItems="center"
        gap="400"
        columns={{ xs: 1, md: "1fr 1fr 1fr 1fr" }}
      >
        <Text as="p" tone="subdued">
          Background Color
        </Text>
        <InputColorPicker value={backgroundColor} onChange={(val) => setStyleDetails(p => ({...p, backgroundColor: val}))} />
        <Text as="p" tone="subdued">
          Title Color
        </Text>
        <InputColorPicker value={titleColor} onChange={(val) => setStyleDetails(p => ({...p, titleColor: val}))} />
      </InlineGrid>
      <InlineGrid
        alignItems="center"
        gap="400"
        columns={{ xs: 1, md: "1fr 1fr 1fr 1fr" }}
      >
        <Text as="p" tone="subdued">
          Icon Color
        </Text>
        <InputColorPicker value={iconColor} onChange={(val) => setStyleDetails(p => ({...p, iconColor: val}))} />
        <Text as="p" tone="subdued">
          Subtitle Color
        </Text>
        <InputColorPicker value={subTitleColor} onChange={(val) => setStyleDetails(p => ({...p, subTitleColor: val}))} />
      </InlineGrid>
      <Checkbox
        label="Transparent Background"
        checked={isTransparent}
        onChange={(val) => setStyleDetails(p => ({...p, isTransparent: val}))}
      />
    </>
  );
}

export default Colors;
