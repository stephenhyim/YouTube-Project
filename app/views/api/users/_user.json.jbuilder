json.user do
    json.extract! user, :id, :email, :nickname, :firstname
    json.user_video do 
        @user_video.each do |video|
            json.set! video.id do
                json.extract! video, :id, :title, :description, :user_id, :created_at
                json.videoUrl url_for(video.video)
            end
        end
    end
end