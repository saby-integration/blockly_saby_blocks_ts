export default [
  {
    type: 'check_ini_is_loaded',
    message0: 'Проверить доступность ини %1',
    args0: [
      {
        type: 'input_value',
        name: 'ini'
      }
    ],
    previousStatement: null,
    nextStatement: null,
    style: 'SABY ЭДО',
    tooltip: 'BlockType: check_ini_is_loaded',
    helpUrl: ''
  },
  {
    type: 'fed_convert_object_to_xml',
    message0: 'Преобразовать объект %1 в XML формата %2 версия формата %3 подстановкой %4',
    args0: [
      {
        type: 'input_value',
        name: 'data'
      },
      {
        type: 'input_value',
        name: 'format',
        check: 'String',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'version',
        check: 'String',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'pattern',
        check: 'String',
        align: 'RIGHT'
      }
    ],
    output: 'object',
    style: 'SABY ЭДО',
    tooltip: 'BlockType: fed_convert_object_to_xml',
    helpUrl: 'https://n.sbis.ru/article/86322fc6-bc0b-4be8-a78e-7e1395e116ef'
  },
  {
    type: 'fed_convert_xml_to_object',
    message0: 'Преобразовать XML %1 в объект подстановкой %2',
    args0: [
      {
        type: 'input_value',
        name: 'data'
      },
      {
        type: 'input_value',
        name: 'pattern',
        check: 'String',
        align: 'RIGHT'
      }
    ],
    output: 'object',
    style: 'SABY ЭДО',
    tooltip: 'BlockType: fed_convert_xml_to_object',
    helpUrl: 'https://n.sbis.ru/article/3645e37f-2ac1-4df1-a3d0-80bd03461109'
  },
  {
    type: 'extsyncdoc_run',
    message0: 'Выполнить обмен',
    output: 'Boolean',
    style: 'SABY ЭДО',
    tooltip: 'BlockType: extsyncdoc_run',
    helpUrl: 'https://n.sbis.ru/article/9ba934aa-5947-41a6-a9ec-6212c81de874'
  },
  {
    type: 'extsyncdoc_write',
    message0: 'Добавить в обмен %1 %2 объектов %3',
    args0: [
      {
        type: 'input_value',
        name: 'extsyncdoc'
      },
      {
        type: 'field_dropdown',
        name: 'direction',
        options: [
          [
            'import',
            'import'
          ],
          [
            'import api3 obj',
            'import_api3_obj'
          ],
          [
            'import api3 link',
            'import_api3_link'
          ],
          [
            'import raw data',
            'import_raw_data'
          ],
          [
            'export',
            'export'
          ]
        ]
      },
      {
        type: 'input_value',
        name: 'objects',
        check: 'Array',
        align: 'RIGHT'
      }
    ],
    output: 'Boolean',
    style: 'SABY ЭДО',
    tooltip: 'BlockType: extsyncdoc_write',
    helpUrl: 'https://n.sbis.ru/article/800575b2-5aaf-4c10-8fe0-8b7f080bd4ea'
  },
  {
    type: 'extsyncdoc_create',
    implicitAlign0: 'RIGHT',
    message0: 'Создать обмен %1 Data %2 %3',
    args0: [
      {
        type: 'input_dummy'
      },
      {
        type: 'input_value',
        name: 'Data',
        align: 'RIGHT'
      },
      {
        type: 'field_dropdown',
        name: 'Direction',
        options: [
          [
            'Выгрузка из СБИС',
            '0'
          ],
          [
            'Загрузка в СБИС',
            '1'
          ],
          [
            'Выгрузка изменений из СБИС',
            '2'
          ],
          [
            'Загрузка изменений в СБИС',
            '3'
          ],
          [
            'Сверка',
            '5'
          ],
          [
            'Проверка',
            '6'
          ]
        ]
      }
    ],
    inputsInline: false,
    previousStatement: null,
    nextStatement: null,
    style: 'SABY ЭДО',
    tooltip: 'BlockType: extsyncdoc_create',
    helpUrl: 'https://n.sbis.ru/article/07bffb8f-8262-446d-bfb9-e17f53618ded'
  },
  {
    type: 'extsys_find',
    message0: 'Найти id объекта ИС %1 object %2 ini_name %3',
    args0: [
      {
        type: 'input_dummy'
      },
      {
        type: 'input_value',
        name: 'object',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'ini_name',
        align: 'RIGHT'
      }
    ],
    inputsInline: false,
    output: null,
    style: 'SABY ЭДО',
    tooltip: 'BlockType: extsys_find',
    helpUrl: 'https://n.sbis.ru/article/0aff3603-fc82-4e35-9c2f-63ece877f618'
  },
  {
    type: 'extsys_read',
    message0: 'Прочитать объект из ИС %1 object %2 ini_name %3',
    args0: [
      {
        type: 'input_dummy'
      },
      {
        type: 'input_value',
        name: 'object',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'ini_name',
        align: 'RIGHT'
      }
    ],
    inputsInline: false,
    output: null,
    style: 'SABY ЭДО',
    tooltip: 'BlockType: extsys_read',
    helpUrl: 'https://n.sbis.ru/article/488f162d-c8ac-4d99-9b96-b70c18f0b28c'
  },
  {
    type: 'extsys_query',
    message0: 'Получить список объектов из ИС %1 filter %2 limit %3 offset %4 ini_name %5',
    args0: [
      {
        type: 'input_dummy'
      },
      {
        type: 'input_value',
        name: 'filter',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'limit',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'offset',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'ini_name',
        align: 'RIGHT'
      }
    ],
    inputsInline: false,
    output: null,
    style: 'SABY ЭДО',
    tooltip: 'BlockType: extsys_query',
    helpUrl: 'https://n.sbis.ru/article/1735d820-bd12-4f4a-ad38-73507d845e37'
  },
  {
    type: 'extsys_update',
    message0: 'Обновить объект в ИС %1 object %2 ini_name %3',
    args0: [
      {
        type: 'input_dummy'
      },
      {
        type: 'input_value',
        name: 'object',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'ini_name',
        align: 'RIGHT'
      }
    ],
    inputsInline: false,
    output: null,
    style: 'SABY ЭДО',
    tooltip: 'BlockType: extsys_update',
    helpUrl: 'https://n.sbis.ru/article/1df2b8c8-20f7-46b0-b566-6255e9c82869'
  },
  {
    type: 'extsys_update_status',
    message0: 'Обновить статус %1',
    args0: [
      {
        type: 'input_value',
        name: 'NAME'
      }
    ],
    previousStatement: null,
    nextStatement: null,
    style: 'SABY ЭДО',
    tooltip: 'BlockType: extsys_update_status',
    helpUrl: ''
  },
  {
    type: 'extsys_update_status2',
    message0: 'Обновить статус в ИС %1 Внешний идентификатор %2 Активный этап %3 Код состояния ЭДО %4 ИмяИС %5 ИдИС %6 Идентификатор СБИС %7',
    args0: [
      {
        type: 'input_dummy'
      },
      {
        type: 'input_value',
        name: 'UID',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'ACTIVE_STAGE',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'STATE_CODE',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'ИмяИС',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'ИдИС',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'SbisID',
        align: 'RIGHT'
      }
    ],
    previousStatement: null,
    nextStatement: null,
    style: 'SABY ЭДО',
    tooltip: 'BlockType: extsys_update_status2',
    helpUrl: 'https://n.sbis.ru/article/5e1028b1-cefa-49b7-8807-b5a40093b008'
  },
  {
    type: 'extsys_print_form_list',
    message0: 'Список печатных форм объекта %1',
    args0: [
      {
        type: 'input_value',
        name: 'API3',
        align: 'RIGHT'
      }
    ],
    inputsInline: false,
    output: null,
    style: 'SABY ЭДО',
    tooltip: 'BlockType: extsys_print_form_list',
    helpUrl: 'https://n.sbis.ru/article/64129844-1219-4a63-90d2-12e588da4aaa'
  },
  {
    type: 'pickup_ini',
    message0: 'Подобрать ini %1 type %2 id %3 raw data %4',
    args0: [
      {
        type: 'input_dummy'
      },
      {
        type: 'input_value',
        name: 'TYPE',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'ID',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'RAW_DATA',
        align: 'RIGHT'
      }
    ],
    inputsInline: false,
    output: null,
    style: 'SABY ЭДО',
    tooltip: 'BlockType: pickup_ini',
    helpUrl: ''
  },
  {
    type: 'saby_download_from_link',
    message0: 'Скачать ссылку %1',
    args0: [
      {
        type: 'input_value',
        name: 'link'
      }
    ],
    output: null,
    style: 'SABY ЭДО',
    tooltip: 'BlockType: saby_download_from_link',
    helpUrl: 'https://n.sbis.ru/article/b5e02acf-bec1-4bcd-9c06-4f4b0ca167a1'
  },
  {
    type: 'saby_edo_start',
    message0: 'Запустить в документооборот %1',
    args0: [
      {
        type: 'input_value',
        name: 'doc'
      }
    ],
    output: null,
    style: 'SABY ЭДО',
    tooltip: 'BlockType: saby_edo_start',
    helpUrl: 'https://n.sbis.ru/article/d4f0d638-6d92-4a92-bd82-640a4b7cf228'
  },
  {
    type: 'saby_extsyncobj_list',
    message0: 'for %1 in exchange %2 %3',
    args0: [
      {
        type: 'field_variable',
        name: 'VAR',
        variable: 'object'
      },
      {
        type: 'input_dummy'
      },
      {
        type: 'input_statement',
        name: 'DO'
      }
    ],
    inputsInline: false,
    previousStatement: null,
    nextStatement: null,
    style: 'SABY ЭДО',
    tooltip: 'BlockType: saby_extsyncobj_list',
    helpUrl: 'https://n.sbis.ru/article/dba85697-fc09-40d6-8724-e2526713ba7c'
  },
  {
    type: 'saby_find',
    message0: 'Найти id объекта СБИС %1 type %2 object %3',
    args0: [
      {
        type: 'input_dummy'
      },
      {
        type: 'input_value',
        name: 'type',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'object',
        align: 'RIGHT'
      }
    ],
    inputsInline: false,
    output: null,
    style: 'SABY ЭДО',
    tooltip: 'BlockType: saby_find',
    helpUrl: 'https://n.sbis.ru/article/6a820081-ba42-4a14-a0e8-3857f988bcc7'
  },
  {
    type: 'saby_read',
    message0: 'Прочитать объект из СБИС %1 type %2 id %3',
    args0: [
      {
        type: 'input_dummy'
      },
      {
        type: 'input_value',
        name: 'type',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'id',
        align: 'RIGHT'
      }
    ],
    inputsInline: false,
    output: null,
    style: 'SABY ЭДО',
    tooltip: 'BlockType: saby_read',
    helpUrl: 'https://n.sbis.ru/article/daf03ede-c381-4910-b27f-b4b742ba4803'
  },
  {
    type: 'saby_read_changes',
    message0: 'for %1 in new SABY events %2 %3',
    args0: [
      {
        type: 'field_variable',
        name: 'VAR',
        variable: 'event'
      },
      {
        type: 'input_dummy'
      },
      {
        type: 'input_statement',
        name: 'DO'
      }
    ],
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    style: 'SABY ЭДО',
    tooltip: 'BlockType: saby_read_changes',
    helpUrl: 'https://n.sbis.ru/article/c9337c01-1789-4de0-a7e7-32e396f5c5ed'
  },
  {
    type: 'saby_read_document',
    message0: 'Прочитать документ СБИС %1',
    args0: [
      {
        type: 'input_value',
        name: 'doc'
      }
    ],
    output: null,
    style: 'SABY ЭДО',
    tooltip: 'BlockType: saby_read_document',
    helpUrl: 'https://n.sbis.ru/article/c124386d-c9ee-43e4-91b2-7fdc062dfa8b'
  },
  {
    type: 'saby',
    message0: 'Saby выполнить %1 Параметры %2',
    args0: [
      {
        type: 'input_value',
        name: 'METHOD',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'PARAMS',
        align: 'RIGHT'
      }
    ],
    inputsInline: false,
    output: null,
    style: 'SABY ЭДО',
    tooltip: 'Вызывает метод Saby API. BlockType: saby',
    helpUrl: 'https://n.sbis.ru/article/91e22c0e-920a-4b3c-ac40-96bb1509744e'
  },
  {
    type: 'saby_edo_list',
    message0: 'Saby получить список %1 Фильтр %2 Навигация %3',
    args0: [
      {
        type: 'input_value',
        name: 'METHOD',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'FILTER',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'NAVIGATION',
        align: 'RIGHT'
      }
    ],
    inputsInline: false,
    output: null,
    style: 'SABY ЭДО',
    tooltip: 'Вызывает списочный метод SABY ЭДО. BlockType: saby_edo_list',
    helpUrl: 'https://n.sbis.ru/article/c5abb678-0280-444e-89fd-416e92e67691'
  },
  {
    type: 'saby_query',
    message0: 'Получить список объектов из СБИС %1 type %2 filter %3 limit %4 offset %5',
    args0: [
      {
        type: 'input_dummy'
      },
      {
        type: 'input_value',
        name: 'type',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'filter',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'limit',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'offset',
        align: 'RIGHT'
      }
    ],
    inputsInline: false,
    output: null,
    style: 'SABY ЭДО',
    tooltip: 'BlockType: saby_query',
    helpUrl: 'https://n.sbis.ru/article/806ac959-ac76-49d9-a704-8b29997e3acb'
  },
  {
    type: 'saby_task_list',
    message0: 'for %1 in my SABY task %2 %3',
    args0: [
      {
        type: 'field_variable',
        name: 'VAR',
        variable: 'task'
      },
      {
        type: 'input_dummy'
      },
      {
        type: 'input_statement',
        name: 'DO'
      }
    ],
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    style: 'SABY ЭДО',
    tooltip: 'BlockType: saby_task_list',
    helpUrl: 'https://n.sbis.ru/article/27bc79f9-1fd6-46e1-8078-8c8d5886f978'
  },
  {
    type: 'saby_update',
    message0: 'Обновить объект в СБИС %1 type %2 object %3',
    args0: [
      {
        type: 'input_dummy'
      },
      {
        type: 'input_value',
        name: 'type',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'object',
        align: 'RIGHT'
      }
    ],
    inputsInline: false,
    output: null,
    style: 'SABY ЭДО',
    tooltip: 'BlockType: saby_update',
    helpUrl: 'https://n.sbis.ru/article/c3433bdd-bf8a-403a-b28d-75dfbb07d497'
  },
  {
    type: 'saby_upload_files',
    message0: 'Загрузить на СБИС Диск %1',
    args0: [
      {
        type: 'input_value',
        name: 'doc'
      }
    ],
    output: null,
    style: 'SABY ЭДО',
    tooltip: 'BlockType: saby_upload_files',
    helpUrl: 'https://n.sbis.ru/article/330937a2-a17c-4ceb-af0a-1ad59fd3ee3f'
  },
  {
    type: 'saby_write_document',
    message0: 'Записать документ СБИС %1',
    args0: [
      {
        type: 'input_value',
        name: 'doc'
      }
    ],
    output: null,
    style: 'SABY ЭДО',
    tooltip: 'BlockType: saby_write_document',
    helpUrl: 'https://n.sbis.ru/article/aca10a3f-3ec0-4771-9a39-6973d5c2a6d3'
  },
  {
    type: 'test_read_saby_object',
    lastDummyAlign0: 'RIGHT',
    message0: 'Получить объект СБИС %1 тип %2 по ключу %3 %4 Значение ключа %5 %6 %7',
    args0: [
      {
        type: 'input_dummy'
      },
      {
        type: 'field_input',
        name: 'type',
        text: ''
      },
      {
        type: 'field_dropdown',
        name: 'Key',
        options: [
          [
            '1',
            '1'
          ],
          [
            '2',
            '2'
          ],
          [
            '3',
            '3'
          ],
          [
            'Название',
            'Название'
          ]
        ]
      },
      {
        type: 'input_dummy'
      },
      {
        type: 'field_input',
        name: 'value1',
        text: ''
      },
      {
        type: 'field_input',
        name: 'value2',
        text: ''
      },
      {
        type: 'field_input',
        name: 'value3',
        text: ''
      }
    ],
    inputsInline: false,
    output: null,
    style: 'Тестирование',
    tooltip: 'Будет найден идентификатор и сделана подготовка к выгрузке этого объекта. BlockType: test_read_saby_object',
    helpUrl: 'https://n.sbis.ru/article/08d1cfb8-2e5a-4592-ab6d-36fa15c65e2d'
  },
  {
    type: 'workspace_props',
    message0: 'WORKSPACE META %1 System %2 %3 Subsystem %4 %5 Subsystem version %6 %7  API object type %8 %9 System object type %10 %11 Operation %12 %13 Quality %14 %15 File version %16',
    args0: [
      {
        type: 'input_dummy'
      },
      {
        type: 'field_input',
        name: 'system',
        text: ''
      },
      {
        type: 'input_dummy'
      },
      {
        type: 'field_input',
        name: 'subsystem',
        text: ''
      },
      {
        type: 'input_dummy'
      },
      {
        type: 'field_input',
        name: 'subsystem_version',
        text: ''
      },
      {
        type: 'input_dummy'
      },
      {
        type: 'field_input',
        name: 'api_object_type',
        text: ''
      },
      {
        type: 'input_dummy'
      },
      {
        type: 'field_input',
        name: 'system_object_type',
        text: ''
      },
      {
        type: 'input_dummy'
      },
      {
        type: 'field_dropdown',
        name: 'operation',
        options: [
          [
            'read',
            'read'
          ],
          [
            'query',
            'query'
          ],
          [
            'find',
            'find'
          ],
          [
            'update',
            'update'
          ],
          [
            'changes',
            'changes'
          ],
          [
            'event',
            'event'
          ]
        ]
      },
      {
        type: 'input_dummy'
      },
      {
        type: 'field_dropdown',
        name: 'quality',
        options: [
          [
            'origin',
            'origin'
          ],
          [
            'raw',
            'raw'
          ],
          [
            'claning',
            'cleaning'
          ]
        ]
      },
      {
        type: 'input_dummy'
      },
      {
        type: 'field_input',
        name: 'ini_version',
        text: ''
      }
    ],
    style: 'SABY ЭДО',
    tooltip: 'BlockType: workspace_props',
    helpUrl: ''
  },
  {
    type: 'controls_forEach2',
    message0: 'for each %1 in list %2 %3',
    args0: [
      {
        type: 'field_variable',
        name: 'VAR',
        variable: 'item'
      },
      {
        type: 'input_value',
        name: 'LIST'
      },
      {
        type: 'input_statement',
        name: 'DO'
      }
    ],
    inputsInline: false,
    previousStatement: null,
    nextStatement: null,
    style: 'loop_blocks',
    tooltip: 'BlockType: controls_forEach2',
    helpUrl: 'https://n.sbis.ru/article/c1898a27-3e14-454d-8b24-2b5588cb70f7'
  },
  {
    type: 'controls_forEachAsync',
    message0: 'Async for each %1 in list %2 %3',
    args0: [
      {
        type: 'field_variable',
        name: 'VAR',
        variable: 'item'
      },
      {
        type: 'input_value',
        name: 'LIST'
      },
      {
        type: 'input_statement',
        name: 'DO'
      }
    ],
    inputsInline: false,
    previousStatement: null,
    nextStatement: null,
    style: 'loop_blocks',
    tooltip: 'Цикл асинхронного мультипоточного выполнения. BlockType: controls_forEachAsync',
    helpUrl: 'https://n.sbis.ru/article/f74a34b5-d3e9-42f7-ab57-2db3d53b91d8'
  },
  {
    type: 'accounting_entries_list',
    message0: 'Для %1 из списка проводок %2 Фильтр %3 %4',
    args0: [
      {
        type: 'field_variable',
        name: 'var',
        variable: 'Документ'
      },
      {
        type: 'input_dummy'
      },
      {
        type: 'input_value',
        name: 'filter',
        align: 'RIGHT'
      },
      {
        type: 'input_statement',
        name: 'do'
      }
    ],
    inputsInline: false,
    previousStatement: null,
    nextStatement: null,
    style: 'SABY ЭДО',
    tooltip: 'BlockType: accounting_entries_list',
    helpUrl: ''
  },
  {
    type: 'indicator_from_accounting_entry_side',
    message0: 'Получить показатель по проводке %1 Сторона проводки %2 Показатели источника %3 Показатели приемника %4 Черный список детализаций %5 Черный список счетов %6',
    args0: [
      {
        type: 'input_dummy'
      },
      {
        type: 'input_value',
        name: 'accounting_entry_side',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'indicator_list_src',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'indicator_list_dest',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'blacklist_detalization',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'blacklist_accounts',
        align: 'RIGHT'
      }
    ],
    inputsInline: false,
    output: null,
    style: 'SABY ЭДО',
    tooltip: 'BlockType: indicator_from_accounting_entry_side',
    helpUrl: ''
  },
  {
    type: 'uuid4',
    message0: 'Получить новый UUID',
    inputsInline: false,
    output: null,
    style: 'text_blocks',
    tooltip: 'BlockType: uuid4',
    helpUrl: 'https://n.sbis.ru/article/f86f3d81-c74a-4f1c-a69e-3de9285592d0'
  },
  {
    type: 'obj_prop_get2',
    message0: 'get %1 prop %2',
    args0: [
      {
        type: 'field_variable',
        name: 'VAR',
        variable: 'item'
      },
      {
        type: 'input_value',
        name: 'PATH'
      }
    ],
    inputsInline: false,
    output: null,
    style: 'Структуры',
    tooltip: 'BlockType: obj_prop_get2',
    helpUrl: 'https://n.sbis.ru/article/7459cc0f-5e0d-4843-8901-815b65071d35'
  },
  {
    type: 'obj_prop_set2',
    message0: 'set %1 prop %2 value %3',
    args0: [
      {
        type: 'field_variable',
        name: 'VAR',
        variable: 'item'
      },
      {
        type: 'input_value',
        name: 'PATH'
      },
      {
        type: 'input_value',
        name: 'VALUE'
      }
    ],
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    style: 'Структуры',
    tooltip: 'BlockType: obj_prop_set2',
    helpUrl: 'https://n.sbis.ru/article/5e823eea-a77e-45f0-a59c-baa8ecec4d6b'
  },
  {
    type: 'saby_convert_files_to_pdf',
    message0: 'Сконвертировать в PDF/A %1',
    args0: [
      {
        type: 'input_value',
        name: 'doc'
      }
    ],
    output: null,
    style: 'SABY ЭДО',
    tooltip: 'BlockType: saby_convert_files_to_pdf',
    helpUrl: 'https://n.sbis.ru/article/408e3cd5-ae07-4086-8497-21daaec1cbe2'
  },
  {
    type: 'authorization',
    message0: 'Авторизация %1 URL %2 Пользователь %3 Пароль %4',
    args0: [
      {
        type: 'input_dummy'
      },
      {
        type: 'input_value',
        name: 'host',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'login',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'password',
        align: 'RIGHT'
      }
    ],
    inputsInline: false,
    previousStatement: null,
    nextStatement: null,
    style: 'SABY ЭДО',
    tooltip: 'BlockType: authorization',
    helpUrl: ''
  },
  {
    type: 'c1_read_changes',
    message0: 'Получить изменения ИС',
    output: null,
    style: 'SABY ЭДО',
    tooltip: 'Получить ссылка на измененные объекты по узлу плана обмена. BlockType: c1_read_changes',
    helpUrl: 'https://n.sbis.ru/saby-integration/knowledge?article=ad99beb7-8f86-486f-b8cf-68183c4387d0'
  },
  {
    type: 'extsys_read_changes',
    message0: 'Добавить изменения ИС в обмен',
    previousStatement: null,
    nextStatement: null,
    style: 'SABY ЭДО',
    tooltip: 'BlockType: extsys_read_changes',
    helpUrl: 'https://n.sbis.ru/article/ad99beb7-8f86-486f-b8cf-68183c4387d0'
  },
  {
    type: 'extsyncdoc_fillchangedsbisobjects',
    message0: 'Добавить изменения SABY в обмен',
    previousStatement: null,
    nextStatement: null,
    style: 'SABY ЭДО',
    tooltip: 'BlockType: extsyncdoc_fillchangedsbisobjects',
    helpUrl: 'https://n.sbis.ru/article/1988a0eb-d8ac-4c37-86c4-1854f75b2c4d'
  },
  {
    type: 'invite_user',
    message0: 'Пригласить пользователя в СБИС %1 Способ отправки %2 %3 Сервис %4 %5 ИдСБИС частного лица %6 Почта %7 Телефон %8',
    args0: [
      {
        type: 'input_dummy'
      },
      {
        type: 'field_dropdown',
        name: 'TransportType',
        options: [
          [
            'Из настроек',
            'ПоУмолчанию'
          ],
          [
            'Email',
            'Email'
          ],
          [
            'SMS',
            'SMS'
          ],
          [
            'WhatsApp',
            'WhatsApp'
          ],
          [
            'Telegram',
            'Telegram'
          ]
        ]
      },
      {
        type: 'input_dummy',
        align: 'RIGHT'
      },
      {
        type: 'field_dropdown',
        name: 'Application',
        options: [
          [
            'Из настроек',
            'ПоУмолчанию'
          ],
          [
            'online.sbis.ru',
            'online.sbis.ru'
          ],
          [
            'my.sbis.ru',
            'my.sbis.ru'
          ],
          [
            'staff.sbis.ru',
            'staff.sbis.ru'
          ]
        ]
      },
      {
        type: 'input_dummy',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'FaceId',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'Email',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'Phone',
        align: 'RIGHT'
      }
    ],
    output: null,
    style: 'SABY ЭДО',
    tooltip: 'BlockType: invite_user',
    helpUrl: 'https://n.sbis.ru/article/0c8c9fdf-5497-40da-9ca3-d6dc098edbbc'
  },
  {
    type: 'document_list',
    message0: 'Для каждого %1 из списка документов %2 Фильтр %3 %4',
    args0: [
      {
        type: 'field_variable',
        name: 'NAME',
        variable: 'item'
      },
      {
        type: 'input_dummy'
      },
      {
        type: 'input_value',
        name: 'filter',
        align: 'RIGHT'
      },
      {
        type: 'input_statement',
        name: 'action'
      }
    ],
    previousStatement: null,
    nextStatement: null,
    style: 'SABY ЭДО',
    tooltip: 'BlockType: document_list',
    helpUrl: 'https://n.sbis.ru/article/integration/bb456907-ad27-4ed4-85fa-e873e6f44f7e'
  },
  {
    type: 'document_event_list',
    message0: 'Для каждого %1 из списка документов по событиям %2 Фильтр %3 %4',
    args0: [
      {
        type: 'field_variable',
        name: 'NAME',
        variable: 'item'
      },
      {
        type: 'input_dummy'
      },
      {
        type: 'input_value',
        name: 'filter',
        align: 'RIGHT'
      },
      {
        type: 'input_statement',
        name: 'action'
      }
    ],
    previousStatement: null,
    nextStatement: null,
    style: 'SABY ЭДО',
    tooltip: 'BlockType: document_event_list',
    helpUrl: 'https://n.sbis.ru/article/integration/9764ee65-a737-46e9-adbb-2c0f5efe9ba8'
  },
  {
    type: 'accounting_entries_list2',
    message0: 'Для %1 из списка проводок 2 %2 Выгружать проводки %3 %4 Неизвестные как БухСправки %5 %6 Фильтр %7 Показатели источника %8 Показатели приемника %9 Черный список детализаций %10 Черный список счетов %11 %12',
    args0: [
      {
        type: 'field_variable',
        name: 'var',
        variable: 'Документ'
      },
      {
        type: 'input_dummy'
      },
      {
        type: 'field_checkbox',
        name: 'UNLOADING_TRANSACTIONS',
        checked: false
      },
      {
        type: 'input_dummy'
      },
      {
        type: 'field_checkbox',
        name: 'UNKNOWN_AS_ACCOUNTING_CERTIFICATES',
        checked: true
      },
      {
        type: 'input_dummy'
      },
      {
        type: 'input_value',
        name: 'filter',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'indicator_list_src',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'indicator_list_dest',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'blacklist_detalization',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'blacklist_accounts',
        align: 'RIGHT'
      },
      {
        type: 'input_statement',
        name: 'do'
      }
    ],
    inputsInline: false,
    previousStatement: null,
    nextStatement: null,
    style: 'SABY ЭДО',
    tooltip: 'Получает проводки по заданному фильтру, группирует их по документам-регистраторам и для каждого документа с проводками выполняет вложенные в данный блок действия. Использует механизм MultiThreadLoop. BlockType: accounting_entries_list2',
    helpUrl: 'https://n.sbis.ru/article/bdbe2626-66bb-4892-b956-cb69a53c5266'
  },
  {
    type: 'object_get_attachments',
    message0: 'Получить прикрепленные файлы %1 к объекту %2 с именами %3 измененные после %4 Получать двоичные данные %5',
    args0: [
      {
        type: 'input_dummy'
      },
      {
        type: 'input_value',
        name: 'OBJECT',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'NAMES',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'CHANGED_AFTER',
        align: 'RIGHT'
      },
      {
        type: 'field_checkbox',
        name: 'RECEIVING_BINARY_DATA',
        checked: false
      }
    ],
    inputsInline: false,
    output: null,
    style: 'SABY ЭДО',
    tooltip: 'Возвращает массив прикрепленных файлов к объекту. BlockType: object_get_attachments',
    helpUrl: 'https://n.sbis.ru/article/38f45b27-4c3d-4c87-ae92-64a24b9492d8'
  },
  {
    type: 'object_get_attachments_EDO',
    message0: 'Получить документы ЭДО %1 по объекту %2 с именами %3 измененные после %4 Получать двоичные данные %5',
    args0: [
      {
        type: 'input_dummy'
      },
      {
        type: 'input_value',
        name: 'OBJECT',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'NAMES',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'CHANGED_AFTER',
        align: 'RIGHT'
      },
      {
        type: 'field_checkbox',
        name: 'RECEIVING_BINARY_DATA',
        checked: false
      }
    ],
    inputsInline: false,
    output: null,
    style: 'SABY ЭДО',
    tooltip: 'Возвращает массив документов ЭДО по объекту. BlockType: object_get_attachments_EDO',
    helpUrl: 'https://n.sbis.ru/article/95582b4d-903b-405e-a707-944732016ea8'
  }
];
