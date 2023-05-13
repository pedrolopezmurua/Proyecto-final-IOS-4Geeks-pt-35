from sqlalchemy import ForeignKey
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class Proveedor(db.Model):
    _tablename_ = 'proveedor'
    id = db.Column(db.Integer, primary_key=True, nullable=False)
    rut = db.Column(db.String(20), nullable=False)
    nombre = db.Column(db.String(50), nullable=False)
    apellido = db.Column(db.String(100), nullable=False)
    region = db.Column(db.String(100), nullable=False)
    comuna = db.Column(db.String(100), nullable=False)
    direccion = db.Column(db.String(200), nullable=False)
    correo = db.Column(db.String(100), nullable=False)
    telefono = db.Column(db.Integer, nullable=False)
    red_social = db.Column(db.String(100), nullable=True)
    contraseña = db.Column(db.String(8), nullable=False)

    def serialize(self):
        return {
            'id': self.id,
            'rut': self.rut,
            'nombre': self.nombre,
            'apellido': self.apellido,
            'region': self.region,
            'comuna': self.comuna,
            'direccion': self.direccion,
            'correo': self.correo,
            'telefono': self.telefono,
            'red_social': self.red_social
        }


class Categoria(db.Model):
    _tablename_ = 'categoria'
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(50), nullable=False)

    def serialize(self):
        return {
            'id': self.id,
            'nombre': self.nombre
        }


class Servicio(db.Model):
    _tablename_ = 'servicio'
    id = db.Column(db.Integer, primary_key=True, nullable=False)
    titulo = db.Column(db.String(200))
    detalle = db.Column(db.String(1000))
    precio = db.Column(db.Integer, nullable=False)
    proveedor_id = db.Column(db.Integer, ForeignKey(
        'proveedor.id'), nullable=False)
    categoria_id = db.Column(db.Integer, ForeignKey(
        'categoria.id'), nullable=False)
    cobertura = db.Column(db.String(1000))
    estado = db.Column(db.Boolean, default=True)
    proveedor = db.relationship('Proveedor', backref='servicios')
    categoria = db.relationship('Categoria', backref='servicios')

    def serialize(self):
        return {
            'id': self.id,
            'titulo': self.titulo,
            'detalle': self.detalle,
            'precio': self.precio,
            'proveedor_id': self.proveedor_id,
            'categoria_id': self.categoria_id,
            'cobertura': self.cobertura,
            'estado': self.estado,
            'proveedor': self.proveedor.serialize()
        }


class ImagenServicio(db.Model):
    _tablename_ = 'imagen_servicio'
    id = db.Column(db.Integer, primary_key=True, nullable=False)
    secure_url = db.Column(db.String(400), nullable=False)
    servicio_id = db.Column(db.Integer, ForeignKey(
        'servicio.id'), nullable=False)
    servicio = db.relationship('Servicio', backref='imagenes_servicio')

    def serialize(self):
        return {
            'id': self.id,
            'secure_url': self.secure_url,
            'servicio_id': self.servicio_id
        }


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def repr(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }