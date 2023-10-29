import { InlineGrid, RangeSlider, Text } from "@shopify/polaris";
import InputPixel from "../../../components/InputPixel";
import { StyleContext } from "../../../App";
import { useContext } from "react";

function Spacing() {
  const [styleDetails, setStyleDetails] = useContext(StyleContext);
  const { blockSize, borderGoesUp, borderGoesDown, blockSpace } = styleDetails;

  const handleBlockSize = (val) => {
    setStyleDetails(p => ({...p, blockSize: val}))
  }

  const handleBlockSpace = (val) => {
    setStyleDetails(p => ({...p, blockSpace: val}))
  }

  return (
    <>
      <Text variant="headingMd" as="h6">
        SPACING
      </Text>
      <Text as="p" fontWeight="bold" variant="bodySm">
        Block Size
      </Text>
      <InlineGrid
        alignItems="center"
        gap="400"
        columns={{ xs: 1, md: "3fr 1fr" }}
      >
        <RangeSlider
          label=""
          value={blockSize}
          onChange={handleBlockSize}
          output
        />
        <InputPixel value={blockSize} onChange={handleBlockSize} />
      </InlineGrid>
      <Text variant="headingMd" as="h6">
        BORDER LOCATION
      </Text>
      <InlineGrid
        alignItems="center"
        gap="400"
        columns={{ xs: 1, md: "1fr 1fr" }}
      >
        <div>
          <div style={{ marginBottom: "8px" }}>
            <Text as="p" fontWeight="bold" variant="bodySm">
              Goes up
            </Text>
          </div>
          <InputPixel value={borderGoesUp} onChange={(val) => setStyleDetails(p => ({...p, borderGoesUp: val}))} />
        </div>
        <div>
          <div style={{ marginBottom: "8px" }}>
            <Text as="p" fontWeight="bold" variant="bodySm">
              Goes Down
            </Text>
          </div>
          <InputPixel value={borderGoesDown} onChange={(val) => setStyleDetails(p => ({...p, borderGoesDown: val}))} />
        </div>
      </InlineGrid>
      <Text as="p" fontWeight="bold" variant="bodySm">
        Space in between Block
      </Text>
      <InlineGrid
        alignItems="center"
        gap="400"
        columns={{ xs: 1, md: "3fr 1fr" }}
      >
        <RangeSlider
          label=""
          value={blockSpace}
          onChange={handleBlockSpace}
          output
        />
        <InputPixel suffixval="%" value={blockSpace} onChange={handleBlockSpace} />
      </InlineGrid>
    </>
  );
}

export default Spacing;
