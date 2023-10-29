import { InlineGrid, Select, Text } from "@shopify/polaris";
import InputPixel from "../../../components/InputPixel";
import { StyleContext } from "../../../App";
import { useContext } from "react";

function Typography() {
  const [styleDetails, setStyleDetails] = useContext(StyleContext);
  const { titleFontSize, titleFontStyle, subTitleFontSize, subTitleFontStyle } =
    styleDetails;
  const fontStyleOpt = [
    { label: "Regular", value: "normal" },
    { label: "Bold", value: "bold" },
    // { label: "Italic", value: "italic" },
  ];

  return (
    <>
      <Text variant="headingMd" as="h6">
        TYPOGRAPHY
      </Text>
      <InlineGrid
        alignItems="center"
        gap="400"
        columns={{ xs: 1, md: "1fr 1fr" }}
      >
        <div>
          <div style={{ marginBottom: "8px" }}>
            <Text as="p" fontWeight="bold" variant="bodySm">
              Title font size
            </Text>
          </div>
          <InputPixel value={titleFontSize} onChange={(val) => setStyleDetails(p => ({...p, titleFontSize: val}))} />
        </div>
        <div>
          <div style={{ marginBottom: "8px" }}>
            <Text as="p" fontWeight="bold" variant="bodySm">
              Title font style
            </Text>
          </div>
          <Select
            options={fontStyleOpt}
            value={titleFontStyle}
            onChange={(val) => setStyleDetails(p => ({...p, titleFontStyle: val}))}
          />
        </div>
      </InlineGrid>
      <InlineGrid
        alignItems="center"
        gap="400"
        columns={{ xs: 1, md: "1fr 1fr" }}
      >
        <div>
          <div style={{ marginBottom: "8px" }}>
            <Text as="p" fontWeight="bold" variant="bodySm">
              Subtitle font size
            </Text>
          </div>
          <InputPixel value={subTitleFontSize} onChange={(val) => setStyleDetails(p => ({...p, subTitleFontSize: val}))} />
        </div>
        <div>
          <div style={{ marginBottom: "8px" }}>
            <Text as="p" fontWeight="bold" variant="bodySm">
              Subtitle font style
            </Text>
          </div>
          <Select
            options={fontStyleOpt}
            value={subTitleFontStyle}
            onChange={(val) => setStyleDetails(p => ({...p, subTitleFontStyle: val}))}
          />
        </div>
      </InlineGrid>
    </>
  );
}

export default Typography;
