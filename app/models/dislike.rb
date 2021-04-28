class Dislike < ApplicationRecord

    belongs_to :user
    belongs_to :dislikable, polymorphic: true

    validates :dislikable, :disliker_id, presence: true
    validates :disliker_id, uniqueness: {scope: [:dislikable_id, :dislikable_type]} 

end