
import { ObjectId } from 'mongodb';
import Comment from '../model/comment.js';

export const newComment = async (request, response) => {
    try {
        const comment = await new Comment(request.body);
        comment.save();

        response.status(200).json('Comment saved successfully');
    } catch (error) {
        response.status(500).json(error);
    }

}


export const getComments = async (request, response) => {
    try {
        const comments = await Comment.find({ postId: request.params.id });

        response.status(200).json(comments);
    } catch (error) {
        response.status(500).json(error)
    }
}

export const deleteComment = async (request, response) => {
    try {
        const comment = await Comment.deleteOne({ _id: new ObjectId(request.params.id) });
        // await comment.delete()
        console.log('deletecomemnt:::', comment)

        response.status(200).json('comment deleted successfully');
    } catch (error) {
        console.log('deletecomemnt::: error', error)
        response.status(500).json(error)
    }
}

