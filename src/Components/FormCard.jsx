import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import SpeakerIcon from "@mui/icons-material/Speaker";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import { styled } from "@mui/system";
const PaperCustom = styled(Paper)({
  "&:hover": {
    backgroundColor: "#858585 !important",
  },
  cursor: "pointer",
});
const FormCard = ({ category, postBody, image, postTitle }) => {
  return (
    <PaperCustom elevation={3}>
      <Grid container alignItems="center" justifyContent="center">
        <Grid item xs={3} md={3}>
          <Box display={"flex"} justifyContent="flex-end">
            {category == "Question" ? (
              <QuestionMarkIcon />
            ) : category == "suggestion" ? (
              <SpeakerIcon />
            ) : category == "clarification" ? (
              <ModeEditOutlineIcon />
            ) : (
              ""
            )}
          </Box>
        </Grid>

        <Grid item xs={6} md={6}>
          <Typography variant="h6"> {category}</Typography>
        </Grid>
        <Grid item xs={6} md={6}>
          <Typography variant="h6"> {postTitle}</Typography>
        </Grid>
        <Grid item xs={12} md={12} mt={1}>
          <Box display={"flex"} justifyContent="center" alignItems="center">
            {postBody}
          </Box>
        </Grid>
        <Grid item xs={12} md={12} mt={1}>
          {
            <img
              alt="not found"
              width={"250px"}
              src="http://localhost:3000/d02611ed-89b3-40d5-8d1b-e69d0db8dc61"
            />
          }
        </Grid>
      </Grid>
    </PaperCustom>
  );
};

export default FormCard;
