"""empty message

Revision ID: 239fd8090636
Revises: 762cc409029a
Create Date: 2023-05-25 21:27:18.785298

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '239fd8090636'
down_revision = '762cc409029a'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('servicio', schema=None) as batch_op:
        batch_op.alter_column('titulo',
               existing_type=sa.VARCHAR(length=200),
               type_=sa.String(length=100),
               existing_nullable=True)
        batch_op.alter_column('detalle',
               existing_type=sa.VARCHAR(length=1000),
               type_=sa.String(length=3000),
               existing_nullable=True)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('servicio', schema=None) as batch_op:
        batch_op.alter_column('detalle',
               existing_type=sa.String(length=3000),
               type_=sa.VARCHAR(length=1000),
               existing_nullable=True)
        batch_op.alter_column('titulo',
               existing_type=sa.String(length=100),
               type_=sa.VARCHAR(length=200),
               existing_nullable=True)

    # ### end Alembic commands ###
