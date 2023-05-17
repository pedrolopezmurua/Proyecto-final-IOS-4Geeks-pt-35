from flask import Flask
from flask_mail import Mail, Message
import smtplib

app = Flask(__name__)

# Configuración de Flask-Mail
app.config.update(
    MAIL_SERVER='mail.broadcast.cl',
    MAIL_PORT=465,
    MAIL_USERNAME='4geek@broadcast.cl',
    MAIL_PASSWORD='.Jorge1000.',
    MAIL_USE_TLS=False,
    MAIL_USE_SSL=True
)

mail = Mail(app)


@app.route("/sendmail")
def send_mail():
    try:
        msg = Message(
            "Hello",
            sender="4geeks@broadcast.cl",
            recipients=["jorge.s.aymar@gmail.com"]
        )
        msg.body = "This is a test email sent from a Flask app!"
        mail.send(msg)
        return "Mail sent!"
    except smtplib.SMTPException as e:
        app.logger.error('Failed to send mail: %s', str(e))
        return str(e), 500


if __name__ == "__main__":
    app.run(debug=True)
