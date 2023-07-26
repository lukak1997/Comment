import styled from "styled-components";
import photodel from '../public/images/icon-delete.svg'
import photoedit from '../public/images/icon-edit.svg'
import {useState} from 'react'
import DeleteComment from './DeleteComment'
import TextareaAutosize from 'react-textarea-autosize';

export default function MyPostComponent(props: any) {
  const [commentIndex , setCommentIndex]=useState(0)
  const [deleteVisible, setDeleteVisible] = useState(false);
  const [inputValue, setInputValue] = useState(props.content);
  const [isReadOnly, setIsReadOnly] = useState(true);
  function CommentIndexFinder() {
      const commentIndex = props.data.comments.findIndex(
        (comment: any) => comment.id === props.commentId
      );
        if(commentIndex > -1){
          setCommentIndex(commentIndex);
        }    
  }
  function  EditComment() {
    const updatedData = { ...props.data };
    updatedData.comments[commentIndex].content= inputValue;
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
        
        
      ></Content>

      <BottomDiv>
        <Button>
          <Increase>+</Increase>
          5
          <Decrease>-</Decrease>
        </Button>
        <Div>
        <Delete onClick={()=>{CommentIndexFinder();setDeleteVisible(true)}}><ImageDelete src={photodel}/>Delete</Delete>
        <Edit onClick={() => {
              CommentIndexFinder();
              setIsReadOnly(!isReadOnly);
              EditComment();
            }}><ImageEdit isReadOnly={isReadOnly} src={photoedit}/> {isReadOnly ? "Edit" : "Update"}</Edit>
        </Div>
      </BottomDiv>
      {deleteVisible ? <DeleteComment commentIndex={commentIndex} setDeleteVisible={setDeleteVisible} setData={props.setData}/> : null}
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
  width: 343px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.White};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top:16px;
`;

const Content = styled(TextareaAutosize)`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  font-family: "Rubik";
  width: 311px;
  min-height: 24px;
  height: auto; 
  border:none;
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
  width: 311px;
`;
const Image = styled.img`
  width: 32px;
`;

const BottomDiv = styled.div`
  width: 311px;
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
const Delete = styled.button`
  width: 75px;
  height: 24px;
  background-color: ${(props) => props.theme.colors.White};
  color: ${(props) => props.theme.colors.SoftRed};
  border-radius: 8px;
  border:none;
  outline: none;
  font-family: "Rubik";
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  
`;

const ImageDelete=styled.img`
margin-right:8.33px`

const Edit = styled(Delete)`
  color: ${(props) => props.theme.colors.ModerateBlue};
  display:flex;
  justify-content:center;
  align-items:center;
`;

const ImageEdit = styled(ImageDelete)<{isReadOnly:boolean}>`
margin-right: ${props => (props.isReadOnly ? '8.33px' : '0')};
`;
