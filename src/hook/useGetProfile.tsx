import { useEffect, useState } from "react";
import { getUser, TUserInfo } from "@api/user/getUser";

export const useGetProfile = () => {
  const [data, setData] = useState<null | TUserInfo>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const response = await getUser();
        "name" in response.data && setData(response.data);
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  return { data, loading, error };
};
