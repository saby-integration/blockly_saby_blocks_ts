/* tslint:disable */
window.Blockly.Msg.SAP_CALL_INCLUDE = 'Call prog';
window.Blockly.Msg.SAP_CALL_INCLUDE_TOOLTIP = 'BlockType: sap_call_include_prog';
window.Blockly.Msg.SAP_CALL_INCLUDE_ENTRYPOINT = 'entrypoint';
window.Blockly.Msg.INI_NAME = 'ini';
window.Blockly.Msg.SAP_CALL_INCLUDE_INIT = 'Init';
window.Blockly.Msg.SAP_CALL_INCLUDE_RETURN_NAME = 'return param';
window.Blockly.Msg.SAP_CALL_INCLUDE_RETURN_TYPE = 'type';
window.Blockly.Msg.SAP_CALL_INCLUDE_CONTAINER_TITLE_ADD = 'Call prog';
window.Blockly.Msg.SAP_CALL_INCLUDE_CONTAINER_TOOLTIP = 'Add or remove method params';
window.Blockly.Msg.SAP_CALL_INCLUDE_RETURN_CONTAINER_TITLE = 'Return param';
window.Blockly.Msg.SAP_CALL_INCLUDE_RETURN_CONTAINER_TOOLTIP = 'Return param';
window.Blockly.Msg.SAP_CALL_INCLUDE_PARAM_CONTAINER_TITLE = 'Perform param';
window.Blockly.Msg.SAP_CALL_INCLUDE_PARAM_CONTAINER_TOOLTIP = 'Add an param to the call method';
window.Blockly.Msg.SAP_CALL_INCLUDE_HELPURL =
    'https://n.sbis.ru/article/5d5026a7-e720-4e29-b305-8760157209c1';

