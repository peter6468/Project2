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