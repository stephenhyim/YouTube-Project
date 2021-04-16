class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.string :likable_type
      t.integer :likable_id
      t.integer :user_id
      t.integer :like_value
      t.timestamps
    end
  end
end
