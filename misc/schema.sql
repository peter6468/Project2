DROP DATABASE IF EXISTS chrt;
CREATE DATABASE chrt;


-- NOTE - BEFORE RUNNING THE BELOW STATEMENTS, RUN THE APPLICATION TO CREATE THE TABLES

-- survey data

INSERT INTO `chrt`.`surveys` (`name`, `createdAt`, `updatedAt`)
VALUES ('CHRT', current_timestamp(), current_timestamp());

INSERT INTO `chrt`.`survey_axes` (`shortName`, `longName`, `createdAt`, `updatedAt`, `surveyId`)
VALUES ('JP', 'Judging-Perceptive', current_timestamp(), current_timestamp(), 1);
        
INSERT INTO `chrt`.`survey_axes` (`shortName`, `longName`, `createdAt`, `updatedAt`, `surveyId`)
VALUES ('FT', 'Feeling-Thinking', current_timestamp(), current_timestamp(), 1);

INSERT INTO `chrt`.`survey_axes` (`shortName`, `longName`, `createdAt`, `updatedAt`, `surveyId`)
VALUES ('IE', 'Introvert-Extrovert', current_timestamp(), current_timestamp(), 1);

INSERT INTO `chrt`.`survey_axes` (`shortName`, `longName`, `createdAt`, `updatedAt`, `surveyId`)
VALUES ('SN', 'Sensing-Intuitive', current_timestamp(), current_timestamp(), 1);

INSERT INTO `chrt`.`survey_questions` (`surveyAxisId`, `left_text`, `right_text`, `negative_scale`, `createdAt`, `updatedAt`)
VALUES  ( 1, 'Makes List', 'Relies On Memory', FALSE, current_timestamp(), current_timestamp()),
    ( 2, 'Sceptical', 'Wants To Believe', TRUE, current_timestamp(), current_timestamp()),
    ( 3, 'Bored By Time Alone', 'Needs Time Alone', TRUE, current_timestamp(), current_timestamp()),
    ( 4, 'Accepts Things As They Are', 'Unsatisfied With The Way Things Are', FALSE, current_timestamp(), current_timestamp()),
    ( 1, 'Keeps A Clean Room', 'Just Puts Stuff Where Ever', FALSE, current_timestamp(), current_timestamp()),
    ( 2, 'Thinks Robotic Is An Insult', 'Strives To Have A Mechanical Mind', FALSE, current_timestamp(), current_timestamp()),
    ( 3, 'Energetic', 'Mellow', TRUE, current_timestamp(), current_timestamp()),
    ( 4, 'Prefer To Take Mutlitple Choice Exam', 'Prefer To Take An Essay Exam', FALSE, current_timestamp(), current_timestamp()),
    ( 1, 'Chaotic', 'Organized', TRUE, current_timestamp(), current_timestamp()),
    ( 2, 'Easily Hurt', 'Thick Skinned', FALSE, current_timestamp(), current_timestamp()),
    ( 3, 'Works Best In Groups', 'Works Best Alone', TRUE, current_timestamp(), current_timestamp()),
    ( 4, 'Focused On The Present', 'Focused On The Future', FALSE, current_timestamp(), current_timestamp()),
    ( 1, 'Plans Far Ahead', 'Plans At The Last Minute', FALSE, current_timestamp(), current_timestamp()),
    ( 2, 'Wants People Respect from People', 'Wants Their Love', TRUE, current_timestamp(), current_timestamp()),
    ( 3, 'Gets Worn Out By Parties', 'Gets Fired Up By Parties', FALSE, current_timestamp(), current_timestamp()),
    ( 4, 'Fits In', 'Stands Out', FALSE, current_timestamp(), current_timestamp()),
    ( 1, 'Keeps Options Open', 'Commits', TRUE, current_timestamp(), current_timestamp()),
    ( 2, 'Wants To Be Good At Fixing Things', 'Wants To Be Good At Fixing People', TRUE, current_timestamp(), current_timestamp()),
    ( 3, 'Talks More', 'Listen More', TRUE, current_timestamp(), current_timestamp()),
    ( 4, 'When Describing An Event, Will Tell People What Happened', 'When Describing An Event, Will Tell People What It Meant', FALSE, current_timestamp(), current_timestamp()),
    ( 1, 'Gets Work Done Right Away', 'Procastinates', FALSE, current_timestamp(), current_timestamp()),
    ( 2, 'Follows The Heart', 'Follows The Head', FALSE, current_timestamp(), current_timestamp()),
    ( 3, 'Stays At Home', 'Goes Out On The Town', FALSE, current_timestamp(), current_timestamp()),
    ( 4, 'Want The Big Picture', 'Wants The Details', TRUE, current_timestamp(), current_timestamp()),
    ( 1, 'Improvises', 'Prepares', TRUE, current_timestamp(), current_timestamp()),
    ( 2, 'Bases Morality On Justice', 'Bases Morality On Compassion', TRUE, current_timestamp(), current_timestamp()),
    ( 3, 'Finds It Difficult To Yell Very Loudly', 'Yelling To Others When They Are Far Away Comes Naturally', FALSE, current_timestamp(), current_timestamp()),
    ( 4, 'Theoretical', 'Empirical', TRUE, current_timestamp(), current_timestamp()),
    ( 1, 'Works Hard', 'Plays Hard', FALSE, current_timestamp(), current_timestamp()),
    ( 2, 'Uncomfortable With Emotions', 'Values Emmotions', TRUE, current_timestamp(), current_timestamp()),
    ( 3, 'Likes To Perform In Front Of Other People', 'Avoids Public Speaking', TRUE, current_timestamp(), current_timestamp()),
    ( 4, 'Likes To Know, "WHO?", "WHAT?". "WHEN?"', 'Likes To Know Why', FALSE, current_timestamp(), current_timestamp());


