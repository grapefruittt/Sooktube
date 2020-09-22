import immer from "immer";
import { searchConstants } from "../constants";

const initialState = {
    //추천 영상 목록
    recVideos: [],
    hasMoreRecVideos: true,
    showFallbackRecVideos: true,
    recOffset: 0,
    //재생목록 내에서 검색 결과 목록
    searchVideosInPlaylist: [],
    hasMoreSearchVideosInPlaylist: true,
    showFallbackSearchVideosInPlaylist: true,
    searchOffsetInPlaylist: 0

};

export function search(state = initialState, action) {
    return immer(state, (draft) => {
        switch (action.type) {
            case searchConstants.LOAD_REC_VIDEOS_INIT: {
                draft.showWFallbackRecVideos = true;
                draft.hasMoreRecVideos = true;
                draft.recVideos = [];
                draft.recOffset = 0;
                break;
            }
            case searchConstants.LOAD_REC_VIDEOS_REQUEST: {
                draft.showFallbackRecVideos = true;
                break;
            }
            case searchConstants.LOAD_REC_VIDEOS_SUCCESS: {
                draft.hasMoreRecVideos = (action.data.length === 20);
                draft.recVideos.push(...action.data);
                draft.recOffset = draft.recOffset + 20;
                draft.showFallbackRecVideos = false;
                break;
            }
            case searchConstants.LOAD_REC_VIDEOS_FAILURE: {
                draft.showFallbackRecVideos = false;
                break;
            }
            case searchConstants.SEARCH_VIDEOS_INIT: {
                draft.showFallbackSearchVideosInPlaylist = true;
                draft.hasMoreSearchVideosInPlaylist = true;
                draft.searchVideosInPlaylist = [];
                draft.searchOffsetInPlaylist = 0;
                break;
            }
            case searchConstants.SEARCH_VIDEOS_REQUEST: {
                draft.showFallbackSearchVideosInPlaylist = true;
                break;
            }
            case searchConstants.SEARCH_VIDEOS_SUCCESS: {
                draft.hasMoreSearchVideosInPlaylist = (action.data.length === 20);
                draft.searchVideosInPlaylist.push(...action.data);
                draft.searchOffsetInPlaylist = draft.searchOffsetInPlaylist + 20;
                draft.showFallbackSearchVideosInPlaylist = false;
                break;
            }
            case searchConstants.SEARCH_VIDEOS_FAILURE: {
                draft.showFallbackSearchVideosInPlaylist = false;
                break;
            }
            default:
                return state
        }
    })
}
