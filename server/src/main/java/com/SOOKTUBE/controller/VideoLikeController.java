package com.SOOKTUBE.controller;

import java.util.List;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.SOOKTUBE.dao.VideoDAO;
import com.SOOKTUBE.dao.VideoLikeDAO;
import com.SOOKTUBE.model.VideoDTO;
import com.SOOKTUBE.model.VideoLikeDTO;
import com.SOOKTUBE.service.GCSService;

import lombok.RequiredArgsConstructor;

@RestController
@EnableAutoConfiguration
@RequiredArgsConstructor
@MapperScan(basePackages = "com.SOOKTUBE.dao")
public class VideoLikeController {
	
	 private final GCSService gcsService;
	
	@Autowired
	private VideoLikeDAO videoLikeDAO;
	
	@Autowired
	private VideoDAO videoDAO;
	
	//user likes a video
	@CrossOrigin
	@RequestMapping(value = "/api/like/video/{videoID}/{username}", method = RequestMethod.POST)
	public int[] userLikesVideo(@PathVariable("videoID") final int videoID, @PathVariable("username") final String username) throws Exception {
		
		//return like count
		int[] likeres = new int[2];
		
		if(videoLikeDAO.selectDislikeVideo(videoID, username) != null) {
			videoLikeDAO.revertDislike(videoID, username);
		}
		
		videoLikeDAO.likeaVideo(videoID, username);
		
		
		likeres[0] = videoLikeDAO.likeCount(videoID);
		likeres[1] = videoLikeDAO.dislikeCount(videoID);
		
		return likeres;
		
	}
	
	//revert like
	@CrossOrigin
	@RequestMapping(value = "/api/like/video/revert/{videoID}/{username}", method = RequestMethod.DELETE)
	public int[] revertLike(@PathVariable("videoID") final int videoID, @PathVariable("username") final String username) throws Exception {
		
		//return like count
		int[] likeres = new int[2];
		
		videoLikeDAO.revertLike(videoID, username);
		
		likeres[0] = videoLikeDAO.likeCount(videoID);
		likeres[1] = videoLikeDAO.dislikeCount(videoID);
		
		return likeres;
		
	}
	

	
	//user dislikes a video
	@CrossOrigin
	@RequestMapping(value = "/api/dislike/video/{videoID}/{username}", method = RequestMethod.POST)
	public int[] userDislikesVideo(@PathVariable("videoID") final int videoID, @PathVariable("username") final String username) throws Exception {
		
		
		//return like count
		int[] likeres = new int[2];
		
		
		if(videoLikeDAO.selectLikeVideo(videoID, username) != null) {
			videoLikeDAO.revertLike(videoID, username);
		}
		
		videoLikeDAO.dislikeaVideo(videoID, username);
		
		likeres[0] = videoLikeDAO.likeCount(videoID);
		likeres[1] = videoLikeDAO.dislikeCount(videoID);
		
		return likeres;
	}
	
	//revert dislike
	@CrossOrigin
	@RequestMapping(value = "/api/dislike/video/revert/{videoID}/{username}", method = RequestMethod.DELETE)
	public int[] reverDislike(@PathVariable("videoID") final int videoID, @PathVariable("username") final String username) throws Exception {
		
		//return like count
		int[] likeres = new int[2];
		
		videoLikeDAO.revertDislike(videoID, username);
		
		likeres[0] = videoLikeDAO.likeCount(videoID);
		likeres[1] = videoLikeDAO.dislikeCount(videoID);
		
		return likeres;
		
	}
	
	//get like, dislike count
	@CrossOrigin
	@RequestMapping(value ="/api/like/dislike/count/videoID/{videoID}", method = RequestMethod.GET)
	public int[] likeCount(@PathVariable("videoID") final int videoID) throws Exception {
		
		int like = videoLikeDAO.likeCount(videoID);
		int dislike = videoLikeDAO.dislikeCount(videoID);
		
		int [] count = new int[2];
		
		count[0] = like;
		count[1] = dislike;
		
		return count;
		
	}
	
	//get liked videos by user
	@CrossOrigin
	@RequestMapping(value = "/api/liked/video/byUsername/{username}", method = RequestMethod.GET)
	public VideoDTO[] getlikedVideo(@PathVariable("username") final String username) throws Exception {
		
		List<Integer> videoID = videoLikeDAO.getlikeVideos(username);
		

		VideoDTO[] res = new VideoDTO[videoID.size()];

		for (int i = 0; i < videoID.size(); i++) {
			
			VideoDTO video = videoDAO.getDescbyVideoID(videoID.get(i));
			
			res[i] = video;
			
			res[i].setLike(videoLikeDAO.likeCount(videoID.get(i)));
			res[i].setDislike(videoLikeDAO.dislikeCount(videoID.get(i)));
			
			res[i].setVideoPath(gcsService.getVideobyVIDEOtable(res[i].getUploadFileName()));
		
		}
		
		return res;
		
	}
	
	//get disliked videos by user
	@CrossOrigin
	@RequestMapping(value = "/api/disliked/video/byUsername/{username}", method = RequestMethod.GET)
	public VideoDTO[] getdislikedVideo(@PathVariable("username") final String username) throws Exception {
		
		List<Integer> videoID = videoLikeDAO.getDislikeVideos(username);
		
		VideoDTO[] res = new VideoDTO[videoID.size()];
		
		for(int i = 0; i < videoID.size(); i++) {
			
			VideoDTO video = videoDAO.getDescbyVideoID(videoID.get(i));
			
			res[i] = video;
			
			res[i].setLike(videoLikeDAO.likeCount(videoID.get(i)));
			res[i].setDislike(videoLikeDAO.dislikeCount(videoID.get(i)));
			
			res[i].setVideoPath(gcsService.getVideobyVIDEOtable(res[i].getUploadFileName()));
			
		}
		
		return res;
	}
	

}
