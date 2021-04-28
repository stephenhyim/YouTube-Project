class CreateDislikes < ActiveRecord::Migration[5.2]
  def change
    create_table :dislikes do |t|
      t.integer :disliker_id, null: false
      t.references :dislikable, polymorphic: true
      t.timestamps
    end
    add_index :dislikes, :disliker_id 
  end
end
