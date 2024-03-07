INSERT INTO Users (username, email) VALUES ('testuser', 'testuser@example.com');

INSERT INTO Courses (title, author, description, estimated_completion_time, cover_image) VALUES 
('Real Estate Investing', 'Alex Lee', 'Dive into real estate investing with strategies for beginners and pros.', 15, 'cover_image_4.jpg'),
('Retirement Planning', 'Michael Brown', 'Plan your retirement with effective strategies and financial tips.', 8, 'cover_image_5.jpg'),
('Stock Market Analysis', 'Chris Green', 'Learn how to analyze stocks for investing and trading.', 12, 'cover_image_6.jpg'),
('Cryptocurrency Fundamentals', 'Samantha White', 'Understand the basics of cryptocurrency and how to invest safely.', 10, 'cover_image_7.jpg'),
('Budgeting for Beginners', 'Linda Black', 'Master the art of budgeting to achieve your financial goals.', 6, 'cover_image_8.jpg'),
('Financial Independence', 'Robert Davis', 'Strategies and tips for achieving financial independence early.', 14, 'cover_image_9.jpg'),
('Tax Planning Essentials', 'Nancy Wilson', 'Learn essential tax planning strategies to save money and avoid surprises.', 7, 'cover_image_10.jpg');

INSERT INTO Course_Progress (user_id, course_id, progress, completed) VALUES 
(1, 1, 50, FALSE),
(1, 2, 100, TRUE);

INSERT INTO Course_Likes (course_id, user_id) VALUES 
(1, 1),
(2, 1),
(3, 1),
(3, 1);