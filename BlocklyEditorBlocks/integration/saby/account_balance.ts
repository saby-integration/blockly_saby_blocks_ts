/* tslint:disable */
export function getFieldDropdownTypeOfIncome(): unknown {
    return new window.Blockly.FieldDropdown([
        ['Не указывать', ''], ['Код вида дохода', 'ВидДохода'], ['Код статьи затрат', 'СтатьяЗатрат']]);
}

function get_account_balance(blockId) {
    return {
        /**
         * Block for creating a list with any number of elements of any type.
         * @this {window.Blockly.Block}
         */
        init () {
            // this.setHelpUrl(window.Blockly.Msg['EXECUTE_ACTION_HELPURL']);
            this.setStyle('SABY ЭДО');
            this.setOutput(true, null);
            this.setInputsInline(true);
            this.updateShape_(false);
            this.setMutator(new window.Blockly.Mutator([]));
            this.setHelpUrl('http://wiki.razgovorov.ru/index.php/Blockly_-_execute_action');
            this.setTooltip(window.Blockly.Msg[blockId.toUpperCase() + '_TOOLTIP']);
        },
        /**
         * Create XML to represent list inputs.
         * @return {!Element} XML storage element.
         * @this {window.Blockly.Block}
         */
        mutationToDom () {
            const container = window.Blockly.utils.xml.createElement('mutation');
            container.setAttribute('SABY_ACCOUNT_NUMBER', this.sabyAccountNumber_?'TRUE':'FALSE');
            container.setAttribute('SABY_FACE1_TYPE', this.sabyFace1Type_);
            return container;
        },
        /**
         * Parse XML to restore the list inputs.
         * @param {!Element} xmlElement XML storage element.
         * @this {window.Blockly.Block}
         */
        domToMutation (xmlElement) {
            this.sabyAccountNumber_ = xmlElement.getAttribute('SABY_ACCOUNT_NUMBER') === 'TRUE';
            this.sabyFace1Type_ = xmlElement.getAttribute('SABY_FACE1_TYPE');
            this.updateShape_();
        },
        /**
         * Populate the mutator's dialog with this block's components.
         * @param {!window.Blockly.Workspace} workspace Mutator's workspace.
         * @return {!window.Blockly.Block} Root block in mutator.
         * @this {window.Blockly.Block}
         */
        decompose (workspace) {
            const containerBlock = workspace.newBlock('account_balance_container');
            containerBlock.initSvg();
            containerBlock.setFieldValue(this.sabyAccountNumber_, 'SABY_ACCOUNT_NUMBER');
            containerBlock.setFieldValue(this.sabyFace1Type_, 'SABY_FACE1_TYPE');
            return containerBlock;
        },
        /**
         * Reconfigure this block based on the mutator dialog's components.
         * @param {!window.Blockly.Block} containerBlock Root block in mutator.
         * @this {window.Blockly.Block}
         */
        compose (containerBlock) {
            this.sabyAccountNumber_ = containerBlock.getFieldValue('SABY_ACCOUNT_NUMBER') === 'TRUE';
            this.sabyFace1Type_ = containerBlock.getFieldValue('SABY_FACE1_TYPE');
            this.updateShape_();
        },
        /**
         * Store pointers to any connected child blocks.
         * @param {!window.Blockly.Block} containerBlock Root block in mutator.
         * @this {window.Blockly.Block}
         */
        // saveConnections: function (containerBlock) {
        //     let optionBlock = containerBlock.getInputTargetBlock('STACK');
        //     let i = 0;
        //     while (optionBlock) {
        //         optionBlock.userData_ = this.getUserData(i);
        //         let input = this.getInput(`ATT${i}_TITLE`);
        //         optionBlock.groupConnection_ = input && input.connection.targetConnection;
        //         input = this.getInput(`ATT${i}_DATA`);
        //         optionBlock.fieldsConnection_ = input && input.connection.targetConnection;
        //         i++;
        //         optionBlock = optionBlock.nextConnection &&
        //             optionBlock.nextConnection.targetBlock();
        //     }
        // },
        // rebuildShape_: function () {
        //     this.updateShape_();
        // },
        /**
         * Modify this block to have the correct number of inputs.
         * @private
         * @this {window.Blockly.Block}
         */
        updateShape_ () {
            this.rootInput_ = this.getInput('ROOT');
            if (!this.rootInput_) {
                this.rootInput_ = this.appendDummyInput('ROOT')
                    .appendField(window.Blockly.Msg[this.type.toUpperCase()])
                    .appendField(new window.Blockly.FieldTextInput(''), 'ACCOUNT');
            }
            if (this.sabyAccountNumber_) {
                this.rootInput_.removeField('ACCOUNT_BALANCE_SABY_ACCOUNT_TITLE_END', true);
                if (!this.getField('SABY_ACCOUNT')) {
                    this.rootInput_
                        .appendField(window.Blockly.Msg.ACCOUNT_BALANCE_SABY_ACCOUNT_TITLE_BEGIN, 'ACCOUNT_BALANCE_SABY_ACCOUNT_TITLE_BEGIN')
                        .appendField(new window.Blockly.FieldTextInput(''), 'SABY_ACCOUNT');
                }
                if (this.sabyFace1Type_) {
                    if (!this.getField('SABY_FACE1_TITLE')) {
                        this.rootInput_.appendField(this.sabyFace1Type_,'SABY_FACE1_TITLE');
                        this.rootInput_.appendField(new window.Blockly.FieldTextInput(''), 'SABY_FACE1');
                    }
                    this.setFieldValue(this.sabyFace1Type_,'SABY_FACE1_TITLE');

                } else {
                    this.rootInput_.removeField('SABY_FACE1_TITLE', true);
                    this.rootInput_.removeField('SABY_FACE1', true);
                }
                this.rootInput_.appendField(window.Blockly.Msg.ACCOUNT_BALANCE_SABY_ACCOUNT_TITLE_END, 'ACCOUNT_BALANCE_SABY_ACCOUNT_TITLE_END');
            } else {
                this.rootInput_.removeField('ACCOUNT_BALANCE_SABY_ACCOUNT_TITLE_BEGIN', true);
                this.rootInput_.removeField('ACCOUNT_BALANCE_SABY_ACCOUNT_TITLE_END', true);
                this.rootInput_.removeField('SABY_ACCOUNT', true);
                this.rootInput_.removeField('SABY_FACE1_TITLE', true);
                this.rootInput_.removeField('SABY_FACE1', true);
            }
        }
    };
}

