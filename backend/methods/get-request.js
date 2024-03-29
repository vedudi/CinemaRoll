const fs = require('fs');

module.exports = (req, res) => {
    const baseUrl = req.url.substring(0, req.url.lastIndexOf('/'));
    const id = req.url.split("/")[3];

    if (req.url === "/api/movies") {
        res.status = 200;
        res.setHeader("Content-Type", "application/json");
        const movies = fs.readFileSync("./data/movies.json", "utf-8");
        res.end(movies);
    } else if (baseUrl === '/api/movies' && id) {
        let data = fs.readFileSync('./data/movies.json', 'utf-8');
        data=JSON.parse(data)
        const movie = data.movies.find((item) => item.id == id);
      
        if (movie) {
            res.writeHead(200,{"Content-Type":'application/json'})
            res.end(JSON.stringify(movie))
        } else {
            res.writeHead(404,{
                'Content-Type':'application/json'
            })
            res.end(JSON.stringify({message:"not found any film with your id "}))

        }
      
    } else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ title: "not found", message: "Aradığınız film bulunamadı" }));
    }
}
