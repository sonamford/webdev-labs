-- Exercise 1 (done for you):
SELECT * FROM users;


-- Exercise 2 (done for you):
SELECT id, first_name, last_name 
FROM users;


-- Exercise 3
SELECT id, first_name, last_name
FROM users
ORDER BY last_name;


-- Exercise 4
SELECT id, user_id, image_url
FROM posts
WHERE user_id = 26;


-- Exercise 5
SELECT id, user_id, image_url
FROM posts
WHERE user_id = 26 or user_id = 12;


-- Exercise 6
SELECT count(id)
FROM posts;


-- Exercise 7
SELECT user_id, count(id)
FROM comments
GROUP BY user_id
ORDER BY count(id) DESC;


-- Exercise 8
SELECT posts.id, posts.user_id, posts.image_url,
       users.username, users.first_name, users.last_name
FROM posts
JOIN users ON posts.user_id = users.id
WHERE user_id = 26 or user_id = 12;


-- Exercise 9
SELECT posts.id, posts.pub_date, following.following_id
FROM posts
JOIN following ON posts.user_id = following.following_id
WHERE following.user_id = 26;


-- Exercise 10
SELECT posts.id, posts.pub_date, following.following_id, users.username
FROM posts
JOIN following ON posts.user_id = following.following_id
JOIN users on following.following_id = users.id
WHERE following.user_id = 26
ORDER BY pub_date DESC;


-- Exercise 11
INSERT INTO bookmarks (user_id, post_id)
VALUES
    (26, 219),
    (26, 220),
    (26, 221);


-- Exercise 12
DELETE FROM bookmarks
WHERE user_id = 26 AND post_id IN (219, 220, 221);


-- Exercise 13
UPDATE users
SET email = 'cyoung2022@gmail.com'
WHERE id = 26;


-- Exercise 14
SELECT posts.id, count(comments.id), posts.caption
FROM posts
JOIN comments on posts.id = comments.post_id
WHERE posts.user_id = 26
GROUP BY posts.id;
