@results.each do |video|
    # debugger
    json.set! video.id do
        json.extract! video, :id, :title, :description, :user_id, :created_at
        json.videoUrl url_for(video.video)
    end
end