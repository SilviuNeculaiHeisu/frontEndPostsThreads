import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { threads } from "../config.tsx";
import ThreadRow from "./ThreadRow";

const ThreadTable = ({ setIsThreadSelected, setThreadTitleSelected }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {threads.map((thread, index) => (
            <ThreadRow
              key={index}
              thread={thread}
              setIsThreadSelected={setIsThreadSelected}
              setThreadTitleSelected={setThreadTitleSelected}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ThreadTable;
