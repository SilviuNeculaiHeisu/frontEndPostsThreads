import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {
  Alert,
  Box,
  Button,
  Grid,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { illegalWords } from "../config.tsx";
import { threads } from "../config.tsx";
import FormCard from "./FormCard";
const PostForm = ({ threadTitleSelected, title }) => {
  const [category, setCategory] = React.useState("");
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [illegalWordPresent, setIllegalWordPresent] = React.useState(false);
  const [displaySwitch, setDisplaySwitch] = React.useState(false);
  const [body, setBody] = React.useState("");
  const [checked, setChecked] = React.useState(true);
  const [totalPosts, setTotalPosts] = React.useState([]);
  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  const handleChangeSwitch = (event) => {
    setChecked(event.target.checked);
  };
  React.useEffect(() => {
    checkForIllegalWords();
  }, [body]);
  React.useEffect(() => {
    getTasks();
  }, []);
  const getTasks = () => {
    setTotalPosts([]);
    threads.forEach((thread) => {
      if (thread.title == threadTitleSelected) {
        thread.mockData.forEach((mock) => {
          console.log(mock);
          setTotalPosts((posts) => [...posts, mock]);
          console.log(totalPosts);
        });
      }
    });
    console.log(totalPosts);
  };
  const checkForIllegalWords = () => {
    setIllegalWordPresent(false);
    illegalWords.forEach((illegalWord) => {
      let bodyCopy = body;
      if (bodyCopy.includes(illegalWord.word)) {
        setIllegalWordPresent(true);
        setDisplaySwitch((prev) => false);
        return;
      }
    });
  };
  const handleSubmitForm = (event) => {
    event.preventDefault();

    checkForIllegalWords();
    if (illegalWordPresent == false) {
      console.log("Here");
      setDisplaySwitch(true);
    }
  };
  const submitData = () => {
    let post = {
      name: title,
      category: category,
      postBody: body,
      image: URL.createObjectURL(selectedImage),
    };
  };
  return (
    <Grid container direction={"column"} spacing={5} ml={2} mt={4}>
      {!displaySwitch && (
        <form onSubmit={handleSubmitForm}>
          <Grid item>
            {" "}
           
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">
                Category
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={category}
                onChange={handleChange}
                label="Category"
                defaultValue={10}
              >
                <MenuItem value={10}>Question</MenuItem>
                <MenuItem value={20}>Suggestion</MenuItem>
                <MenuItem value={30}>Clarification</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <TextField
              id="outlined-basic"
              label="Body"
              variant="outlined"
              required
              onChange={(event) => {
                setBody(event.target.value);
              }}
            />
            {illegalWordPresent && (
              <Alert severity="error">Illegal word present!</Alert>
            )}
          </Grid>
          <Grid item m={2}>
            <Button variant="contained" component="label">
              Upload Image
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={(event) => {
                  console.log(event.target.files[0]);
                  setSelectedImage(event.target.files[0]);
                }}
              />
            </Button>
          </Grid>

          {!illegalWordPresent && (
            <Grid item m={2}>
              <Button variant="contained" type="submit">
                Submit Form
              </Button>
            </Grid>
          )}
        </form>
      )}
      {displaySwitch && (
        <>
          <Grid item>
            <Switch
              checked={checked}
              onChange={handleChangeSwitch}
              inputProps={{ "aria-label": "controlled" }}
            />
            <Typography variant="h5">Allow to be publicly available</Typography>
            <Button variant="contained" onClick={submitData}>
              Submit
            </Button>
          </Grid>
          <Grid item>
            {totalPosts.map((post) => {
              return (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "",
                    flexWrap: "wrap",
                    "& > :not(style)": {
                      m: 1,
                      width: 128,
                      height: 128,
                    },
                  }}
                >
                  <FormCard
                    image={post.image}
                    postBody={post.postBody}
                    postTitle={post.postTitle}
                    category={post.category}
                  />
                </Box>
              );
            })}
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default PostForm;
