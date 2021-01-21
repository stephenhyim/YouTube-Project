class RemoveIndex < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :nickname
  end
end
