import styled from "styled-components";

const colWidth = {
    12: (100 / 12) * 12,
    11.5: (100 / 12) * 11.5,
    11: (100 / 12) * 11,
    10.5: (100 / 12) * 10.5,
    10: (100 / 12) * 10,
    9.5: (100 / 12) * 9.5,
    9: (100 / 12) * 9,
    8.5: (100 / 12) * 8.5,
    8: (100 / 12) * 8,
    7.5: (100 / 12) * 7.5,
    7: (100 / 12) * 7,
    6.5: (100 / 12) * 6.5,
    6: (100 / 12) * 6,
    5.5: (100 / 12) * 5.5,
    5: (100 / 12) * 5,
    4.5: (100 / 12) * 4.5,
    4: (100 / 12) * 4,
    3.5: (100 / 12) * 3.5,
    3: (100 / 12) * 3,
    2.5: (100 / 12) * 2.5,
    2: (100 / 12) * 2,
    1.5: (100 / 12) * 1.5,
    1: (100 / 12) * 1,
    0.5: (100 / 12) * 0.5,
  };
  
  export const Row = styled.div`
    width: 100%;
    display: flex;
    flex-direction: ${(props) => props.direction || 'row'};
    justify-content: ${(props) => props.justifyContent};
    align-items: ${(props) => props.alignItems};
    height: ${(props) => props.height};
    flex-wrap: wrap;
    position: relative;
    background: ${(props) => props.background};
    border-radius: ${(props) => props.borderRadius};
    margin: ${(props) => props.margin};
    margin-top: ${(props) => props.marginTop};
    margin-bottom: ${(props) => props.marginBottom};
    margin-left: ${(props) => props.marginLeft};
    margin-right: ${(props) => props.marginRight};
    border: ${(props) => `${props.border}` || 'none'};
    padding: ${(props) => props.padding};
    padding-top: ${(props) => props.paddingTop};
    background-color: ${(props) => props.backgroundColor};
  `;
  
  export const Col = styled.div`
    width: ${(props) => (props.width ? props.width : `${colWidth[props.col]}%` || '100%')};
    text-align: ${(props) => props.textAlign};
    flex-grow: ${(props) => props.flexGrow};
    position: relative;
    position: ${(props) => props.position || 'relative'};
    z-index: ${(props) => props.zIndex || 'none'};
    box-sizing: border-box;
    background: ${(props) => props.background};
    display: ${(props) => props.display};
    place-content: ${(props) => props.placeContent};
    margin-top: ${(props) => props.marginTop};
    margin-left: ${(props) => props.marginLeft};
    margin-right: ${(props) => props.marginRight};
    margin: ${(props) => props.margin};
    align-self: ${(props) => props.alignSelf};
    border-radius: ${(props) => props.borderRadius};
    height: ${(props) => props.height};
    justify-content: ${(props) => props.justifyContent};
    background-color: ${(props) => props.backgroundColor};
    border-left: ${(props) => props.borderLeft};
    border-right: ${(props) => props.borderRight};
    padding: ${(props) => props.padding};
    padding-right: ${(props) => props.paddingRight};
    padding-left: ${(props) => props.paddingLeft};
    border-radius: ${(props) => props.borderRadius};
  `;

export const MainWrap = styled.div`
  `;

export const Header = styled.div`
  background:#383438;
  padding: 0.5rem 1rem;
  text-align: center;
  color: white;
  font-size: 30px;
  display:flex;
`;
export const MainDiv = styled.div`
    display:flex;
    background:#F2F3EF;
  `;

export const HeaderComponentsLeft = styled.div`
  display:flex;
  width:200%;
`;

export const HeaderComponentsMiddle = styled.div`
  display:flex;
`;
export const Icon = styled.img`
`;
export const UserDetailDiv = styled.div`
`;
export const Icon2 = styled.img`
margin 0rem 0.5rem;
`;
export const HeaderComponentsRight = styled.div`
  display:flex;
  margin-left:10rem;
`;
export const HeaderDiv2 = styled.div`
  display:flex;
  margin: 0rem 1rem;
`;
export const Text = styled.div`
 font-size:12px;
 width:100%;
 margin-right:0.5rem;
`;
export const TextLeft = styled.div`
 font-size:18px;
 font-weight:500;
 margin:0.5rem 0rem;
 margin-left:0.2rem;
`;
export const MainDivLeft = styled.div`
  padding:0rem;
`;
export const MainDivMiddle = styled.div`
background:white;
padding:2rem 3rem;
border-radius:10px;
`;
export const Header1 = styled.div`
color:black;
font-size:24px;
font-weight:700;
`;
export const Header2 = styled(Header1)`
font-weight:500;
margin-bottom:1rem;
`;
export const ContentSections = styled.div`
margin:0.5rem 0rem;
color:grey;
`;
export const ContentSectionsSelected = styled(ContentSections)`
color:green;
`;

export const InputLabel = styled.div`
margin:1rem 0rem 0.3rem 0rem;
font-size:12px;
font-weight:400;
color:#3a3d3a;
`;
export const InputLabel2 = styled.div`
font-size:12px;
font-weight:400;
color:#3a3d3a;
`;
export const InputField = styled.input`
border: 2px solid lightgray;
margin-right:0.5rem;
width:100%;
padding:0.2rem 0.5rem;
`;
export const InputFieldCheckbox = styled.input`
border: 2px solid lightgray;
margin-right:0.5rem;
`;
export const CheckBoxDiv = styled.div`
margin:1rem 0rem;
display:flex;
`;
export const ButtonDiv = styled.div`
margin:1rem 0rem;
`;
export const LocationDiv = styled.div`
`;
export const SaveButton = styled.button`
background:#54a14f;
border:none;
padding:0.4rem 1.5rem;
color:white;
border-radius:10px;
`;

export const Footer = styled.div`
background:#656265;
position: fixed;
z-index:1;
left: 0;
bottom: 0;
width: 100%;
padding:0rem;
display:flex;
padding:0.5rem;
`;

export const FooterComponentsLeft = styled.div`
display:flex;
padding:0.5rem 2rem;
`;
export const FooterComponentsRight = styled.div`
display:flex;
padding:0rem 2rem;
margin-left:10rem;
`;
export const Text1 = styled.div`
font-size:12px;
margin:0rem 0rem;
font-weight:500;
color:white;
`;
export const Text2 = styled.div`
font-size:12px;
margin:0.5rem 0.5rem;
color:white;
`;

export const Text3 = styled.div`
font-size:8px;
margin:0.5rem 0.5rem;
color:grey;
`;
export const Text4 = styled.div`
font-size:12px;
margin:0.5rem 0.5rem;
color:white;
`;