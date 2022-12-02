import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { mockData } from "../config.tsx";
import FormCard from "./FormCard";
import ThreadTable from "./ThreadTable";
import TitleSubmission from "./TitleSubmission";
import PostForm from "./PostForm";
const Form = () => {
  const [title, setTitle] = useState("");
  const [isTitleSubmitted, setIsTitleSubmitted] = useState(false);
  const [isThreadSelected, setIsThreadSelected] = useState(false);
  const [threadTitleSelected, setThreadTitleSelected] = useState("");
  const [isTitleOk, setIsTitleOk] = useState(true);
  const HandleSubmitPost = () => {};

  return (
    <>
      {!isThreadSelected && (
        <ThreadTable
          setIsThreadSelected={setIsThreadSelected}
          setThreadTitleSelected={setThreadTitleSelected}
        />
      )}
      {!isTitleSubmitted && isThreadSelected && (
        <TitleSubmission
          title={title}
          setTitle={setTitle}
          isTitleOk={isTitleOk}
          setIsTitleOk={setIsTitleOk}
          isTitleSubmitted={isTitleSubmitted}
          setIsTitleSubmitted={setIsTitleSubmitted}
          threadTitleSelected={threadTitleSelected}
        />
      )}
      {isTitleSubmitted && isThreadSelected && isTitleOk && (
        <PostForm threadTitleSelected={threadTitleSelected} title={title} />
      )}
    </>
  );
  //   <Box
  //   sx={{
  //     display: "flex",
  //     alignItems: "center",
  //     justifyContent: "center",
  //     flexWrap: "wrap",
  //     "& > :not(style)": {
  //       m: 1,
  //       width: 180,
  //       height: 128,
  //     },
  //   }}
  // >
  //   {mockData.map((mock) => {
  //     return (
  //       <FormCard
  //         category={mock.category}
  //         postBody={mock.postBody}
  //         image={mock.image}
  //       />
  //     );
  //   })}
  // </Box>
};

export default Form;
