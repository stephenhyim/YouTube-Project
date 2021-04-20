class Like < ApplicationRecord
    
    belongs_to :user
    belongs_to :likable, polymorphic: true

    validates :likable, :user_id, presence: true
    validates :user_id, uniqueness: {scope: [:likable_id, :likable_type]}
end
