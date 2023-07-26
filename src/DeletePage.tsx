import styled from "styled-components";
import data from './data.json'
const DeletePage =(props:any)  => {

    function deletePage(){
        const updatedData = { ...data };
          updatedData.comments[props.commentIndex].replies.splice(props.replyIndex , 1)
          props.setData(updatedData)
    }

    
  return (
    <div>
    <MainBox>
      <DeleteBox>
        <DeletePar>
          Are you sure you want to delete this comment? This will remove the
          comment and can’t be undone.
        </DeletePar>
        <DeleteButnWraper>
          <GrayBtn onClick={()=>props.setDeleteVisible(false)} >NO, CANCEL</GrayBtn>
          <RedBtn  onClick={()=>{deletePage();props.setDeleteVisible(false)}}>YES, DELETE</RedBtn>
        </DeleteButnWraper>
      </DeleteBox>
    </MainBox>
 
    </div>
  );
};
const MainBox=styled.div`
     top:0;
    bottom: 0;
    left: 0;
    right: 0;
    position: fixed;
    background-color: rgba(0,0,0,0.5);
`
   


const DeleteBox = styled.div`
    height: 252px;
  width: 400px;
  padding: 32px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.White};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
`
  
;
const DeletePar = styled.p`
     width: 336px;
  font-family: Rubik;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  margin-top: 20px;
  color: ${(props) => props.theme.colors.GrayishBlue};
`
 
;
const DeleteButnWraper = styled.div`
    display: flex;
  align-items: center;
  margin-top: 20px;
  gap: 14px;
`
  
;
const GrayBtn = styled.button`
    border: none;
  font-family: Rubik;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: center;
  color: ${(props) => props.theme.colors.White};
  background-color: ${(props) => props.theme.colors.GrayishBlue};
  height: 48px;
  width: 161px;
  border-radius: 8px;
`
  
;
const RedBtn = styled.button`
    border: none;
  font-family: Rubik;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: center;
  color: ${(props) => props.theme.colors.White};
  background-color: ${(props) => props.theme.colors.SoftRed};
  height: 48px;
  width: 161px;
  border-radius: 8px;
`
  
;
export default DeletePage;