export default [{
  type: 'c1_attach_attachment',
  message0: 'Прикрепить к документу 1С %1 Файл %2 Название %3',
  args0: [
    {
      type: 'input_value',
      name: 'DOCUMENT',
      align: 'RIGHT'
    },
    {
      type: 'input_value',
      name: 'FILE',
      align: 'RIGHT'
    },
    {
      type: 'input_value',
      name: 'NAME',
      align: 'RIGHT'
    }
  ],
  inputsInline: false,
  previousStatement: null,
  nextStatement: null,
  style: '1С',
  tooltip: 'BlockType: c1_attach_attachment',
  helpUrl: 'https://n.sbis.ru/article/dca6bffe-1e42-4c7f-9101-2f3e45a28d4f'
},
  {
    type: 'c1_clear_table',
    message0: 'Очистить таблицу %1',
    args0: [
      {
        type: 'field_variable',
        name: 'TABLE',
        variable: 'i'
      }
    ],
    inputsInline: false,
    previousStatement: null,
    nextStatement: null,
    style: '1С',
    tooltip: 'BlockType: c1_clear_table',
    helpUrl: 'https://n.sbis.ru/article/f032292b-cdc5-42f6-b54a-11b886592f2f'
  },
  {
    type: 'c1_doc_read_list_print_forms',
    message0: 'Получить список печатных форм документа 1С %1',
    args0: [
      {
        type: 'input_value',
        name: 'DOC'
      }
    ],
    inputsInline: false,
    output: null,
    style: '1С',
    tooltip: 'Возвращает список печатных форм документа. BlockType: c1_doc_read_list_print_forms',
    helpUrl: ''
  },
  {
    type: 'c1_doc_read_print_forms',
    message0: 'По документу 1С %1 получить в pdf печатные формы %2',
    args0: [
      {
        type: 'input_value',
        name: 'DOC'
      },
      {
        type: 'input_value',
        name: 'PRINT_FORMS'
      }
    ],
    inputsInline: false,
    output: null,
    style: '1С',
    tooltip: 'Возвращает список вложений с указанными печатными формами. BlockType: c1_doc_read_print_forms',
    helpUrl: 'https://n.sbis.ru/article/a293071b-9d9b-45bb-a2d8-94a4aeb10a5c'
  },
  {
    type: 'c1_get_uuid',
    message0: 'Получить UUID объекта %1',
    args0: [
      {
        type: 'input_value',
        name: 'REF'
      }
    ],
    inputsInline: false,
    output: null,
    style: '1С',
    tooltip: 'BlockType: c1_get_uuid',
    helpUrl: 'https://n.sbis.ru/article/integration/e8384040-46d8-4485-94ae-0455bf5d96f8'
  },
  {
    type: 'c1_meta_create',
    message0: 'Создать объект метаданых %1 Тип %2',
    args0: [
      {
        type: 'field_dropdown',
        name: 'TYPE',
        options: [
          [
            'Документ',
            'Документ'
          ],
          [
            'Справочник',
            'Справочник'
          ],
          [
            'Перечисление',
            'Перечисление'
          ],
          [
            'Регистр сведений',
            'РегистрСведений'
          ],
          [
            'План видов характеристик',
            'ПланВидовХарактеристик'
          ],
          [
            'Группа справочников',
            'СправочникГруппа'
          ],
          [
            'План видов расчета',
            'ПланВидовРасчета'
          ]
        ]
      },
      {
        type: 'input_value',
        name: 'SUBTYPE'
      }
    ],
    inputsInline: false,
    output: '',
    style: '1С',
    tooltip: 'BlockType: c1_meta_create',
    helpUrl: 'https://n.sbis.ru/article/300448eb-3e5a-4070-bfa7-974879a08705'
  },
  {
    type: 'c1_meta_read',
    message0: 'Получить объект метаданных %1',
    args0: [
      {
        type: 'field_variable',
        name: 'variable',
        variable: null
      }
    ],
    inputsInline: false,
    previousStatement: null,
    nextStatement: null,
    style: '1С',
    tooltip: 'BlockType: c1_meta_read',
    helpUrl: 'https://n.sbis.ru/article/integration/0a64bf68-b6eb-46df-84c2-ead052d5ea2b'
  },
  {
    type: 'c1_meta_update',
    message0: 'Записать объект метаданных %1',
    args0: [
      {
        type: 'field_variable',
        name: 'variable',
        variable: null
      }
    ],
    inputsInline: false,
    previousStatement: null,
    nextStatement: null,
    style: '1С',
    tooltip: 'BlockType: c1_meta_update',
    helpUrl: 'https://n.sbis.ru/article/48768450-bf5d-4f9a-8d9f-24a9b3ed3f13'
  },
  {
    type: 'c1_predefine',
    message0: 'получить список предопределенных значений типа %1',
    args0: [
      {
        type: 'input_value',
        name: 'ИмяИС'
      }
    ],
    inputsInline: true,
    output: null,
    style: '1С',
    tooltip: 'BlockType: c1_predefine',
    helpUrl: 'https://n.sbis.ru/article/c70ff0bc-13be-498a-936d-c1c686d1427f'
  },
  {
    type: 'c1_ref',
    message0: 'Ссылка %1 Тип %2 uuid %3',
    args0: [
      {
        type: 'field_dropdown',
        name: 'TYPE',
        options: [
          [
            'Документ',
            'Документ'
          ],
          [
            'Справочник',
            'Справочник'
          ],
          [
            'Перечисление',
            'Перечисление'
          ],
          [
            'Регистр сведений',
            'РегистрСведений'
          ],
          [
            'План видов расчета',
            'ПланВидовРасчета'
          ]
        ]
      },
      {
        type: 'input_value',
        name: 'SUBTYPE'
      },
      {
        type: 'input_value',
        name: 'UUID'
      }
    ],
    inputsInline: true,
    output: null,
    style: '1С',
    tooltip: 'BlockType: c1_ref',
    helpUrl: 'https://n.sbis.ru/article/a4d22384-d712-41b1-ab0c-b832f94d1260'
  },
  {
    type: 'c1_ref_from_api3',
    message0: 'Получить ссылку из API3 объекта %1',
    args0: [
      {
        type: 'input_value',
        name: 'API3'
      }
    ],
    inputsInline: false,
    output: null,
    style: '1С',
    tooltip: 'BlockType: c1_ref_from_api3',
    helpUrl: 'https://n.sbis.ru/article/f4311917-0184-44d0-b7bf-352c1cc90457'
  },
  {
    type: 'c1_ref_from_id',
    message0: 'Получить ссылку ИмяИС %1 ИдИС %2',
    args0: [
      {
        type: 'input_value',
        name: 'ИмяИС'
      },
      {
        type: 'input_value',
        name: 'ИдИС'
      }
    ],
    inputsInline: true,
    output: null,
    style: '1С',
    tooltip: 'BlockType: c1_ref_from_id',
    helpUrl: 'https://n.sbis.ru/article/integration/75f75fb7-b191-4cf6-a60d-03e42efdf37d'
  },
  {
    type: 'c1_ref_to_obj',
    message0: 'Получить объект из ссылки %1 Тип СБИС %2',
    args0: [
      {
        type: 'input_value',
        name: 'LINK'
      },
      {
        type: 'input_value',
        name: 'SABY_TYPE',
        align: 'RIGHT'
      }
    ],
    inputsInline: false,
    output: null,
    style: '1С',
    tooltip: 'BlockType: c1_ref_to_obj',
    helpUrl: 'https://n.sbis.ru/article/f19f7f45-5dec-4c86-a713-f624179c142e'
  },
  {
    type: 'c1_register_update',
    message0: 'Обновить %1 Тип %2 Отбор %3 Запись %4',
    args0: [
      {
        type: 'field_dropdown',
        name: 'TYPE',
        options: [
          [
            'регистр сведений',
            'РегистрыСведений'
          ],
          [
            'регистр накопления',
            'РегистрыНакопления'
          ]
        ]
      },
      {
        type: 'input_value',
        name: 'SUBTYPE'
      },
      {
        type: 'input_value',
        name: 'select',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'record',
        align: 'RIGHT'
      }
    ],
    inputsInline: false,
    previousStatement: null,
    nextStatement: null,
    style: '1С',
    tooltip: 'Обновить или вставить запись регистра сведений или накопления. BlockType: c1_register_update',
    helpUrl: 'https://n.sbis.ru/article/201e433b-73d7-44a2-a0ee-b1b37bed0699'
  },
  {
    type: 'c1_strip',
    message0: 'Обрезать пробелы %1',
    args0: [
      {
        type: 'input_value',
        name: 'STRING'
      }
    ],
    inputsInline: false,
    output: null,
    style: '1С',
    tooltip: 'BlockType: c1_strip',
    helpUrl: 'https://n.sbis.ru/article/88bbe173-df49-4e82-9919-015805766141'
  },
  {
    type: 'c1_execute',
    message0: 'Выполнить в ИС метод %1 параметр %2',
    args0: [
      {
        type: 'input_value',
        name: 'METHOD'
      },
      {
        type: 'input_value',
        name: 'PARAMS',
        align: 'RIGHT'
      }
    ],
    inputsInline: false,
    output: null,
    style: '1С',
    tooltip: 'BlockType: c1_execute',
    helpUrl: 'https://n.sbis.ru/article/35d68852-355a-4282-a1ce-e8cd1fc5e6be'
  }];
