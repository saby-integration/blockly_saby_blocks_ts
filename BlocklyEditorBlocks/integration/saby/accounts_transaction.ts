/* tslint:disable */
import {getFieldDropdownTypeOfIncome} from './account_balance';

window.Blockly.Msg.ACCOUNTS_TRANSACTION = 'Обороты между счетами';
window.Blockly.Msg.ACCOUNTS_TRANSACTION_CONTAINER = 'Параметры показателя СБИС';
window.Blockly.Msg.ACCOUNTS_TRANSACTION_SABY_ACCOUNT_NUMBER = 'Указывать номер счета';
window.Blockly.Msg.ACCOUNTS_TRANSACTION_SABY_FACE1 = 'Лицо1';
window.Blockly.Msg.ACCOUNTS_TRANSACTION_SABY_ACCOUNT_TITLE_BEGIN = '(СБИС Д';
window.Blockly.Msg.ACCOUNTS_TRANSACTION_SABY_ACCOUNT_TITLE_END = ')';
window.Blockly.Msg.ACCOUNTS_TRANSACTION_SABY_DEBIT = 'Дебет';
window.Blockly.Msg.ACCOUNTS_TRANSACTION_SABY_CREDIT = 'Кредит';
window.Blockly.Msg.ACCOUNTS_TRANSACTION_SABY_TOOLTIP = 'BlockType: accounts_transaction';

window.Blockly.Blocks.accounts_transaction = {
    /**
     * Block for creating a list with any number of elements of any type.
     * @this {window.Blockly.Block}
     */
    init () {
        this.setStyle('SABY ЭДО');
        this.setOutput(true, null);
        this.setInputsInline(true);
        this.updateShape_(false);
        this.setMutator(new window.Blockly.Mutator([]));
        this.setHelpUrl('http://wiki.razgovorov.ru/index.php/Blockly_-_execute_action');
        this.setTooltip(window.Blockly.Msg.ACCOUNTS_TRANSACTION_SABY_TOOLTIP);
    },
    /**
     * Create XML to represent list inputs.
     * @return {!Element} XML storage element.
     * @this {window.Blockly.Block}
     */
    mutationToDom () {
        const container = window.Blockly.utils.xml.createElement('mutation');
        container.setAttribute('SABY_ACCOUNT_NUMBER', this.sabyAccountNumber_?'TRUE':'FALSE');
        container.setAttribute('SABY_DEBIT_FACE1_TYPE', this.sabyDebitFace1Type_);
        container.setAttribute('SABY_CREDIT_FACE1_TYPE', this.sabyCreditFace1Type_);
        return container;
    },
    /**
     * Parse XML to restore the list inputs.
     * @param {!Element} xmlElement XML storage element.
     * @this {window.Blockly.Block}
     */
    domToMutation (xmlElement) {
        this.sabyAccountNumber_ = xmlElement.getAttribute('SABY_ACCOUNT_NUMBER') === 'TRUE';
        this.sabyDebitFace1Type_ = xmlElement.getAttribute('SABY_DEBIT_FACE1_TYPE');
        this.sabyCreditFace1Type_ = xmlElement.getAttribute('SABY_CREDIT_FACE1_TYPE');
        this.updateShape_();
    },
    /**
     * Populate the mutator's dialog with this block's components.
     * @param {!window.Blockly.Workspace} workspace Mutator's workspace.
     * @return {!window.Blockly.Block} Root block in mutator.
     * @this {window.Blockly.Block}
     */
    decompose (workspace) {
        const containerBlock = workspace.newBlock('accounts_transaction_container');
        containerBlock.initSvg();
        containerBlock.setFieldValue(this.sabyAccountNumber_, 'SABY_ACCOUNT_NUMBER');
        containerBlock.setFieldValue(this.sabyDebitFace1Type_, 'SABY_DEBIT_FACE1_TYPE');
        containerBlock.setFieldValue(this.sabyCreditFace1Type_, 'SABY_CREDIT_FACE1_TYPE');
        return containerBlock;
    },
    /**
     * Reconfigure this block based on the mutator dialog's components.
     * @param {!window.Blockly.Block} containerBlock Root block in mutator.
     * @this {window.Blockly.Block}
     */
    compose (containerBlock) {
        containerBlock.getFieldValue('EASY_SEND') === 'TRUE';
        this.sabyAccountNumber_ = containerBlock.getFieldValue('SABY_ACCOUNT_NUMBER') === 'TRUE';
        this.sabyDebitFace1Type_ = containerBlock.getFieldValue('SABY_DEBIT_FACE1_TYPE');
        this.sabyCreditFace1Type_ = containerBlock.getFieldValue('SABY_CREDIT_FACE1_TYPE');
        this.updateShape_();
    },
    /**
     * Modify this block to have the correct number of inputs.
     * @private
     * @this {window.Blockly.Block}
     */
    _clearSabyInput (rootInput_) {
        rootInput_.removeField('ACCOUNTS_TRANSACTION_SABY_ACCOUNT_TITLE_BEGIN', true);
        rootInput_.removeField('ACCOUNTS_TRANSACTION_SABY_DEBIT_ACCOUNT_TITLE_BEGIN', true);
        rootInput_.removeField('ACCOUNTS_TRANSACTION_SABY_ACCOUNT_TITLE_END', true);
        rootInput_.removeField('SABY_DEBIT_ACCOUNT', true);
        rootInput_.removeField('SABY_DEBIT_FACE1_TITLE', true);
        rootInput_.removeField('SABY_DEBIT_FACE1', true);
        rootInput_.removeField('ACCOUNTS_TRANSACTION_SABY_CREDIT_ACCOUNT_TITLE_BEGIN', true);
        rootInput_.removeField('SABY_CREDIT_ACCOUNT', true);
        rootInput_.removeField('SABY_CREDIT_FACE1_TITLE', true);
        rootInput_.removeField('SABY_CREDIT_FACE1', true);
    },
    updateShape_ () {
        this.rootInput_ = this.getInput('ROOT');
        if (!this.rootInput_) {
            this.rootInput_ = this.appendDummyInput('ROOT')
                .appendField(window.Blockly.Msg[this.type.toUpperCase()])
                .appendField('Д')
                .appendField(new window.Blockly.FieldTextInput(''), 'ACCOUNT_DEBIT')
                .appendField('К')
                .appendField(new window.Blockly.FieldTextInput(''), 'ACCOUNT_CREDIT');
        }
        this._clearSabyInput(this.rootInput_);
        if (this.sabyAccountNumber_) {
            this._clearSabyInput(this.rootInput_);
            if (!this.getField('SABY_DEBIT_ACCOUNT')) {
                this.rootInput_
                    .appendField(window.Blockly.Msg.ACCOUNTS_TRANSACTION_SABY_ACCOUNT_TITLE_BEGIN, 'ACCOUNTS_TRANSACTION_SABY_ACCOUNT_TITLE_BEGIN')
                    .appendField(new window.Blockly.FieldTextInput(''), 'SABY_DEBIT_ACCOUNT');
            }
            if (this.sabyDebitFace1Type_) {
                if (!this.getField('SABY_DEBIT_FACE1_TITLE')) {
                    this.rootInput_.appendField(this.sabyDebitFace1Type_,'SABY_DEBIT_FACE1_TITLE');
                    // this.moveInputBefore('SABY_DEBIT_FACE1_TITLE', 'SABY_CREDIT_ACCOUNT');
                    this.rootInput_.appendField(new window.Blockly.FieldTextInput(''), 'SABY_DEBIT_FACE1');
                    // this.moveInputBefore('SABY_DEBIT_FACE1_TITLE', 'SABY_CREDIT_ACCOUNT');
                }
                this.setFieldValue(this.sabyDebitFace1Type_,'SABY_DEBIT_FACE1_TITLE');

            }
            if (!this.getField('SABY_CREDIT_ACCOUNT')) {
                this.rootInput_
                    .appendField(', К', 'ACCOUNTS_TRANSACTION_SABY_CREDIT_ACCOUNT_TITLE_BEGIN')
                    .appendField(new window.Blockly.FieldTextInput(''), 'SABY_CREDIT_ACCOUNT');
            }
            if (this.sabyCreditFace1Type_) {
                if (!this.getField('SABY_CREDIT_FACE1_TITLE')) {
                    this.rootInput_.appendField(this.sabyCreditFace1Type_,'SABY_CREDIT_FACE1_TITLE');
                    this.rootInput_.appendField(new window.Blockly.FieldTextInput(''), 'SABY_CREDIT_FACE1');
                }
                this.setFieldValue(this.sabyCreditFace1Type_,'SABY_CREDIT_FACE1_TITLE');

            }
            this.rootInput_.appendField(window.Blockly.Msg.ACCOUNTS_TRANSACTION_SABY_ACCOUNT_TITLE_END, 'ACCOUNTS_TRANSACTION_SABY_ACCOUNT_TITLE_END');
        }
    }
};

