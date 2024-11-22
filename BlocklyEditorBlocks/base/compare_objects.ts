/* tslint:disable */
window.Blockly.Msg.COMPARE_OBJECTS = 'Compare objects';
window.Blockly.Msg.SABY_CREATE_ACT_OF_DIVERGENCE = 'Создать акт расхождения';
window.Blockly.Msg.COMPARE_OBJECTS_OBJECT1 = 'Объект 1';
window.Blockly.Msg.COMPARE_OBJECTS_OBJECT2 = 'Объект 2';
window.Blockly.Msg.COMPARE_OBJECTS_accounting = 'документ';
window.Blockly.Msg.COMPARE_OBJECTS_actually = 'факт';
window.Blockly.Msg.COMPARE_OBJECTS_CONTAINER_TITLE_ADD = 'Compare objects';
window.Blockly.Msg.COMPARE_OBJECTS_CONTAINER_TOOLTIP = 'Add or remove table';
window.Blockly.Msg.COMPARE_OBJECTS_VALUE_CONTAINER_TITLE = 'Table';
window.Blockly.Msg.COMPARE_OBJECTS_VALUE_CONTAINER_TOOLTIP = 'Add table to compare';
window.Blockly.Msg.COMPARE_OBJECTS_TOOLTIP = 'BlockType: compare_objects';
window.Blockly.Msg.COMPARE_OBJECTS_HELPURL =
    'https://n.sbis.ru/article/a5a05832-51af-460a-8efc-aa7942b4013a';
window.Blockly.Msg.SABY_CREATE_ACT_OF_DIVERGENCE_TOOLTIP =
    'BlockType: saby_create_act_of_divergence';
window.Blockly.Msg.SABY_CREATE_ACT_OF_DIVERGENCE_HELPURL =
    'https://n.sbis.ru/article/e6554e99-1e45-46e8-b969-37f1b890b490';

