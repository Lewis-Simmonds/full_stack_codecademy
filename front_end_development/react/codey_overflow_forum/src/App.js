import React from 'react';
import {comments} from './CommentData';

comments.map(comment => 
    <Card commentObject={comment} />
);