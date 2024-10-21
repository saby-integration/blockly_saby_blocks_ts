export default [{
    type: 'format',
    message0: 'format %1 %2 %3',
    args0: [
        {
            type: 'field_dropdown',
            name: 'type',
            options: [
                [
                    'to date',
                    'to_date'
                ],
                [
                    'from date',
                    'from_date'
                ],
                [
                    'to number',
                    'to_number'
                ],
                [
                    'to string',
                    'to_string'
                ]
            ]
        },
        {
            type: 'field_input',
            name: 'template',
            text: ''
        },
        {
            type: 'input_value',
            name: 'value'
        }
    ],
    output: null,
    style: 'text_blocks',
    tooltip: 'BlockType: format',
    helpUrl: 'https://n.sbis.ru/article/58b3e174-66e3-4693-9d68-15fcb16f735c'
},
    {
        type: 'get_current_datetime',
        message0: 'Получить текущую дату',
        output: null,
        style: 'text_blocks',
        tooltip: 'BlockType: get_current_datetime',
        helpUrl: 'https://n.sbis.ru/article/e5bacb48-3b7e-425b-90aa-99582b9bd6d7'
    },
    {
        type: 'list_obj_find',
        message0: 'find obj in list %1 by prop %2 = %3',
        args0: [
            {
                type: 'field_variable',
                name: 'VAR',
                variable: null
            },
            {
                type: 'field_input',
                name: 'PROP',
                text: ''
            },
            {
                type: 'input_value',
                name: 'VALUE'
            }
        ],
        inputsInline: false,
        output: null,
        style: 'Структуры',
        tooltip: 'BlockType: list_obj_find',
        helpUrl: 'https://n.sbis.ru/article/95b25d78-964c-462f-a001-5dfbb722c826'
    },
    {
        type: 'list_obj_sort',
        message0: 'sort list obj %1 by prop %2 %3',
        args0: [
            {
                type: 'field_variable',
                name: 'VAR',
                variable: null
            },
            {
                type: 'field_input',
                name: 'PROP',
                text: ''
            },
            {
                type: 'field_dropdown',
                name: 'ORDER',
                options: [
                    [
                        'acsending',
                        'ASC'
                    ],
                    [
                        'descending',
                        'DESC'
                    ]
                ]
            }
        ],
        inputsInline: false,
        previousStatement: null,
        nextStatement: null,
        style: 'Структуры',
        tooltip: 'BlockType: list_obj_sort',
        helpUrl: 'https://n.sbis.ru/article/bf2e3428-0687-43e9-b1a1-a5b7c80c29a2'
    },
    {
        type: 'obj_prop_append',
        message0: 'set %1 prop %2 append %3',
        args0: [
            {
                type: 'field_variable',
                name: 'VAR',
                variable: 'item'
            },
            {
                type: 'field_input',
                name: 'PATH',
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
        style: 'Структуры',
        tooltip: 'BlockType: obj_prop_append',
        helpUrl: 'https://n.sbis.ru/article/baf81f6d-a54e-4073-b46d-3e094ebe3e72'
    },
    {
        type: 'obj_prop_get',
        message0: 'get %1 prop %2 default %3',
        args0: [
            {
                type: 'field_variable',
                name: 'VAR',
                variable: 'item'
            },
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
        style: 'Структуры',
        tooltip: 'BlockType: obj_prop_get',
        helpUrl: 'https://n.sbis.ru/article/d2ce6861-9a86-454e-8e4b-9bf7b9655ed6'
    },
    {
        type: 'obj_prop_set',
        message0: 'set %1 prop %2 to %3',
        args0: [
            {
                type: 'field_variable',
                name: 'VAR',
                variable: 'item'
            },
            {
                type: 'field_input',
                name: 'PATH',
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
        style: 'Структуры',
        tooltip: 'BlockType: obj_prop_set',
        helpUrl: 'https://n.sbis.ru/article/8aec1cee-e31e-46c8-b2dc-e6aad811554c'
    },
    {
        type: 're_search',
        message0: 're search %1 %2',
        args0: [
            {
                type: 'field_input',
                name: 're',
                text: ''
            },
            {
                type: 'input_value',
                name: 'value'
            }
        ],
        output: null,
        style: 'text_blocks',
        tooltip: 'BlockType: re_search',
        helpUrl: 'https://n.sbis.ru/article/30251414-eedb-4b5c-b1d1-34ae54646fd0'
    },
    {
        type: 'split',
        message0: 'split, delimiter %1 %2',
        args0: [
            {
                type: 'field_input',
                name: 'delimiter',
                text: ''
            },
            {
                type: 'input_value',
                name: 'value'
            }
        ],
        output: null,
        style: 'text_blocks',
        tooltip: 'BlockType: split',
        helpUrl: 'https://n.sbis.ru/article/36d715d7-25e6-4e03-a886-09ccbe485ea5'
    },
    {
        type: 'test_equal',
        message0: 'Test на идентичность %1  %2 Текущее значение %3 Должно быть %4',
        args0: [
            {
                type: 'field_input',
                name: 'NAME',
                text: 'комментарий'
            },
            {
                type: 'input_dummy'
            },
            {
                type: 'input_value',
                name: 'ACTUAL_VALUE',
                align: 'RIGHT'
            },
            {
                type: 'input_value',
                name: 'DESIRED_VALUE',
                align: 'RIGHT'
            }
        ],
        previousStatement: null,
        nextStatement: null,
        style: 'Тестирование',
        tooltip: 'Если проверка не прошла в result добавится ошибка. BlockType: test_equal',
        helpUrl: 'https://n.sbis.ru/article/12d92bef-ac02-430a-b2c0-05de8446e1be'
    },
    {
        type: 'list_append',
        message0: '%%{BKY_LIST_IN} %1 %%{BKY_LIST_APPEND} %2',
        args0: [
            {
                type: 'field_variable',
                name: 'VAR',
                variable: null
            },
            {
                type: 'input_value',
                name: 'VALUE'
            }
        ],
        inputsInline: false,
        previousStatement: null,
        nextStatement: null,
        colour: 270,
        tooltip: 'BlockType: list_append',
        helpUrl: ''
    },
    {
        type: 'list_obj_group',
        message0: 'сгруппировать массив объектов %1 по реквизитам %2',
        args0: [
            {
                type: 'input_value',
                name: 'LIST',
                check: 'Array'
            },
            {
                type: 'input_value',
                name: 'PARAMS',
                check: [
                    'String',
                    'Array'
                ]
            }
        ],
        inputsInline: false,
        output: null,
        style: 'Структуры',
        tooltip: 'BlockType: list_obj_group',
        helpUrl: 'https://n.sbis.ru/article/b8aae198-dcc6-4747-88e1-008e64ba87e7'
    }];
