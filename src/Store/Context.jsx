import React, { Children, createContext, useReducer } from "react";

export const Context = createContext({
  postList: [],
  addPost: () => {},
  delPost: () => {},
});

export const postListReducer = (currPostList, action) => {
  return currPostList;
};

const ContextProvider = ({ children, post }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = () => {};
  const delPost = (postId) => {
    console.log(postId);
    
  };

  return (
    <Context.Provider value={{ postList, addPost, delPost }}>
      {children}
    </Context.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: 1,
    img: "https://media.licdn.com/dms/image/v2/D4E03AQH4sjaExQJUuA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1693396285824?e=1735776000&v=beta&t=FA-kuJtWjsqmClsN7C3Vzq9I5PaV6DrmuLC4pwssvi0",
    title: "My First Post",
    body: "This is my first Blog website Made by Me on React JS with all functionality.",
    date: "29/10/24",
    userId: "Nehal",
    tag: ["testing", "test"],
    reaction: "4",
  },
  {
    id: 2,
    img: "https://media.licdn.com/dms/image/v2/D4E03AQH4sjaExQJUuA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1693396285824?e=1735776000&v=beta&t=FA-kuJtWjsqmClsN7C3Vzq9I5PaV6DrmuLC4pwssvi0",
    title: "My First Post",
    body: "This is my first Blog website Made by Me on React JS with all functionality.",
    date: "29/10/24",
    userId: "Nehal",
    tag: ["testing", "test"],
    reaction: "2",
  },
  {
    id: 3,
    img: "https://media.licdn.com/dms/image/v2/D4E03AQH4sjaExQJUuA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1693396285824?e=1735776000&v=beta&t=FA-kuJtWjsqmClsN7C3Vzq9I5PaV6DrmuLC4pwssvi0",
    title: "My First Post",
    body: "This is my first Blog website Made by Me on React JS with all functionality.",
    date: "29/10/24",
    userId: "Nehal",
    tag: ["testing", "test"],
    reaction: "16",
  },
  {
    id: 4,
    img: "https://media.licdn.com/dms/image/v2/D4E03AQH4sjaExQJUuA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1693396285824?e=1735776000&v=beta&t=FA-kuJtWjsqmClsN7C3Vzq9I5PaV6DrmuLC4pwssvi0",
    title: "My First Post",
    body: "This is my first Blog website Made by Me on React JS with all functionality.",
    date: "29/10/24",
    userId: "Nehal",
    tag: ["testing", "test"],
    reaction: "6",
  },
];
export default ContextProvider;
