export default [
  {
    type: 'connection_get_object_types',
    message0: 'Get %1 object types %2 connection index %3',
    args0: [
      {
        type: 'field_dropdown',
        name: 'action',
        options: [
          [
            'import',
            'import'
          ],
          [
            'export',
            'export'
          ]
        ]
      },
      {
        type: 'input_dummy'
      },
      {
        type: 'input_value',
        name: 'connection_index',
        check: 'Number',
        align: 'RIGHT'
      }
    ],
    output: null,
    colour: 230,
    tooltip: 'BlockType: connection_get_object_types',
    helpUrl: ''
  },
  {
    type: 'connector_read_all_objects',
    message0: 'Read all objects %1 connection index %2 object types %3 filter %4',
    args0: [
      {
        type: 'input_dummy'
      },
      {
        type: 'input_value',
        name: 'connection_index',
        check: 'Number',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'obj_types',
        check: 'Array',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'filter',
        align: 'RIGHT'
      }
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: 'BlockType: connector_read_all_objects',
    helpUrl: ''
  },
  {
    type: 'connector_read_all_changed_objects',
    message0: 'Read all changes %1 connection index %2 object types %3 filter %4',
    args0: [
      {
        type: 'input_dummy'
      },
      {
        type: 'input_value',
        name: 'connection_index',
        check: 'Number',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'obj_types',
        check: 'Array',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'filter',
        align: 'RIGHT'
      }
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: 'BlockType: connector_read_all_changed_objects',
    helpUrl: ''
  },
  {
    type: 'connector_update_all_objects',
    message0: 'Update all %1 connection index %2',
    args0: [
      {
        type: 'input_dummy'
      },
      {
        type: 'input_value',
        name: 'connection_index',
        check: 'Number',
        align: 'RIGHT'
      }
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: 'BlockType: connector_update_all_objects',
    helpUrl: ''
  },
  {
    type: 'connector_prepare_export',
    message0: 'Prepare export %1 connection index %2',
    args0: [
      {
        type: 'input_dummy'
      },
      {
        type: 'input_value',
        name: 'connection_index',
        check: 'Number',
        align: 'RIGHT'
      }
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: 'BlockType: connector_prepare_export',
    helpUrl: ''
  },
  {
    type: 'http_connector_exec_method',
    message0: 'http request %1 %2 URL %3 data %4',
    args0: [
      {
        type: 'input_dummy'
      },
      {
        type: 'field_dropdown',
        name: 'method',
        options: [
          [
            'post',
            'post'
          ],
          [
            'get',
            'get'
          ]
        ]
      },
      {
        type: 'input_value',
        name: 'url',
        check: 'String',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'data',
        align: 'RIGHT'
      }
    ],
    output: null,
    colour: 230,
    tooltip: 'BlockType: http_connector_exec_method',
    helpUrl: ''
  },
  {
    type: 'get_ini',
    message0: 'Получить INI %1',
    args0: [
      {
        type: 'input_value',
        name: 'name',
        align: 'RIGHT'
      }
    ],
    inputsInline: false,
    output: null,
    style: 'SABY ЭДО',
    tooltip: 'Получаем содержимое INI. BlockType: get_ini',
    helpUrl: 'https://n.sbis.ru/article/integration/8225fc56-e832-47a8-b8d1-8406e12d354a'
  },
  {
    type: 'extsyncaction',
    message0: 'ExtSyncAction %1 Title %2 Subtitle %3 Status %4 Begin %5 Data %6',
    args0: [
      {
        type: 'input_dummy'
      },
      {
        type: 'input_value',
        name: 'Title',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'Subtitle',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'Status',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'Begin',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'Data',
        align: 'RIGHT'
      }
    ],
    output: null,
    style: 'SABY ЭДО',
    tooltip: 'BlockType: extsyncaction',
    helpUrl: 'https://n.sbis.ru/article/a09ac50b-6cca-4b20-91ea-f9522aa41da9'
  },
  {
    type: 'connection_public_param_update',
    message0: 'Connection update public param %1 value %2',
    args0: [
      {
        type: 'input_value',
        name: 'NAME',
        check: 'String',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'VALUE',
        check: 'String',
        align: 'RIGHT'
      }
    ],
    previousStatement: null,
    nextStatement: null,
    style: 'SABY ЭДО',
    tooltip: 'BlockType: connection_public_param_update',
    helpUrl: 'https://n.sbis.ru/article/integration/ae20aa35-0bbf-48fa-98fd-75a3bc9656fa'
  },
  {
    type: 'connection_public_param_read',
    message0: 'Connection read public param %1',
    args0: [
      {
        type: 'input_value',
        name: 'NAME',
        check: 'String',
        align: 'RIGHT'
      }
    ],
    output: null,
    style: 'SABY ЭДО',
    tooltip: 'BlockType: connection_public_param_read',
    helpUrl: 'https://n.sbis.ru/article/integration/67e629b9-0c53-4034-ba8b-ae48f8ad3699'
  }
];
