import express from 'express'

const app = express()
const port = process.env.port || 3000

app.get('/api/:input?', (request, response) => {
  const input = request.params.input;
  let date;

  if (input) {
    date = new Date(input);

    if (isNaN(date.getTime())) {
      const timestamp = parseInt(input, 10);
      date = new Date(timestamp);

      if (isNaN(date.getTime())) {
        response.json({ error: 'Invalid Date' });
        return;
      }
    }
  } else {
    date = new Date();
  }

  response.json({
    unix: date.getTime(),
    utc: date.toUTCString()
  });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
