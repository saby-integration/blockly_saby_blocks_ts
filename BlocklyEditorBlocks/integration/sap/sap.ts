export default [
  {
    type: 'sap_ref_to',
    message0: 'ref to %1',
    args0: [
      {
        type: 'field_input',
        name: 'path',
        text: ''
      }
    ],
    output: null,
    style: 'SAP',
    tooltip: 'BlockType: sap_ref_to',
    helpUrl: 'https://n.sbis.ru/article/ee564b95-00b2-422a-9d4f-ec71e6d67ea4'
  },
  {
    type: 'sap_assign',
    message0: 'assign %1 set %2',
    args0: [
      {
        type: 'field_input',
        name: 'NAME',
        text: ''
      },
      {
        type: 'input_value',
        name: 'VALUE'
      }
    ],
    inputsInline: false,
    previousStatement: null,
    nextStatement: null,
    style: 'SAP',
    tooltip: 'BlockType: sap_assign',
    helpUrl: 'https://n.sbis.ru/article/d08b770b-4963-47b8-94f1-81f6d68beb9e'
  },
  {
    type: 'sap_range_to_string',
    message0: 'range to string %1',
    args0: [
      {
        type: 'input_value',
        name: 'RANGE'
      }
    ],
    output: null,
    style: 'SAP',
    tooltip: 'BlockType: sap_range_to_string',
    helpUrl: 'https://n.sbis.ru/article/591670df-d70b-4213-a74d-186bdf1ffdc8'
  },
  {
    type: 'get_global_var',
    message0: 'get global var %1',
    args0: [
      {
        type: 'input_value',
        name: 'NAME'
      }
    ],
    output: null,
    style: 'SAP',
    tooltip: 'BlockType: get_global_var',
    helpUrl: 'https://n.sbis.ru/article/b87067f0-226b-4549-99de-e0704aa22bfd'
  },
  {
    type: 'sap_group_by',
    message0: 'Группировка %1  по признаку %2 в %3',
    args0: [
      {
        type: 'field_variable',
        name: 'table',
        variable: 'таблицы'
      },
      {
        type: 'field_input',
        name: 'param',
        text: 'default'
      },
      {
        type: 'input_value',
        name: 'value'
      }
    ],
    inputsInline: false,
    output: null,
    style: 'SAP',
    tooltip: 'BlockType: sap_group_by',
    helpUrl: 'https://n.sbis.ru/article/fc430dbe-fc47-4256-9511-a7739244691b'
  }
];
