const express = require("express");
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

app.get("/", (req, res) => {
    res.json({message: "alive"});
});

// Endpoints for the Explorer model

app.get("/explorers", async (req, res) => {
    const allExplorers = await prisma.explorer.findMany({});
    res.json(allExplorers);
});

app.get("/explorers/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const explorer = await prisma.explorer.findUnique(
        {where: {id: id}}
    );
    res.json(explorer);
});

app.post("/explorers", async (req, res) => {
    const explorer = {
        name: req.body.name,
        username: req.body.username,
        mission: req.body.mission
    };

    const msg = "Explorer creado";
    await prisma.explorer.create({data: explorer});
    
    return res.json({msg});
});

app.put("/explorers/:id", async (req, res) => {
    const id = parseInt(req.params.id);

    await prisma.explorer.update(
        {
            where: {
                id: id
            },
            data: {
                mission: req.body.mission
            }
        }
    );

    res.json({message: "Actualizado correctamente"});
});

app.delete("/explorers/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    await prisma.explorer.delete({
        where: {id: id}
    });
    return res.json({message: "Explorer eliminado correctamente"});
});

// Endpoints for the Details model

app.get("/details", async (req, res) => {
    const explorerDetails = await prisma.details.findMany({});
    res.json(explorerDetails);
});

/*
Crea un endpoint DELETE para eliminar un registro
*/
app.get("/details/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const explorer = await prisma.details.findUnique({
        where: {id: id}
    });
    res.json(explorer);
});

app.post("/details", async(req, res) => {
    const explorer = {
        name: req.body.name,
        lang: req.body.lang,
        missionCommander: req.body.missionCommander
    };

    const msg = "Explorer creado";
    await prisma.details.create({data: explorer});
    
    return res.json({msg});
});

app.put("/details/:id", async(req, res) => {
    const id = parseInt(req.params.id);

    await prisma.details.update({
        where: {
            id: id
        },
        data: {
            lang: req.body.lang
        }
    });
    res.json({message: "Updated explorer details"});
});

app.delete("/details/:id", async(req, res) => {
    const id = parseInt(req.params.id);

    await prisma.details.delete({
        where: {id: id}
    });
    res.json({message: "Deleted entry"});
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});