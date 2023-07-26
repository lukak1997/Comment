import { useState } from "react";
import styled from "styled-components";
import replyphoto from '../public/images/icon-reply.svg'

interface DataType {
  username: string;
  content: string;
  score: string;
  image: string;
  createdAt: string;
  setData: any;
  data: any;
  commentId: string;
}

export default function PostComponents(props: DataType) {
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleReply = () => {
    const commentIndex = props.data.comments.findIndex(
      (comment: any) => comment.id === props.commentId
    );
    
    if (commentIndex !== -1) {
      const updatedComment = { ...props.data.comments[commentIndex] };
      const updatedReplies = [...updatedComment.replies];

      updatedReplies.push({
        content: inputValue,
        id: Math.floor(Math.random() * 100),
        createdAt: new Date().toLocaleString().slice(0, 9),
        user: { username: "juliusomo" },
      });

      updatedComment.replies = updatedReplies;

      const updatedData = { ...props.data };
      updatedData.comments[commentIndex] = updatedComment;

      props.setData(updatedData);
    }
  };
  return (
    <>
      <Container>
        <Wrapper>
          <Image src={props.image} />
          <Div>
            <UserName>{props.username}</UserName>
            <CreatedAt>{props.createdAt}</CreatedAt>
          </Div>
        </Wrapper>
        <Content>{props.content}</Content>
        <BottomDiv>
          <Button>
            <Increase>+</Increase>
            {props.score}
            <Decrease>-</Decrease>
          </Button>
          <ReplyButton
            onClick={() => {
              setInputVisible(!inputVisible);
            }}
          >
            <ImageReply src={replyphoto}/>
            Reply
          </ReplyButton>
        </BottomDiv>
      </Container>

      {inputVisible ? (
        <InputDiv>
          <Input
            onChange={(e: any) => setInputValue(e.target.value)}
            placeholder="Add a comment…"
          ></Input>
          <InpuWrapper>
          <ImageUser src={props.data.currentUser.image.png}/>
          <InputReply
            onClick={() => {
              handleReply();
              setInputVisible(false);
            }}
          >
            Reply
          </InputReply>
          </InpuWrapper>
        </InputDiv>
      ) : null}
      
    </>
  );
}

const Container = styled.div`
  width: 343px;
  height:auto;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.White};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 16px;
`;
const Wrapper = styled.div`
  display: flex;
  gap: 16px;
  margin: 16px;
  width: 311px;
`;
const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

const ReplyButton = styled.button`
  width: 104px;
  height: 48px;
  background-color: ${(props) => props.theme.colors.White};
  color: ${(props) => props.theme.colors.ModerateBlue};
  border-radius: 8px;
  border:none;
  outline: none;
  font-family: "Rubik";
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;

const InputDiv = styled.div`
  width: 342px;
  height: 189px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.White};
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  margin-top:8px;
`;

const Input = styled.input`
  width: 311px;
  height: 96px;
  border: 1px solid ${(props) => props.theme.colors.LightGray};
  outline: none;
`;
const InpuWrapper=styled.div`
  width:311px;
  display:flex;
  justify-content:space-between;
  margin-top:16px;
`
const ImageUser=styled(Image)`
  margin-top:8px;
`
const InputReply = styled.button`
  width: 104px;
  height: 48px;
  background-color: ${(props) => props.theme.colors.ModerateBlue};
  color: ${(props) => props.theme.colors.White};
  border-radius: 8px;
  border:none;
  outline: none;
`;
const Content = styled.h1`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  font-family: "Rubik";
  width: 311px;
`;
const UserName = styled.h1`
  font-size: 16px;
  font-weight: 500;
  line-height: 18.96px;
  color: ${(props) => props.theme.colors.DarkBlue};
  font-family: "Rubik";
`;
const CreatedAt = styled.h1`
  font-size: 16px;
  font-weight: 400;
  line-height: 18.96px;
  color: ${(props) => props.theme.colors.DarkBlue};
  font-family: "Rubik";
  margin-left: 16px;
`;
const Button = styled.button`
  outline: none;
  border: none;
  background-color: ${(props) => props.theme.colors.VeryLightGray};
  height: 40px;
  width: 100px;
  border-radius: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: ${(props) => props.theme.colors.ModerateBlue};
  font-family: "Rubik";
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  text-align: center;
`;

const Increase = styled.h3`
  color: ${(props) => props.theme.colors.LightGrayishBlue};
`;

const Decrease = styled.h3`
  color: ${(props) => props.theme.colors.LightGrayishBlue};
`;
const BottomDiv = styled.div`
  width: 311px;
  display: flex;
  justify-content: space-between;
  margin: 16px;
`;

const ImageReply=styled.img`
margin-right:8px;`


