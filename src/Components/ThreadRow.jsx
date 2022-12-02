import { TableCell, TableRow } from "@mui/material";
import React from "react";
import { styled } from "@mui/system";
const TableRowCustom = styled(TableRow)({
  "&:last-child td, &:last-child th": { border: 0 },
  "&:hover": {
    backgroundColor: "#858585 !important",
  },
  cursor: "pointer",
});
const ThreadRow = ({ thread, setIsThreadSelected, setThreadTitleSelected }) => {
  return (
    <TableRowCustom
      key={thread.title}
      onClick={() => {
        setIsThreadSelected(true);
        setThreadTitleSelected(thread.title);
      }}
    >
      <TableCell component="th" scope="row">
        {thread.title}
      </TableCell>
    </TableRowCustom>
  );
};

export default ThreadRow;
