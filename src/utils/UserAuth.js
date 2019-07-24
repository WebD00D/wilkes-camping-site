export const CHECK_FOR_CURRENT_USER = () => {
  const userId = window.localStorage.getItem("CAMPSITE_uuid");

  if (!userId) return false;

  const user = {};

  const profilePhoto = window.localStorage.getItem("CAMPSITE_photo");
  const email = window.localStorage.getItem("CAMPSITE_email");

  user.userId = userId;
  user.profilePhoto = profilePhoto;
  user.email = email;

  return user;
};
