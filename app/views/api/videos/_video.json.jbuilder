json.extract! video, :id, :title, :description, :user_id, :created_at
json.videoUrl url_for(video.video)

json.likes video.likes.pluck(:user_id) # gives array of user_ids
# json.likes video.likes.count total counts of likes