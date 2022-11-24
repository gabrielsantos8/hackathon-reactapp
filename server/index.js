const path = require('path');

let imagem = "";

const express = require("express");

const multer = require("multer");

var storage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, path.join(__dirname, "imagens"));
    },
    filename: function (req, file, cb) {
        imagem = Date.now() + (path.extname(file.originalname) || ".jpg");
        cb(null, imagem);
    }
})

var upload = multer({ storage });

const jsonServer = require('json-server')

const server = jsonServer.create()

const router =
    jsonServer.router(path.join(__dirname, 'db.json'));

const middlewares = jsonServer.defaults();

server.use(
    jsonServer.rewriter({
        '/api/*': '/$1'
    })
);

server.use('/static', express.static(path.join(__dirname, "imagens")));

server.use(middlewares);
server.use(upload.any());

server.use((req, res, next) => {
    if(req.method == 'PUT') {
        req.body = {
            nome: req.body.nome,
            sobre: req.body.sobre,
            experiencia: req.body.experiencia,
            salarioalvo: req.body.salarioalvo,
            prof_img: req.body.sm ? req.body.prof_img : imagem
        }
    } else {
        req.body = {
            ...req.body, prof_img: imagem
        }
    }
     next();
})

server.use(router)

server.listen(3333, () => {
    console.log('Servidor iniciado!')
})



