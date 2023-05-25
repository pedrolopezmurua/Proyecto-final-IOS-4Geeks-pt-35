from models import db, Proveedor, Categoria, Servicio, ImagenServicio

# Crea 4 proveedores utilizando bulk_save_objects
def insert_proveedor():
    count = 4
    proveedores = []
    for i in range(count):
        proveedor = Proveedor(
            rut=f"12.345.678-{i+1}",
            nombre=f"Proveedor {i+1}",
            apellido=f"Apellido {i+1}",
            region=f"Región {i+1}",
            comuna=f"Comuna {i+1}",
            direccion=f"Dirección {i+1}",
            correo=f"proveedor{i+1}@pascal.com",
            telefono=12345678 + i+1,
            red_social=f"Red social {i+1}",
            contraseña=f"password{i+1}"
        )
        proveedores.append(proveedor)
    db.session.bulk_save_objects(proveedores)
    db.session.commit()
    print(f"{count} proveedores insertados.")

# Crea 2 proveedores y categorías utilizando la función insert_proveedor
def setup_commands(app):
    @app.cli.command("")
    def init_db():
        db.create_all()
        insert_proveedor()

        prov1 = Proveedor.query.get(1)
        prov2 = Proveedor.query.get(2)

        ventas = Categoria(nombre='Ventas')
        servicio = Categoria(nombre='Servicio')
        db.session.add_all([ventas, servicio])
        db.session.commit()

        serv1 = Servicio(
            titulo='Servicio 1',
            detalle='Detalle del servicio 1',
            precio=10000,
            proveedor_id=prov1.id,
            categoria_id=servicio.id,
            region='metropolitana',
            cobertura_servicio='independencia'
        )

        serv2 = Servicio(
            titulo='Servicio 2',
            detalle='Detalle del servicio 2',
            precio=20000,
            proveedor_id=prov2.id,
            categoria_id=servicio.id,
            region='metropolitana',
            cobertura_servicio='Stgo centro'
        )

        serv3 = Servicio(
            titulo='Servicio 3',
            detalle='Detalle del servicio 3',
            precio=30000,
            proveedor_id=prov1.id,
            categoria_id=servicio.id,
            region='metropolitana',
            cobertura_servicio='colina'
        )

        serv4 = Servicio(
            titulo='Servicio 4',
            detalle='Detalle del servicio 4',
            precio=40000,
            proveedor_id=prov2.id,
            categoria_id=ventas.id,
            region='metropolitana',
            cobertura_servicio='vitacura'
        )

        serv5 = Servicio(
            titulo='Servicio 5',
            detalle='Detalle del servicio 5',
            precio=50000,
            proveedor_id=prov1.id,
            categoria_id=ventas.id,
            region='metropolitana',
            cobertura_servicio='nunoa'
        )

        db.session.add_all([serv1, serv2, serv3, serv4, serv5])
        db.session.commit()

        # Inserta 10 imágenes de servicio
        for i in range(1, 11):
            imagen = ImagenServicio(
                secure_url=f'https://www.example.com/image{i}.jpg',
                servicio_id=i
            )
            db.session.add(imagen)
        db.session.commit()

        print('Base de datos inicializada con éxito')
