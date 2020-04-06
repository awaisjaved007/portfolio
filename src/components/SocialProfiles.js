import React, { Component } from "react";
import SOCIAL_PROFILES from "../data/SocialProfiles";

const SocialProfile = (props) => {
  const { link, image } = props.socialProfile;

  return (
    <div style={{ display: "inline-block", margin: 30 }}>
      <a href={link}>
        <img src={image} style={{ width: 35, height: 35 }}></img>
      </a>
    </div>
  );
};

const SocialProfiles = () => (
  <div>
    {SOCIAL_PROFILES.map((SOCIAL_PROFILE) => (
      <SocialProfile key={SOCIAL_PROFILE.id} socialProfile={SOCIAL_PROFILE} />
    ))}
  </div>
);

export default SocialProfiles;