function get_compare_block(BLOCKID, OBJECT1, OBJECT2, style) {
    return {
        /**
         * Block for creating a list with any number of elements of any type.
         * @this {window.Blockly.Block}
         */
        init() {
            switch (BLOCKID) {
                case 'COMPARE_OBJECTS':
                    this.setHelpUrl(window.Blockly.Msg.COMPARE_OBJECTS_HELPURL);
                    break;
                case 'SABY_CREATE_ACT_OF_DIVERGENCE':
                    this.setHelpUrl(window.Blockly.Msg.SABY_CREATE_ACT_OF_DIVERGENCE_HELPURL);
                    break;
            }
            this.setOutput(true, null);
            this.setInputsInline(false);
            this.itemCount_ = 0;
            this.updateShape_();
            this.setStyle(style);
            // this.setOutput(true, 'Array');
            this.setMutator(new window.Blockly.Mutator(['compare_table']));
            this.setTooltip(window.Blockly.Msg[`${BLOCKID.toUpperCase()}_TOOLTIP`]);
        },
        /**
         * Create XML to represent list inputs.
         * @return {!Element} XML storage element.
         * @this {window.Blockly.Block}
         */
        mutationToDom() {
            const container = window.Blockly.utils.xml.createElement('mutation');
            container.setAttribute('items', this.itemCount_);
            return container;
        },
        /**
         * Parse XML to restore the list inputs.
         * @param {!Element} xmlElement XML storage element.
         * @this {window.Blockly.Block}
         */
        domToMutation(xmlElement) {
            this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
            this.updateShape_();
        },
        /**
         * Populate the mutator's dialog with this block's components.
         * @param {!window.Blockly.Workspace} workspace Mutator's workspace.
         * @return {!window.Blockly.Block} Root block in mutator.
         * @this {window.Blockly.Block}
         */
        decompose(workspace) {
            const containerBlock = workspace.newBlock('compare_container');
            containerBlock.initSvg();
            let connection = containerBlock.getInput('STACK').connection;
            for (let i = 0; i < this.itemCount_; i++) {
                const itemBlock = workspace.newBlock('compare_table');
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
            const data = [];

            // сохраняем пользовательские параметры
            let optionBlock = containerBlock.getInputTargetBlock('STACK');
            while (optionBlock) {
                // this.itemCount_ += 1
                data.push(optionBlock.userData_);
                optionBlock =
                    optionBlock.nextConnection && optionBlock.nextConnection.targetBlock();
            }
            optionBlock = containerBlock.getInputTargetBlock('STACK');

            const tableGroupConnections = [];
            const tableFieldsConnections = [];
            while (optionBlock && !optionBlock.isInsertionMarker()) {
                tableGroupConnections.push(optionBlock.groupConnection_);
                tableFieldsConnections.push(optionBlock.fieldsConnection_);
                optionBlock =
                    optionBlock.nextConnection && optionBlock.nextConnection.targetBlock();
            }
            // Disconnect any children that don't belong.
            for (let i = 0; i < this.itemCount_; i++) {
                let connection = this.getInput(`TABLE${i}_GROUP`).connection.targetConnection;
                if (connection && tableGroupConnections.indexOf(connection) === -1) {
                    connection.disconnect();
                }
                connection = this.getInput(`TABLE${i}_FIELDS`).connection.targetConnection;
                if (connection && tableFieldsConnections.indexOf(connection) === -1) {
                    connection.disconnect();
                }
            }
            this.itemCount_ = tableGroupConnections.length;
            this.updateShape_();
            // Restore any data.
            for (let i = 0; i < data.length; i++) {
                const userData = data[i];
                if (userData !== undefined) {
                    this.setFieldValue(userData.name, `TABLE${i}_NAME`);
                    // this.setFieldValue(data[i][1] || 'OPTIONNAME', 'CPU' + i);
                }
            }
            for (let i = 0; i < this.itemCount_; i++) {
                window.Blockly.Mutator.reconnect(tableGroupConnections[i], this, `TABLE${i}_GROUP`);
                window.Blockly.Mutator.reconnect(
                    tableFieldsConnections[i],
                    this,
                    `TABLE${i}_FIELDS`
                );
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
                let input = this.getInput(`TABLE${i}_GROUP`);
                optionBlock.groupConnection_ = input && input.connection.targetConnection;
                input = this.getInput(`TABLE${i}_FIELDS`);
                optionBlock.fieldsConnection_ = input && input.connection.targetConnection;
                i++;
                optionBlock =
                    optionBlock.nextConnection && optionBlock.nextConnection.targetBlock();
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
            if (!this.getInput('EMPTY')) {
                this.appendDummyInput('EMPTY').appendField(window.Blockly.Msg[BLOCKID]);
                this.appendValueInput(OBJECT1)
                    .setAlign(window.Blockly.ALIGN_RIGHT)
                    .appendField(window.Blockly.Msg[`COMPARE_OBJECTS_${OBJECT1}`]);
                this.appendValueInput(OBJECT2)
                    .setAlign(window.Blockly.ALIGN_RIGHT)
                    .appendField(window.Blockly.Msg[`COMPARE_OBJECTS_${OBJECT2}`]);
                this.appendValueInput('PROPS')
                    .setAlign(window.Blockly.ALIGN_RIGHT)
                    .appendField('props');
            }
            let i = 0;
            // this.setNextStatement(true, null);
            // Remove deleted inputs.
            for (i = 0; i < this.itemCount_; i++) {
                if (!this.getInput(`TABLE${i}`)) {
                    this.appendDummyInput(`TABLE${i}`)
                        .appendField(window.Blockly.Msg.COMPARE_OBJECTS_VALUE_CONTAINER_TITLE)
                        .appendField(new window.Blockly.FieldTextInput(''), `TABLE${i}_NAME`);
                    this.appendValueInput(`TABLE${i}_GROUP`)
                        .setAlign(window.Blockly.ALIGN_RIGHT)
                        .appendField('group by props');
                    this.appendValueInput(`TABLE${i}_FIELDS`)
                        .setAlign(window.Blockly.ALIGN_RIGHT)
                        .appendField('sum props');
                }
            }
            // this.setNextStatement(true, null);
            // Remove deleted inputs.
            while (this.getInput(`TABLE${i}`)) {
                this.removeInput(`TABLE${i}_GROUP`);
                this.removeInput(`TABLE${i}_FIELDS`);
                this.removeInput(`TABLE${i}`);
                i++;
            }
        },
        getUserData(n) {
            return {
                name: this.getFieldValue(`TABLE${n}_NAME`),
            };
        },
    };
}

window.Blockly.Blocks.compare_objects = get_compare_block(
    'COMPARE_OBJECTS',
    'OBJECT1',
    'OBJECT2',
    'Структуры'
);
window.Blockly.Blocks.saby_create_act_of_divergence = get_compare_block(
    'SABY_CREATE_ACT_OF_DIVERGENCE',
    'accounting',
    'actually',
    'SABY ЭДО'
);

window.Blockly.Blocks.compare_container = {
    /**
     * Mutator block for list container.
     * @this {window.Blockly.Block}
     */
    init() {
        this.setStyle('list_blocks');
        this.appendDummyInput().appendField(window.Blockly.Msg.COMPARE_OBJECTS_CONTAINER_TITLE_ADD);
        this.appendStatementInput('STACK');
        this.setTooltip(window.Blockly.Msg.COMPARE_OBJECTS_CONTAINER_TOOLTIP);
        this.contextMenu = false;
    },
};
window.Blockly.Blocks.compare_table = {
    /**
     * Mutator block for adding items.
     * @this {window.Blockly.Block}
     */
    init() {
        this.setStyle('list_blocks');
        this.appendDummyInput().appendField(
            window.Blockly.Msg.COMPARE_OBJECTS_VALUE_CONTAINER_TITLE
        );
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(window.Blockly.Msg.COMPARE_OBJECTS_VALUE_CONTAINER_TOOLTIP);
        this.contextMenu = false;
    },
};
