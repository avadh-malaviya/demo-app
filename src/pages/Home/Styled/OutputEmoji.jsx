import {
  Box,
  Button,
  ButtonGroup,
  InlineStack,
} from "@shopify/polaris";
import { useContext, useState } from "react";
import { StyleContext } from "../../../App";

function OutputEmoji() {
  const [activeBtn, setActiveBtn] = useState("Desktop");
  const [styleDetails] = useContext(StyleContext);
  const {
    blockSize,
    borderGoesUp,
    borderGoesDown,
    blockSpace,
    iconSize,
    backgroundColor,
    titleColor,
    iconColor,
    subTitleColor,
    isTransparent,
    titleFontSize,
    titleFontStyle,
    subTitleFontSize,
    subTitleFontStyle,
  } = styleDetails;

  const titleStyle = {
    color: titleColor,
    fontSize: titleFontSize + "px",
    fontWeight: titleFontStyle,
  };

  const subTitleStyle = {
    color: subTitleColor,
    fontSize: subTitleFontSize + "px",
    fontWeight: subTitleFontStyle,
  };

  const backgroundStyle = {
    backgroundColor: isTransparent ? isTransparent : backgroundColor,
    display: "flex",
    gap: blockSpace + "%",
    flexWrap: "wrap",
    marginTop: borderGoesDown + "px",
    marginBottom: borderGoesUp + "px",
    paddingTop: blockSize + "px",
    paddingBottom: blockSize + "px",
  };

  return (
    <Box background="bg-surface" borderRadius="200" padding="300">
      <InlineStack align="center">
        <ButtonGroup variant="segmented">
          <Button
            pressed={activeBtn === "Desktop"}
            onClick={() => setActiveBtn("Desktop")}
          >
            Desktop
          </Button>
          <Button
            pressed={activeBtn === "Mobile"}
            onClick={() => setActiveBtn("Mobile")}
          >
            Mobile
          </Button>
        </ButtonGroup>
      </InlineStack>
      <br />
      <Box background="bg-fill-active" borderRadius="200" padding="300">
        <div style={backgroundStyle}>
          <div style={{ textAlign: "center" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={iconSize + "px"}
              height={iconSize + "px"}
              fill={iconColor}
              viewBox="0 0 64 64"
            >
              <g data-name="Mechanic">
                <rect width="2" height="2" x="28" y="36" />
                <rect width="2" height="2" x="34" y="36" />
                <path d="M61.142,16.01l-3.906-.56a13.655,13.655,0,0,0-.659-1.6L58.939,10.7a1,1,0,0,0-.092-1.307l-4.24-4.24A1,1,0,0,0,53.3,5.06L50.152,7.423a13.671,13.671,0,0,0-1.6-.659L47.99,2.858A1,1,0,0,0,47,2H41a1,1,0,0,0-.99.858l-.561,3.906a13.671,13.671,0,0,0-1.6.659L34.7,5.06a1,1,0,0,0-1.307.093l-4.24,4.24a1,1,0,0,0-.092,1.307l2.362,3.148a13.655,13.655,0,0,0-.659,1.6l-3.906.56A1,1,0,0,0,26,17v6a1,1,0,0,0,.858.99l.072.01H24V9a1,1,0,0,0-1-1H7A1,1,0,0,0,6,9V25a1,1,0,0,0,1,1H20.382l1.5,3-.777,1.553a1,1,0,0,0,.188,1.154l2.331,2.331A2.992,2.992,0,0,0,24,40c.086,0,.167-.027.252-.035a8,8,0,0,0,2.092,3.693A7.839,7.839,0,0,0,28,44.893V46.35l-4.847,2.156A7,7,0,0,0,19,54.9V61a1,1,0,0,0,1,1H44a1,1,0,0,0,1-1V54.9a7,7,0,0,0-4.153-6.394L36,46.35V44.907a7.973,7.973,0,0,0,3.75-4.941c.084.007.165.034.25.034a3,3,0,0,0,2.816-2H47a1,1,0,0,0,.99-.858l.561-3.906a13.671,13.671,0,0,0,1.6-.659L53.3,34.94a1,1,0,0,0,1.307-.093l4.24-4.24a1,1,0,0,0,.092-1.307l-2.362-3.148a13.655,13.655,0,0,0,.659-1.6l3.906-.56A1,1,0,0,0,62,23V17A1,1,0,0,0,61.142,16.01ZM8,10H22V24H8ZM23.9,28.553,22.618,26H37a3,3,0,0,1,3,3v2.586L38.586,33h-.145a1,1,0,0,1-.949-.684l-.544-1.632a1,1,0,0,0-.65-.639A1.016,1.016,0,0,0,36,30a1,1,0,0,0-.6.2l-1.866,1.4a7.045,7.045,0,0,1-4.2,1.4H25.414l-2.2-2.2.678-1.356A1,1,0,0,0,23.9,28.553ZM37,20a7.04,7.04,0,1,1,4.267,6.431,4.991,4.991,0,0,0-2.811-2.189A6.993,6.993,0,0,1,37,20ZM23,37a1,1,0,0,1,1-1v2A1,1,0,0,1,23,37ZM39,60H25V49.873l2-.889V54a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V48.984l2,.889ZM35,49.618V53H29V49.618a3.947,3.947,0,0,0,6,0ZM32,49a2,2,0,0,1-2-2V45.738a7.765,7.765,0,0,0,4,0V47A2,2,0,0,1,32,49ZM21,54.9a4.992,4.992,0,0,1,2-3.983V60H21Zm22,0V60H41V50.917A4.992,4.992,0,0,1,43,54.9ZM37.965,38.614a6,6,0,0,1-8.543,4.8,5.855,5.855,0,0,1-1.665-1.17,6,6,0,0,1-1.726-3.663A4.614,4.614,0,0,1,26,38V35h3.333a9.05,9.05,0,0,0,5.4-1.8l.757-.567.106.316A2.994,2.994,0,0,0,38,34.965V38A4.762,4.762,0,0,1,37.965,38.614ZM40,38V36a1,1,0,0,1,0,2ZM60,22.133l-3.672.527a1,1,0,0,0-.82.715,11.672,11.672,0,0,1-.985,2.395,1,1,0,0,0,.078,1.08l2.218,2.956-3.012,3.013L50.851,30.6a1,1,0,0,0-1.082-.077,11.664,11.664,0,0,1-2.394.986,1,1,0,0,0-.715.819L46.134,36H42.816a2.988,2.988,0,0,0-2.44-1.962l1.331-1.331A1,1,0,0,0,42,32V29c0-.08-.02-.154-.024-.233A9.033,9.033,0,1,0,35.948,24H32.709c-.072-.206-.16-.422-.217-.622a1,1,0,0,0-.82-.718L28,22.133V17.867l3.672-.527a1,1,0,0,0,.82-.715,11.672,11.672,0,0,1,.985-2.395,1,1,0,0,0-.078-1.08l-2.218-2.956,3.012-3.013L37.149,9.4a1,1,0,0,0,1.082.077,11.664,11.664,0,0,1,2.394-.986,1,1,0,0,0,.715-.819L41.866,4h4.268l.526,3.672a1,1,0,0,0,.715.819,11.664,11.664,0,0,1,2.394.986A1,1,0,0,0,50.851,9.4l2.956-2.219,3.012,3.013L54.6,13.15a1,1,0,0,0-.078,1.08,11.672,11.672,0,0,1,.985,2.395,1,1,0,0,0,.82.715L60,17.867Z" />
                <rect width="2" height="2" x="43" y="6" />
                <rect
                  width="2"
                  height="2"
                  x="33.808"
                  y="9.808"
                  transform="rotate(-45 34.808 10.807)"
                />
                <rect width="2" height="2" x="30" y="19" />
                <rect width="2" height="2" x="43" y="32" />
                <rect
                  width="2"
                  height="2"
                  x="52.192"
                  y="28.192"
                  transform="rotate(-45 53.193 29.192)"
                />
                <rect width="2" height="2" x="56" y="19" />
                <rect
                  width="2"
                  height="2"
                  x="52.192"
                  y="9.808"
                  transform="rotate(-45 53.192 10.807)"
                />
                <path d="M13 46H11V40h1a1 1 0 0 0 1-1V37a1 1 0 0 0-.03-.243l-1-4A1 1 0 0 0 11 32H9a1 1 0 0 0-.97.757l-1 4A1 1 0 0 0 7 37v2a1 1 0 0 0 1 1H9v6H7a2 2 0 0 0-2 2V60a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V48A2 2 0 0 0 13 46zM9 37.123L9.781 34h.438L11 37.123V38H9zM11 60V51H9v9H7V48h6V60zM19 12H11a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h5a1 1 0 0 0 .707-.293l3-3A1 1 0 0 0 20 18V13A1 1 0 0 0 19 12zm-1 5.586L15.589 20H12V14h6z" />
                <rect width="2" height="2" x="14" y="28" />
                <rect width="2" height="2" x="18" y="28" />
                <rect width="2" height="2" x="10" y="28" />
                <rect width="2" height="2" x="2" y="20" />
                <rect width="2" height="2" x="2" y="16" />
                <rect width="2" height="2" x="2" y="12" />
                <rect width="2" height="2" x="26" y="12" />
                <rect width="2" height="2" x="14" y="4" />
                <rect width="2" height="2" x="18" y="4" />
                <rect width="2" height="2" x="10" y="4" />
              </g>
            </svg>
            <div style={titleStyle}>Any Question ?</div>
            <div style={subTitleStyle}>Contact us now</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 67 67"
              viewBox="0 0 67 67"
              width={iconSize + "px"}
              height={iconSize + "px"}
              fill={iconColor}
            >
              <path d="M15.4 46h-4.1c-2.1 0-3.8 1.7-3.8 3.8v11.9c0 2.1 1.7 3.8 3.8 3.8h4.1c2.1 0 3.8-1.7 3.8-3.8V49.8C19.2 47.7 17.5 46 15.4 46zM15.4 1.5h-4.1c-2.1 0-3.8 1.7-3.8 3.8v11.9c0 2.1 1.7 3.8 3.8 3.8h4.1c2.1 0 3.8-1.7 3.8-3.8V5.3C19.2 3.2 17.5 1.5 15.4 1.5zM55.7 1.5h-4.1c-2.1 0-3.8 1.7-3.8 3.8v11.9c0 2.1 1.7 3.8 3.8 3.8h4.1c2.1 0 3.8-1.7 3.8-3.8V5.3C59.5 3.2 57.8 1.5 55.7 1.5zM55.7 46h-4.1c-2.1 0-3.8 1.7-3.8 3.8v11.9c0 2.1 1.7 3.8 3.8 3.8h4.1c2.1 0 3.8-1.7 3.8-3.8V49.8C59.5 47.7 57.8 46 55.7 46zM33.5 5.6c-2.8 0-5.1 2-5.5 4.6h-6.8v2h6.8c.4 2.3 2.2 4.1 4.5 4.6v6.4c-1.4.4-2.4 1.7-2.4 3.3v14.1c0 1.5 1 2.9 2.4 3.3v6.4c-2.3.4-4.1 2.2-4.5 4.6h-6.8v2h6.8c.5 2.6 2.8 4.6 5.5 4.6 2.8 0 5.1-2 5.5-4.6h6.8v-2H39c-.4-2.3-2.2-4.2-4.5-4.6v-6.4c1.4-.4 2.4-1.7 2.4-3.3V26.5c0-1.5-1-2.9-2.4-3.3v-6.4c2.3-.4 4.1-2.2 4.5-4.6h6.8v-2H39C38.6 7.6 36.3 5.6 33.5 5.6z" />
            </svg>
            <div style={titleStyle}>Any Question ?</div>
            <div style={subTitleStyle}>Contact us now</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 66 66"
              viewBox="0 0 66 66"
              width={iconSize + "px"}
              height={iconSize + "px"}
              fill={iconColor}
            >
              <path
                d="M28.4,22.7c1.9,0,3.4-1.5,3.4-3.4s-1.5-3.4-3.4-3.4c-1.9,0-3.4,1.5-3.4,3.4S26.5,22.7,28.4,22.7z
		 M28.4,17.8c0.8,0,1.4,0.6,1.4,1.4c0,0.8-0.6,1.4-1.4,1.4c-0.8,0-1.4-0.6-1.4-1.4C26.9,18.5,27.6,17.8,28.4,17.8z"
              />
              <path
                d="M56.4,25.5c-0.5-0.3-1.1-0.1-1.4,0.4c-3.2,5.9-8.2,10.5-14.3,13.2l-4.5-13.7c1.3-1.7,2.1-3.8,2.1-6.1
		c0-4.3-2.7-8-6.6-9.4V4.4c0-1.9-1.5-3.4-3.4-3.4c-1.9,0-3.4,1.5-3.4,3.4v5.4c-3.8,1.4-6.6,5.1-6.6,9.4c0,2.3,0.8,4.4,2.1,6.1
		L16,39.2c-1.9-0.8-3.7-1.9-5.3-3.1c-0.5-0.3-1.1-0.2-1.4,0.2c-0.3,0.4-0.2,1.1,0.2,1.4c1.8,1.3,3.8,2.4,5.9,3.4l-3.7,11.4
		c-3.1,1.3-3.4,5.4-0.8,7.3l-1.6,3.9c-0.2,0.5,0,1.1,0.5,1.3c0.5,0.2,1.1,0,1.3-0.5l1.6-3.9c3,0.5,5.6-2.3,4.8-5.3l4-12.1
		c1.3,0.3,2.7,0.5,4,0.6v1.5c0,1.7,1.3,3,3,3c1.7,0,3-1.3,3-3v-1.5c1.4-0.1,2.7-0.3,4-0.6l4,12.1c-0.4,1.3-0.1,2.8,0.9,3.9
		c0,0,0,0,0,0c0.9,1.1,2.4,1.6,3.9,1.4l1.6,3.9c0.2,0.5,0.8,0.7,1.3,0.5c0.5-0.2,0.7-0.8,0.5-1.3L46,59.7c2-1.5,2.3-4.4,0.7-6.2
		c-0.4-0.5-1-0.8-1.5-1.1l-3.7-11.4c6.5-2.9,12-7.9,15.4-14.2C57.1,26.4,56.9,25.8,56.4,25.5z M40.8,53l-8.1-24.7
		c0.7-0.3,1.4-0.8,2-1.3l8.2,25.1C42.1,52.2,41.4,52.5,40.8,53z M26.9,4.4c0-0.8,0.6-1.4,1.4-1.4c0.8,0,1.4,0.6,1.4,1.4v4.9
		c-0.5-0.1-1-0.1-1.4-0.1c-0.5,0-1,0-1.4,0.1V4.4z M28.4,11.2c4.4,0,8,3.6,8,8s-3.6,8-8,8c-4.4,0-8-3.6-8-8S24,11.2,28.4,11.2z
		 M16,53c-0.6-0.5-1.4-0.8-2.1-0.9L22.1,27c0.6,0.5,1.3,0.9,2,1.3L16,53z M11.8,58c-2.2-2,0.7-5.3,2.9-3.4C17,56.6,14,59.9,11.8,58z
		 M28.4,46.2c-0.6,0-1-0.4-1-1v-4.8c0-0.6,0.4-1,1-1c0.6,0,1,0.4,1,1c0,0.1,0,4.9,0,4.8C29.4,45.7,28.9,46.2,28.4,46.2z M31.4,41.7
		v-1.2c0-1.7-1.3-3-3-3c-1.7,0-3,1.3-3,3v1.2c-1.1-0.1-2.3-0.3-3.4-0.5L26,29c0.8,0.2,1.6,0.3,2.4,0.3c0.8,0,1.6-0.1,2.4-0.3l4,12.2
		C33.6,41.4,32.5,41.6,31.4,41.7z M44.9,58c-0.9,0.8-2.3,0.7-3.2-0.2c-0.8-0.9-0.7-2.3,0.2-3.2c0.9-0.8,2.3-0.7,3.2,0.2
		C46,55.8,45.9,57.2,44.9,58z"
              />
            </svg>
            <div style={titleStyle}>Any Question ?</div>
            <div style={subTitleStyle}>Contact us now</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 68 68"
              viewBox="0 0 68 68"
              width={iconSize + "px"}
              height={iconSize + "px"}
              fill={iconColor}
            >
              <path
                d="M49.8164063,49.9919434c-2.2597656,0-4.1113281,1.8535156-4.1279297,4.1508789
		c0,2.2758789,1.8515625,4.1274414,4.1279297,4.1274414c2.2822266,0,4.1386719-1.8515625,4.1386719-4.1459961
		C53.9394531,51.8459473,52.0830078,49.9919434,49.8164063,49.9919434z M49.8164063,56.2702637
		c-1.1728516,0-2.1279297-0.9545898-2.1279297-2.1318359c0.0087891-1.1835938,0.9628906-2.1464844,2.1279297-2.1464844
		c1.1914063,0,2.1308594,0.9423828,2.1386719,2.1508789C51.9550781,55.3156738,50.9960938,56.2702637,49.8164063,56.2702637z"
              />
              <path
                d="M65,33.6643066h-0.4414063c-0.3145676-5.8422089,0.7440567-8.3066406-1-8.3066406h-8.1591797l-2.927002-14.9584951
		h2.185791c0.5527344,0,1-0.4477539,1-1V4.9992685c0-0.5522461-0.4472656-1.0000002-1-1.0000002H23.7480469
		c-0.5527344,0-1,0.4477541-1,1.0000002v4.3999023c0,0.5522461,0.4472656,1,1,1h1.9501953v23.2651367h-6.3828125V4.9909678
		c0-0.5522461-0.4472656-1.0000002-1-1.0000002h-4.4824219c-0.5527344,0-1,0.4477541-1,1.0000002v39.0048828H4.953125
		C3.3251953,43.9958496,2,45.3151855,2,46.9367676c0,1.628418,1.3251953,2.953125,2.953125,2.953125h7.8798828v1.2924805
		c-0.7966309,1.2958984-1.2587891,2.8154907-1.2587891,4.421875c0,4.6337891,3.7695313,8.4033203,8.4033203,8.4033203
		c4.6445313,0,8.4228516-3.7695313,8.4228516-8.4033203c0-0.1608887-0.0159912-0.3135986-0.0251465-0.4702148h11.6252441
		c0.4987793,4.9765625,4.710083,8.875,9.815918,8.875c5.1074219,0,9.3222656-3.8922729,9.8271484-8.875H65
		c0.5527344,0,1-0.4477539,1-1V34.6643066C66,34.1120605,65.5527344,33.6643066,65,33.6643066z M62.5585938,27.357666v6.3032227
		h-5.534668l-1.2332764-6.3032227H62.5585938z M24.7480469,5.9992685h28.9101563v2.3999023c-8.5872841,0-15.4951553,0-28.9101563,0
		V5.9992685z M50.4345703,10.3991709l4.5515137,23.2617188H54.65625v0.003418H29.809082l8.2930908-8.2930908l3.6849365,3.6846924
		l1.4140625-1.4140625L33.625,18.0661621l-1.4140625,1.4140625l4.4771729,4.4769287l-8.9898682,8.9898682V10.3991709H50.4345703z
		 M30.2138672,38.7531738h-2.515625v-3.0888672h9.953125l-4.0283203,10.5654297h-2.4091797v-6.4765625
		C31.2138672,39.2009277,30.7666016,38.7531738,30.2138672,38.7531738z M25.6982422,35.6643066v3.0888672
		c-1.7976112,0.1932945-4.1640625-0.5828819-4.1640625,1v7.5860596c-0.7526436-0.142704-1.5023384-0.179409-2.21875-0.1226807
		V35.6643066H25.6982422z M14.8330078,5.9909678h2.4824219c0,8.7421589,0,32.9066238,0,41.6367188
		c-0.036499,0.0119629-0.0715332,0.0282593-0.1079102,0.0407104c-0.8674316,0.2931519-1.6672363,0.7260132-2.3745117,1.2749023
		v-0.0534058C14.8330078,38.532959,14.8330078,11.4116564,14.8330078,5.9909678z M4.953125,47.8898926
		C4.4277344,47.8898926,4,47.4621582,4,46.9367676c0-0.519043,0.4277344-0.940918,0.953125-0.940918h7.8798828v1.894043H4.953125z
		 M19.9775391,62.0075684c-3.53125,0-6.4033203-2.8725586-6.4033203-6.4033203c0-3.4481926,2.8319626-6.4130859,6.4033203-6.4130859
		c3.6118221,0,6.4228516,2.9626617,6.4228516,6.4130859C26.4003906,59.1350098,23.5195313,62.0075684,19.9775391,62.0075684z
		 M49.8164063,62.0090332c-4.3378906,0-7.8662109-3.5288086-7.8662109-7.8754883
		c0.0107422-4.3457031,3.5390625-7.8808594,7.8662109-7.8808594c4.3339844,0,7.8671875,3.5351563,7.8779297,7.8901367
		C57.6943359,58.4802246,54.1601563,62.0090332,49.8164063,62.0090332z M64,53.1340332h-4.3564453
		c-0.5169373-5.0251427-4.7993088-8.8837891-9.8320313-8.8837891c-5.0382996,0-9.3009529,3.8932915-9.8125,8.8837891H28.0195313
		c-0.6657562-2.2071304-2.3017559-4.1337509-4.4853516-5.1535034v-7.227356h5.6796875v6.4765625c0,0.5522461,0.4472656,1,1,1
		h4.0976563c0.4150391,0,0.7861328-0.2558594,0.9345703-0.6435547l4.5462646-11.921875H64V53.1340332z"
              />
              <path
                d="M19.9775391,51.9855957c-1.9902344,0-3.609375,1.6235352-3.609375,3.6186523
		c0,1.9897461,1.6191406,3.6088867,3.609375,3.6088867c2.0009766,0,3.6289063-1.6191406,3.6289063-3.6088867
		C23.6064453,53.6091309,21.9785156,51.9855957,19.9775391,51.9855957z M19.9775391,57.2131348
		c-0.8876953,0-1.609375-0.7216797-1.609375-1.6088867c0-0.7783203,0.6152344-1.6186523,1.609375-1.6186523
		c0.8984375,0,1.6289063,0.7260742,1.6289063,1.6186523C21.6064453,56.4914551,20.8759766,57.2131348,19.9775391,57.2131348z"
              />
            </svg>
            <div style={titleStyle}>Any Question ?</div>
            <div style={subTitleStyle}>Contact us now</div>
          </div>
        </div>
      </Box>
    </Box>
  );
}

export default OutputEmoji;