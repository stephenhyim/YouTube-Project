class Video < ApplicationRecord
    validates :title, :description, presence: true
    validates :user_id, presence: true

    validate :ensure_video

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

    has_one_attached :video

    has_many :comments

    has_many :likes, as: :likable


    def ensure_video
        unless self.video.attached?
            errors[:video] << "must be attached"
        end
    end

end