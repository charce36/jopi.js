import React from 'react'
import { Badge } from '@oneloop/badge'
import { Checkbox } from '@oneloop/checkbox'
import { Image } from '@oneloop/image'
import { Table } from '.'
import { Text } from '@oneloop/text'

export default {
  component: Table,
  title: 'Table',
}
/*
export const normal = () => (
  <Table>
    <Table.Header>
      <Table.HeaderItem>Agency</Table.HeaderItem>
      <Table.HeaderItem>Country</Table.HeaderItem>
      <Table.HeaderItem>Paid</Table.HeaderItem>
    </Table.Header>
    <Table.Rows>
      <Table.Row>
        <Table.RowItem>InmoMex</Table.RowItem>
        <Table.RowItem>Mexico</Table.RowItem>
        <Table.RowItem>Yes</Table.RowItem>
      </Table.Row>
      <Table.Row>
        <Table.RowItem>RGM</Table.RowItem>
        <Table.RowItem>Argentina</Table.RowItem>
        <Table.RowItem>Yes</Table.RowItem>
      </Table.Row>
      <Table.Row>
        <Table.RowItem>Urbania</Table.RowItem>
        <Table.RowItem>Peru</Table.RowItem>
        <Table.RowItem>Yes</Table.RowItem>
      </Table.Row>
    </Table.Rows>
  </Table>
)*/

// Tengo que agregar la funcionalidad de que al seleccionar el primer checkbox, 
// seleccione o deseleccione a todos los demas
export const normal = () => (
  <div style={{ background: '#F3F6F8', padding: '20px', borderRadius: '10px' }}>
    <Table>
      <Table.Header>
        <Table.HeaderItem>
          <Checkbox />
        </Table.HeaderItem>
        <Table.HeaderItem>
          <Text variant="bodyBold.fontSize12">Foto</Text>
        </Table.HeaderItem>
        <Table.HeaderItem>
          <Text variant="bodyBold.fontSize12">Cód. Ref</Text>
        </Table.HeaderItem>
        <Table.HeaderItem>
          <Text variant="bodyBold.fontSize12">Dirección</Text>
          <Text variant="body.fontSize11">Ubicación</Text>
        </Table.HeaderItem>
        <Table.HeaderItem>
          <Text variant="bodyBold.fontSize12">Valor</Text>
        </Table.HeaderItem>
        <Table.HeaderItem>
          <Text variant="bodyBold.fontSize12">Dorm</Text>
          <Text variant="body.fontSize11">Baños</Text>
        </Table.HeaderItem>
        <Table.HeaderItem>
          <Text variant="bodyBold.fontSize12">S. Cubierta</Text>
          <Text variant="body.fontSize11">Total</Text>
        </Table.HeaderItem>
        <Table.HeaderItem>
          <Text variant="bodyBold.fontSize12">Fondo</Text>
          <Text variant="body.fontSize11">Frente</Text>
        </Table.HeaderItem>
        <Table.HeaderItem>
          <Text variant="bodyBold.fontSize12">S. Descrub</Text>
          <Text variant="body.fontSize11">S. Descrub</Text>
        </Table.HeaderItem>
      </Table.Header>
      <Table.Rows>
        <Table.Row>
          <Table.RowItem>
            <Checkbox />
          </Table.RowItem>
          <Table.RowItem>
            <Image
              src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              variant="rows"
            />
          </Table.RowItem>
          <Table.RowItem>
            <Text variant="body.fontSize12">IHO4362866</Text>
          </Table.RowItem>
          <Table.RowItem>
            <Text variant={["bodyBold.fontSize12", "ellipsis"]} width='150px'>Av. Libertador 5687 5to A - Lote 1232</Text>
            <Text variant="body.fontSize11">Departamento en Palermo</Text>
          </Table.RowItem>
          <Table.RowItem>
            <Text variant="bodyBold.fontSize12">Venta</Text>
            <Text variant="body.fontSize11">USD 200.000</Text>
          </Table.RowItem>
          <Table.RowItem>
            <Text variant="body.fontSize12">2 Dorm</Text>
            <Text variant="body.fontSize11">2 Baños</Text>
          </Table.RowItem>
          <Table.RowItem>
            <Text variant="body.fontSize12">87m° Cub</Text>
            <Text variant="body.fontSize11">0m° Tot</Text>
          </Table.RowItem>
          <Table.RowItem>
            <Text variant="body.fontSize12">3 Amb</Text>
            <Text variant="body.fontSize11">0.00</Text>
          </Table.RowItem>
          <Table.RowItem>
            <Text variant="body.fontSize12">120m° Semi</Text>
            <Text variant="body.fontSize11">0m° Total</Text>
          </Table.RowItem>
        </Table.Row>
        <Table.Row disabled>
          <Table.RowItem>
            <Checkbox />
          </Table.RowItem>
          <Table.RowItem>
            <Image
              src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              variant="rows"
              textBadge="Enviada"
            />
          </Table.RowItem>
          <Table.RowItem>
            <Text variant="body.fontSize12">IHO4362866</Text>
          </Table.RowItem>
          <Table.RowItem>
            <Text variant="bodyBold.fontSize12">Av. Libertador 5687 5to A</Text>
            <Text variant="body.fontSize11">Departamento en Palermo</Text>
          </Table.RowItem>
          <Table.RowItem>
            <Text variant="bodyBold.fontSize12">Venta</Text>
            <Text variant="body.fontSize11">USD 200.000</Text>
          </Table.RowItem>
          <Table.RowItem>
            <Text variant="body.fontSize12">2 Dorm</Text>
            <Text variant="body.fontSize11">2 Baños</Text>
          </Table.RowItem>
          <Table.RowItem>
            <Text variant="body.fontSize12">87m° Cub</Text>
            <Text variant="body.fontSize11">0m° Tot</Text>
          </Table.RowItem>
          <Table.RowItem>
            <Text variant="body.fontSize12">3 Amb</Text>
            <Text variant="body.fontSize11">0.00</Text>
          </Table.RowItem>
          <Table.RowItem>
            <Text variant="body.fontSize12">120m° Semi</Text>
            <Text variant="body.fontSize11">0m° Total</Text>
          </Table.RowItem>
        </Table.Row>
        <Table.Row>
          <Table.RowItem>
            <Checkbox />
          </Table.RowItem>
          <Table.RowItem>
            <Image
              src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              variant="rows"
            />
          </Table.RowItem>
          <Table.RowItem>
            <Text variant="body.fontSize12">IHO4362866</Text>
            <Text variant="body.fontSize11">AP4468985</Text>
          </Table.RowItem>
          <Table.RowItem>
            <Text variant="bodyBold.fontSize12">Av. Libertador 5687 5to A</Text>
            <Text variant="body.fontSize11">Departamento en Palermo</Text>
          </Table.RowItem>
          <Table.RowItem>
            <Text variant="bodyBold.fontSize12">Venta</Text>
            <Text variant="body.fontSize11">USD 200.000</Text>
          </Table.RowItem>
          <Table.RowItem>
            <Text variant="body.fontSize12">2 Dorm</Text>
            <Text variant="body.fontSize11">2 Baños</Text>
          </Table.RowItem>
          <Table.RowItem>
            <Text variant="body.fontSize12">87m° Cub</Text>
            <Text variant="body.fontSize11">0m° Tot</Text>
          </Table.RowItem>
          <Table.RowItem>
            <Text variant="body.fontSize12">3 Amb</Text>
            <Text variant="body.fontSize11">0.00</Text>
          </Table.RowItem>
          <Table.RowItem>
            <Badge variant="badgeTips">COHIM</Badge>
            <Text variant="body.fontSize11">0m° Total</Text>
          </Table.RowItem>
        </Table.Row>
      </Table.Rows>
    </Table>
  </div>
)

