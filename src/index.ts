import express, { Request, Response } from 'express';
import dbPromise from "./database";
import { uuid } from 'uuidv4';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/create-user', async (req: Request, res: Response) => {
    
    const { name, password, email, passwordChanged, phoneNum, team, pix } = req.body;
    try {
        const query = `INSERT INTO users (name, password, email, passwordChanged, phoneNum, team, pix) VALUES (?,?,?,?,?,?,?)`;

        const db = await dbPromise;
        db.run(query, [name, password, email, passwordChanged, phoneNum, team, pix], function(err: any) {

            if(err) {
                return res.status(500).json({error: err.message});
            }
            res.status(201).json({'message': 'User created successfully'})
        })


    } catch (error) {
        
      res.send('Hello, TypeScript with Express!');
    }




});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});