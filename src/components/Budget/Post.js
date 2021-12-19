import {
  Box,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import { green, red } from "@mui/material/colors";
import { useDispatch } from "react-redux";
import { openEditModal, removeEntryRedux } from "../../actions";

const Post = ({ post }) => {
  const dispatch = useDispatch();
  return (
    <Grid item key={post.description} xs={12} sm={6} md={4}>
      <Card>
        <CardHeader
          title={post.description}
          titleTypographyProps={{ align: "center" }}
          sx={{
            backgroundColor: post.isExpense ? red[400] : green[500],
          }}
        />
        <CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "baseline",
              mb: 2,
            }}
          >
            <Typography component="h4" variant="h4" color="text.primary">
              {post.value}
            </Typography>
          </Box>
        </CardContent>
        <CardActions>
          <ButtonGroup fullWidth variant="outlined" align="right">
            <IconButton onClick={() => dispatch(openEditModal(post.id))}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => dispatch(removeEntryRedux(post.id))}>
              <DeleteIcon />
            </IconButton>
          </ButtonGroup>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Post;
