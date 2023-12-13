import mongoose from 'mongoose';

const StorageSchema = new mongoose.Schema(
    {
        url: {
            type: String
        },
        filename: {
            type: String
        }
    },
    {
        timestamps: true, //TODO: createAt, updatedAt
        versionKey: false
    }
)

const storageModel = mongoose.model("Storages", StorageSchema);

export default storageModel;