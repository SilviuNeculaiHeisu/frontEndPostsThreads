import { Alert, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { threads } from "../config.tsx";
const TitleSubmission = ({
  title,
  setTitle,
  isTitleSubmitted,
  setIsTitleSubmitted,
  threadTitleSelected,
  isTitleOk,
  setIsTitleOk,
}) => {
  const checkTitle = () => {
    setIsTitleOk(true);
    threads.forEach((thread) => {
      if (thread.title === threadTitleSelected) {
        thread.mockData.forEach((mock) => {
          if (mock.postTitle == title) {
            console.log(mock.postTitle);
            console.log(title);
            setIsTitleOk(false);
            return;
          }
          if (setIsTitleOk == false) {
            return;
          }
        });
      }
    });
  };
  useEffect(() => {
    checkTitle();
  }, [title]);
  const SubmitTitle = (event) => {
    event.preventDefault();

    if (isTitleOk) {
      setIsTitleSubmitted(true);
    }
  };

  return (
    <>
      {
        <Grid
          container
          direction={"column"}
          alignContent="center"
          justifyContent={"center"}
          spacing={"3"}
        >
          <form onSubmit={SubmitTitle}>
            <Grid item>
              <Typography variant="h4">Form submition</Typography>{" "}
            </Grid>
            <Grid item>
              <TextField
                id="outlined-basic"
                label="Title"
                variant="outlined"
                value={title}
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
                required
              />
              {!isTitleOk && (
                <Alert severity="error">
                  The Title {title} is already taken!
                </Alert>
              )}
            </Grid>
            <Grid item mt={3}>
              <Button variant="contained" type="submit">
                Submit Title
              </Button>
            </Grid>
            <Grid item mt={3}></Grid>
          </form>
        </Grid>
      }
    </>
  );
};

export default TitleSubmission;
