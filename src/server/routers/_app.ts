import { z } from 'zod';
import { procedure, router } from '../trpc';
import { postRouter } from './post';

export const appRouter = router({
  hello: procedure
    .input(
      z.object({
        text: z.string(),
      }),
    )
    .query((opts) => {
      return {
        greeting: `hello ${opts.input.text} from trpc!!`,
      };
    }),

  post: postRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
