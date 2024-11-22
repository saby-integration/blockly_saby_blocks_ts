import '../base/init';

import './integration/extsys_calc_ini';

import './indicator_final_balance';
import './indicator_opening_balance';
import './indicator_turnover_between_accounts';

import  './settings/algorithm_info';

import  './settings/view_toolbar_menu';
import  './settings/view_filter_chips';
import  './settings/view_filter_enumeration';
import  './settings/view_filter_enumeration_with_date';
import  './settings/view_toolbar_command';

import './saby/saby_execute_action';
import './saby/account_balance';
import './saby/accounts_transaction';

import './odbc/odbc_select';

import BlocksApi3 from './api3object/api3object';
window.Blockly.defineBlocksWithJsonArray(BlocksApi3);

import BlocksException from './exception/exception';
window.Blockly.defineBlocksWithJsonArray(BlocksException);

import BlocksIntegration from './integration/integration';
window.Blockly.defineBlocksWithJsonArray(BlocksIntegration);

import BlocksSaby from './saby/saby';
window.Blockly.defineBlocksWithJsonArray(BlocksSaby);

import BlocksFTP from './ftp/ftp';
window.Blockly.defineBlocksWithJsonArray(BlocksFTP);

import BlocksSettings from './settings/settings';
window.Blockly.defineBlocksWithJsonArray(BlocksSettings);

import BlocksEsd from './esd/esd';
window.Blockly.defineBlocksWithJsonArray(BlocksEsd);

import BlocksHttp from './http/http';
window.Blockly.defineBlocksWithJsonArray(BlocksHttp);

import './sap/sap_call_fm';
import './sap/sap_call_include_prog';
import './sap/sap_call_method';
import './sap/sap_call_screen_prog';
import './sap/sap_call_select';
import './sap/sap_call_select_one';
import './sap/sap_call_transaction';
import './sap/sap_prog_breakpoints';
import './sap/sap_prog_result_format';

import BlocksSap from './sap/sap';
window.Blockly.defineBlocksWithJsonArray(BlocksSap);

import './1c/c1_call_select';
import './1c/c1_call_filter';
import './1c/c1_calculate';
import './1c/c1_execute2';

import Blocks1C from './1c/1c';
window.Blockly.defineBlocksWithJsonArray(Blocks1C);
