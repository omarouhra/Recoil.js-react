import { useRecoilValue } from "recoil";
import { userState } from "../atoms/userState";

function Profile() {
  const user = useRecoilValue(userState);
  return <div>I am the profile fo {user?.name}</div>;
}

export default Profile;