window.Blockly.Msg.ACCOUNT_BALANCE_BEGIN_DEBIT = 'СНД';
window.Blockly.Msg.ACCOUNT_BALANCE_BEGIN_CREDIT = 'СНК';
window.Blockly.Msg.ACCOUNT_BALANCE_END_DEBIT = 'СКД';
window.Blockly.Msg.ACCOUNT_BALANCE_END_CREDIT = 'СКК';
window.Blockly.Msg.ACCOUNT_BALANCE_CONTAINER = 'Параметры показателя СБИС';
window.Blockly.Msg.ACCOUNT_BALANCE_SABY_ACCOUNT_NUMBER = 'Указывать номер счета';
window.Blockly.Msg.ACCOUNT_BALANCE_SABY_FACE1 = 'Лицо1';
window.Blockly.Msg.ACCOUNT_BALANCE_SABY_ACCOUNT_TITLE_BEGIN = '(СБИС';
window.Blockly.Msg.ACCOUNT_BALANCE_SABY_ACCOUNT_TITLE_END = ')';
window.Blockly.Msg.ACCOUNT_BALANCE_BEGIN_DEBIT_TOOLTIP = 'BlockType: account_balance_begin_debit';
window.Blockly.Msg.ACCOUNT_BALANCE_BEGIN_CREDIT_TOOLTIP = 'BlockType: account_balance_begin_credit';
window.Blockly.Msg.ACCOUNT_BALANCE_END_DEBIT_TOOLTIP = 'BlockType: account_balance_end_debit';
window.Blockly.Msg.ACCOUNT_BALANCE_END_CREDIT_TOOLTIP = 'BlockType: account_balance_end_credit';

window.Blockly.Blocks.account_balance_begin_credit = get_account_balance('account_balance_begin_credit');
window.Blockly.Blocks.account_balance_end_credit = get_account_balance('account_balance_end_credit');
window.Blockly.Blocks.account_balance_end_debit = get_account_balance('account_balance_end_debit');
window.Blockly.Blocks.account_balance_begin_debit = get_account_balance('account_balance_begin_debit');

window.Blockly.Blocks.account_balance_container = {
    /**
     * Mutator block for list container.
     * @this {window.Blockly.Block}
     */
    init () {
        this.setStyle('SABY ЭДО');
        this.appendDummyInput()
            .appendField(window.Blockly.Msg.ACCOUNT_BALANCE_CONTAINER);
        this.appendDummyInput()
            .setAlign(window.Blockly.ALIGN_RIGHT)
            .appendField(window.Blockly.Msg.ACCOUNT_BALANCE_SABY_ACCOUNT_NUMBER)
            .appendField(new window.Blockly.FieldCheckbox('FALSE'), 'SABY_ACCOUNT_NUMBER');
        this.appendDummyInput()
            .setAlign(window.Blockly.ALIGN_RIGHT)
            .appendField(window.Blockly.Msg.ACCOUNT_BALANCE_SABY_FACE1)
            .appendField(getFieldDropdownTypeOfIncome(), 'SABY_FACE1_TYPE');
        this.setTooltip(window.Blockly.Msg.EXECUTE_ACTION_CONTAINER_TOOLTIP);
        this.contextMenu = false;
    }
};

// согласно диалога https://online.sbis.ru/page/dialog/4d481f42-fd0a-4b5e-8db0-f0395b387419?inviteduser=47eef0c4-f0d8-4375-9bf8-f0ce450fb471
export {};
