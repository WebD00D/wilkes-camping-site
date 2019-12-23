export const CHECK_FOR_CURRENT_USER = () => {
  const userId = window.localStorage.getItem("CAMPSITE_uuid");

  console.log("CHECK FOR CURRENT USER", userId);

  if (!userId) return false;

  const user = {};

  const profilePhoto = window.localStorage.getItem("CAMPSITE_photo");
  const email = window.localStorage.getItem("CAMPSITE_email");
  const name = window.localStorage.getItem("CAMPSITE_name");

  user.userId = userId;
  user.profilePhoto = profilePhoto;
  user.email = email;
  user.name = name;

  return user;
};
