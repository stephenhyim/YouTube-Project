class AddIndexToVideoTable < ActiveRecord::Migration[5.2]
  def change
    add_index(:videos, :user_id)
  end
end