export const groupContacts = () => (
  <div style={{ background: '#F3F6F8', padding: '20px', borderRadius: '10px' }}>
    <Table>
      <Table.Header>
        <Table.HeaderItem>
          <Text variant="bodyBold.fontSize12">Contacto</Text>
        </Table.HeaderItem>
        <Table.HeaderItem>
          <Text variant="bodyBold.fontSize12">Celular</Text>
          <Text variant="body.fontSize11">Mail</Text>
        </Table.HeaderItem>
        <Table.HeaderItem>
          <Text variant="bodyBold.fontSize12">Agente</Text>
        </Table.HeaderItem>
        <Table.HeaderItem>
          <Text variant="bodyBold.fontSize12">Estado</Text>
        </Table.HeaderItem>
        <Table.HeaderItem>
          <Text variant="bodyBold.fontSize12">Num 1</Text>
        </Table.HeaderItem>
        <Table.HeaderItem>
          <Text variant="bodyBold.fontSize12">Num 2</Text>
        </Table.HeaderItem>
        <Table.HeaderItem>
          <Text variant="bodyBold.fontSize12">Fecha</Text>
          <Text variant="body.fontSize11">Hora</Text>
        </Table.HeaderItem>
      </Table.Header>
      <Table.Rows>
        <Table.Row>
          <Table.RowItem>
            <Text variant="body.fontSize12">Nombre Contacto</Text>
          </Table.RowItem>
          <Table.RowItem>
            <Text variant="body.fontSize12">Cel: +54 911 30196212</Text>
            <Text variant="body.fontSize11">garavaglia.juana@navent.con</Text>
          </Table.RowItem>
          <Table.RowItem>
            <Text variant="body.fontSize12">Nombre Agente</Text>
          </Table.RowItem>
          <Table.RowItem>
            <Badge variant="badgeInfo" isMedium hasIcon>
              <span>SE</span>
            </Badge>
          </Table.RowItem>
          <Table.RowItem>
            <Text variant="body.fontSize12">15</Text>
          </Table.RowItem>
          <Table.RowItem>
            <Text variant="body.fontSize12">8</Text>
          </Table.RowItem>
          <Table.RowItem>
            <Text variant="body.fontSize12">30-06-2022</Text>
            <Text variant="body.fontSize11">15:50</Text>
          </Table.RowItem>
        </Table.Row>
        <Table.Row>
          <Table.RowItem>
            <Text variant="body.fontSize12">Nombre Contacto</Text>
          </Table.RowItem>
          <Table.RowItem>
            <Text variant="body.fontSize12">Cel: +54 911 30196212</Text>
            <Text variant="body.fontSize11">garavaglia.juana@navent.con</Text>
          </Table.RowItem>
          <Table.RowItem>
            <Text variant="body.fontSize12">Nombre Agente</Text>
          </Table.RowItem>
          <Table.RowItem>
            <Badge variant="badgeInfo" isMedium hasIcon>
              <span>SE</span>
            </Badge>
          </Table.RowItem>
          <Table.RowItem>
            <Text variant="body.fontSize12">15</Text>
          </Table.RowItem>
          <Table.RowItem>
            <Text variant="body.fontSize12">8</Text>
          </Table.RowItem>
          <Table.RowItem>
            <Text variant="body.fontSize12">30-06-2022</Text>
            <Text variant="body.fontSize11">15:50</Text>
          </Table.RowItem>
        </Table.Row>
      </Table.Rows>
    </Table>
  </div>
)
