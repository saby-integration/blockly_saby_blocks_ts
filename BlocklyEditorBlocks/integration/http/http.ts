export default [{
  type: 'http_request',
  message0: 'http request %1 url %2 headers %3 params %4 body %5',
  args0: [
    {
      type: 'input_value',
      name: 'METHOD',
      align: 'RIGHT'
    },
    {
      type: 'input_value',
      name: 'URL',
      align: 'RIGHT'
    },
    {
      type: 'input_value',
      name: 'HEADERS',
      align: 'RIGHT'
    },
    {
      type: 'input_value',
      name: 'PARAMS',
      align: 'RIGHT'
    },
    {
      type: 'input_value',
      name: 'BODY',
      align: 'RIGHT'
    }
  ],
  output: null,
  colour: 230,
  tooltip: 'BlockType: http_request',
  helpUrl: ''
},
  {
    type: 'http_header_basic_auth',
    message0: 'Header BasicAuth %1 login %2 password %3',
    args0: [
      {
        type: 'input_dummy'
      },
      {
        type: 'input_value',
        name: 'LOGIN',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'PASSWORD',
        align: 'RIGHT'
      }
    ],
    output: null,
    colour: 230,
    tooltip: 'BlockType: http_header_basic_auth',
    helpUrl: ''
  }];
