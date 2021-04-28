class Dislike < ApplicationRecord

    belongs_to :user
    belongs_to :dislikable, polymorphic: true

    validates :dislikable, :user_id, presence: true
    validates :user_id, uniqueness: {scope: [:dislikable_id, :dislikable_type]} 

end