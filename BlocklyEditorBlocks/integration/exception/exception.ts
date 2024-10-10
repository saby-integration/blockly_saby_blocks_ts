export default [{
  type: 'raise_ext_exception',
  message0: 'Raise %1 %2 Message %3 Detail %4 Dump %5',
  args0: [
    {
      type: 'field_dropdown',
      name: 'type',
      options: [
        [
          'Exception',
          'UserException'
        ],
        [
          'KeyNotFound',
          'UserKeyNotFound'
        ],
        [
          'Unauthorized',
          'Unauthorized'
        ],
        [
          'Cancel',
          'UserCancel'
        ]
      ]
    },
    {
      type: 'input_value',
      name: 'parent'
    },
    {
      type: 'input_value',
      name: 'message',
      align: 'RIGHT'
    },
    {
      type: 'input_value',
      name: 'detail',
      align: 'RIGHT'
    },
    {
      type: 'input_value',
      name: 'dump',
      align: 'RIGHT'
    }
  ],
  inputsInline: false,
  previousStatement: null,
  style: 'procedure_blocks',
  tooltip: 'Вызывает исключение. BlockType: raise_ext_exception',
  helpUrl: 'https://n.sbis.ru/article/integration/1e193a94-c663-4159-8081-f6c5e83e6ba5'
},
  {
    type: 'try',
    message0: 'Try %1 %2 Except %3 %4',
    args0: [
      {
        type: 'input_dummy'
      },
      {
        type: 'input_statement',
        name: 'try'
      },
      {
        type: 'input_dummy'
      },
      {
        type: 'input_statement',
        name: 'except'
      }
    ],
    previousStatement: null,
    nextStatement: null,
    style: 'procedure_blocks',
    tooltip: 'Попытка/исключение. BlockType: try',
    helpUrl: 'https://n.sbis.ru/article/integration/816eee42-d242-48ab-b551-700b8c5de951'
  }];
