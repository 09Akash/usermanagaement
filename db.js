// db.js
import { connect } from 'mongoose';


const dbURI = 'mongodb://akashkadukar202:<db_password>@undefined/?replicaSet=atlas-vftlbh-shard-0&ssl=true&authSource=admin';


const connectDB = async () => {
    try {
        await connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1); // Exit the process with failure
    }
};

export default connectDB;
