export default [{
  type: 'ftp_file_open_csv',
  message0: 'Прочитать CSV-файл с FTP %1 Кодировка файла %2 %3 Разделитель значений %4 %5 for %6 in file %7 %8',
  args0: [
    {
      type: 'input_dummy',
      align: 'RIGHT'
    },
    {
      type: 'field_dropdown',
      name: 'ENCODING',
      options: [
        [
          'utf-8',
          'utf-8'
        ],
        [
          'utf-16',
          'utf-16'
        ],
        [
          'cp1251',
          'cp1251'
        ],
        [
          'cp1252',
          'cp1252'
        ],
        [
          'ascii',
          'ascii'
        ]
      ]
    },
    {
      type: 'input_dummy',
      align: 'RIGHT'
    },
    {
      type: 'field_input',
      name: 'DELIMITER',
      text: ';'
    },
    {
      type: 'input_dummy',
      align: 'RIGHT'
    },
    {
      type: 'field_variable',
      name: 'VAR',
      variable: 'line'
    },
    {
      type: 'input_value',
      name: 'FILENAME',
      align: 'RIGHT'
    },
    {
      type: 'input_statement',
      name: 'DO'
    }
  ],
  inputsInline: false,
  previousStatement: 'Array',
  nextStatement: 'Array',
  style: 'FTP',
  tooltip: 'Построчно читает содержимое CSV-файла с FTP сервера. Принимает список файлов, возвращает список строк файла. BlockType: ftp_file_open_csv',
  helpUrl: 'https://n.sbis.ru/article/c30de8ad-b29e-4d01-9e34-9b35a060f8f4'
},
  {
    type: 'ftp_file_open_text',
    message0: 'Прочитать текстовый файл с FTP %1 Кодировка файла %2 %3 for %4 in file %5 %6',
    args0: [
      {
        type: 'input_dummy',
        align: 'RIGHT'
      },
      {
        type: 'field_dropdown',
        name: 'ENCODING',
        options: [
          [
            'utf-8',
            'utf-8'
          ],
          [
            'utf-16',
            'utf-16'
          ],
          [
            'cp1251',
            'cp1251'
          ],
          [
            'cp1252',
            'cp1252'
          ],
          [
            'ascii',
            'ascii'
          ]
        ]
      },
      {
        type: 'input_dummy',
        align: 'RIGHT'
      },
      {
        type: 'field_variable',
        name: 'VAR',
        variable: 'line'
      },
      {
        type: 'input_value',
        name: 'FILENAME',
        align: 'RIGHT'
      },
      {
        type: 'input_statement',
        name: 'DO'
      }
    ],
    inputsInline: false,
    previousStatement: 'Array',
    nextStatement: 'Array',
    style: 'FTP',
    tooltip: 'Построчно читает содержимое csv файла с FTP сервера. Принимает список файлов, возвращает список строк файла. BlockType: ftp_file_open_text',
    helpUrl: 'https://n.sbis.ru/article/b7f4e2d6-20c2-4d56-a70d-5e343c1ac038'
  },
  {
    type: 'ftp_file_open_json',
    lastDummyAlign0: 'RIGHT',
    message0: 'Прочитать JSON-файл с FTP %1 Кодировка файла %2',
    args0: [
      {
        type: 'input_value',
        name: 'FILENAME',
        align: 'RIGHT'
      },
      {
        type: 'field_dropdown',
        name: 'ENCODING',
        options: [
          [
            'utf-8',
            'utf-8'
          ],
          [
            'utf-16',
            'utf-16'
          ],
          [
            'cp1251',
            'cp1251'
          ],
          [
            'cp1252',
            'cp1252'
          ],
          [
            'ascii',
            'ascii'
          ]
        ]
      }
    ],
    inputsInline: false,
    output: null,
    style: 'FTP',
    tooltip: 'Представляет JSON-файл как объект и возвращает объект. В случае ошибки - возвращает None. BlockType: ftp_file_open_json',
    helpUrl: 'https://n.sbis.ru/article/80ae3d41-af3f-433a-8d70-b64198f83a31'
  },
  {
    type: 'ftp_file_list',
    lastDummyAlign0: 'RIGHT',
    message0: 'Получить список файлов на FTP %1 Маска %2 Каталог %3 Сортировка %4',
    args0: [
      {
        type: 'input_dummy',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'FILTER',
        check: 'String',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'ROOT',
        check: 'String',
        align: 'RIGHT'
      },
      {
        type: 'field_dropdown',
        name: 'SORTING',
        options: [
          [
            'По имени',
            'NAME'
          ],
          [
            'Сначала новые',
            'NEW'
          ],
          [
            'Сначала старые',
            'OLD'
          ]
        ]
      }
    ],
    inputsInline: false,
    output: 'Array',
    style: 'FTP',
    tooltip: 'Модуль подключается к FTP и получает список всех файлов. Всегда возвращает список, если файлов нет - вернется пустой список. BlockType: ftp_file_list',
    helpUrl: 'https://n.sbis.ru/article/187b892c-799a-4579-8868-70903c6347c6'
  },
  {
    type: 'excel_rows',
    message0: 'Для каждой %1 листа %2 Excel-файла на FTP %3 %4 Имена полей в 1 строке %5',
    args0: [
      {
        type: 'field_variable',
        name: 'ROW',
        variable: 'row'
      },
      {
        type: 'input_value',
        name: 'SHEET'
      },
      {
        type: 'input_value',
        name: 'FILE',
        align: 'RIGHT'
      },
      {
        type: 'input_statement',
        name: 'DO'
      },
      {
        type: 'field_checkbox',
        name: 'FIRST_ROW_IS_HEADER',
        checked: false
      }
    ],
    previousStatement: null,
    style: 'FTP',
    tooltip: 'Построчно итерируется по указанному листу в Excel-файле. BlockType: excel_rows',
    helpUrl: 'https://n.sbis.ru/article/c0318749-2423-460e-acc6-b6ae77ec6693'
  },
  {
    type: 'excel_sheets',
    message0: 'Получить список листов %1 Excel-файла на FTP %2',
    args0: [
      {
        type: 'input_dummy'
      },
      {
        type: 'input_value',
        name: 'FILE',
        align: 'RIGHT'
      }
    ],
    output: 'Array',
    style: 'FTP',
    tooltip: 'Возвращает список листов Excel-файла. BlockType: excel_sheets',
    helpUrl: 'https://n.sbis.ru/article/acc41d42-1ad0-4cc5-962b-237e91d9ba00'
  },
  {
    type: 'ftp_file_delete',
    message0: 'Удалить файл с FTP %1',
    args0: [
      {
        type: 'input_value',
        name: 'FILEPATH',
        align: 'RIGHT'
      }
    ],
    inputsInline: false,
    output: 'Boolean',
    style: 'FTP',
    tooltip: 'Удаляет указанный файл с FTP сервера. Возвращает true в случае успеха. BlockType: ftp_file_delete',
    helpUrl: 'https://n.sbis.ru/article/3fa9e47a-0079-4ec4-962c-594175574cd1'
  },
  {
    type: 'ftp_file_save',
    lastDummyAlign0: 'RIGHT',
    message0: 'Загрузить файл на FTP %1 Путь к файлу %2 Заменять существующий %3',
    args0: [
      {
        type: 'input_dummy',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'FILEPATH',
        align: 'RIGHT'
      },
      {
        type: 'field_checkbox',
        name: 'REPLACE',
        checked: true
      }
    ],
    inputsInline: false,
    output: 'Boolean',
    style: 'FTP',
    tooltip: 'Модуль подключается к FTP загружает на него указанный файл. Возвращает True в случае успеха. BlockType: ftp_file_save',
    helpUrl: 'https://n.sbis.ru/article/integration/d34a299b-8e75-4c19-bb02-6f5fde49bdd3'
  },
  {
    type: 'ftp_file_move_or_copy',
    message0: 'FTP  %1 файл %2 куда %3',
    args0: [
      {
        type: 'field_dropdown',
        name: 'COPY',
        options: [
          [
            'переместить',
            'FALSE'
          ],
          [
            'скопировать',
            'TRUE'
          ]
        ]
      },
      {
        type: 'input_value',
        name: 'SRC',
        check: 'String',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'DEST',
        check: 'String',
        align: 'RIGHT'
      }
    ],
    inputsInline: false,
    previousStatement: null,
    nextStatement: null,
    style: 'FTP',
    tooltip: 'Модуль подключается к FTP и копирует или перемещает указанный файл. Возвращает True в случае успеха. BlockType: ftp_file_move_or_copy',
    helpUrl: 'https://n.sbis.ru/article/3ad334be-427e-4542-9ead-940147d8dea9'
  },
  {
    type: 'ftp_file_save_csv',
    lastDummyAlign0: 'RIGHT',
    message0: 'Сохранить CSV-файл на FTP %1 Заголовки %2 Данные %3 Разделитель %4',
    args0: [
      {
        type: 'input_value',
        name: 'FILEPATH',
        check: 'String',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'HEADERS',
        check: 'Array',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'DATA',
        check: 'Array',
        align: 'RIGHT'
      },
      {
        type: 'field_dropdown',
        name: 'DELIMITER',
        options: [
          [
            ';',
            'SEMICOLON'
          ],
          [
            ',',
            'COMMA'
          ]
        ]
      }
    ],
    inputsInline: false,
    output: 'Boolean',
    style: 'FTP',
    tooltip: 'Модуль подключается к FTP, создает CSV-файл. Возвращает True в случае успеха. BlockType: ftp_file_save_csv',
    helpUrl: 'https://n.sbis.ru/article/8f915a91-8973-43a4-ac67-a74032a1799e'
  },
  {
    type: 'ftp_file_write',
    message0: 'Записать на FTP файл %1 с содержимым %2',
    args0: [
      {
        type: 'input_value',
        name: 'FILEPATH',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'DATA',
        align: 'RIGHT'
      }
    ],
    inputsInline: false,
    previousStatement: null,
    nextStatement: null,
    style: 'FTP',
    tooltip: 'Модуль подключается к FTP и сохраняет по указанному относительному пути файл. Принимает относительный путь для сохранения и содержимое файла в base64 или идентификатор временного файла. BlockType: ftp_file_write',
    helpUrl: 'https://n.sbis.ru/article/0b5c6d5a-b095-4f42-ab9b-253e451fe2bf'
  },
  {
    type: 'csv_create',
    lastDummyAlign0: 'RIGHT',
    message0: 'Создать CSV-файл %1 Заголовки %2 Данные %3 Разделитель %4',
    args0: [
      {
        type: 'input_dummy',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'HEADERS',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'DATA',
        align: 'RIGHT'
      },
      {
        type: 'field_dropdown',
        name: 'DELIMITER',
        options: [
          [
            ';',
            'SEMICOLON'
          ],
          [
            ',',
            'COMMA'
          ]
        ]
      }
    ],
    inputsInline: false,
    output: null,
    style: 'FTP',
    tooltip: 'Создает CSV-файл и сохраняет его во временное хранилище. Возвращает идентификатор файла во временном хранилище. BlockType: csv_create',
    helpUrl: 'https://n.sbis.ru/article/37e30042-c6c0-4531-b760-263a14e2fe54'
  },
  {
    type: 'send_email',
    message0: 'Отправить email %1 Отправитель %2 Тема %3 Получатели %4 Тело %5 Вложения %6',
    args0: [
      {
        type: 'input_dummy',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'sender',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'subject',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'recipients',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'body',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'attachments',
        align: 'RIGHT'
      }
    ],
    inputsInline: false,
    output: null,
    style: 'FTP',
    tooltip: 'Отправляет email. BlockType: send_email',
    helpUrl: 'https://n.sbis.ru/article/integration/f6660761-4f86-4bd3-867f-25b3155493e7'
  },
  {
    type: 'csv_read',
    lastDummyAlign0: 'RIGHT',
    message0: 'Для каждой %1 CSV-файла %2 %3 Имена полей в 1 строке %4',
    args0: [
      {
        type: 'field_variable',
        name: 'VAR',
        variable: 'row'
      },
      {
        type: 'input_value',
        name: 'FILE',
        align: 'RIGHT'
      },
      {
        type: 'input_statement',
        name: 'DO'
      },
      {
        type: 'field_checkbox',
        name: 'FIRST_ROW_IS_HEADER',
        checked: false
      }
    ],
    previousStatement: null,
    nextStatement: null,
    style: 'FTP',
    tooltip: 'Построчно читает CSV-файл. BlockType: csv_read',
    helpUrl: 'https://n.sbis.ru/article/3348b9b2-1024-406a-8e19-84967314b8af'
  }];
