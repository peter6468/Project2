DROP DATABASE IF EXISTS chrt;
CREATE DATABASE chrt;

use chrt;
create table survey (
    id int auto_increment,
    name varchar(50) not null,
    primary key (id)
);

create table survey_axis (
    id int auto_increment,
    survey_id int not null,
    name varchar(50) not null,
    primary key (id),
    foreign key (survey_id) references survey(id)
);

create table survey_question (
    id int auto_increment,
    survey_axis_id int not null,
    left_text varchar(100) not null,
    right_text varchar(100) not null,
    reverse_scale bool default false,
    primary key (id),
    foreign key (survey_axis_id) references survey_axis(id)
);

create table user_group (
    id int auto_increment,
    name varchar(120) not null,
    admin_email varchar(120) not null,
    anonymous bool default False,
    primary key (id)
);

create table user (
    id int auto_increment,
    group_id int not null,
    name varchar(120),
    email varchar(120),
    primary key (id),
    foreign key (group_id) references user_group(id)
);

create table user_answers (
    user_id int not null,
    survey_question_id int not null,
    value int not null,
    primary key (user_id, survey_question_id),
    foreign key (user_id) references user(id),
    foreign key (survey_question_id) references survey_question(id)
);

INSERT INTO SURVEY_QUESTION (SURVEY_AXIS_ID, LEFT_TEXT, RIGHT_TEXT, REVERSE_SCALE)
VALUES
( 'JP', 'Makes List', 'Relies On Memory', FALSE),
    ( 'FT', 'Sceptical', 'Wants To Believe', TRUE),
    ( 'IE', 'Bored By Time Alone', 'Needs Time Alone', TRUE),
    ( 'SN', 'Accepts Things As They Are', 'Unsatisfied With The Way Things Are', FALSE),
    ( 'JP', 'Keeps A Clean Room', 'Just Puts Stuff Where Ever', FALSE),
    ( 'FT', 'Thinks Robotic Is An Insult', 'Strives To Have A Mechanical Mind', FALSE),
    ( 'IE', 'Energetic', 'Mellow', TRUE),
    ( 'SN', 'Prefer To Take Mutlitple Choice Exam', 'Prefer To Take An Essay Exam', FALSE),
    ( 'JP', 'Chaotic', 'Organized', TRUE),
    ( 'FT', 'Easily Hurt', 'Thick Skinned', FALSE),
    ( 'IE', 'Works Best In Groups', 'Works Best Alone', TRUE),
    ( 'SN', 'Focused On The Present', 'Focused On The Future', FALSE),
    ( 'JP', 'Plans Far Ahead', 'Plans At The Last Minute', FALSE),
    ( 'FT', 'Wants People Respect from People', 'Wants Their Love', TRUE),
    ( 'IE', 'Gets Worn Out By Parties', 'Gets Fired Up By Parties', FALSE),
    ( 'SN', 'Fits In', 'Stands Out', FALSE),
    ( 'JP', 'Keeps Options Open', 'Commits', TRUE),
    ( 'FT', 'Wants To Be Good At Fixing Things', 'Wants To Be Good At Fixing People', TRUE),
    ( 'IE', 'Talks More', 'Listen More', TRUE),
    ( 'SN', 'When Describing An Event, Will Tell People What Happened', 'When Describing An Event, Will Tell People What It Meant', FALSE),
    ( 'JP', 'Gets Work Done Right Away', 'Procastinates', FALSE),
    ( 'FT', 'Follows The Heart', 'Follows The Head', FALSE),
    ( 'IE', 'Stays At Home', 'Goes Out On The Town', FALSE),
    ( 'SN', 'Want The Big Picture', 'Wants The Details', TRUE),
    ( 'JP', 'Improvises', 'Prepares', TRUE),
    ( 'FT', 'Bases Morality On Justice', 'Bases Morality On Compassion', TRUE),
    ( 'IE', 'Finds It Difficult To Yell Very Loudly', 'Yelling To Others When They Are Far Away Comes Naturally', FALSE),
    ( 'SN', 'Theoretical', 'Empirical', TRUE),
    ( 'JP', 'Works Hard', 'Plays Hard', FALSE),
    ( 'FT', 'Uncomfortable With Emotions', 'Values Emmotions', TRUE),
    ( 'IE', 'Likes To Perform In Front Of Other People', 'Avoids Public Speaking', TRUE),
    ( 'SN', 'Likes To Know, "WHO?", "WHAT?". "WHEN?"', 'Likes To Know Why', FALSE);

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