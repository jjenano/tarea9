%lex

%options case-insensitive

%%
\s+								/* Nada para los espacios en blanco. */

"["								return '['
"]"								return ']'
"+"								return '+'
"-"								return '-'
"login"						    return 'login'
"fail"                          return 'fail'
"success"                       return 'success'
"logout"						return 'logout'
"data"							return 'data'
"message"						return 'message'
"error"							return 'rerror'
"line"  						return 'rline'
"desc"  						return 'desc'
"databases"						return 'databases'
"database"						return 'database'
"name"							return 'name'
"tables"						return 'tables'
"table"							return 'table'
"columns"						return 'columns'
"column"						return 'rcolumn'
"types"							return 'types'
"type"							return 'type'
"attributes"					return 'attributes'
"attribute"						return 'attribute'
"procedures"					return 'procedures'
"procedure"						return 'procedure'
"message"						return 'message'

([^\[]]|[ \n\r\t])*([^[-])		return 'cadena'

"."								return '.'

<<EOF>>							return 'EOF'
.{1,10} 						%{
									//var con = require('../DynamoDB/conexion.js');
									//var inflaksdfña = new con["default"]();
									//var jeje = inflaksdfña.insertLexico(yytext, yylloc.first_line, yylloc.first_column);
								%}

/lex

%start s

%% /* Definición de la gramática */

s: instrucciones EOF {
		// cuado se haya reconocido la entrada completa retornamos el AST
		return $1;
	}
;

instrucciones: instrucciones instruccion { $1.push($2); $$ = $1; }
	| instruccion { $$ = [$1]; }
    ;

instruccion: instruccion_login {$$ = $1;}
    | instruccion_logout {$$ = $1;}
    | instruccion_data {$$ = $1;}
    | instruccion_message {$$ = $1;}
    | instruccion_error {$$ = $1;}
    | instruccion_arbol {$$ = $1;}
    ;

instruccion_login: '[' '+' login ']' instruccion_respuesta '[' '-' login ']' {$$ = $5;}
    ;

instruccion_logout: '[' '+' logout ']' instruccion_respuesta '[' '-' logout ']' {$$ = $5;}
    ;

instruccion_data: '[' '+' data ']' instruccion_respuesta '[' '-' data ']' 
    {
        var auxval = {
            data: $5
        }
        $$ = auxval;
    }
    ;

instruccion_message: '[' '+' message ']' instruccion_respuesta '[' '-' message ']' 
    {
        var auxval = {
            menssage: $5
        }
        $$ = auxval;
    }
    ;

instruccion_respuesta: cadena {$$ = $1;}   
    | '[' '+' rline ']' cadena '[' '-' rline ']' {$$ = $5;}
    | '[' '+' rcolumn ']' cadena '[' '-' rcolumn ']' {$$ = $5;}
    | '[' '+' type ']' cadena '[' '-' type ']' {$$ = $5;}
    | '[' '+' desc ']' cadena '[' '-' desc ']' {$$ = $5;}
    | '[' success ']' {$$ = $2;}
    | '[' fail ']' {$$ = $2;}
    ;

instruccion_arbol: '[' '+' databases ']' lista_db '[' '-' databases ']' 
    {
        var auxval = {
            listadb: $5
        }
        $$ = auxval;
    }
    ;

lista_db: lista_db db { $1.push($2); $$ = $1; }
	| db { $$ = [$1]; }
    ;

db: '[' '+' database ']' '[' '+' name ']' instruccion_respuesta '[' '-' name ']' '[' '+' tables ']' lista_tables '[' '-' tables ']' '[' '+' types ']' lista_types '[' '-' types ']' '[' '+' procedures ']' lista_procedures '[' '-' procedures ']' '[' '-' database ']' 
    {
        var auxval = {
            name: $9,
            tables: $18,
            types: $27,
            procedures: $36
        }
        $$ = auxval;
    }
    ;

lista_tables: lista_tables instruccion_table{ $1.push($2); $$ = $1; }
	| instruccion_table { $$ = [$1]; }
    ;

instruccion_table: '[' '+' table ']' '[' '+' name ']' instruccion_respuesta '[' '-' name ']' '[' '+' columns ']' lista_columns '[' '-' columns ']' '[' '-' table ']' 
    {
        var auxval = {
            name: $9,
            columns: $18
        }
        $$ = auxval;
    }
| '[' '+' table ']'  '[' '-' table ']' 
    {
        $$ = null;
    }
    ;

lista_columns: lista_columns instruccion_column{ $1.push($2); $$ = $1; }
	| instruccion_column { $$ = [$1]; }
    ;

instruccion_column: '[' '+' rcolumn ']' instruccion_respuesta '[' '-' rcolumn ']' {$$ = $5;}
    | '[' '+' rcolumn ']' '[' '-' rcolumn ']' {$$ = null;}
;

lista_types: lista_types instruccion_type{ $1.push($2); $$ = $1; }
	| instruccion_type { $$ = [$1]; }
    ;

instruccion_type: '[' '+' type ']' '[' '+' name ']' instruccion_respuesta '[' '-' name ']' '[' '+' attributes ']' lista_atributes '[' '-' attributes ']' '[' '-' type ']' 
    {
        var auxval = {
            name: $9,
            attributes: $18
        }
        $$ = auxval;
    }
    | '[' '+' type ']' '[' '-' type ']' 
    {
        $$ = null;
    }
    ;

lista_atributes: lista_atributes instruccion_atribute{ $1.push($2); $$ = $1; }
	| instruccion_atribute { $$ = [$1]; }
    ;

instruccion_atribute: '[' '+' attribute ']' instruccion_respuesta '[' '-' attribute ']' {$$ = $5;}
    | '[' '+' attribute ']' '[' '-' attribute ']' {$$ = null;}
    ;

lista_procedures: lista_procedures instruccion_procedure{ $1.push($2); $$ = $1; }
	| instruccion_procedure { $$ = [$1]; }
    ;

instruccion_procedure: '[' '+' procedure ']' instruccion_respuesta '[' '-' procedure ']' {$$ = $5;}
    | '[' '+' procedure ']' '[' '-' procedure ']' {$$ = null;}
    ;

instruccion_error: '[' '+' rerror ']' instruccion_respuesta instruccion_respuesta instruccion_respuesta instruccion_respuesta '[' '-' rerror ']' 
    {
        var auxval = {
            line: $5,
            column: $6,
            type: $7,
            desc: $8
        }
        $$ = auxval;
    }
    ;