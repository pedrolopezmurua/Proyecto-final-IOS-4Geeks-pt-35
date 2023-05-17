import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

# Configuraciones
mail_content = 'Hello, this is a simple email from Python.'
sender_address = 'jorge.s.aymar@gmail.com'
sender_password = 'Jorge1000.'
receiver_address = 'jorge.s.aymar@@gmail.com'

# Configuración del mensaje
message = MIMEMultipart()
message['From'] = sender_address
message['To'] = receiver_address
message['Subject'] = 'Test mail from Python'

# Cuerpo del mensaje
message.attach(MIMEText(mail_content, 'plain'))

# Sesión SMTP
session = smtplib.SMTP('smtp.gmail.com', 587)

session.starttls()  # Habilitar seguridad
# Login con credenciales de correo
session.login(sender_address, sender_password)
text = message.as_string()

session.sendmail(sender_address, receiver_address, text)
session.quit()

print('Mail sent.')
