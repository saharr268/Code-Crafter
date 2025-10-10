CREATE TABLE comments (
    id integer NOT NULL,
    comment_text text NOT NULL,
    rate integer,
    lesson_id integer,
    is_accepted boolean DEFAULT false,
    created_at timestamp without time zone DEFAULT now()
);


CREATE TABLE faqs (
    id integer NOT NULL,
    title text,
    descriptoin text,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE lessons (
    id integer NOT NULL,
    content text,
    short_description text,
    thumbnail_url character varying(500),
    video_url character varying(500),
    pdf_url character varying(500),
    file_url character varying(500),
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE question_options (
    id integer NOT NULL,
    question_id integer NOT NULL,
    option_text text NOT NULL,
    is_correct boolean DEFAULT false
);


CREATE TABLE questions (
    id integer NOT NULL,
    quiz_id integer NOT NULL,
    question_text text NOT NULL,
    question_type integer DEFAULT 0,
    correct_answer text,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE quiz_attempts (
    id integer NOT NULL,
    quiz_id integer NOT NULL,
    score numeric(5,2),
    duration_seconds integer,
    started_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    ended_at timestamp without time zone
);

CREATE TABLE quizzes (
    id integer NOT NULL,
    lesson_id integer,
    title character varying(255) NOT NULL,
    description text,
    time_limit integer,
    thumbnail_url character varying(500),
    question_count integer DEFAULT 0,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);