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