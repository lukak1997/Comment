import styled from "styled-components";
import photodel from "../public/images/icon-delete.svg";
import photoedit from "../public/images/icon-edit.svg";
import DeletePage from "./DeletePage";
import { useState } from "react";
import TextareaAutosize from 'react-textarea-autosize';


export default function MyReply(props: any) {
  const [deleteVisible, setDeleteVisible] = useState(false);
  const [commentIndex, setCommentIndex] = useState(0);
  const [replyIndex, setreplyIndex] = useState(0);
  const [inputValue, setInputValue] = useState(props.content);
  const [isReadOnly, setIsReadOnly] = useState(true);

  console.log(props.data);

  function ReplyIndexFinder() {
    props.data.comments.forEach((comment: any) => {
      const replyIndex = comment.replies.findIndex(
        (reply: any) => reply.id === props.replyId
      );
      if (replyIndex > -1) {
        const commentId = comment.id;
        const commentIndex = props.data.comments.findIndex(
          (comment: any) => comment.id === commentId
        );
        setCommentIndex(commentIndex);
        setreplyIndex(replyIndex);
      }
    });
  }
  function EditReply() {
    const updatedData = { ...props.data };
    updatedData.comments[commentIndex].replies[replyIndex].content = inputValue;
    props.setData(updatedData);
  }

  return (
    <Container>
      <Wrapper>
        <Image src={props.image} />
        <Div>
          <Username>{props.username}</Username>
          <You>you</You>
          <CreatedAt>{props.createdAt}</CreatedAt>
        </Div>
      </Wrapper>

      <Content
        onChange={(e: any) => {
          setInputValue(e.target.value);
        }}
        value={inputValue}
        readOnly={isReadOnly}
        minRows={2} maxRows={100}
        isReadOnly={isReadOnly}
        
        
      ></Content>

      <BottomDiv>
        <Button>
          <Increase>+</Increase>5<Decrease>-</Decrease>
        </Button>
        <Div>
          <Delete
            onClick={() => {
              ReplyIndexFinder();
              setDeleteVisible(true);
            }}
          >
            <ImageDelete src={photodel} />
            Delete
          </Delete>
          <Edit
            onClick={() => {
              ReplyIndexFinder();
              setIsReadOnly(!isReadOnly);
              EditReply();
            }}
          >
            <ImageEdit isReadOnly={isReadOnly} src={photoedit} />
            {isReadOnly ? "Edit" : "Update"}
          </Edit>
        </Div>
      </BottomDiv>
      {deleteVisible ? (
        <DeletePage
          commentIndex={commentIndex}
          replyIndex={replyIndex}
          setDeleteVisible={setDeleteVisible}
          setData={props.setData}
        />
      ) : null}
    </Container>
  );
}
const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const You = styled.div`
  background-color: ${(props) => props.theme.colors.ModerateBlue};
  width: 36px;
  height: 19px;
  color: ${(props) => props.theme.colors.White};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  font-weight: 500;
  line-height: 15.41px;
  font-family: "Rubik";
  margin-left: 8px;
  margin-right: 16px;
`;

const Container = styled.div`
  width: 325px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.White};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 16px;
  margin-left: 18px;
`;
const Content = styled(TextareaAutosize)<{isReadOnly:boolean}>`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  font-family: "Rubik";
  width: 293px;
  min-height: 24px;
  height: auto; 
  border:${props => (props.isReadOnly ? 'none' : `1px solid ${props.theme.colors.ModerateBlue}` )};
  border-radius:8px;
  outline:none;
  resize:none;
  overflow:hidden;
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
`;

const Increase = styled.h3`
  color: ${(props) => props.theme.colors.LightGrayishBlue};
`;

const Decrease = styled.h3`
  color: ${(props) => props.theme.colors.LightGrayishBlue};
`;
const Delete = styled.button`
  width: 75px;
  height: 24px;
  background-color: ${(props) => props.theme.colors.White};
  color: ${(props) => props.theme.colors.SoftRed};
  border-radius: 8px;
  border: none;
  outline: none;
  font-family: "Rubik";
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;

const ImageDelete = styled.img`
  margin-right: 8.33px;
`;

const Edit = styled(Delete)`
  color: ${(props) => props.theme.colors.ModerateBlue};
  display:flex;
  justify-content:center;
  align-items:center;
`;

const ImageEdit = styled(ImageDelete)<{isReadOnly:boolean}>`
margin-right: ${props => (props.isReadOnly ? '8.33px' : '0')};
`;
