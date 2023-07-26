import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "./GlobalStyles";
import { defaultTheme } from "./defaultTheme";
import { Helmet } from "react-helmet";
import PostComponents from "./PostComponents";
import Data from "./data.json";
import { useState } from "react";
import MyReply from "./MyReply";
import UserReply from "./UserReply";
import MyPostComponent from "./MyPostComponent"

function App() {
  const [data, setData] = useState<any>(Data);
  const [inputValue, setInputValue] = useState("");

  const AddComment = () => {
    const updatedComment = [...data.comments];
    updatedComment.push({
      id: Math.floor(Math.random() * 100),
      content: inputValue,
      createdAt: new Date().toLocaleString().slice(0, 9),
      score: 12,
      user: {
        image: {
          png: "./images/avatars/image-juliusomo.png",
          webp: "./images/avatars/image-juliusomo.webp",
        },
        username: "juliusomo",
      },
      replies: [],
    });

    const updatedData = { ...data };
    updatedData.comments = updatedComment;

    setData(updatedData);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Rubik:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      {data.comments.map((item: any) => (
        <>
        {item.user.username === "juliusomo" ?
        <MyPostComponent
                username={item.user.username}
                content={item.content}
                createdAt={item.createdAt}
                image={data.currentUser.image.png}
                replyId={item.id}
                data={data}
                commentId={item.id}
                setData={setData}
              />
              :
          <PostComponents
            data={data}
            commentId={item.id}
            setData={setData}
            createdAt={item.createdAt}
            username={item.user.username}
            content={item.content}
            score={item.score}
            image={item.user.image.png}
          />
      }
          

          {item.replies.map((el: any) =>
            el.user.username === "juliusomo" ? (
              <MyReply
                username={el.user.username}
                content={el.content}
                createdAt={el.createdAt}
                image={data.currentUser.image.png}
                replyId={el.id}
                data={data}
                setData={setData}
              />
            ) : (
              <UserReply
                username={el.user.username}
                content={el.content}
                createdAt={el.createdAt}
                image={el.user.image.png}
                data={data}
                replyId={el.id}
                commentId={item.id}
                setData={setData}
              />
            )
          )}
        </>
      ))}
      <InputDiv>
        <Input
          placeholder="Add a comment…"
          onChange={(e: any) => setInputValue(e.target.value)}
        ></Input>
        <InpuWrapper>
          <Image src={data.currentUser.image.png} />
          <InputReply onClick={AddComment}>SEND</InputReply>
        </InpuWrapper>
      </InputDiv>
    </ThemeProvider>
  );
}

export default App;
const InputDiv = styled.div`
  width: 342px;
  height: 189px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.White};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
`;

const Input = styled.input`
  width: 311px;
  height: 96px;
  border: 1px solid ${(props) => props.theme.colors.LightGray};
  outline: none;
`;
const InpuWrapper = styled.div`
  width: 311px;
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;
const InputReply = styled.button`
  width: 104px;
  height: 48px;
  background-color: ${(props) => props.theme.colors.ModerateBlue};
  color: ${(props) => props.theme.colors.White};
  border-radius: 8px;
  border: none;
  outline: none;
`;
const Image = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-top: 8px;
`;
