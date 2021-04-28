# debugger
json.extract! comment, :id, :body, :user_id, :video_id, :created_at
json.extract! comment.user, :nickname

json.likes comment.likes.pluck(:user_id)
json.dislikes comment.dislikes.pluck(:user_id)