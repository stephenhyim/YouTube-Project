# json.extract! video, :id, :title, :description, :user_id, :created_at
# json.videoUrl url_for(video.video)

# @videos.each do |video|
#     json.set! video.id do
#         json.extract! video, :id, :title, :description, :user_id, :created_at
#         json.videoUrl url_for(video.video) #setting videoUrl as key to whatever comes back from url_for helper   
#     end
# end

json.partial! 'api/videos/video', video: @video