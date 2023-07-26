import styled from "styled-components";
import { useState } from "react";
import replyphoto from '../public/images/icon-reply.svg'
export default function UserReply(props:any) {
    const [inputVisible, setInputVisible] = useState(false);
    const [inputValue, setInputValue] = useState("");

    function ReplyFinder(){
        props.data.comments.forEach((comment:any)=>{
            const replyIndex = comment.replies.findIndex(
                (reply: any) => reply.id === props.replyId
              );
              if(replyIndex > -1){
                const commentId=comment.id
                const commentIndex = props.data.comments.findIndex(
                  (comment: any) => comment.id === commentId
                );
                const newReply={
                    id: Math.floor(Math.random() * 100),
                    content: inputValue,
                    createdAt: new Date().toLocaleString().slice(0, 9),
                    score: 4,
                    user: {
                        image: {
                          png: "./images/avatars/image-juliusomo.png",
                          webp: "./images/avatars/image-juliusomo.webp",
                        },
                        username: "juliusomo",
                      },
                  }
                  const updatedData = { ...props.data };
                  updatedData.comments[commentIndex].replies.push(newReply);
                props.setData(updatedData)
              }
             
        })
        
          
    }
    return (
        <>
        <Container>
      <Wrapper>
        <Image src={props.image} />
        <Div>
          <Username>{props.username}</Username>
          <CreatedAt>{props.createdAt}</CreatedAt>
        </Div>
      </Wrapper>

      <Content>{props.content}</Content>

      <BottomDiv>
        <Button>
          <Increase>+</Increase>
          5
          <Decrease>-</Decrease>
        </Button>
        <InputReply onClick={()=>{setInputVisible(!inputVisible);}}><ImageReply src={replyphoto}/>Reply</InputReply>
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
          <InputButton
            onClick={() => {
              setInputVisible(false);
              ReplyFinder()
            }}
          >
            Reply
          </InputButton>
          </InpuWrapper>
        </InputDiv>
      ) : null}
      </>
  );
}

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 325px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.White};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top:16px;
  margin-left:18px;
`;
const Content = styled.h1`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  font-family: "Rubik";
  width: 293px;
`;
const Username = styled.h1`
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
  margin-left:16px;
`;
const Wrapper = styled.div`
  display: flex;
  gap: 16px;
  margin: 16px;
  width: 293px;
`;
const Image = styled.img`
  width: 32px;
`;

const BottomDiv = styled.div`
  width: 293px;
  display: flex;
  justify-content: space-between;
  margin: 16px;
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
`
  
;

const Increase = styled.h3`
color: ${(props) => props.theme.colors.LightGrayishBlue};`
  
;
const Decrease = styled.h3`
color: ${(props) => props.theme.colors.LightGrayishBlue};`
;

const InputReply = styled.button`
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
  width: 325px;
  height: 189px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.White};
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  margin-top:8px;
  margin-left:18px;
`;

const Input = styled.input`
  width: 293px;
  height: 96px;
  border: 1px solid ${(props) => props.theme.colors.LightGray};
  outline: none;
`;
const InpuWrapper=styled.div`
  width:293px;
  display:flex;
  justify-content:space-between;
  margin-top:16px;
`
const ImageUser=styled(Image)`
  margin-top:8px;
  width: 30px;
  height:30px;
`

const InputButton = styled.button`
  width: 104px;
  height: 48px;
  background-color: ${(props) => props.theme.colors.ModerateBlue};
  color: ${(props) => props.theme.colors.White};
  border-radius: 8px;
  border:none;
  outline: none;
`;

const ImageReply=styled.img`
margin-right:8px;`

