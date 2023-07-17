import z from 'zod';

export const CommentSchema = z.object({
  name: z.string().nonempty(),
  email: z.string().email(),
  movie_id: z.string().nonempty(),
  text: z.string().nonempty(),
});
