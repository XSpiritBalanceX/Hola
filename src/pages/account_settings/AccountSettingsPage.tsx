import { Container } from "@mui/material";
import { translate } from "@i18n";
import Loader from "@components/loader/Loader";
import CustomError from "@components/error/CustomError";
import AccountForm from "@components/accountForm/AccountForm";
import {
  useGetAccountQuery,
  useUpdateAccountMutation,
  useDeleteAccountMutation,
} from "@store/requestApi/accountApi";
import NavigationButton from "@components/buttons/NavigationButton";
import "./AccountSettingsPage.scss";

const AccountSettingsPage = () => {
  const { t } = translate("translate", { keyPrefix: "accountSettings" });

  const userID = localStorage.getItem("hola_user_id");

  const { data, error, isLoading } = useGetAccountQuery(userID || "");
  const [, { isLoading: loadingUpdateInformation }] =
    useUpdateAccountMutation();
  const [, { isLoading: loadingDeleteAccount }] = useDeleteAccountMutation();

  return (
    <>
      <Loader
        isLoading={
          isLoading || loadingUpdateInformation || loadingDeleteAccount
        }
      />
      {error ? (
        <CustomError />
      ) : (
        <Container className="accountSettingsContainer">
          {data && (
            <>
              <NavigationButton
                label={t("account")}
                path={"/profile/settings"}
              />
              <AccountForm />
            </>
          )}
        </Container>
      )}
    </>
  );
};

export default AccountSettingsPage;
