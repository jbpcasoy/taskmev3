import React from "react";
import Comment from "/src/components/comment/Comment";
import { default as PostComponent } from "/src/components/post/Post";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const sb = {
  title: "Post/Post",
  component: PostComponent,
  argTypes: {
    onEdit: { action: "onEdit" },
    onLike: { action: "onLike" },
    onComment: { action: "onComment" },
    onDelete: { action: "onDelete" },
  },
};
export default sb;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <PostComponent {...args} />;

export const NotOwned = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NotOwned.args = {
  avatar:
    "https://images.unsplash.com/photo-1644982647844-5ee1bdc5b114?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  name: "Melissa Skye",
  lastUpdate: "a day ago",
  details:
    "Hello, I am a student from San Francisco. I am currently having a hard time with math and I was wondering can anyone here help me with, algebra?",
  isOwned: false,
  comments: [<p key="1">Comment1</p>, <p key="2">Comment2</p>],
};

export const Owned = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Owned.args = {
  avatar:
    "https://images.unsplash.com/photo-1644982647844-5ee1bdc5b114?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  name: "Melissa Skye",
  lastUpdate: "a day ago",
  details:
    "Hello, I am a student from San Francisco. I am currently having a hard time with math and I was wondering can anyone here help me with, algebra?",
  isOwned: true,
};

export const WithComments = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithComments.args = {
  avatar:
    "https://images.unsplash.com/photo-1644982647844-5ee1bdc5b114?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  name: "Melissa Skye",
  lastUpdate: "a day ago",
  details:
    "Hello, I am a student from San Francisco. I am currently having a hard time with math and I was wondering can anyone here help me with, algebra?",
  isOwned: true,
  comments: [
    <Comment
      key="1"
      avatar="https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=741&q=80"
      body="I am good at math and has experience with being a tutor, maybe I can help you with that."
      lastUpdate="Just now"
      name="Kailee Frey"
    />,
    <Comment
      key="2"
      avatar="https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=741&q=80"
      body="I am good at math and has experience with being a tutor, maybe I can help you with that."
      lastUpdate="Just now"
      name="Kailee Frey"
    />,
  ],
};
