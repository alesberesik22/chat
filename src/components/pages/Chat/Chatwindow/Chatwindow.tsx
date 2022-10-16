import axios from "axios";
import React, { useEffect, useState } from "react";
import { ChatEngine } from "react-chat-engine";
import { UserAuth } from "../../../context/AuthContext";
import "./Chatwindow.scss";

const Chatwindow = () => {
  const [loading, setLoading] = useState(true);
  const { user } = UserAuth();
  const getFile = async (url: string) => {
    const response = await fetch(url);
    const data = await response.blob();
    return new File([data], "userPhoto.jpg", { type: "image/jpeg" });
  };
  useEffect(() => {
    if (!user) {
      return;
    }
    axios
      .get("https://api.chatengine.io/users/me", {
        headers: {
          "project-id": "f5962c94-8e92-41b6-a5f1-51e7198e1707",
          "user-name": user.email,
          "user-secret": user.uid,
        },
      })
      .then(() => {
        console.log("som v then prveho getu");
        setLoading(false);
      })
      .catch(() => {
        console.log("som v catch prveho getu");
        let formData = new FormData();
        formData.append("email", user.email);
        formData.append("username", user.email);
        formData.append("secret", user.uid);
        getFile(user.photoURL).then((avatar) => {
          formData.append("avatar", avatar, avatar.name);

          axios
            .post("https://api.chatengine.io/users/", formData, {
              headers: {
                "private-key": "0b660593-37bd-47d6-82a8-741cfe8f6e17",
              },
            })
            .then(() => {
              console.log("som v then postu");
              setLoading(false);
            })
            .catch((error) => {
              console.log("som v catch postu");
              console.log(error);
            });
        });
      });
  }, [user]);
  if (user?.displayName == null || loading === true) {
    return <div>Loading...</div>;
  }
  return (
    <div className="chat_window">
      <ChatEngine
        height="calc(100vh - 66px)"
        projectID="f5962c94-8e92-41b6-a5f1-51e7198e1707"
        userName={user.email}
        userSecret={user.uid}
      />
    </div>
  );
};

export default Chatwindow;
