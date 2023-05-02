import React from "react";

function UserInfoCard({ userData }) {
  return (
    <div className="max-w-md mx-auto rounded shadow-md overflow-hidden">
      <div className="relative pb-48 overflow-hidden">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src={userData.avatar_url}
          alt={userData.login}
        />
      </div>
      <div className="p-4">
        {userData.login ? (
          <div className="dataitem">
            Login:
            {userData.login}
          </div>
        ) : (
          <div></div>
        )}
        <h2 className="text-lg font-bold">{userData.name}</h2>
        <p className="text-gray-600">{userData.blog}</p>
      </div>
    </div>
  );
}

export default UserInfoCard;
