json.extract! video, :id, :title, :description, :user_id, :created_at
json.videoUrl url_for(video.video)