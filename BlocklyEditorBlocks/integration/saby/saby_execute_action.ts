/* tslint:disable */
window.Blockly.Msg.EXECUTE_ACTION = 'Execute action';
window.Blockly.Msg.EXECUTE_ACTION_TOOLTIP = 'BlockType: saby_execute_action';
window.Blockly.Msg.EXECUTE_ACTION_CONTAINER_TITLE_ADD = 'СБИС Выполнить действие';
window.Blockly.Msg.EXECUTE_ACTION_CONTAINER_TOOLTIP = 'Add or remove table';
window.Blockly.Msg.EXECUTE_ACTION_VALUE_CONTAINER_TITLE = 'Table';
window.Blockly.Msg.EXECUTE_ACTION_VALUE_CONTAINER_TOOLTIP = 'Add table to compare';
window.Blockly.Msg.EXECUTE_ACTION_DOCUMENT = 'В СБИС для документа';
window.Blockly.Msg.EXECUTE_ACTION_NAME = 'выполнить действие';
window.Blockly.Msg.EXECUTE_ACTION_COMMENT = 'с комментарием';
window.Blockly.Msg.EXECUTE_ACTION_PERFORMER = 'указать исполнителя';
window.Blockly.Msg.EXECUTE_ACTION_ATTACHMENT = '+ вложения';
window.Blockly.Msg.EXECUTE_ACTION_ATTACHMENTS = '+ вложения';
window.Blockly.Msg.EXECUTE_ACTION_ATTACHMENT_TITLE = 'название';
window.Blockly.Msg.EXECUTE_ACTION_ATTACHMENT_DATA = 'данные';
window.Blockly.Msg.EXECUTE_ACTION_ATTACHMENT_SUBST = '(подстановка)';
window.Blockly.Msg.EXECUTE_ACTION_ATTACHMENT_B64 = '(base64)';
window.Blockly.Msg.EXECUTE_ACTION_SEND_TYPE = 'Способ отправки';
window.Blockly.Msg.EXECUTE_ACTION_EASY_SEND_ACTION = 'простая отправка';
window.Blockly.Msg.EXECUTE_ACTION_MAGIC_BUTTON_ACTION = 'чудо кнопка';
window.Blockly.Msg.EXECUTE_ACTION_HELPURL =
    'https://n.sbis.ru/article/28372da3-a16c-4dc2-852a-c21439c81f02';

