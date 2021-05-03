# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
Video.destroy_all

guestuser = User.create!(email: 'guest@email.com', password: 'guestpassword', firstname: 'guest', lastname: 'login', gender: 'male', birthdate: '1991-4-20')
u2 = User.create!(email: 'yimstephen@email.com', password: 'Starwars', firstname: 'Stephen', lastname: 'Yim', gender: 'male', birthdate: '1991-4-20')
u3 = User.create!(email: 'jiabeixi@email.com', password: 'Starwars', firstname: 'Beixi', lastname: 'Jia', gender: 'female', birthdate: '1994-9-1')


v1 = Video.create!(title: "My Beautiful Dog", description: "Holding my Goldendoodle in NYC", user_id: u3.id)
v1_file = URI.open("https://s3.amazonaws.com/youtube-seeds/video1.mp4")
v1.video.attach(io: v1_file, filename: "video1.mp4")

v2 = Video.create!(title: "Traffic", description: "Typical traffic in NYC", user_id: u3.id)
v2_file = URI.open("https://s3.amazonaws.com/youtube-seeds/video2.mp4")
v2.video.attach(io: v2_file, filename: "video2.mp4")

v3 = Video.create!(title: "Underwater", description: "Animals swimming underwater", user_id: u2.id)
v3_file = URI.open("https://s3.amazonaws.com/youtube-seeds/video3.mp4")
v3.video.attach(io: v3_file, filename: "video3.mp4")

v4 = Video.create!(title: "Fire", description: "Warm campfire on the beach", user_id: u2.id)
v4_file = URI.open("https://s3.amazonaws.com/youtube-seeds/video4.mp4")
v4.video.attach(io: v4_file, filename: "video4.mp4")

v5 = Video.create!(title: "Mountains", description: "Beautiful moutain landscape", user_id: u2.id)
v5_file = URI.open("https://s3.amazonaws.com/youtube-seeds/video5.mp4")
v5.video.attach(io: v5_file, filename: "video5.mp4")

v6 = Video.create!(title: "Sand", description: "My feet entering the warm sand", user_id: u3.id)
v6_file = URI.open("https://s3.amazonaws.com/youtube-seeds/video6.mp4")
v6.video.attach(io: v6_file, filename: "video6.mp4")

v7 = Video.create!(title: "Coffee", description: "Must needed coffee in the morning", user_id: u2.id)
v7_file = URI.open("https://s3.amazonaws.com/youtube-seeds/video7.mp4")
v7.video.attach(io: v7_file, filename: "video7.mp4")

v8 = Video.create!(title: "Flight", description: "Get ready for takeoff", user_id: u2.id)
v8_file = URI.open("https://s3.amazonaws.com/youtube-seeds/video8.mp4")
v8.video.attach(io: v8_file, filename: "video8.mp4")

v9 = Video.create!(title: "Beach", description: "Watching the waves crash into the shore", user_id: u3.id)
v9_file = URI.open("https://s3.amazonaws.com/youtube-seeds/video9.mp4")
v9.video.attach(io: v9_file, filename: "video9.mp4")