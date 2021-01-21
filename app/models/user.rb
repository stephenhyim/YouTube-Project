class User < ApplicationRecord
    validates :email, :session_token, :password_digest, presence: true, uniqueness: true
    validates :password, length:{minimum:6, allow_nil: true}
    validates :firstname, :lastname, :birthdate, :gender, presence: true

    after_initialize :ensure_session_token

    before_validation :ensure_nickname

    attr_reader :password


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
        if nickname.nil? 
            self.nickname = firstname + ' ' + lastname
        end
    end

end
