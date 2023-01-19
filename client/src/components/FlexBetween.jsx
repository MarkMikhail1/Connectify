import { Box } from "@mui/material";
import { styled } from "@mui/system";
import { defaultEqualityCheck } from "reselect";

const FlexBetween = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
});

export default FlexBetween;