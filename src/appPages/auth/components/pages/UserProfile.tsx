import React from "react";
import { useGetMeQuery } from "../../../../redux/api/auth";
import scss from "./UserProfile.module.scss";

const UserProfile: React.FC = () => {
  const { data, error, isLoading } = useGetMeQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error)
    return <p style={{ color: "white", fontFamily: "DM mono" }}>Нет данных</p>;

  if (!data || !data.profile) return <p>No user data available.</p>;

  return (
    <div>
      <div className={scss.main_user_profile}>
        <div className={scss.user_data_block}>
          <img
            src={data.profile.photo}
            alt="Profile"
            className="profile-photo"
          />
          <div className={scss.user_data}>
            <p>{data.profile.username}</p>    
            <p>{data.profile.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
