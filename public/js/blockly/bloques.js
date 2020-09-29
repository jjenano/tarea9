Blockly.Blocks['select'] = {
  init: function() {
    this.appendValueInput("selectText")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("Select");
    this.appendValueInput("fromText")
        .setCheck(null)
        .appendField("From");
    this.setInputsInline(false);
    this.setNextStatement(true, null);
    this.setColour(150);
 this.setTooltip("select");
 this.setHelpUrl("");
 this.setPreviousStatement(true, null);

  }
};

Blockly.Blocks['where'] = {
  init: function() {
    this.appendValueInput("whereText")
        .setCheck(null)
        .appendField("Where");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['order_by'] = {
  init: function() {
    this.appendValueInput("ordertext")
        .setCheck(null)
        .appendField("Order by");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['ordering'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("Nombre_Campo"), "nombre");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["asc","asc"], ["desc","desc"]]), "ascdesc");
    this.appendValueInput("NAME")
        .setCheck("ordering");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['limit'] = {
  init: function() {
    this.appendValueInput("limitText")
        .setCheck(null)
        .appendField("limit");
    this.setPreviousStatement(true, null);
    this.setColour(165);
 this.setTooltip("");
 this.setHelpUrl("");
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks['insert'] = {
  init: function() {
    this.appendValueInput("insertText")
        .setCheck(null)
        .appendField("Insert into");
    this.appendValueInput("valuesText")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Values");
    this.setInputsInline(true);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
 this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks['update'] = {
  init: function() {
    this.appendValueInput("updateText")
        .setCheck(null)
        .appendField("Update");
    this.appendValueInput("setText")
        .setCheck(null)
        .appendField("Set");
    this.setNextStatement(true, null);
    this.setColour(60);
 this.setTooltip("");
 this.setHelpUrl("");
 this.setPreviousStatement(true, null);
  }
};

Blockly.Blocks['delete'] = {
  init: function() {
    this.appendValueInput("deleteText")
        .setCheck(null)
        .appendField("Delete From");
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
 this.setPreviousStatement(true, null);
  }
};

Blockly.Blocks['textosc'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("*"), "textText");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");

  }
};

Blockly.Blocks['use'] = {
  init: function() {
    this.appendValueInput("useText")
        .setCheck(null)
        .appendField("use");
    this.setColour(60);
 this.setTooltip("");
 this.setHelpUrl("");
 this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};
Blockly.Blocks['operadores'] = {
  init: function() {
    this.appendValueInput("opizq")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["+","+"], ["-","-"], ["*","*"], ["**","**"], ["%","%"], ["/","/"], ["<","<"], ["<=","<="], [">",">"], [">=",">="], ["==","=="], ["!=","!="], ["||","||"], ["&&","&&"], ["^","^"]]), "opeText");
    this.appendValueInput("opder")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


/*Blockly.Blocks['operadores'] = {
  init: function() {
    this.appendValueInput("opizq")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["+","+"], ["-","-"], ["*","*"], ["**","**"], ["%","%"], ["/","/"], ["++","++"], ["--","--"], ["<","<"], ["<=","<="], [">",">"], [">=",">="], ["==","=="], ["!=","!="], ["||","||"], ["&&","&&"], ["^","^"], ["!","!"]]), "opeText");
    this.appendValueInput("opder")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};*/

Blockly.Blocks['defvar'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Tipo Variable")
        .appendField(new Blockly.FieldDropdown([["int","int"], ["double","double"], ["string","string"], ["boolean","boolean"], ["date","date"], ["time","time"]]), "tipvar");
    this.appendValueInput("nombreText")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("nombre");
    this.appendValueInput("exptext")
        .setCheck(null)
        .appendField("=");
    this.appendDummyInput()
        .appendField(";");
    this.setInputsInline(true);
    this.setColour(75);
 this.setTooltip("");
 this.setHelpUrl("");
 this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks['asignacion'] = {
  init: function() {
    this.appendValueInput("varText")
        .setCheck(null)
        .appendField("Variable:");
    this.appendValueInput("expText")
        .setCheck(null)
        .appendField("=");
    this.appendDummyInput()
        .appendField(";");
    this.setInputsInline(true);
    this.setColour(255);
 this.setTooltip("");
 this.setHelpUrl("");
 this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks['switchsen'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("switch ")
        .appendField(new Blockly.FieldTextInput("()"), "cond")
        .appendField("{");
    this.appendStatementInput("cases")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("}");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['casesen'] = {
  init: function() {
    this.appendValueInput("caseText")
        .setCheck(null)
        .appendField("case");
    this.appendDummyInput()
        .appendField(":");
    this.appendStatementInput("instrucciones")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['defaultsent'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("default:");
    this.appendStatementInput("instrucciones")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setColour(60);
 this.setTooltip("");
 this.setHelpUrl("");
 
  }
};

Blockly.Blocks['whilesen'] = {
  init: function() {
    this.appendValueInput("cond")
        .setCheck(null)
        .appendField("while (");
    this.appendDummyInput()
        .appendField(")");
    this.appendStatementInput("instrucciones")
        .setCheck(null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
 this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks['dowhilesen'] = {
  init: function() {
    this.appendStatementInput("instrucciones")
        .setCheck(null)
        .appendField("do");
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("while (");
    this.appendDummyInput()
        .appendField(")");
    this.setColour(165);
 this.setTooltip("");
 this.setHelpUrl("");
 this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks['forsen'] = {
  init: function() {
    this.appendValueInput("var")
        .setCheck(null)
        .appendField("for (");
    this.appendDummyInput()
        .appendField(";");
    this.appendValueInput("condText")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(";");
    this.appendValueInput("incText")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(")");
    this.appendStatementInput("instrucciones")
        .setCheck(null);
    this.setInputsInline(true);
    this.setColour(285);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['unario_not'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("!");
    this.appendValueInput("not")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['unario_incdec'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("Variable"), "Variable")
        .appendField(new Blockly.FieldDropdown([["++","++"], ["--","--"]]), "incdec");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['call_proc'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("call")
        .appendField(new Blockly.FieldTextInput("Nombre_Proc"), "proc");
    this.appendDummyInput()
        .appendField("(");
    this.appendValueInput("NAME")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['llamada_funcion'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Llamada a funcion:")
        .appendField(new Blockly.FieldTextInput("Nombre_Funcion"), "NAME");
    this.appendDummyInput()
        .appendField("(");
    this.appendValueInput("NAME")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};