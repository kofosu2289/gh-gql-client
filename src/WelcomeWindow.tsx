import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";

const GET_USER_INFO = gql`
  query getUserInfo {
    viewer {
      name
      bio
    }
  }
`;

type UserInfoData = {
  viewer: {
    name: string;
    bio: string;
  };
};

export const WelcomeWindow = () => {
  const { loading, data } = useQuery<UserInfoData>(GET_USER_INFO, {
    notifyOnNetworkStatusChange: true,
    pollInterval: 0,
    fetchPolicy: "no-cache",
  });

  if (loading) {
    return null;
  }

  return JSON.stringify(data);
};
