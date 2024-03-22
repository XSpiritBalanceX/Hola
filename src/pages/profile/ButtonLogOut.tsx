import { Box, Button } from "@mui/material";
import { translate } from "@i18n";
import logout from "@assets/logout.png";
import { useAppDispatch } from "@store/hook";
import { loginUser } from "@store/holaSlice";
import { useNavigate } from "react-router";
import LogOutIcon from "@components/icons/LogOutIcon";
import "./Profile.scss";

const ButtonLogOut = () => {
  const { t } = translate("translate", { keyPrefix: "profile" });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(
      loginUser({
        isLogin: false,
        token: "",
        expiresIn: 0,
        email: "",
        refreshToken: "",
        user_id: "",
      })
    );
    navigate("/login");
  };

  return (
    <Box className="LogOutButtonBox">
      <Button type="button" onClick={handleLogOut}>
        <LogOutIcon fill="#554CB6" />
        <span className="textButton">{t("logOut")}</span>
      </Button>
    </Box>
  );
};

export default ButtonLogOut;
