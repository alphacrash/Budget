import { alpha, styled } from "@mui/material/styles";
import { Card, Icon, Typography } from "@mui/material";
import { AccountBalance } from "@mui/icons-material";

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: "none",
  textAlign: "center",
  padding: theme.spacing(5, 0),
  color: theme.palette.info.darker,
  backgroundColor: theme.palette.info.lighter,
}));

const IconWrapperStyle = styled("div")(({ theme }) => ({
  margin: "auto",
  display: "flex",
  borderRadius: "50%",
  alignItems: "center",
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: "center",
  marginBottom: theme.spacing(3),
  color: theme.palette.info.dark,
  backgroundImage: `linear-gradient(135deg, ${alpha(
    theme.palette.info.dark,
    0
  )} 0%, ${alpha(theme.palette.info.dark, 0.24)} 100%)`,
}));

export default function BalanceCard({ title, value }) {
  return (
    <RootStyle>
      <IconWrapperStyle>
        <Icon>
          <AccountBalance />
        </Icon>
      </IconWrapperStyle>
      <Typography variant="h3">{Number.isNaN(value) ? 0 : value}</Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        {title}
      </Typography>
    </RootStyle>
  );
}
