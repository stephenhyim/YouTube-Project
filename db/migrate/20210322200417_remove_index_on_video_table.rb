class RemoveIndexOnVideoTable < ActiveRecord::Migration[5.2]
  def change
    remove_index :videos, :user_id
  end
end
