class Comment < ApplicationRecord

    validates :user_id, :video_id, :body, presence: true
    

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :video,
        primary_key: :id,
        foreign_key: :video_id,
        class_name: :Video

    has_many :likes, as: :likable, dependent: :destroy


end