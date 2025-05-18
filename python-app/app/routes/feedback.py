from fastapi import APIRouter
from app.models import Feedback
from app.database import db
from datetime import datetime
import os

router = APIRouter()

collection_name = os.getenv("MONGO_COLLECTION_NAME", "messages")

@router.post("/feedback")
async def submit_feedback(feedback: Feedback):
    data = feedback.dict()
    data["created_at"] = datetime.utcnow()
    await db[collection_name].insert_one(data)
    return {"status": "success", "message": "Спасибо за сообщение!"}
