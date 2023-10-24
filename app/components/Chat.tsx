"use client";

import React, { FC, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface ChatBubbleProps {
  messages: string[];
  isUser: boolean;
  position: "left" | "right";
}

const dummyMessages: { content: string; isUser: boolean }[] = [
  {
    content: "so what's Bytehopper.ai?",
    isUser: false,
  },
  {
    content: "Hey! Alican from Bytehopper.ai here 👋",
    isUser: true,
  },
  {
    content: "We're an AI automation & Software agency for innovators.",
    isUser: true,
  },
  {
    content:
      "We understand the challenge of finding freelancers on platforms like Upwork or searching for months for the right software expert at a reasonable cost.",
    isUser: true,
  },
  {
    content:
      "Let us streamline your projects with tailored digital solutions and clear pricing.",
    isUser: true,
  },
  {
    content: `👉 Slack communication
    👉 Clear pricing
    👉 Unlimited iterations`,
    isUser: true,
  },
];

interface MessageProps {
  message: string;
  isUser: boolean;
  position: "left" | "right";
  idx: number;
  onInViewChange?: (inView: boolean) => void; // New prop
}

const Message: FC<MessageProps> = ({
  onInViewChange,
  message,
  isUser,
  position,
  idx,
}) => {
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 1,
  });

  useEffect(() => {
    if (onInViewChange) {
      onInViewChange(inView);
    }
  }, [inView, onInViewChange]);

  const animationClass = inView
    ? position === "left"
      ? "animate-slideFromLeft opacity-100"
      : "animate-slideFromRight opacity-100"
    : "opacity-0";

  return (
    <div
      ref={inViewRef}
      className={`${animationClass} opacity-0 delay-${
        idx * 200
      } p-4 rounded-2xl mb-2 text-left ${
        isUser ? "bg-black text-white" : "bg-gray-200 text-black"
      }`}
    >
      {message.split("\n").map((str, index, array) => (
        <React.Fragment key={index}>
          {str}
          {index === array.length - 1 ? null : <br />}
        </React.Fragment>
      ))}
    </div>
  );
};

const ChatBubble: FC<ChatBubbleProps> = ({ messages, isUser, position }) => {
  const [avatarInView, setAvatarInView] = useState(false);

  const handleInViewChange = (inView: boolean) => {
    setAvatarInView(inView);
  };

  const avatarAnimationClass = avatarInView
    ? position === "left"
      ? "animate-slideFromLeft opacity-100"
      : "animate-slideFromRight opacity-100"
    : "opacity-0";

  return (
    <div
      className={`flex mt-4 ${
        isUser ? "flex-row-reverse ml-8" : "mr-8"
      } items-end`}
    >
      <div className={`flex flex-col lg:max-w-[50%]`}>
        {messages.map((message, idx) => (
          <Message
            key={idx}
            message={message}
            isUser={isUser}
            position={position}
            idx={idx}
            onInViewChange={handleInViewChange} // Pass the callback
          />
        ))}
        <img
          className={`w-10 h-10 rounded-full ${
            isUser ? "self-end" : "self-start"
          } ${avatarAnimationClass}`}
          src={
            isUser
              ? "https://media.licdn.com/dms/image/C4D03AQFhmD6Fh-F6mA/profile-displayphoto-shrink_800_800/0/1585155744112?e=1703116800&v=beta&t=Bsf3faCcQsBwteO6FZ1TKwvf1s9vmGWOq-ZTFWOv3Lg"
              : "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=2662&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="Avatar"
        />
      </div>
    </div>
  );
};

interface ChatProps {
  messages?: { content: string; isUser: boolean }[];
}

const Chat: FC<ChatProps> = ({ messages = dummyMessages }) => {
  const userMessages = messages
    .filter((msg) => msg.isUser)
    .map((msg) => msg.content);
  const otherMessages = messages
    .filter((msg) => !msg.isUser)
    .map((msg) => msg.content);

  return (
    <div className="text-center max-w-5xl mx-4 items-center justify-between mb-12 lg:mb-24 bg-[#F5F5F7] p-4 rounded-xl ">
      {otherMessages.length > 0 && (
        <ChatBubble position="left" messages={otherMessages} isUser={false} />
      )}
      {userMessages.length > 0 && (
        <ChatBubble position="right" messages={userMessages} isUser={true} />
      )}
    </div>
  );
};

export { Chat, ChatBubble };
