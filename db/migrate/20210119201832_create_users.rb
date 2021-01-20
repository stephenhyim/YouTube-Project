class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :firstname, null: false
      t.string :lastname, null: false
      t.integer :phone_number
      t.date :birthdate, null: false
      t.string :gender, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.timestamps
    end
      add_index :users, :username, unique: true
      add_index :users, :session_token, unique: true
  end
end