window.Blockly.Blocks.accounts_transaction_container = {
    /**
     * Mutator block for list container.
     * @this {window.Blockly.Block}
     */
    init () {
        this.setStyle('SABY ЭДО');
        this.appendDummyInput()
            .appendField(window.Blockly.Msg.ACCOUNTS_TRANSACTION_CONTAINER);
        this.appendDummyInput()
            .setAlign(window.Blockly.ALIGN_RIGHT)
            .appendField(window.Blockly.Msg.ACCOUNTS_TRANSACTION_SABY_ACCOUNT_NUMBER)
            .appendField(new window.Blockly.FieldCheckbox('FALSE'), 'SABY_ACCOUNT_NUMBER');
        this.appendDummyInput('')
            .setAlign(window.Blockly.ALIGN_LEFT)
            .appendField(window.Blockly.Msg.ACCOUNTS_TRANSACTION_SABY_DEBIT);
        this.appendDummyInput('')
            .setAlign(window.Blockly.ALIGN_RIGHT)
            .appendField(window.Blockly.Msg.ACCOUNTS_TRANSACTION_SABY_FACE1)
            .appendField(getFieldDropdownTypeOfIncome(), 'SABY_DEBIT_FACE1_TYPE');
        this.appendDummyInput('')
            .setAlign(window.Blockly.ALIGN_LEFT)
            .appendField(window.Blockly.Msg.ACCOUNTS_TRANSACTION_SABY_CREDIT);
        this.appendDummyInput('')
            .setAlign(window.Blockly.ALIGN_RIGHT)
            .appendField(window.Blockly.Msg.ACCOUNTS_TRANSACTION_SABY_FACE1)
            .appendField(getFieldDropdownTypeOfIncome(), 'SABY_CREDIT_FACE1_TYPE');
        this.contextMenu = false;
    }
};

// согласно диалога https://online.sbis.ru/page/dialog/4d481f42-fd0a-4b5e-8db0-f0395b387419?inviteduser=47eef0c4-f0d8-4375-9bf8-f0ce450fb471
export {};
