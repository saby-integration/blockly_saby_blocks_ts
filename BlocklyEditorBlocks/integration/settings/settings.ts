export default [
  {
    type: 'accordion_item',
    message0: 'Пункт аккордеона %1 id %2 title %3 icon %4 action %5 template %6 show %7 children %8',
    args0: [
      {
        type: 'input_dummy'
      },
      {
        type: 'input_value',
        name: 'id',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'title',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'icon',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'action',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'template',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'show',
        check: 'Boolean',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'children',
        align: 'RIGHT'
      }
    ],
    output: null,
    style: 'Настройки',
    tooltip: 'BlockType: accordion_item',
    helpUrl: 'https://n.sbis.ru/article/2b236674-c1c1-4999-8a73-d7def19961e7'
  },
  {
    type: 'public_param_get',
    message0: 'Получить настройку prop %1 default %2',
    args0: [
      {
        type: 'field_input',
        name: 'PATH',
        text: ''
      },
      {
        type: 'input_value',
        name: 'DEFAULT'
      }
    ],
    inputsInline: false,
    output: null,
    style: 'Настройки',
    tooltip: 'BlockType: public_param_get',
    helpUrl: 'https://n.sbis.ru/article/integration/2d39a79b-6edc-4c9e-97fb-b9318fefd870'
  },
  {
    type: 'obj_action_flat_list_view',
    message0: 'Оформление списка. Плоский список %1 Столбцы %2 Фильтр %3 Команды  %4 Команды контекстного меню %5 Поле с идентификатором записи %6 Размер страницы %7 Форма по умолчанию %8',
    args0: [
      {
        type: 'input_dummy'
      },
      {
        type: 'input_value',
        name: 'Columns',
        check: 'Array',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'Filter',
        check: 'Array',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'Toolbar',
        check: 'Array',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'InlineActions',
        check: 'Array',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'KeyProperty',
        check: 'String',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'Limit',
        check: 'Number',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'Form',
        check: 'String',
        align: 'RIGHT'
      }
    ],
    inputsInline: false,
    output: null,
    style: 'Настройки',
    tooltip: 'BlockType: obj_action_flat_list_view',
    helpUrl: ''
  },
  {
    type: 'obj_action_hierarchical_list_view',
    message0: 'Оформление списка.Иерархический список %1 Столбцы %2 Фильтр %3 Команды %4 Команды контекстного меню %5 Поле с идентификатором записи %6 Размер страницы %7 Форма по умолчанию  %8 Поле с идентификатором родителя %9 Поле с признаком папки %10',
    args0: [
      {
        type: 'input_dummy'
      },
      {
        type: 'input_value',
        name: 'Columns',
        check: 'Array',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'Filter',
        check: 'Array',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'Toolbar',
        check: 'Array',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'InlineActions',
        check: 'Array',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'KeyProperty',
        check: 'String',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'Limit',
        check: 'Number',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'Form',
        check: 'String',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'ParentProperty',
        check: 'String',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'NodeProperty',
        check: 'String',
        align: 'RIGHT'
      }
    ],
    output: null,
    style: 'Настройки',
    tooltip: 'BlockType: obj_action_hierarchical_list_view',
    helpUrl: ''
  },
  {
    type: 'obj_action_tasks_list_view',
    implicitAlign0: 'RIGHT',
    message0: 'Оформление списка.Список задач %1 Тип задач %2',
    args0: [
      {
        type: 'input_dummy'
      },
      {
        type: 'field_dropdown',
        name: 'Type',
        options: [
          [
            'На мне',
            '0'
          ],
          [
            'От меня',
            '1'
          ],
          [
            'Разобрать',
            '2'
          ],
          [
            'Выполненные',
            '3'
          ]
        ]
      }
    ],
    inputsInline: false,
    output: null,
    style: 'Настройки',
    tooltip: 'BlockType: obj_action_tasks_list_view',
    helpUrl: ''
  },
  {
    type: 'obj_action_master_detal_view',
    message0: 'Оформление списка. Список мастер деталя %1 Шаблон мастера %2 Выбранный ключ мастера %3 Шаблон деталя %4',
    args0: [
      {
        type: 'input_dummy'
      },
      {
        type: 'input_value',
        name: 'MasterTemplate',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'SelectedMasterKey',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'DetailTemplate',
        align: 'RIGHT'
      }
    ],
    inputsInline: false,
    output: null,
    style: 'Настройки',
    tooltip: 'BlockType: obj_action_master_detal_view',
    helpUrl: ''
  },
  {
    type: 'obj_action_list_view_date_number_column',
    implicitAlign0: 'RIGHT',
    message0: 'Оформление списка. Столбец дата и номер %1 Ширина %2 Поле заголовка %3 Поле подзаголовок %4 Флаг включения лесенки  %5',
    args0: [
      {
        type: 'input_dummy'
      },
      {
        type: 'input_value',
        name: 'Width',
        check: 'String',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'Title',
        check: 'String',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'Subtitle',
        check: 'String',
        align: 'RIGHT'
      },
      {
        type: 'field_checkbox',
        name: 'IsLadder',
        checked: true
      }
    ],
    inputsInline: false,
    output: null,
    style: 'Настройки',
    tooltip: 'BlockType: obj_action_list_view_date_number_column',
    helpUrl: ''
  },
  {
    type: 'obj_action_list_view_document_column',
    message0: 'Оформление списка. Столбец документ %1 Ширина %2 Поле типа %3 Поле организации %4 Поле заголовка %5 Поле подзаголовка %6 Поле информации %7 Поле активного этапа %8 Поле вложений %9 Поле ошибки %10',
    args0: [
      {
        type: 'input_dummy'
      },
      {
        type: 'input_value',
        name: 'Width',
        check: 'String',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'Type',
        check: 'String',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'Organization',
        check: 'String',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'Title',
        check: 'String',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'Subtitle',
        check: 'String',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'Info',
        check: 'String',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'ActiveStage',
        check: 'String',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'Attachments',
        check: 'String',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'Error',
        check: 'String',
        align: 'RIGHT'
      }
    ],
    inputsInline: false,
    output: null,
    style: 'Настройки',
    tooltip: 'BlockType: obj_action_list_view_document_column',
    helpUrl: ''
  },
  {
    type: 'obj_action_list_view_employee_column',
    message0: 'Оформление списка. Столбец сотрудник %1 Ширина %2 Поле титула %3 Поле титула1 %4 Поле заголовка %5 Поле подзаголовка %6',
    args0: [
      {
        type: 'input_dummy'
      },
      {
        type: 'input_value',
        name: 'Width',
        check: 'String',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'Title',
        check: 'String',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'Title1',
        check: 'String',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'Header',
        check: 'String',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'Subtitle',
        check: 'String',
        align: 'RIGHT'
      }
    ],
    output: null,
    style: 'Настройки',
    tooltip: 'BlockType: obj_action_list_view_employee_column',
    helpUrl: ''
  },
  {
    type: 'obj_action_list_view_icon_column',
    message0: 'Оформление списка. Столбец иконка %1 Библиотека иконок %2 %3 Ширина %4 Поле статуса %5',
    args0: [
      {
        type: 'input_dummy'
      },
      {
        type: 'field_dropdown',
        name: 'IconLib',
        options: [
          [
            'СБИС',
            '1'
          ],
          [
            'ИС',
            '2'
          ]
        ]
      },
      {
        type: 'input_dummy',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'Width',
        check: 'String',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'StatusField',
        check: 'String',
        align: 'RIGHT'
      }
    ],
    inputsInline: false,
    output: null,
    style: 'Настройки',
    tooltip: 'BlockType: obj_action_list_view_icon_column',
    helpUrl: ''
  },
  {
    type: 'obj_action_field_connection_view_filter',
    message0: 'Оформление фильтр. Поле связи %1 Название %2 Заголовок %3 Имя списочной ини %4 Множественный выбор %5 %6 Предустановленное значение %7 Значение после очистки %8 Поле отображения %9 Поле ключа %10',
    args0: [
      {
        type: 'input_dummy'
      },
      {
        type: 'input_value',
        name: 'Name',
        check: 'String',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'Title',
        check: 'String',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'Ini',
        check: 'String',
        align: 'RIGHT'
      },
      {
        type: 'field_checkbox',
        name: 'Multi',
        checked: true
      },
      {
        type: 'input_dummy',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'DefaultValue',
        check: 'String',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'ResetValue',
        check: 'String',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'DisplayProperty',
        check: 'String',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'KeyProperty',
        check: 'String',
        align: 'RIGHT'
      }
    ],
    inputsInline: false,
    output: null,
    style: 'Настройки',
    tooltip: 'BlockType: obj_action_field_connection_view_filter',
    helpUrl: ''
  },
  {
    type: 'obj_action_field_enumeration_view_filter',
    message0: 'Оформление фильтр. Перечисление %1 Название %2 Заголовок %3 Данные %4 Предустановленное значение %5 Значение после очистки %6',
    args0: [
      {
        type: 'input_dummy'
      },
      {
        type: 'input_value',
        name: 'Name',
        check: 'String',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'Title',
        check: 'String',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'Source',
        check: 'Array',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'DefaultValue',
        check: 'String',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'ResetValue',
        check: 'String',
        align: 'RIGHT'
      }
    ],
    inputsInline: false,
    output: null,
    style: 'Настройки',
    tooltip: 'BlockType: obj_action_field_enumeration_view_filter',
    helpUrl: ''
  },
  {
    type: 'obj_action_date_view_filter',
    message0: 'Оформление фильтр. Период %1 Название %2 Заголовок %3 Предустановленное значение %4 Значение после очистки %5',
    args0: [
      {
        type: 'input_dummy'
      },
      {
        type: 'input_value',
        name: 'Name',
        check: 'String',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'Title',
        check: 'String',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'DefaultValue',
        check: 'Array',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'ResetValue',
        check: 'Array',
        align: 'RIGHT'
      }
    ],
    inputsInline: false,
    output: null,
    style: 'Настройки',
    tooltip: 'BlockType: obj_action_date_view_filter',
    helpUrl: ''
  },
  {
    type: 'obj_action_enumeration_with_date_view_filter',
    message0: 'Оформление фильтр. Перечисление с условием на дату %1 Название %2 Заголовок %3 Данные %4 Предустановленное значение %5 Значение после очистки %6',
    args0: [
      {
        type: 'input_dummy'
      },
      {
        type: 'input_value',
        name: 'Name',
        check: 'String',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'Title',
        check: 'String',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'Source',
        check: 'Array',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'DefaultValue',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'ResetValue',
        align: 'RIGHT'
      }
    ],
    inputsInline: false,
    output: null,
    style: 'Настройки',
    tooltip: 'BlockType: obj_action_enumeration_with_date_view_filter',
    helpUrl: ''
  },
  {
    type: 'obj_action_input_string_view_filter',
    message0: 'Оформление фильтр. Фильтр ввода строки %1 Название %2 Заголовок %3 Предустановленное значение %4 Значение после очистки %5',
    args0: [
      {
        type: 'input_dummy'
      },
      {
        type: 'input_value',
        name: 'Name',
        check: 'String',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'Title',
        check: 'String',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'DefaultValue',
        check: 'String',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'ResetValue',
        check: 'String',
        align: 'RIGHT'
      }
    ],
    output: null,
    style: 'Настройки',
    tooltip: 'BlockType: obj_action_input_string_view_filter',
    helpUrl: ''
  },
  {
    type: 'obj_action_input_number_view_filter',
    message0: 'Оформление фильтр. Фильтр ввода числа %1 Название %2 Заголовок %3 Предустановленное значение %4 Значение после очистки %5',
    args0: [
      {
        type: 'input_dummy'
      },
      {
        type: 'input_value',
        name: 'Name',
        check: 'String',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'Title',
        check: 'String',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'DefaultValue',
        check: 'Number',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'ResetValue',
        check: 'Number',
        align: 'RIGHT'
      }
    ],
    output: null,
    style: 'Настройки',
    tooltip: 'BlockType: obj_action_input_number_view_filter',
    helpUrl: ''
  },
  {
    type: 'obj_page_filter_chips',
    message0: 'Оформление фильтр. Чипсы %1 Элементы фильтра %2 Название %3',
    args0: [
      {
        type: 'input_dummy'
      },
      {
        type: 'input_value',
        name: 'Items',
        check: 'Array',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'Name',
        check: 'String',
        align: 'RIGHT'
      }
    ],
    output: null,
    style: 'Настройки',
    tooltip: 'BlockType: obj_page_filter_chips',
    helpUrl: ''
  },
  {
    type: 'obj_action_field_enumeration_source_filter',
    message0: 'Оформление фильтр. Источник данных %1 Ключ  %2 Визуальное представление %3 Дочерние элементы %4',
    args0: [
      {
        type: 'input_dummy'
      },
      {
        type: 'input_value',
        name: 'Key',
        check: 'String',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'DisplayValue',
        check: 'String',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'Children',
        check: 'Array',
        align: 'RIGHT'
      }
    ],
    inputsInline: false,
    output: null,
    style: 'Настройки',
    tooltip: 'BlockType: obj_action_field_enumeration_source_filter',
    helpUrl: ''
  },
  {
    type: 'obj_action_list_view_toolbar',
    message0: 'Тулбар Оформление списка.Команда %1 Имя %2 Заголовок %3 Иконка %4 Кнопка по умолчанию %5 %6 Подсказка %7 Действие %8 Свойство %9 Режим отображения %10',
    args0: [
      {
        type: 'input_dummy'
      },
      {
        type: 'input_value',
        name: 'Name',
        check: 'String',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'Title',
        check: 'String',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'Icon',
        check: 'String',
        align: 'RIGHT'
      },
      {
        type: 'field_checkbox',
        name: 'Default',
        checked: true
      },
      {
        type: 'input_dummy',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'Help',
        check: 'String',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'Action',
        check: 'String',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'Option',
        check: 'String',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'DisplayMode',
        check: 'Array',
        align: 'RIGHT'
      }
    ],
    inputsInline: false,
    output: null,
    style: 'Настройки',
    tooltip: 'BlockType: obj_action_list_view_toolbar',
    helpUrl: 'https://n.sbis.ru/article/5c006bd6-b5bd-4d75-9d55-b8f0d81b7430'
  },
  {
    type: 'obj_action_list_view_toolbar_search',
    message0: 'Оформление списка.Поле поиска',
    output: null,
    style: 'Настройки',
    tooltip: 'Создаёт поле поиска в панели инструментов для списков документов/справочников. BlockType: obj_action_list_view_toolbar_search',
    helpUrl: 'https://n.sbis.ru/article/57fb1401-f988-4928-8a02-f05c33f42dd7'
  },
  {
    type: 'obj_action_list_view_column',
    message0: 'Оформление списка.Столбец %1 Имя %2 Заголовок %3 Тип %4 Данные %5 Иконка %6 Видимость %7 Свойства %8 Загрузить еще %9',
    args0: [
      {
        type: 'input_dummy'
      },
      {
        type: 'input_value',
        name: 'Name',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'Title',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'Type',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'Data',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'RowIcon',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'Visibility',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'Properties',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'More',
        align: 'RIGHT'
      }
    ],
    output: null,
    style: 'Настройки',
    tooltip: 'BlockType: obj_action_list_view_column',
    helpUrl: 'https://n.sbis.ru/article/4097f7e5-16d4-47af-b591-9511983f1a02'
  },
  {
    type: 'obj_action_list_view_filter',
    message0: 'Оформление списка.Фильтр %1 Имя %2 Заголовок %3 Тип поля %4 Тип значения %5 Свойства %6',
    args0: [
      {
        type: 'input_dummy'
      },
      {
        type: 'input_value',
        name: 'Name',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'Title',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'FieldType',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'ValueType',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'Properties',
        align: 'RIGHT'
      }
    ],
    output: null,
    style: 'Настройки',
    tooltip: 'BlockType: obj_action_list_view_filter',
    helpUrl: 'https://n.sbis.ru/article/582c15ad-bad2-4a07-a4e1-80391df0dc29'
  },
  {
    type: 'obj_action_list_view',
    message0: 'Оформление списка %1 Шаблон %2 Количество записей %3 Форма по умолчанию %4 Фильтр %5 Столбцы %6 Команды %7 Команды контекстного меню %8',
    args0: [
      {
        type: 'input_dummy'
      },
      {
        type: 'input_value',
        name: 'Template',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'Limit',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'Form',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'Filter',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'Columns',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'Toolbar',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'InlineActions',
        align: 'RIGHT'
      }
    ],
    output: null,
    style: 'Настройки',
    tooltip: 'BlockType: obj_action_list_view',
    helpUrl: 'https://n.sbis.ru/article/fd20972f-2056-4a11-8917-06c62204409d'
  },
  {
    type: 'view_column_date_number',
    lastDummyAlign0: 'RIGHT',
    message0: 'Оформление. Столбцы. Дата и номер %1 Ширина  %2 %3 Поле даты %4 %5 Поле номера %6 %7 Флаг включения лесенки %8 %9 Выравнивание по горизонтали %10 %11 Видимость %12',
    args0: [
      {
        type: 'input_dummy'
      },
      {
        type: 'field_input',
        name: 'WIDTH',
        text: '10'
      },
      {
        type: 'input_dummy',
        align: 'RIGHT'
      },
      {
        type: 'field_input',
        name: 'DATE_PROPERTY',
        text: 'Дата'
      },
      {
        type: 'input_dummy',
        align: 'RIGHT'
      },
      {
        type: 'field_input',
        name: 'NUMBER_PROPERTY',
        text: 'Номер'
      },
      {
        type: 'input_dummy',
        align: 'RIGHT'
      },
      {
        type: 'field_checkbox',
        name: 'LADDER',
        checked: true
      },
      {
        type: 'input_dummy',
        align: 'RIGHT'
      },
      {
        type: 'field_dropdown',
        name: 'ALIGN',
        options: [
          [
            'right',
            '1'
          ],
          [
            'left',
            '2'
          ],
          [
            'center',
            '3'
          ]
        ]
      },
      {
        type: 'input_dummy',
        align: 'RIGHT'
      },
      {
        type: 'field_checkbox',
        name: 'VISIBILITY',
        checked: true
      }
    ],
    inputsInline: false,
    output: null,
    style: 'Настройки',
    tooltip: '',
    helpUrl: ''
  },
  {
    type: 'view_column_default',
    lastDummyAlign0: 'RIGHT',
    message0: 'Оформление. Столбец. %1 Имя %2 %3 Поле заголовок %4 %5 Тип %6 %7 Поле значения %8 %9 Загрузить еще %10 %11 Видимость %12 %13 Ширина %14 %15 Выравнивание по горизонтали %16',
    args0: [
      {
        type: 'input_dummy'
      },
      {
        type: 'field_input',
        name: 'NAME',
        text: 'Идентификатор'
      },
      {
        type: 'input_dummy',
        align: 'RIGHT'
      },
      {
        type: 'field_input',
        name: 'TITLE',
        text: 'Заголовок'
      },
      {
        type: 'input_dummy',
        align: 'RIGHT'
      },
      {
        type: 'field_input',
        name: 'TYPE',
        text: 'Тип'
      },
      {
        type: 'input_dummy',
        align: 'RIGHT'
      },
      {
        type: 'field_input',
        name: 'PROPERTY',
        text: 'Значение'
      },
      {
        type: 'input_dummy',
        align: 'RIGHT'
      },
      {
        type: 'field_checkbox',
        name: 'MORE_LOAD',
        checked: true
      },
      {
        type: 'input_dummy',
        align: 'RIGHT'
      },
      {
        type: 'field_checkbox',
        name: 'VISIBILITY',
        checked: true
      },
      {
        type: 'input_dummy',
        align: 'RIGHT'
      },
      {
        type: 'field_input',
        name: 'WIDTH',
        text: '10'
      },
      {
        type: 'input_dummy',
        align: 'RIGHT'
      },
      {
        type: 'field_dropdown',
        name: 'ALIGN',
        options: [
          [
            'left',
            '1'
          ],
          [
            'right',
            '2'
          ],
          [
            'center',
            '3'
          ]
        ]
      }
    ],
    inputsInline: false,
    output: null,
    style: 'Настройки',
    tooltip: '',
    helpUrl: ''
  },
  {
    type: 'view_column_document',
    lastDummyAlign0: 'RIGHT',
    message0: 'Оформление. Столбец. Документ КЭДО %1 Поле типа %2 %3 Поле организации %4 %5 Поле ФИО %6 %7 Поле должности %8 %9 Поле информации %10 %11 Поле этапа %12 %13 Поле вложения %14 %15 Видимость %16 %17 Ширина %18',
    args0: [
      {
        type: 'input_dummy'
      },
      {
        type: 'field_input',
        name: 'TYPE_PROPERTY',
        text: 'Тип документ'
      },
      {
        type: 'input_dummy',
        align: 'RIGHT'
      },
      {
        type: 'field_input',
        name: 'ORG_PROPERTY',
        text: 'Организация'
      },
      {
        type: 'input_dummy',
        align: 'RIGHT'
      },
      {
        type: 'field_input',
        name: 'PROPERTY',
        text: 'ФИО'
      },
      {
        type: 'input_dummy',
        align: 'RIGHT'
      },
      {
        type: 'field_input',
        name: 'POSITION_PROPERTY',
        text: 'Должность'
      },
      {
        type: 'input_dummy',
        align: 'RIGHT'
      },
      {
        type: 'field_input',
        name: 'INFO_PROPERTY',
        text: 'Доп Информация'
      },
      {
        type: 'input_dummy',
        align: 'RIGHT'
      },
      {
        type: 'field_input',
        name: 'STAGE_PROPERTY',
        text: 'Название этапа'
      },
      {
        type: 'input_dummy',
        align: 'RIGHT'
      },
      {
        type: 'field_input',
        name: 'ATTACHMENTS_PROPERTY',
        text: 'Вложения'
      },
      {
        type: 'input_dummy',
        align: 'RIGHT'
      },
      {
        type: 'field_checkbox',
        name: 'VISIBILITY',
        checked: true
      },
      {
        type: 'input_dummy',
        align: 'RIGHT'
      },
      {
        type: 'field_input',
        name: 'WIDTH',
        text: '10'
      }
    ],
    inputsInline: false,
    output: null,
    style: 'Настройки',
    tooltip: '',
    helpUrl: ''
  },
  {
    type: 'view_column_icon',
    lastDummyAlign0: 'RIGHT',
    message0: 'Оформление. Столбцы. Иконка %1 Поле со значением иконки %2 %3 Иконки %4 Видимость %5 %6 Ширина %7 %8 Выравнивание %9',
    args0: [
      {
        type: 'input_dummy'
      },
      {
        type: 'field_input',
        name: 'PROPERTY',
        text: 'Иконка'
      },
      {
        type: 'input_dummy',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'NAME',
        check: 'Array',
        align: 'RIGHT'
      },
      {
        type: 'field_checkbox',
        name: 'VISIBILITY',
        checked: true
      },
      {
        type: 'input_dummy',
        align: 'RIGHT'
      },
      {
        type: 'field_input',
        name: 'WIDTH',
        text: '10'
      },
      {
        type: 'input_dummy',
        align: 'RIGHT'
      },
      {
        type: 'field_dropdown',
        name: 'ALIGN',
        options: [
          [
            'left',
            '1'
          ],
          [
            'right',
            '2'
          ],
          [
            'center',
            '3'
          ]
        ]
      }
    ],
    inputsInline: false,
    output: null,
    style: 'Настройки',
    tooltip: '',
    helpUrl: ''
  },
  {
    type: 'view_column_employee',
    lastDummyAlign0: 'RIGHT',
    message0: 'Оформление. Столбец. сотрудник / подразделение %1 Поле организация %2 %3 Поле ФИО  %4 %5 Поле должность %6 %7 Поле телефон %8 %9 Поле департамент %10 %11 Видимость %12 %13 Видимость %14',
    args0: [
      {
        type: 'input_dummy'
      },
      {
        type: 'field_input',
        name: 'ORG_PROPERTY',
        text: 'Организация'
      },
      {
        type: 'input_dummy',
        align: 'RIGHT'
      },
      {
        type: 'field_input',
        name: 'PROPERTY',
        text: 'ФИО'
      },
      {
        type: 'input_dummy',
        align: 'RIGHT'
      },
      {
        type: 'field_input',
        name: 'POSITION_PROPERTY',
        text: 'Должность'
      },
      {
        type: 'input_dummy',
        align: 'RIGHT'
      },
      {
        type: 'field_input',
        name: 'TEL_PROPERTY',
        text: 'Телефон'
      },
      {
        type: 'input_dummy',
        align: 'RIGHT'
      },
      {
        type: 'field_input',
        name: 'DEPARTMENT_PROPERTY',
        text: 'Департамент'
      },
      {
        type: 'input_dummy',
        align: 'RIGHT'
      },
      {
        type: 'field_checkbox',
        name: 'VISIBILITY',
        checked: true
      },
      {
        type: 'input_dummy',
        align: 'RIGHT'
      },
      {
        type: 'field_dropdown',
        name: 'ALIGN',
        options: [
          [
            'left',
            '1'
          ],
          [
            'right',
            '2'
          ],
          [
            'center',
            '3'
          ]
        ]
      }
    ],
    inputsInline: false,
    output: null,
    style: 'Настройки',
    tooltip: '',
    helpUrl: ''
  },
  {
    type: 'view_filter_period',
    lastDummyAlign0: 'RIGHT',
    message0: 'Оформление. Фильтры. Период. %1 Название %2 %3 Заголовок %4 %5 Знач по умолчанию %6',
    args0: [
      {
        type: 'input_dummy'
      },
      {
        type: 'field_input',
        name: 'NAME',
        text: 'Наименование фильтра'
      },
      {
        type: 'input_dummy',
        align: 'RIGHT'
      },
      {
        type: 'field_input',
        name: 'TITLE',
        text: 'Заголовок'
      },
      {
        type: 'input_dummy',
        align: 'RIGHT'
      },
      {
        type: 'field_dropdown',
        name: 'DEFAULT_VALUE',
        options: [
          [
            'за весь период',
            '0'
          ],
          [
            'за сегодня',
            '40'
          ],
          [
            'за последний месяц',
            '30'
          ],
          [
            'за последние полгода',
            '20'
          ],
          [
            'за последний год',
            '10'
          ]
        ]
      }
    ],
    inputsInline: false,
    output: null,
    style: 'Настройки',
    tooltip: '',
    helpUrl: ''
  },
  {
    type: 'view_filter_string',
    lastDummyAlign0: 'RIGHT',
    message0: 'Оформление. Фильтры. Строка %1 Название %2 %3 Заголовок  %4 %5 Значение по умолчанию %6',
    args0: [
      {
        type: 'input_dummy'
      },
      {
        type: 'field_input',
        name: 'NAME',
        text: 'Название'
      },
      {
        type: 'input_dummy',
        align: 'RIGHT'
      },
      {
        type: 'field_input',
        name: 'TITLE',
        text: 'Заголовок'
      },
      {
        type: 'input_dummy',
        align: 'RIGHT'
      },
      {
        type: 'field_input',
        name: 'DEFAULT_VALUE',
        text: ''
      }
    ],
    inputsInline: false,
    output: null,
    style: 'Настройки',
    tooltip: '',
    helpUrl: ''
  },
  {
    type: 'view_filter_link',
    message0: 'Оформление. Фильтр. Поле связи %1 Название %2 %3 Заголовок %4 %5 Настройка %6 %7 Множественный выбор %8 %9 Поле отображения %10 %11 Поле ключа %12 %13 Значение по умолчанию %14',
    args0: [
      {
        type: 'input_dummy'
      },
      {
        type: 'field_input',
        name: 'NAME',
        text: 'Наим фильтра'
      },
      {
        type: 'input_dummy',
        align: 'RIGHT'
      },
      {
        type: 'field_input',
        name: 'TITLE',
        text: 'Заголовок'
      },
      {
        type: 'input_dummy',
        align: 'RIGHT'
      },
      {
        type: 'field_input',
        name: 'ALGORITHM',
        text: 'Название настройки'
      },
      {
        type: 'input_dummy',
        align: 'RIGHT'
      },
      {
        type: 'field_checkbox',
        name: 'MULTI_SELECT',
        checked: true
      },
      {
        type: 'input_dummy',
        align: 'RIGHT'
      },
      {
        type: 'field_input',
        name: 'DISPLAY_PROPERTY',
        text: 'Название'
      },
      {
        type: 'input_dummy',
        align: 'RIGHT'
      },
      {
        type: 'field_input',
        name: 'KEY_PROPERTY',
        text: 'ИдИС'
      },
      {
        type: 'input_dummy',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'DEFAULT_VALUE',
        align: 'RIGHT'
      }
    ],
    inputsInline: false,
    output: null,
    style: 'Настройки',
    tooltip: '',
    helpUrl: ''
  },
  {
    type: 'view_filter_number',
    lastDummyAlign0: 'RIGHT',
    message0: 'Оформление. Фильтры. Число %1 Название %2 %3 Заголовок %4 %5 Значение по умолчанию %6',
    args0: [
      {
        type: 'input_dummy'
      },
      {
        type: 'field_input',
        name: 'NAME',
        text: 'Название фильтра'
      },
      {
        type: 'input_dummy',
        align: 'RIGHT'
      },
      {
        type: 'field_input',
        name: 'TITLE',
        text: 'Заголовок'
      },
      {
        type: 'input_dummy',
        align: 'RIGHT'
      },
      {
        type: 'field_input',
        name: 'DEFAULT_VALUE',
        text: 'Заголовок'
      }
    ],
    inputsInline: false,
    output: null,
    style: 'Настройки',
    tooltip: '',
    helpUrl: ''
  },
  {
    type: 'view_list_flat',
    lastDummyAlign0: 'RIGHT',
    message0: 'Оформление. Списки. Плоский %1 Столбцы %2 Фильтр %3 Команды %4 Поле с идентификатором записи %5 %6 Размер страницы %7 %8 Форма по умолчанию %9',
    args0: [
      {
        type: 'input_dummy'
      },
      {
        type: 'input_value',
        name: 'COLUMNS',
        check: 'Array',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'FILTER',
        check: 'Array',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'TOOLBAR',
        check: 'Array',
        align: 'RIGHT'
      },
      {
        type: 'field_input',
        name: 'KEY_PROPERTY',
        text: 'Ид'
      },
      {
        type: 'input_dummy',
        align: 'RIGHT'
      },
      {
        type: 'field_input',
        name: 'PAGE_SIZE',
        text: '25'
      },
      {
        type: 'input_dummy',
        align: 'RIGHT'
      },
      {
        type: 'field_input',
        name: 'FORM',
        text: ''
      }
    ],
    inputsInline: false,
    output: null,
    style: 'Настройки',
    tooltip: '',
    helpUrl: ''
  },
  {
    type: 'view_list_hierarchical',
    lastDummyAlign0: 'RIGHT',
    message0: 'Оформление. Списки. Иерархический %1 Столбцы %2 Поле с идентификатором родителя %3 %4 Поле с признаком папки %5 %6 Фильтр %7 Команды %8 Поле с идентификатором записи %9 %10 Размер страницы %11 %12 Форма %13',
    args0: [
      {
        type: 'input_dummy'
      },
      {
        type: 'input_value',
        name: 'COLUMNS',
        check: 'Array',
        align: 'RIGHT'
      },
      {
        type: 'field_input',
        name: 'PARENT_PROPERTY',
        text: ''
      },
      {
        type: 'input_dummy',
        align: 'RIGHT'
      },
      {
        type: 'field_input',
        name: 'NODE_PROPERTY',
        text: ''
      },
      {
        type: 'input_dummy',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'FILTER',
        check: 'Array',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'TOOLBAR',
        check: 'Array',
        align: 'RIGHT'
      },
      {
        type: 'field_input',
        name: 'KEY_PROPERTY',
        text: 'Ид'
      },
      {
        type: 'input_dummy',
        align: 'RIGHT'
      },
      {
        type: 'field_input',
        name: 'PAGE_SIZE',
        text: '25'
      },
      {
        type: 'input_dummy',
        align: 'RIGHT'
      },
      {
        type: 'field_input',
        name: 'FORM',
        text: ''
      }
    ],
    inputsInline: false,
    output: null,
    style: 'Настройки',
    tooltip: '',
    helpUrl: ''
  },
  {
    type: 'view_list_tasks',
    lastDummyAlign0: 'RIGHT',
    message0: 'Оформление. Списки. Задачи %1 Тип задач %2',
    args0: [
      {
        type: 'input_dummy'
      },
      {
        type: 'field_dropdown',
        name: 'NAME',
        options: [
          [
            'На мне',
            '0'
          ],
          [
            'От меня',
            '1'
          ],
          [
            'Разобрать',
            '2'
          ],
          [
            'Выполненные',
            '3'
          ]
        ]
      }
    ],
    inputsInline: false,
    output: null,
    style: 'Настройки',
    tooltip: '',
    helpUrl: ''
  },
  {
    type: 'view_list_master_detal',
    lastDummyAlign0: 'RIGHT',
    message0: 'Оформление. Списки. Мастер деталь %1 Шаблон мастера %2 Шаблон деталя %3 Поле фильтра %4',
    args0: [
      {
        type: 'input_dummy'
      },
      {
        type: 'input_value',
        name: 'MASTER_TEMPLATE',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'DETAIL_TEMPLATE',
        align: 'RIGHT'
      },
      {
        type: 'field_input',
        name: 'NAME',
        text: 'Фильтр'
      }
    ],
    inputsInline: false,
    output: null,
    style: 'Настройки',
    tooltip: '',
    helpUrl: ''
  },
  {
    type: 'view_column_document_kedo',
    lastDummyAlign0: 'RIGHT',
    message0: 'Оформление. Столбец. Документ КЭДО %1 Поле типа %2 %3 Поле организации %4 %5 Поле ФИО %6 %7 Поле должности %8 %9 Поле информации %10 %11 Поле этапа %12 %13 Поле вложения %14 %15 Видимость %16 %17 Ширина %18',
    args0: [
      {
        type: 'input_dummy'
      },
      {
        type: 'field_input',
        name: 'TYPE_PROPERTY',
        text: 'Тип документ'
      },
      {
        type: 'input_dummy',
        align: 'RIGHT'
      },
      {
        type: 'field_input',
        name: 'ORG_PROPERTY',
        text: 'Организация'
      },
      {
        type: 'input_dummy',
        align: 'RIGHT'
      },
      {
        type: 'field_input',
        name: 'PROPERTY',
        text: 'ФИО'
      },
      {
        type: 'input_dummy',
        align: 'RIGHT'
      },
      {
        type: 'field_input',
        name: 'POSITION_PROPERTY',
        text: 'Должность'
      },
      {
        type: 'input_dummy',
        align: 'RIGHT'
      },
      {
        type: 'field_input',
        name: 'INFO_PROPERTY',
        text: 'Доп Информация'
      },
      {
        type: 'input_dummy',
        align: 'RIGHT'
      },
      {
        type: 'field_input',
        name: 'STAGE_PROPERTY',
        text: 'Название этапа'
      },
      {
        type: 'input_dummy',
        align: 'RIGHT'
      },
      {
        type: 'field_input',
        name: 'ATTACHMENTS_PROPERTY',
        text: 'Вложения'
      },
      {
        type: 'input_dummy',
        align: 'RIGHT'
      },
      {
        type: 'field_checkbox',
        name: 'VISIBILITY',
        checked: true
      },
      {
        type: 'input_dummy',
        align: 'RIGHT'
      },
      {
        type: 'field_input',
        name: 'WIDTH',
        text: '10'
      }
    ],
    inputsInline: false,
    output: null,
    style: 'Настройки',
    tooltip: '',
    helpUrl: ''
  },
  {
    type: 'view_toolbar_search',
    message0: 'Оформление. Тулбар. Поле поиска',
    inputsInline: false,
    output: null,
    style: 'Настройки',
    tooltip: '',
    helpUrl: ''
  }
];
