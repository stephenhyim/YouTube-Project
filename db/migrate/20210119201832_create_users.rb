class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :firstname, null: false
      t.string :lastname, null: false
      t.integer :phone_number
      t.date :birthdate, null: false
      t.string :gender, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :nickname
      t.timestamps
    end
      add_index :users, :email, unique: true
      add_index :users, :nickname, unique: true
      add_index :users, :session_token, unique: true
  end
end
