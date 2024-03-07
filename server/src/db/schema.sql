CREATE TABLE IF NOT EXISTS Users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    -- password_hash VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS Courses (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    description TEXT,
    estimated_completion_time INT,
    cover_image TEXT
);

CREATE TABLE IF NOT EXISTS Course_Progress (
    user_id INT REFERENCES Users(id) ON DELETE CASCADE,
    course_id INT REFERENCES Courses(id) ON DELETE CASCADE,
    progress INT,
    completed BOOLEAN,
    PRIMARY KEY (user_id, course_id)
);

CREATE TABLE IF NOT EXISTS Course_Likes (
    course_id INT REFERENCES Courses(id) ON DELETE CASCADE,
    user_id INT REFERENCES Users(id) ON DELETE CASCADE,
    PRIMARY KEY (course_id, user_id)
);