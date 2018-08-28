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

-- below still needs updating
INSERT INTO SURVEY_QUESTION (SURVEY_AXIS_ID, LEFT_TEXT, RIGHT_TEXT, REVERSE_SCALE)
VALUES
	( <>, 'Makes List',	Relies On Memory, FALSE),
	( <>, 'Sceptical', 'Wants To Believe', FALSE),
	( <>, 'Bored By Time Alone', 'Needs Time Alone', FALSE),
	( <>, 'Accepts Things As They Are', 'Unsatisfied With The Way Things Are', FALSE),
	( <>, 'Keeps A Clean Room', 'Just Puts Stuff Where Ever', FALSE),
	( <>, 'Thinks Robotic Is An Insult', 'Strives To Have A Mechanical Mind', FALSE),
	( <>, 'Energetic', 'Mellow', FALSE),
	( <>, 'Prefer To Take Mutlitple Choice Exam', 'Prefer To Take An Essay Exam', FALSE),
	( <>, 'Chaotic', 'Organized', FALSE),
	( <>, 'Easily Hurt', 'Thick Skinned', FALSE),
	( <>, 'Works Best In Groups', 'Works Best Alone', FALSE),
	( <>, 'Focused On The Present', 'Focused On The Future', FALSE),
	( <>, 'Plans Far Ahead', 'Plans At The Last Minute', FALSE),
	( <>, 'Wants People\'s Respect', 'Wants Their Love', FALSE),
	( <>, 'Gets Worn Out By Parties', 'Gets Fired Up By Parties', FALSE),
	( <>, 'Fits In', 'Stands Out', FALSE),
	( <>, 'Keeps Options Open', 'Commits', FALSE),
	( <>, 'Wants To Be Good At Fixing Things', 'Wants To Be Good At Fixing People', FALSE),
	( <>, 'Talks More', 'Listen More', FALSE),
	( <>, 'When Describing An Event, Will Tell People What Happened', 'When Describing An Event, Will Tell People What It Meant', FALSE),
	( <>, 'Gets Work Done Right Away', 'Procastinates', FALSE),
	( <>, 'Follows The Heart', 'Follows The Head', FALSE),
	( <>, 'Stays At Home', 'Goes Out On The Town', FALSE),
	( <>, 'Want The Big Picture', 'Wants The Details', FALSE),
	( <>, 'Improvises', 'Prepares', FALSE),
	( <>, 'Bases Morality On Justice', 'Bases Morality On Compassion', FALSE),
	( <>, 'Finds It Difficult To Yell Very Loudly', 'Yelling To Others When They Are Far Away Comes Naturally', FALSE),
	( <>, 'Theoretical', 'Empirical', FALSE),
	( <>, 'Works Hard', 'Plays Hard', FALSE),
	( <>, 'Uncomfortable With Emotions', 'Values Emmotions', FALSE),
	( <>, 'Likes To Perform In Front Of Other People', 'Avoids Public Speaking', FALSE),
	( <>, 'Likes To Know, "WHO?", "WHAT?". "WHEN?"', 'Likes To Know Why', FALSE);