import {
  ButtonGroup,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { openEditModal, removeEntryRedux } from "../../actions";
import MultiUseCard from '../MultiUseCard/MultiUseCard'

function ListPosts({ posts }) {
  const dispatch = useDispatch();
  return (
    <>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        List
      </Typography>
      <Stack spacing={2} padding={2}>
        {posts.map((post, index) => (
          <MultiUseCard
            key={index}
            barPosition="left"
            cardType={post.isExpense ? "error" : "success"}
            iconName="ic_blue_alert"
            cardBackground={false}
            actionNode={
              <ButtonGroup fullWidth variant="outlined" align="right">
                <IconButton onClick={() => dispatch(openEditModal(post.id))}>
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => dispatch(removeEntryRedux(post.id))}>
                  <DeleteIcon />
                </IconButton>
              </ButtonGroup>
            }
          >
            <Typography color="text.primary">
              {post.description}
            </Typography>
            <Typography component="h4" variant="h4" color="text.primary">
              {post.value}
            </Typography>
          </MultiUseCard>
        ))}
      </Stack>
    </>
  );
}

export default ListPosts;
