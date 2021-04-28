json.extract! video, :id, :title, :description, :user_id, :created_at
json.extract! video.user, :firstname
json.videoUrl url_for(video.video)

json.likes video.likes.pluck(:user_id) # gives array of user_ids
# json.dislikes video.likes.pluck(:user_id)
# json.likes video.likes.count total counts of likes

json.dislikes video.dislikes.pluck(:user_id)