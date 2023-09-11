import envVar from 'env-var';

import { app } from './app';

const port: number = envVar.get('PORT').default('8080').asInt()
app.listen(port, () => {
  console.info(`API server started on port ${port}`)
})
