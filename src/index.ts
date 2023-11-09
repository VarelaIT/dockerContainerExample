import Express from 'express';

const app= Express();
const port= 8080;
let answer: string = '<h1>This app is my first containerize app, thanks to Docker.</h1>';

app.get('/', (req, resp)=>{
    resp.send(answer);
})

app.listen(port, () => {
    console.log(`Server up en running in port ${port}.`);
});