window.Blockly.Blocks.sap_call_include_prog = {
    /**
     * Block for creating a list with any number of elements of any type.
     * @this {window.Blockly.Block}
     */
    init() {
        this.setHelpUrl(window.Blockly.Msg.SAP_CALL_INCLUDE_HELPURL);
        this.setStyle('SAP');
        this.setOutput(true, null);
        // this.setColour(230);
        this.itemCount_ = 0;
        this.itemTypes = [];
        this.updateShape_();
        // this.setOutput(true, 'Array');
        this.setMutator(
            new window.Blockly.Mutator(['sap_call_include_param', 'sap_call_include_return'])
        );
        this.setTooltip(window.Blockly.Msg.SAP_CALL_INCLUDE_TOOLTIP);
    },
    /**
     * Create XML to represent list inputs.
     * @return {!Element} XML storage element.
     * @this {window.Blockly.Block}
     */
    mutationToDom() {
        const container = window.Blockly.utils.xml.createElement('mutation');

        container.setAttribute('item_types', this.itemTypes.join(','));
        container.setAttribute('item_count', String(this.itemTypes.length));
        return container;
    },
    /**
     * Parse XML to restore the list inputs.
     * @param {!Element} xmlElement XML storage element.
     * @this {window.Blockly.Block}
     */
    domToMutation(xmlElement) {
        const itemTypes = xmlElement.getAttribute('item_types');
        this.itemTypes = itemTypes ? itemTypes.split(',') : [];
        this.itemCount_ = this.itemTypes.length;
        this.updateShape_();
    },
    /**
     * Populate the mutator's dialog with this block's components.
     * @param {!window.Blockly.Workspace} workspace Mutator's workspace.
     * @return {!window.Blockly.Block} Root block in mutator.
     * @this {window.Blockly.Block}
     */
    decompose(workspace) {
        const containerBlock = workspace.newBlock('sap_call_method_container');
        containerBlock.initSvg();
        let connection = containerBlock.getInput('STACK').connection;
        for (let i = 0; i < this.itemCount_; i++) {
            const itemBlock = workspace.newBlock(this.itemTypes[i]);
            itemBlock.initSvg();
            connection.connect(itemBlock.previousConnection);
            connection = itemBlock.nextConnection;
        }
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
        // this.itemCount_ = 0
        this.itemTypes = [];
        const data = [];

        // сохраняем пользовательские параметры
        let optionBlock = containerBlock.getInputTargetBlock('STACK');
        while (optionBlock) {
            // this.itemCount_ += 1
            data.push(optionBlock.userData_);
            optionBlock = optionBlock.nextConnection && optionBlock.nextConnection.targetBlock();
        }

        optionBlock = containerBlock.getInputTargetBlock('STACK');
        const tableGroupConnection = [];
        const tableFieldsConnection_ = [];
        // let tableTypes_ = [];
        while (optionBlock && !optionBlock.isInsertionMarker()) {
            tableGroupConnection.push(optionBlock.groupConnection_);
            tableFieldsConnection_.push(optionBlock.fieldsConnection_);
            this.itemTypes.push(optionBlock.type);
            optionBlock = optionBlock.nextConnection && optionBlock.nextConnection.targetBlock();
        }
        this.itemCount_ = this.itemTypes.length;

        // Disconnect any children that don't belong.
        for (let i = 0; i < this.itemCount_; i++) {
            const elem = this.getInput(`PARAM${i}`);
            if (elem === null || elem.connection === null) {
                break;
            }
            const connection = elem.connection.targetConnection;
            if (connection && tableGroupConnection.indexOf(connection) === -1) {
                connection.disconnect();
            }
        }
        // this.itemCount_ = tableGroupConnections.length;
        this.updateShape_();
        // Restore any data.
        for (let i = 0; i < data.length; i++) {
            const userData = data[i];
            if (userData !== undefined) {
                this.setFieldValue(userData.name, `PARAM${i}_NAME`);
                this.setFieldValue(userData.type, `PARAM${i}_TYPE`);
            }
        }
        for (let i = 0; i < this.itemCount_; i++) {
            window.Blockly.Mutator.reconnect(tableGroupConnection[i], this, `PARAM${i}`);
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
            let input = this.getInput(`PARAM${i}_TITLE`);
            optionBlock.groupConnection_ = input && input.connection.targetConnection;
            input = this.getInput(`PARAM${i}_DATA`);
            optionBlock.fieldsConnection_ = input && input.connection.targetConnection;
            i++;
            optionBlock = optionBlock.nextConnection && optionBlock.nextConnection.targetBlock();
        }
    },
    /**
     * Modify this block to have the correct number of inputs.
     * @private
     * @this {window.Blockly.Block}
     */
    updateShape_() {
        if (!this.getInput('EMPTY')) {
            this.appendDummyInput('EMPTY')
                .appendField(window.Blockly.Msg.SAP_CALL_INCLUDE)
                .appendField(new window.Blockly.FieldTextInput(''), 'NAME');
            this.appendDummyInput('EMPTY')
                .appendField(window.Blockly.Msg.SAP_CALL_INCLUDE_ENTRYPOINT)
                .appendField(new window.Blockly.FieldTextInput(''), 'ENTRYPOINT');
        }
        let i = 0;
        while (this.getInput(`PARAM${i}`)) {
            this.removeInput(`PARAM${i}`);
            i++;
        }
        if (this.getInput('INIT')) {
            this.removeInput('INIT');
        }

        for (i = 0; i < this.itemCount_; i++) {
            if (!this.getInput('PARAM' + i)) {
                switch (this.itemTypes[i]) {
                    case 'sap_call_include_param':
                        this.appendValueInput('PARAM' + i)
                            .appendField(
                                new window.Blockly.FieldDropdown([
                                    ['Using', 'Using'],
                                    ['Changing', 'Changing'],
                                ]),
                                `PARAM${i}_TYPE`
                            )
                            .appendField(new window.Blockly.FieldTextInput(''), `PARAM${i}_NAME`);
                        break;
                    case 'sap_call_include_return':
                        this.appendDummyInput(`PARAM${i}`)
                            .appendField(window.Blockly.Msg.SAP_CALL_INCLUDE_RETURN_NAME)
                            .appendField(new window.Blockly.FieldTextInput(''), `PARAM${i}_NAME`)
                            .appendField(window.Blockly.Msg.SAP_CALL_INCLUDE_RETURN_TYPE)
                            .appendField(new window.Blockly.FieldTextInput(''), `PARAM${i}_TYPE`);
                        break;
                }
            }
        }
        // this.setNextStatement(true, null);
        // Remove deleted inputs.
        while (this.getInput(`PARAM${i}`)) {
            this.removeInput(`PARAM${i}`);
            i++;
        }

        this.appendStatementInput('INIT').appendField(window.Blockly.Msg.SAP_CALL_INCLUDE_INIT);
    },
    getUserData(n) {
        return {
            name: this.getFieldValue(`PARAM${n}_NAME`),
            type: this.getFieldValue(`PARAM${n}_TYPE`),
        };
    },
};
window.Blockly.Blocks.sap_call_method_container = {
    /**
     * Mutator block for list container.
     * @this {window.Blockly.Block}
     */
    init() {
        this.setStyle('list_blocks');
        this.appendDummyInput().appendField(
            window.Blockly.Msg.SAP_CALL_INCLUDE_CONTAINER_TITLE_ADD
        );
        this.appendStatementInput('STACK');
        this.setTooltip(window.Blockly.Msg.SAP_CALL_INCLUDE_CONTAINER_TOOLTIP);
        this.contextMenu = false;
    },
};
window.Blockly.Blocks.sap_call_include_param = {
    /**
     * Mutator block for adding items.
     * @this {window.Blockly.Block}
     */
    init() {
        this.setStyle('list_blocks');
        this.appendDummyInput().appendField(
            window.Blockly.Msg.SAP_CALL_INCLUDE_PARAM_CONTAINER_TITLE
        );
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(window.Blockly.Msg.SAP_CALL_INCLUDE_PARAM_CONTAINER_TOOLTIP);
        this.contextMenu = false;
    },
};
window.Blockly.Blocks.sap_call_include_return = {
    /**
     * Mutator block for adding items.
     * @this {window.Blockly.Block}
     */
    init() {
        this.setStyle('list_blocks');
        this.appendDummyInput().appendField(
            window.Blockly.Msg.SAP_CALL_INCLUDE_RETURN_CONTAINER_TITLE
        );
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(window.Blockly.Msg.SAP_CALL_INCLUDE_RETURN_CONTAINER_TOOLTIP);
        this.contextMenu = false;
    },
};

// согласно диалога https://online.sbis.ru/page/dialog/4d481f42-fd0a-4b5e-8db0-f0395b387419?inviteduser=47eef0c4-f0d8-4375-9bf8-f0ce450fb471
export {};
