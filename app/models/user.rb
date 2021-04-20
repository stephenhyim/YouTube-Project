class User < ApplicationRecord
    validates :email, :session_token, :password_digest, presence: true, uniqueness: true
    validates :password, length:{minimum:8, allow_nil: true}
    validates :firstname, :lastname, :birthdate, :gender, :nickname, presence: true

    after_initialize :ensure_session_token

    before_validation :ensure_nickname

    attr_reader :password

    has_many :videos,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :Video

    has_many :comments, 
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :Comment

    has_many :likes, dependent: :destroy


    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil unless user && user.is_password?(password)
        user
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def reset_session_token!
        self.update!(session_token: self.class.generate_session_token)
        self.session_token
    end

    private
    def self.generate_session_token
        SecureRandom::urlsafe_base64
    end

    def ensure_session_token
        self.session_token ||= self.class.generate_session_token
    end

    def ensure_nickname
        self.nickname ||= self.firstname + ' ' + self.lastname
    end

end
