from fastapi import FastAPI
from app.routes.feedback import router as feedback_router

app = FastAPI(
    title="Feedback API",
    version="1.0.0",
    description="Простое API для формы обратной связи"
)

app.include_router(feedback_router)
