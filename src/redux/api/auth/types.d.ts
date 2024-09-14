/* eslint-disable @typescript-eslint/no-unused-vars */
namespace AUTH {
  type GetMeResponse = {
    profile: {
      photo: string;
      username: string;
      email: string;
    };
  };
  type GetMeRequest = void;

  type PostSignUpResponse =	{
    accessToken: string;
    accessTokenExpiration: string;
    refreshToken: string;
  }

  type PostSignUpRequest = {
    email: string;
    password: string;
    username: string;
    photo: string;
  };

  type PostSignInResponse = {
    accessToken: string;
    accessTokenExpiration: string;
    refreshToken: string;
   };
   type PostSignInRequest = {
    email: string;
    password: string;
   };

   type LogOutResponse = void;
   type LogOutRequest = void;
}
