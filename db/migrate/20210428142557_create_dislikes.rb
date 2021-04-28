class CreateDislikes < ActiveRecord::Migration[5.2]
  def change
    create_table :dislikes do |t|
      t.integer :user_id, null: false
      t.references :dislikable, polymorphic: true
      t.timestamps
    end
    add_index :dislikes, :user_id 
  end
end
