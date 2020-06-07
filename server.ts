import { Application } from 'https://deno.land/x/oak/mod.ts';

import routes from './routes/index.ts';

const port = 8000;
const app = new Application();

app.use(routes.home.allowedMethods());
app.use(routes.home.routes());

app.addEventListener('listen', () => {
	console.log(`Listening on http://localhost:${port}...`);
});

await app.listen({ port });
