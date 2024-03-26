import { Box, Button, Container } from "@mui/material";
import { translate } from "@i18n";
import { useNavigate } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useGetAccountQuery } from "@store/accountApi";
import Loader from "@components/loader/Loader";
import CustomError from "@components/error/CustomError";
import AccountForm from "@components/accountForm/AccountForm";
import "./AccountSettingsPage.scss";

const AccountSettingsPage = () => {
  const { t } = translate("translate", { keyPrefix: "accountSettings" });
  const navigate = useNavigate();

  const { data, error, isLoading } = useGetAccountQuery();

  const handleNavigate = () => {
    navigate("/profile/settings");
  };
  return (
    <>
      <Loader isLoading={isLoading} />
      {error ? (
        <CustomError />
      ) : (
        <Container className="accountSettingsContainer">
          {data && (
            <>
              <Box className="accountSettingsNavigation">
                <Button type="button" onClick={handleNavigate}>
                  <ArrowBackIosNewIcon />
                </Button>
                <p>{t("account")}</p>
              </Box>
              <AccountForm />
            </>
          )}
        </Container>
      )}
    </>
  );
};

export default AccountSettingsPage;
