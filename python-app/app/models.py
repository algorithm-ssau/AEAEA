from pydantic import BaseModel, EmailStr

class Feedback(BaseModel):
    name: str
    phone: str
    email: EmailStr
    subject: str
    message: str
