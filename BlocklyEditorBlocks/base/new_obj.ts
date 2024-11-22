/* tslint:disable */
window.Blockly.Msg.NEW_OBJ = 'new';
window.Blockly.Msg.NEW_OBJ_TYPE_TITLE = 'type';
window.Blockly.Msg.NEW_OBJ_CONTAINER_TITLE_ADD = 'Object';
window.Blockly.Msg.NEW_OBJ_CONTAINER_TOOLTIP = 'Add or remove object props';
window.Blockly.Msg.NEW_OBJ_PROP_CONTAINER_TITLE = 'Prop';
window.Blockly.Msg.NEW_OBJ_PROP_CONTAINER_TOOLTIP = 'Add an props to the new object';
window.Blockly.Msg.NEW_OBJ_TOOLTIP = 'BlockType: new_obj';
window.Blockly.Msg.NEW_OBJ_HELPURL =
    'https://n.sbis.ru/article/e2ceb4c4-d78b-40c2-b67b-bb978d667220';

window.Blockly.Blocks.new_obj = {
    /**
     * Block for creating a list with any number of elements of any type.
     * @this {window.Blockly.Block}
     */
    init() {
        this.setHelpUrl(window.Blockly.Msg.NEW_OBJ_HELPURL);
        this.setStyle('variable_blocks');
        this.setInputsInline(false);
        this.itemCount_ = 0;
        this.updateShape_();
        this.setOutput(true);
        this.setStyle('Структуры');
        this.setMutator(new window.Blockly.Mutator(['new_obj_prop']));
        this.setTooltip(window.Blockly.Msg.NEW_OBJ_TOOLTIP);
    },
    /**
     * Create XML to represent list inputs.
     * @return {!Element} XML storage element.
     * @this {window.Blockly.Block}
     */
    mutationToDom() {
        const container = window.Blockly.utils.xml.createElement('mutation');
        container.setAttribute('PROP', this.itemCount_);
        return container;
    },
    /**
     * Parse XML to restore the list inputs.
     * @param {!Element} xmlElement XML storage element.
     * @this {window.Blockly.Block}
     */
    domToMutation(xmlElement) {
        this.itemCount_ = parseInt(xmlElement.getAttribute('PROP'), 10);
        this.updateShape_();
    },
    /**
     * Populate the mutator's dialog with this block's components.
     * @param {!window.Blockly.Workspace} workspace Mutator's workspace.
     * @return {!window.Blockly.Block} Root block in mutator.
     * @this {window.Blockly.Block}
     */
    decompose(workspace) {
        const containerBlock = workspace.newBlock('new_object_container');
        containerBlock.initSvg();
        let connection = containerBlock.getInput('STACK').connection;
        for (let i = 0; i < this.itemCount_; i++) {
            const itemBlock = workspace.newBlock('new_obj_prop');
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
        const data = [];

        // сохраняем пользовательские параметры
        let optionBlock = containerBlock.getInputTargetBlock('STACK');
        while (optionBlock) {
            data.push(optionBlock.userData_);
            optionBlock = optionBlock.nextConnection && optionBlock.nextConnection.targetBlock();
        }
        optionBlock = containerBlock.getInputTargetBlock('STACK');

        const connections = [];
        while (optionBlock && !optionBlock.isInsertionMarker()) {
            connections.push(optionBlock.valueConnection_);
            optionBlock = optionBlock.nextConnection && optionBlock.nextConnection.targetBlock();
        }
        for (let i = 0; i < this.itemCount_; i++) {
            const connection = this.getInput(`PROP${i}_VALUE`).connection.targetConnection;
            if (connection && connections.indexOf(connection) == -1) {
                connection.disconnect();
            }
        }
        this.itemCount_ = connections.length;
        this.updateShape_();
        // Restore any data.
        for (let i = 0; i < data.length; i++) {
            const userData = data[i];
            if (userData !== undefined) {
                this.setFieldValue(userData.name, `PROP${i}_NAME`);
                this.setFieldValue(userData.type, `PROP${i}_TYPE`);
                // this.setFieldValue(data[i][1] || 'OPTIONNAME', 'CPU' + i);
            }
        }
        for (let i = 0; i < this.itemCount_; i++) {
            window.Blockly.Mutator.reconnect(connections[i], this, `PROP${i}_VALUE`);
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
            const input = this.getInput(`PROP${i}_VALUE`);
            optionBlock.valueConnection_ = input && input.connection.targetConnection;
            optionBlock.userData_ = this.getUserData(i);
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
    updateShape_() {
        if (this.itemCount_ && this.getInput('VALUE')) {
            this.removeInput('VALUE');
        }
        if (!this.itemCount_ && this.getInput('EMPTY')) {
            this.removeInput('EMPTY');
        }
        if (!this.itemCount_ && !this.getInput('VALUE')) {
            this.appendValueInput('VALUE')
                .appendField(window.Blockly.Msg.NEW_OBJ)
                .appendField(window.Blockly.Msg.NEW_OBJ_TYPE_TITLE)
                .appendField(new window.Blockly.FieldTextInput(''), 'TYPE');
        }
        // Add new inputs.
        let i;
        for (i = 0; i < this.itemCount_; i++) {
            if (!this.getInput(`PROP${i}_VALUE`)) {
                if (i === 0) {
                    this.appendDummyInput('EMPTY')
                        .appendField(window.Blockly.Msg.NEW_OBJ)
                        .appendField(window.Blockly.Msg.NEW_OBJ_CONTAINER_TITLE_ADD);
                }
                this.appendValueInput(`PROP${i}_VALUE`)
                    .setAlign(window.Blockly.ALIGN_RIGHT)
                    .appendField('key')
                    .appendField(new window.Blockly.FieldTextInput(''), `PROP${i}_NAME`)
                    .appendField(window.Blockly.Msg.NEW_OBJ_TYPE_TITLE)
                    .appendField(new window.Blockly.FieldTextInput(''), `PROP${i}_TYPE`);
            }
        }
        // Remove deleted inputs.
        while (this.getInput(`PROP${i}_VALUE`)) {
            this.removeInput(`PROP${i}_VALUE`);
            i++;
        }
    },
    getUserData(n) {
        return {
            name: this.getFieldValue(`PROP${n}_NAME`),
            type: this.getFieldValue(`PROP${n}_TYPE`),
        };
    },
};
window.Blockly.Blocks.new_object_container = {
    /**
     * Mutator block for list container.
     * @this {window.Blockly.Block}
     */
    init() {
        this.setStyle('list_blocks');
        this.appendDummyInput().appendField(window.Blockly.Msg.NEW_OBJ_CONTAINER_TITLE_ADD);
        this.appendStatementInput('STACK');
        this.setTooltip(window.Blockly.Msg.NEW_OBJ_CONTAINER_TOOLTIP);
        this.contextMenu = false;
    },
};
window.Blockly.Blocks.new_obj_prop = {
    /**
     * Mutator block for adding items.
     * @this {window.Blockly.Block}
     */
    init() {
        this.setStyle('list_blocks');
        this.appendDummyInput().appendField(window.Blockly.Msg.NEW_OBJ_PROP_CONTAINER_TITLE);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(window.Blockly.Msg.NEW_OBJ_PROP_CONTAINER_TOOLTIP);
        this.contextMenu = false;
    },
};
