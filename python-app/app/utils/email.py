import aiosmtplib
from email.message import EmailMessage
from os import getenv

async def send_feedback_email(name, email, phone, subject, message):
    content = f"""
📨 Новое сообщение с формы обратной связи:

👤 Имя: {name}
📧 Email: {email}
📞 Телефон: {phone}
📝 Тема: {subject}
💬 Сообщение:
{message}
"""

    msg = EmailMessage()
    msg["From"] = getenv("SMTP_USER")
    msg["To"] = getenv("RECEIVER_EMAIL")
    msg["Subject"] = f"💌 Обратная связь: {subject}"
    msg.set_content(content)

    await aiosmtplib.send(
        msg,
        hostname=getenv("SMTP_HOST"),
        port=int(getenv("SMTP_PORT")),
        username=getenv("SMTP_USER"),
        password=getenv("SMTP_PASSWORD"),
        start_tls=True
    )