window.Blockly.Blocks.saby_execute_action = {
    /**
     * Block for creating a list with any number of elements of any type.
     * @this {window.Blockly.Block}
     */
    init() {
        this.setHelpUrl(window.Blockly.Msg.EXECUTE_ACTION_HELPURL);
        this.setStyle('SABY ЭДО');
        this.setOutput(true, null);
        this.setInputsInline(false);
        this.attCount_ = 0;
        this.attTypes = [];
        this.appendValueInput('DOCUMENT').appendField(window.Blockly.Msg.EXECUTE_ACTION_DOCUMENT);
        this.appendValueInput('COMMENT')
            .setAlign(window.Blockly.ALIGN_RIGHT)
            .appendField(window.Blockly.Msg.EXECUTE_ACTION_COMMENT);
        this.appendValueInput('PERFORMER')
            .setAlign(window.Blockly.ALIGN_RIGHT)
            .appendField(window.Blockly.Msg.EXECUTE_ACTION_PERFORMER);

        this.updateShape_('EDO');
        // this.setOutput(true, 'Array');
        this.setMutator(new window.Blockly.Mutator(['att_b64', 'att_array']));
        // this.setMutator(new window.Blockly.Mutator(['att_b64']));
        this.setTooltip(window.Blockly.Msg.EXECUTE_ACTION_TOOLTIP);
    },
    /**
     * Create XML to represent list inputs.
     * @return {!Element} XML storage element.
     * @this {window.Blockly.Block}
     */
    mutationToDom() {
        const container = window.Blockly.utils.xml.createElement('mutation');

        container.setAttribute('attachment_types', this.attTypes.join(','));
        container.setAttribute('attachment_count', String(this.attTypes.length));
        container.setAttribute('SEND_TYPE', this.easySend_);
        container.setAttribute('EASY_SEND', this.easySend_ === 'EASY_SEND' ? 'TRUE' : 'FALSE');

        return container;
    },
    /**
     * Parse XML to restore the list inputs.
     * @param {!Element} xmlElement XML storage element.
     * @this {window.Blockly.Block}
     */
    domToMutation(xmlElement) {
        const attTypes = xmlElement.getAttribute('attachment_types');
        this.attTypes = attTypes ? attTypes.split(',') : [];
        this.attCount_ = this.attTypes.length;
        let easySend = xmlElement.getAttribute('SEND_TYPE');
        if (!easySend && xmlElement.getAttribute('EASY_SEND') === 'TRUE') {
            easySend = 'EASY_SEND';
        }
        this.updateShape_(easySend);
    },
    /**
     * Populate the mutator's dialog with this block's components.
     * @param {!window.Blockly.Workspace} workspace Mutator's workspace.
     * @return {!window.Blockly.Block} Root block in mutator.
     * @this {window.Blockly.Block}
     */
    decompose(workspace) {
        const containerBlock = workspace.newBlock('execute_action_container');
        containerBlock.initSvg();
        let connection = containerBlock.getInput('STACK').connection;
        for (let i = 0; i < this.attCount_; i++) {
            const itemBlock = workspace.newBlock(this.attTypes[i]);
            itemBlock.initSvg();
            connection.connect(itemBlock.previousConnection);
            connection = itemBlock.nextConnection;
        }
        containerBlock.setFieldValue(this.easySend_, 'SEND_TYPE');
        return containerBlock;
    },
    /**
     * Reconfigure this block based on the mutator dialog's components.
     * @param {!window.Blockly.Block} containerBlock Root block in mutator.
     * @this {window.Blockly.Block}
     */
    compose(containerBlock) {
        // Count number of inputs.
        // this.optionList_.length = 0;
        // this.attCount_ = 0
        this.attTypes = [];
        // let data = [];

        // сохраняем пользовательские параметры
        // let optionBlock = containerBlock.getInputTargetBlock('STACK');
        // while (optionBlock) {
        //     // this.attCount_ += 1
        //     this.attTypes.push(optionBlock.type);
        //     optionBlock = optionBlock.nextConnection &&
        //         optionBlock.nextConnection.targetBlock();
        // }
        let optionBlock = containerBlock.getInputTargetBlock('STACK');

        const tableGroupConnection = [];
        const tableFieldsConnection_ = [];
        // let tableTypes_ = [];
        while (optionBlock && !optionBlock.isInsertionMarker()) {
            tableGroupConnection.push(optionBlock.groupConnection_);
            tableFieldsConnection_.push(optionBlock.fieldsConnection_);
            this.attTypes.push(optionBlock.type);
            optionBlock = optionBlock.nextConnection && optionBlock.nextConnection.targetBlock();
        }
        this.attCount_ = this.attTypes.length;

        // Disconnect any children that don't belong.
        for (let i = 0; i < this.attCount_; i++) {
            const elem = this.getInput(`ATT${i}_TITLE`);
            if (elem === null) {
                break;
            }

            let connection = elem.connection.targetConnection;
            if (connection && tableGroupConnection.indexOf(connection) === -1) {
                connection.disconnect();
            }
            connection = this.getInput(`ATT${i}_DATA`).connection.targetConnection;
            if (connection && tableFieldsConnection_.indexOf(connection) === -1) {
                connection.disconnect();
            }
        }
        // this.attCount_ = tableGroupConnections.length;
        this.updateShape_(containerBlock.getFieldValue('SEND_TYPE'));
        // Restore any data.
        // for (let i = 0; i < data.length; i++) {
        //     let userData = data[i];
        //     if (userData !== undefined) {
        // this.setFieldValue(userData.name, `ATT${i}_NAME`);
        // this.setFieldValue(data[i][1] || 'OPTIONNAME', 'CPU' + i);
        // }
        // }
        for (let i = 0; i < this.attCount_; i++) {
            window.Blockly.Mutator.reconnect(tableGroupConnection[i], this, `ATT${i}_TITLE`);
            window.Blockly.Mutator.reconnect(tableFieldsConnection_[i], this, `ATT${i}_DATA`);
        }
    },
    /**
     * Store pointers to any connected child blocks.
     * @param {!window.Blockly.Block} containerBlock Root block in mutator.
     * @this {window.Blockly.Block}
     */
    saveConnections(containerBlock) {
        let optionBlock = containerBlock.getInputTargetBlock('STACK');
        let i = 0;
        while (optionBlock) {
            optionBlock.userData_ = this.getUserData(i);
            let input = this.getInput(`ATT${i}_TITLE`);
            optionBlock.groupConnection_ = input && input.connection.targetConnection;
            input = this.getInput(`ATT${i}_DATA`);
            optionBlock.fieldsConnection_ = input && input.connection.targetConnection;
            i++;
            optionBlock = optionBlock.nextConnection && optionBlock.nextConnection.targetBlock();
        }
    },
    // rebuildShape_: function () {
    //     this.updateShape_();
    // },
    /**
     * Modify this block to have the correct number of inputs.
     * @private
     * @this {window.Blockly.Block}
     */
    updateShape_(easySend) {
        if (easySend !== this.easySend_) {
            if (this.getInput('ACTION')) {
                this.removeInput('ACTION');
            }
            switch (easySend) {
                case 'EDO':
                    this.appendValueInput('ACTION')
                        .setAlign(window.Blockly.ALIGN_RIGHT)
                        .appendField(window.Blockly.Msg.EXECUTE_ACTION_NAME);
                    this.moveInputBefore('ACTION', 'COMMENT');
                    break;
                case 'EASY_SEND':
                case 'MAGIC_BUTTON':
                    this.appendDummyInput('ACTION')
                        .setAlign(window.Blockly.ALIGN_RIGHT)
                        .appendField(window.Blockly.Msg[`EXECUTE_ACTION_${easySend}_ACTION`]);
                    this.moveInputBefore('ACTION', 'COMMENT');
                    break;
            }
            this.easySend_ = easySend;
        }

        let i = 0;
        while (this.getInput(`ATT${i}`)) {
            if (this.getInput(`ATT${i}_TITLE`)) {
                this.removeInput(`ATT${i}_TITLE`);
                this.removeInput(`ATT${i}_DATA`);
            }
            this.removeInput(`ATT${i}`);
            i++;
        }

        // this.setNextStatement(true, null);
        // Remove deleted inputs.
        for (i = 0; i < this.attCount_; i++) {
            if (!this.getInput(`ATT${i}`)) {
                switch (this.attTypes[i]) {
                    case 'att_b64':
                        this.appendDummyInput(`ATT${i}`).appendField(
                            window.Blockly.Msg.EXECUTE_ACTION_ATTACHMENT
                        );
                        this.appendValueInput(`ATT${i}_TITLE`)
                            .setAlign(window.Blockly.ALIGN_RIGHT)
                            .appendField(window.Blockly.Msg.EXECUTE_ACTION_ATTACHMENT_TITLE);
                        this.appendValueInput(`ATT${i}_DATA`)
                            .setAlign(window.Blockly.ALIGN_RIGHT)
                            .appendField(
                                `${window.Blockly.Msg.EXECUTE_ACTION_ATTACHMENT_DATA} ${window.Blockly.Msg.EXECUTE_ACTION_ATTACHMENT_B64}`
                            );
                        break;
                    case 'att_array':
                        this.appendValueInput(`ATT${i}`).appendField(
                            `${window.Blockly.Msg.EXECUTE_ACTION_ATTACHMENTS}`
                        );
                        break;
                }
            }
        }
        // this.setNextStatement(true, null);
        // Remove deleted inputs.
        while (this.getInput(`ATT${i}`)) {
            if (this.getInput(`ATT${i}_TITLE`)) {
                this.removeInput(`ATT${i}_TITLE`);
                this.removeInput(`ATT${i}_DATA`);
            }
            this.removeInput(`ATT${i}`);
            i++;
        }
    },
    getUserData() {
        return {
            // name: this.getFieldValue(`TABLE${n}_NAME`)
        };
    },
};
window.Blockly.Blocks.execute_action_container = {
    /**
     * Mutator block for list container.
     * @this {window.Blockly.Block}
     */
    init() {
        this.setStyle('SABY ЭДО');
        this.appendDummyInput().appendField(window.Blockly.Msg.EXECUTE_ACTION_CONTAINER_TITLE_ADD);
        this.appendStatementInput('STACK');
        this.appendDummyInput('SEND_TYPE')
            .appendField(window.Blockly.Msg.EXECUTE_ACTION_SEND_TYPE)
            // .appendField(new window.Blockly.FieldCheckbox('FALSE'), 'EASY_SEND');
            .appendField(
                new window.Blockly.FieldDropdown([
                    ['Стандартный ЭДО', 'EDO'],
                    ['Простая отправка', 'EASY_SEND'],
                    ['Чудо кнопка', 'MAGIC_BUTTON'],
                ]),
                'SEND_TYPE'
            );

        this.setTooltip(window.Blockly.Msg.EXECUTE_ACTION_CONTAINER_TOOLTIP);
        this.contextMenu = false;
    },
};
window.Blockly.Blocks.att_b64 = {
    /**
     * Mutator block for adding items.
     * @this {window.Blockly.Block}
     */
    init() {
        this.setStyle('SABY ЭДО');
        this.appendDummyInput().appendField(
            `${window.Blockly.Msg.EXECUTE_ACTION_ATTACHMENT} ${window.Blockly.Msg.EXECUTE_ACTION_ATTACHMENT_B64}`
        );
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        // this.setTooltip(window.Blockly.Msg['EXECUTE_ACTION_VALUE_CONTAINER_TOOLTIP']);
        this.contextMenu = false;
    },
};
window.Blockly.Blocks.att_array = {
    /**
     * Mutator block for adding items.
     * @this {window.Blockly.Block}
     */
    init() {
        this.setStyle('SABY ЭДО');
        this.appendDummyInput().appendField(`${window.Blockly.Msg.EXECUTE_ACTION_ATTACHMENT}`);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        // this.setTooltip(window.Blockly.Msg['EXECUTE_ACTION_VALUE_CONTAINER_TOOLTIP']);
        this.contextMenu = false;
    },
};

// согласно диалога https://online.sbis.ru/page/dialog/4d481f42-fd0a-4b5e-8db0-f0395b387419?inviteduser=47eef0c4-f0d8-4375-9bf8-f0ce450fb471
export {};
