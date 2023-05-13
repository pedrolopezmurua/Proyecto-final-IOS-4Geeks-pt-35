
import click
from api.models import db, User, Proveedor, Categoria, Servicio, ImagenServicio


def setup_commands(app):
    @app.cli.command("insert-test-proveedores")  # name of our command
    @click.argument("count")  # argument of out command
    def insert_test_proveedores(count):
        with app.app_context():
            print("Creando proveedores de prueba")
            for x in range(1, int(count) + 1):
                proveedor = Proveedor()        
                proveedor.rut = "12345678-" + str(x)
                proveedor.nombre = "Proveedor " + str(x)
                proveedor.apellido = "Apellido " + str(x)
                proveedor.region = "Region " + str(x)
                proveedor.comuna = "Comuna " + str(x)
                proveedor.direccion = "Direccion " + str(x)
                proveedor.correo = "proveedor" + str(x) + "@test.com"
                proveedor.telefono = "+569876543210"
                proveedor.red_social = "RedSocial " + str(x)
                proveedor.contrasena = "12345678"
                db.session.add(proveedor)
                db.session.commit()
                print("Proveedor: ", proveedor.nombre, " creado.")
                print("Todos los proveedores de prueba creados")


    @app.cli.command("insert-test-categoria")
    def insert_test_categoria():
        with app.app_context():
            print("Creando categorias de prueba")

        # Define the categories
        categories = ["Ventas", "Servicio Técnico"]

        for name in categories:
            categoria = Categoria()
            categoria.nombre = name
            db.session.add(categoria)
            db.session.commit()
            print("Categoria: ", categoria.nombre, " creada.")

        print("Todas las categorias de prueba creadas")  

    @app.cli.command("insert-test-servicios")
    @click.argument("count")
    def insert_test_servicios(count):
        with app.app_context():
            print("Creando servicios de prueba")

        # Check if there are enough proveedores and categorias in the database
        proveedores = Proveedor.query.all()
        categorias = Categoria.query.filter(Categoria.nombre.in_(["Ventas", "Servicio Técnico"])).all()
        if len(proveedores) < int(count) or len(categorias) < 2:
            print("No hay suficientes proveedores o categorías en la base de datos.")
            return

        for x in range(1, int(count) + 1):
            servicio = Servicio()
            servicio.titulo = "Titulo " + str(x)
            servicio.detalle = "Detalle " + str(x)
            servicio.precio = x * 100
            servicio.proveedor_id = proveedores[x % len(proveedores)].id  # use id of existing proveedor
            servicio.categoria_id = categorias[x % 2].id  # use id of existing categoria (0 or 1)
            servicio.region = "Region " + str(x)
            servicio.cobertura_servicio = "Cobertura " + str(x)
            servicio.estado = True
            db.session.add(servicio)
            db.session.commit()
            print("Servicio: ", servicio.titulo, " creado.")

        print("Todos los servicios de prueba creados")



        @app.cli.command("insert-test-imagen_servicio")
        @click.argument("count")
        def insert_test_imagen_servicio(count):
            with app.app_context():
                print("Creando imagen_servicio de prueba")

            # Check if there are enough servicios in the database
            servicios = Servicio.query.all()
            if len(servicios) < int(count):
                print("No hay suficientes servicios en la base de datos.")
                return

            for x in range(1, int(count) + 1):
                # Create a new ImagenServicio
                imagen_servicio = ImagenServicio()
                imagen_servicio.secure_url = "https://example.com/imagen_servicio_" + str(x) + ".jpg"  # use a proper image url
                imagen_servicio.servicio_id = servicios[x % len(servicios)].id  # use id of existing servicio
                # Add the new ImagenServicio to the database session
                db.session.add(imagen_servicio)
                # Commit the session to insert the new ImagenServicio
                db.session.commit()
                print("ImagenServicio: ", imagen_servicio.secure_url, " creada.")

            print("Todos los imagen_servicio de prueba creados")





    @app.cli.command("insert-test-users")  # name of our command
    @click.argument("count")  # argument of out command
    def insert_test_users(count):
        with app.app_context():
            print("Creating test users")
            for x in range(1, int(count) + 1):
                user = User()
                user.email = "test_user" + str(x) + "@test.com"
                user.password = "123456"
                user.is_active = True
                db.session.add(user)
                db.session.commit()
                print("User: ", user.email, " created.")

            print("All test users created")

