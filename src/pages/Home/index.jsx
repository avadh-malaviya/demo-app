import {
  Bleed,
  BlockStack,
  Box,
  Button,
  Divider,
  InlineGrid,
  Page,
  Tabs,
  Text,
  RangeSlider,
  InlineStack,
} from "@shopify/polaris";
import { useContext, useState } from "react";
import "./../../css/override.css";
import InputPixel from "../../components/InputPixel";
import Typography from "./Styled/Typography";
import Colors from "./Styled/Colors";
import Spacing from "./Styled/Spacing";
import OutputEmoji from "./Styled/OutputEmoji";
import { StyleContext } from "../../App";

function Home() {
  const [selected, setSelected] = useState(2);
  const [styleDetails, setStyleDetails] = useContext(StyleContext);
  const tabs = [
    {
      id: "all-customers-fitted-2",
      content: "Block",
      accessibilityLabel: "All customers",
      panelID: "all-customers-fitted-content-2",
    },
    {
      id: "accepts-marketing-fitted-2",
      content: "Icons",
      panelID: "accepts-marketing-fitted-Ccontent-2",
    },
    {
      id: "accepts-marketing-fitted-3",
      content: "Style",
      panelID: "accepts-marketing-fitted-Ccontent-3",
    },
  ];

  const handleIconSize = (val) => {
    setStyleDetails((p) => ({ ...p, iconSize: val }));
  };

  return (
    <Page
      backAction={{ content: "Products", url: "/products" }}
      title="Icon Blocks"
    >
      <InlineGrid columns={{ xs: 1, md: "1fr 1fr" }} gap="400">
        <BlockStack gap="400">
          <div className="override-tabs">
            <Tabs
              tabs={tabs}
              selected={selected}
              onSelect={(selectedTabIndex) => setSelected(selectedTabIndex)}
              fitted
            ></Tabs>
          </div>
          <Box background="bg-surface" borderRadius="200" padding="300">
            <BlockStack gap="400">
              <Text variant="headingMd" as="h6">
                ICON SIZE
              </Text>
              <InlineGrid
                alignItems="center"
                gap="400"
                columns={{ xs: 1, md: "3fr 1fr" }}
              >
                <RangeSlider
                  label=""
                  value={styleDetails.iconSize}
                  onChange={handleIconSize}
                  output
                />
                <InputPixel
                  value={styleDetails.iconSize}
                  onChange={handleIconSize}
                />
              </InlineGrid>
              <Bleed marginInline={{ xs: 200, sm: 300 }}>
                <Divider />
              </Bleed>
              <Colors />
              <Bleed marginInline={{ xs: 200, sm: 300 }}>
                <Divider />
              </Bleed>
              <Typography />
              <Bleed marginInline={{ xs: 200, sm: 300 }}>
                <Divider />
              </Bleed>
              <Spacing />
            </BlockStack>
          </Box>
        </BlockStack>
        <BlockStack gap={{ xs: "400", md: "200" }}>
          <OutputEmoji />
        </BlockStack>
      </InlineGrid>
      <br />
      <div style={{ paddingLeft: "5px", marginBottom: '15px' }}>
        <InlineStack gap="200" align="start">
          <Button variant="primary">Save</Button>
          <Button variant="primary" tone="critical">
            Delete
          </Button>
        </InlineStack>
      </div>
    </Page>
  );
}

export default Home;
