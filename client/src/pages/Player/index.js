import React, {useEffect, useState, useSelector} from 'react';
import {useParams} from "react-router-dom";
import * as S from "./style";
import Header from "../../components/base/Header";
import VideoPlayer from "../../components/common/VideoPlayer";
import CommentBox from "./Comments";
import {videoService} from "../../services";
import { CommentProvider } from './CommentContext';

function Player(){
    let { videoID } = useParams();
    let { username } = useParams();


    const [loading, setLoading] = useState(true);

    const [videoInfo, setVideoInfo] = useState({
        videoTitle: null,
        videoDesc: null,
        videoDate: null,
        videoPath: null,
        userID: null
    });

    useEffect(() => {
        videoService.getVideoInfoByVideoID(videoID)
            .then(response => {
                setVideoInfo(response);
                setLoading(false);
            })
    },[])
    console.log(videoInfo);

    return(
        <CommentProvider>
            <Header/>
            {!loading &&
            <S.VideoWrapper>
                <S.VideoContainer>
                    <VideoPlayer url={videoInfo.videoPath}/>
                    <S.VideoTitle> {videoInfo.videoTitle} </S.VideoTitle>
                    <S.VideoInfo>
                        <S.VideoDate> {videoInfo.videoDate.substr(0,10)} </S.VideoDate>
                        <S.VideoLike>
                            <span> 7 <S.Heart/> </span>
                            <span> 1 <S.DislikeHeart/> </span>
                        </S.VideoLike>
                    </S.VideoInfo>
                    <S.VideoDesc> {videoInfo.videoDesc} </S.VideoDesc>
                </S.VideoContainer>
                <hr/>
                <CommentBox c_username={username}/>
            </S.VideoWrapper>
            }

        </CommentProvider>
    );
}

export default Player;