import styled from 'styled-components'
import { MAIN } from '../Style/Main';

export const CreateVideoWrapper = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    background: #fff;
	align-items: center;
	justify-content: center;
`;

export const FileInfo = styled.span`
    font-size: 2vh;
`;

export const UploadForm = styled.div`
    background: #fff;
	box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.05);
	position: absolute;
	border-radius: 10px;
	padding: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	margin: 10px auto;
	transition: all 0.3s ease-in;
    top:30%;
    width:40%;
    height:40%;
    margin-left:30%;
`;

export const UploadLogo = styled.div`
    font-size:4vh;
    height:20%;
    position:absolute; 
    top:17%; 
    margin-top:3%;
    margin-left:31%;
    margin-bottom:3%;
    padding:0px;
	color: #3f4257;
	color:${MAIN.DARK_UI_COLOR};
	font-weight:bold;
`;

export const UploadVideo = styled.div`
	position:absolute; 
	top:22%; 
	margin-top:3%;
    margin-left:31%;
    margin-bottom:3%;
    padding:2px;
	height:8%;
	width:30%;
`;

export const UploadInput = styled.input`
    position:absolute;
    width:0;
    height:0;
    overflow:hidden;
`;

export const VideoName = styled.div`
	border:none;
	font-weight:bold;
	position:absolute;
	left:37%;
	top:32%;
	font-size:2.5vh;
	height:54%;
`;

export const InputTitle = styled.input`
	position:absolute;
	margin-left:30%;
	top:37%;
	padding:4px;
	width:30%;
	height:6%;
	border:1px solid #ced4da;
	&:focus {
	outline:1px solid ${MAIN.DARK_UI_COLOR};}
`;

export const InputDesc = styled.textarea`
	position:absolute;
	margin-left:30%;
	top:44%;
	width:30%;
	height:20%;
	padding:5px;
	border:1px solid #ced4da; 
	&:focus {
	outline:1px solid ${MAIN.DARK_UI_COLOR};}
`;


export const Label = styled.label`
    padding: 0.5em 1em 0.5em 1em;
	background: #3f4257;
	background: ${MAIN.DARK_UI_COLOR};
	border-radius: 30px;
	color: white;
	font-weight: 300;
	font-size: 2.4vh;
	
	transition: all 0.2s ease-in;
	cursor: pointer;
	outline: none;
	border: none;
	position:absolute;
	top:23%;
	left:0%;
	height:65%;
	width:35%;
	&:hover {
        background-color: #d35400;
  }
`;

export const UploadButton = styled.button`
	background:${MAIN.DARK_UI_COLOR};
	border-radius:3px;
	color:white;
	position:absolute;
	top:56%;
	left:62%;
	width:6%;
	height:8%;
	font-size: 10px;
	border:none;
	&:hover {
    background-color: #d35400;
  }
`;

export const ThumbnailWrapper = styled.div`
    height: 30vh;
    width: 30vw;
`;

export const Thumbnail = styled.canvas`
    height: 30vh;
    width: 30vw;
`;