-- dummy user and answer data

INSERT INTO `chrt`.`groups` (`name`, `anonymous`, `createdAt`, `updatedAt`)
VALUES ('Testing Group', FALSE, current_timestamp(), current_timestamp());

INSERT INTO `chrt`.`users` (`name`, `email`, `createdAt`, `updatedAt`)
VALUES ('Fraser', 'ftorning@gmail.com', current_timestamp(), current_timestamp());

INSERT INTO `chrt`.`users` (`name`, `email`, `createdAt`, `updatedAt`)
VALUES ('Peter', 'peter@gmail.com', current_timestamp(), current_timestamp());

INSERT INTO `chrt`.`users` (`name`, `email`, `createdAt`, `updatedAt`)
VALUES ('Jacob', 'jacob@gmail.com', current_timestamp(), current_timestamp());

INSERT INTO `chrt`.`users` (`name`, `email`, `createdAt`, `updatedAt`)
VALUES ('Justin', 'justin@gmail.com', current_timestamp(), current_timestamp());

INSERT INTO `chrt`.`group_users` (`createdAt`, `updatedAt`, `groupId`, `userId`)
VALUES (current_timestamp(), current_timestamp(), 1, 1),
	   (current_timestamp(), current_timestamp(), 1, 2),
       (current_timestamp(), current_timestamp(), 1, 3),
       (current_timestamp(), current_timestamp(), 1, 4);

INSERT INTO `chrt`.`group_user_answers` (`value`, `createdAt`, `updatedAt`, `surveyQuestionId`, `groupuserId`)
VALUES (4, current_timestamp(), current_timestamp(), 1, 1),
       (3, current_timestamp(), current_timestamp(), 2, 1),
       (2, current_timestamp(), current_timestamp(), 3, 1),
       (1, current_timestamp(), current_timestamp(), 4, 1),
       (5, current_timestamp(), current_timestamp(), 5, 1),
       (4, current_timestamp(), current_timestamp(), 1, 2),
       (3, current_timestamp(), current_timestamp(), 2, 2),
       (2, current_timestamp(), current_timestamp(), 3, 2),
       (1, current_timestamp(), current_timestamp(), 4, 2),
       (5, current_timestamp(), current_timestamp(), 5, 2),
       (4, current_timestamp(), current_timestamp(), 1, 3),
       (3, current_timestamp(), current_timestamp(), 2, 3),
       (2, current_timestamp(), current_timestamp(), 3, 3),
       (1, current_timestamp(), current_timestamp(), 4, 3),
       (5, current_timestamp(), current_timestamp(), 5, 3),
       (4, current_timestamp(), current_timestamp(), 1, 4),
       (3, current_timestamp(), current_timestamp(), 2, 4),
       (2, current_timestamp(), current_timestamp(), 3, 4),
       (1, current_timestamp(), current_timestamp(), 4, 4),
       (5, current_timestamp(), current_timestamp(), 5, 4);