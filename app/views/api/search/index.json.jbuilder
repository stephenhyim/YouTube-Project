@results.each do |video|
    json.set! video.id do
        json.extract! video, :id, :title, :description, :user_id, :created_at
        json.extract! video.user, :nickname
        json.videoUrl url_for(video.video)
    end
end