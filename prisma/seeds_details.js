const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

(async function main() {
    try {
        const explorer1 = await prisma.details.upsert({
            where: { name: "John Smith" },
            update: {},
            create: {
                name: "John Smith",
                lang: "Python",
                missionCommander: "Carlo",
                enrollments: 2,
                hasCertification: true
            }
        });
        const explorer2 = await prisma.details.upsert({
            where: { name: "Juan"},
            update: {},
            create: {
                name: "Juan",
                lang: "Java",
                missionCommander: "other",
                enrollments: 1,
                hasCertification: false
            }      
        });
        console.log("Created 2 explorers");
    }
    catch(e) {
        console.log(e);
        process.exit(1);
    }
    finally {
        await prisma.$disconnect();
    }
})();