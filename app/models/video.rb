class Video < ApplicationRecord
    validates :title, :description, presence: true
    validates :user_id, presence: true, uniqueness: true

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

    has_one_attached :video

end