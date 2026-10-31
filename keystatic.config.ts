import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: {
      owner: 'Mikelomadrid',
      name: 'mi_web_prueba',
    },
  },
  collections: {
    productos: collection({
      label: 'Productos',
      slugField: 'nombre',
      path: 'src/content/productos/*',
      format: { contentField: 'descripcion' },
      schema: {
        nombre: fields.slug({
          name: { label: 'Nombre del producto' },
        }),
        descripcion: fields.markdoc({
          label: 'Descripción',
        }),
      },
    }),
  },
});
