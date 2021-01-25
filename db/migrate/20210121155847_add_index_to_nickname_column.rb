class AddIndexToNicknameColumn < ActiveRecord::Migration[5.2]
  def change
    add_index :users, :nickname
  end
end
