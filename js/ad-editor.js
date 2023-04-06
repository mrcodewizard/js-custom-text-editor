class ADEditor {
    constructor() {
        let range = {};
    }

    init() {
       const toolbar = `<div class="ad-editor-toolbar ad-dropdown">
        <div id="headings" class="headings ad-dropdown">
            <button class="ad-btn-dropdown headings-btn" data-tooltip="Heading">
                <span>Heading</span>
                <i class="fas fa-chevron-down"></i>
            </button>
            <div class="heading-dropdown ad-dropdown-detail">
                <ul class="heading-list">
                    <li class="heading-item paragraph"     data-command='{"element":"p","command":"formatBlock"}'>Paragraph</li>
                    <li class="heading-item heading-one"   data-command='{"element":"h1","command":"formatBlock"}'>Heading 1</li>
                    <li class="heading-item heading-two"   data-command='{"element":"h2","command":"formatBlock"}'>Heading 2</li>
                    <li class="heading-item heading-three" data-command='{"element":"h3","command":"formatBlock"}'>Heading 3</li>
                </ul>
            </div>
        </div>
        <button class="ad-btn ad-btn-bold" data-tooltip="Bold" data-command="bold">
            <i class="fas fa-bold"></i>
        </button>
        <button class="ad-btn ad-btn-italic" data-tooltip="Italic" data-command="italic">
            <i class="fas fa fa-italic"></i>
        </button>

        <div class="ad-dropdown ad-dropdown-link">
            <button class="ad-btn ad-btn-dropdown" data-tooltip="Link">
                <i class="fas fa-link"></i>
            </button>
            <div class="ad-dropdown-detail">
                <h4 class="table-title">Insert Link</h4>
                <div class="ad-dropdown-list">
                    <div class="input-item">
                        <label for="">Insert Title</label>
                        <input type="text" name="title" class="table-control">
                    </div>

                    <div class="input-item">
                        <label for="">Insert Link</label>
                        <input type="text" name="link" class="table-control">
                    </div>
                    <div class="buttom-item">
                        <button type="button" class="btn-link">Insert</button>
                    </div>
                </div>
            </div>
        </div>

        <button class="ad-btn ad-btn-list-ul" data-tooltip="Bullet List" data-command="insertUnorderedList">
            <i class="fas fa-list-ul"></i>
        </button>
        <button class="ad-btn ad-btn-list-ol" data-tooltip="Numbered List" data-command="insertOrderedList">
            <i class="fas fa-list-ol"></i>
        </button>

        <div class="ad-dropdown ad-dropdown-text_color">
            <button class="ad-btn" data-tooltip="Text Color">
                <i class="fas fa-font swatch-action"></i>
                <span class="selected-color" data-color="#0000000"></span>
                <span class="dropdown-caret ad-btn-dropdown">
                    <i class="fas fa-chevron-down"></i>
                </span>
            </button>
            <div class="ad-dropdown-detail color-swatches-detail">
                <div class="color-swatch-row">
                    <div class="swatch-item" data-color="rgb(191, 237, 210)" style="background-color: rgb(191, 237, 210);" title="light green"></div>
                    <div class="swatch-item" data-color="rgb(251, 238, 184)" style="background-color: rgb(251, 238, 184);" title="light yellow"></div>
                    <div class="swatch-item" data-color="rgb(248, 202, 198)" style="background-color: rgb(248, 202, 198);" title="light red"></div>
                    <div class="swatch-item" data-color="rgb(236, 202, 250)" style="background-color: rgb(236, 202, 250);" title="light purple"></div>
                    <div class="swatch-item" data-color="rgb(194, 224, 244)" style="background-color: rgb(194, 224, 244);" title="light blue"></div>
                    
                    <div class="swatch-item" data-color="rgb(45, 194, 107)" style="background-color: rgb(45, 194, 107);" title="green"></div>
                    <div class="swatch-item" data-color="rgb(241, 196, 15)" style="background-color: rgb(241, 196, 15);" title="yellow"></div>
                    <div class="swatch-item" data-color="rgb(224, 62, 45)" style="background-color: rgb(224, 62, 45);" title="red"></div>
                    <div class="swatch-item" data-color="rgb(185, 106, 217)" style="background-color: rgb(185, 106, 217);" title="purple"></div>
                    <div class="swatch-item" data-color="rgb(53, 152, 219)" style="background-color: rgb(53, 152, 219);" title="blue"></div>

                    <div class="swatch-item" data-color="rgb(22, 145, 121)" style="background-color: rgb(22, 145, 121);" title="dark turquoise"></div>
                    <div class="swatch-item" data-color="rgb(230, 126, 35)" style="background-color: rgb(230, 126, 35);" title="orange"></div>
                    <div class="swatch-item" data-color="rgb(186, 55, 42)" style="background-color: rgb(186, 55, 42);" title="dark red"></div>
                    <div class="swatch-item" data-color="rgb(132, 63, 161)" style="background-color: rgb(132, 63, 161);" title="dark purple"></div>
                    <div class="swatch-item" data-color="rgb(35, 111, 161)" style="background-color: rgb(35, 111, 161);" title="dark blue"></div>
                    
                    <div class="swatch-item" data-color="rgb(0, 0, 0)" style="background-color: rgb(0, 0, 0);" title="black"></div>
                    <div class="swatch-item" data-color="rgb(255, 255, 255)" style="background-color: rgb(255, 255, 255);" title="white"></div>
                    <div class="swatch-item" data-color="rgb(159, 83, 83)" style="background-color: rgb(159, 83, 83);" title="dark red"></div>
                    <div class="swatch-item" data-color="rgb(5, 86, 95)" style="background-color: rgb(5, 86, 95);" title="cadet green"></div>
                    <label class="swatch-item swatch-button" for="inputColor">
                        <svg width="24" height="24">
                            <path d="M12 3a9 9 0 0 0 0 18 1.5 1.5 0 0 0 1.1-2.5c-.2-.3-.4-.6-.4-1 0-.8.7-1.5 1.5-1.5H16a5 5 0 0 0 5-5c0-4.4-4-8-9-8Zm-5.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm3-4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm3 4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
                            fill-rule="nonzero"></path>
                        </svg>
                        <input type="color" id="inputColor" style="opacity:0;visibility:hidden" value="#000000" />
                    </label>
                </div>
            </div>
        </div>

        <div class="ad-dropdown ad-dropdown-back_color">
            <button class="ad-btn" data-tooltip="Background Color">
                <i class="fas fa-eye-dropper swatch-action"></i>
                <span class="selected-color" data-color="#0000000"></span>
                <span class="dropdown-caret ad-btn-dropdown">
                    <i class="fas fa-chevron-down"></i>
                </span>
            </button>
            <div class="ad-dropdown-detail color-swatches-detail">
                <div class="color-swatch-row">
                    <div class="swatch-item" data-backcolor="rgb(191, 237, 210)" style="background-color: rgb(191, 237, 210);" title="light green"></div>
                    <div class="swatch-item" data-backcolor="rgb(251, 238, 184)" style="background-color: rgb(251, 238, 184);" title="light yellow"></div>
                    <div class="swatch-item" data-backcolor="rgb(248, 202, 198)" style="background-color: rgb(248, 202, 198);" title="light red"></div>
                    <div class="swatch-item" data-backcolor="rgb(236, 202, 250)" style="background-color: rgb(236, 202, 250);" title="light purple"></div>
                    <div class="swatch-item" data-backcolor="rgb(194, 224, 244)" style="background-color: rgb(194, 224, 244);" title="light blue"></div>
                    
                    <div class="swatch-item" data-backcolor="rgb(45, 194, 107)" style="background-color: rgb(45, 194, 107);" title="green"></div>
                    <div class="swatch-item" data-backcolor="rgb(241, 196, 15)" style="background-color: rgb(241, 196, 15);" title="yellow"></div>
                    <div class="swatch-item" data-backcolor="rgb(224, 62, 45)" style="background-color: rgb(224, 62, 45);" title="red"></div>
                    <div class="swatch-item" data-backcolor="rgb(185, 106, 217)" style="background-color: rgb(185, 106, 217);" title="purple"></div>
                    <div class="swatch-item" data-backcolor="rgb(53, 152, 219)" style="background-color: rgb(53, 152, 219);" title="blue"></div>

                    <div class="swatch-item" data-backcolor="rgb(22, 145, 121)" style="background-color: rgb(22, 145, 121);" title="dark turquoise"></div>
                    <div class="swatch-item" data-backcolor="rgb(230, 126, 35)" style="background-color: rgb(230, 126, 35);" title="orange"></div>
                    <div class="swatch-item" data-backcolor="rgb(186, 55, 42)" style="background-color: rgb(186, 55, 42);" title="dark red"></div>
                    <div class="swatch-item" data-backcolor="rgb(132, 63, 161)" style="background-color: rgb(132, 63, 161);" title="dark purple"></div>
                    <div class="swatch-item" data-backcolor="rgb(35, 111, 161)" style="background-color: rgb(35, 111, 161);" title="dark blue"></div>
                    
                    <div class="swatch-item" data-backcolor="rgb(0, 0, 0)" style="background-color: rgb(0, 0, 0);" title="black"></div>
                    <div class="swatch-item" data-backcolor="rgb(255, 255, 255)" style="background-color: rgb(255, 255, 255);" title="white"></div>
                    <div class="swatch-item" data-backcolor="rgb(159, 83, 83)" style="background-color: rgb(159, 83, 83);" title="dark red"></div>
                    <div class="swatch-item" data-backcolor="rgb(5, 86, 95)" style="background-color: rgb(5, 86, 95);" title="cadet green"></div>
                    <label class="swatch-item swatch-button" for="inputBackColor">
                        <svg width="24" height="24">
                            <path d="M12 3a9 9 0 0 0 0 18 1.5 1.5 0 0 0 1.1-2.5c-.2-.3-.4-.6-.4-1 0-.8.7-1.5 1.5-1.5H16a5 5 0 0 0 5-5c0-4.4-4-8-9-8Zm-5.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm3-4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm3 4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
                            fill-rule="nonzero"></path>
                        </svg>
                        <input type="color" style="opacity:0;visibility:hidden" id="inputBackColor" />
                    </label>
                </div>
            </div>
        </div>

        <div class="ad-group-btn group-btn-indent">
            <button class="ad-btn ad-btn-list-ul" data-tooltip="Increase Indent" data-command="indent">
                <i class="fas fa-indent"></i>
            </button>
            <button class="ad-btn ad-btn-list-ol" data-tooltip="Decrease Indent" data-command="outdent">
                <i class="fas fa-outdent"></i>
            </button> 
        </div>

        <div class="ad-dropdown ad-dropdown-align">
            <button class="ad-btn ad-btn-dropdown" data-tooltip="Align Text">
                <i class="fas fa-align-left"></i>
            </button>
            <div class="ad-dropdown-detail">
                <ul class="ad-dropdown-list">
                    <li class="dropdown-item item-left"    data-command='justifyLeft'><i class="fas fa-align-left"></i></li>
                    <li class="dropdown-item item-right"   data-command='justifyRight'><i class="fas fa-align-right"></i></li>
                    <li class="dropdown-item item-center"  data-command='justifyCenter'><i class="fas fa-align-center"></i></li>
                    <li class="dropdown-item item-justify" data-command='justifyFull'><i class="fas fa-align-justify"></i></li>
                </ul>
            </div>
        </div>

        <div class="ad-dropdown ad-dropdown-dir">
            <button class="ad-btn ad-btn-dropdown" data-tooltip="Text Direction">
                <i class="fas fa-paragraph fa-right"></i>
            </button>
            <div class="ad-dropdown-detail">
                <ul class="ad-dropdown-list">
                    <li class="dropdown-item item-left"  data-command="ltr"> <i class="fas fa-paragraph fa-left"></i></li>
                    <li class="dropdown-item item-right" data-command="rtl"><i class="fas fa-paragraph fa-right"></i></li>
                </ul>
            </div>
        </div>

        <div class="ad-group-btn ad-border-left-0">
            <div class="ad-dropdown ad-dropdown-table">
                <button class="ad-btn ad-btn-dropdown ad-btn-table" data-tooltip="Insert Table">
                    <i class="fas fa-table"></i>
                    <span class="dropdown-caret"><i class="fas fa-chevron-down"></i></span>
                </button>
                <div class="ad-dropdown-detail">
                    <h4 class="table-title">Insert Table</h4>
                    <div class="ad-dropdown-list">
                        <div class="input-item">
                            <label for="">Number of Columns</label>
                            <input type="number" name="cols" class="table-control">
                        </div>

                        <div class="input-item">
                            <label for="">Number of Rows</label>
                            <input type="number" name="rows" class="table-control">
                        </div>
                        <div class="buttom-item">
                            <button type="button" class="btn-table">Insert</button>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>`;

        const body = `<div class="ad-editor-body" contenteditable="true">
                        <div class="display-none"></div>
                        <h3>Welcome to Adam Editor</h3>
                    </div>`;
        const editorBody = toolbar + body;
        const wrapper = $(".ad-editor__main");
        wrapper.html(editorBody);
    }

    formatDocument(cmd, value=null){
        if(value) {
            document.execCommand(cmd, false, value);
        }
        else {
            document.execCommand(cmd);
        }
    }
    
    changeTextDirection(dir) {
        var range = window.getSelection().getRangeAt(0);

        // const nodes = this.getNodesInRange(range);
        // console.log(nodes);

        var selectionContents = range.extractContents();
        var element = document.createElement("div");
        element.dir = dir;
        element.appendChild(selectionContents);
        range.insertNode(element);

        let html = "";
        $(element).children().css("dir", dir);

        console.log($(element).children());
        const children = $(element).children();
        this.removeEmptyChildren($(".ad-editor-body"));
    }

    getNextNode(node)
    {
        if (node.firstChild)
            return node.firstChild;
        while (node)
        {
            if (node.nextSibling)
                return node.nextSibling;
            node = node.parentNode;
        }
    }

    getNodesInRange(range)
    {
        var start = range.startContainer;
        var end = range.endContainer;
        var commonAncestor = range.commonAncestorContainer;
        var nodes = [];
        var node;

        // walk parent nodes from start to common ancestor
        for (node = start.parentNode; node; node = node.parentNode)
        {
            nodes.push(node);
            if (node == commonAncestor)
                break;
        }
        nodes.reverse();

        // walk children and siblings from start until end is found
        for (node = start; node; node = this.getNextNode(node))
        {
            nodes.push(node);
            if (node == end)
                break;
        }

        return nodes;
    }

    removeEmptyChildren(parentElement) {
        let child = parentElement.children();

        for(let i=0;i<child.length;i++){
            let text= $(child[i]).text();
            if($.trim(text).length==0){
                $(child[i]).remove();
            }
        }
    }

    addResizableEditableColumns() {
        $(document).find("table").each(function(index,elem){
            $(elem).resizable({maxWidth: 900});
            $(elem).find("td").resizable();
            $(elem).find("td .columnSelector").prop("contenteditable", "false");
            $(elem).find("td button").prop("contenteditable", "false");
        });
    }

    makeWritableColumn(element) {
        element.keypress(function(e){
            e.preventDefault();
            var text = $(this).text();
            $(this).find(".content").text(text);
        });
    }

    performTableAction(td,position,command) {
        let tr, table;
        switch(command) {
            case "add-border":
                const element = td.closest("table");
                $(element).addClass("tbl-border");
                $(element).removeClass("tbl-borderless");
                break;

            case "remove-border":
                const bordered = td.closest("table");
                $(bordered).removeClass("tbl-border");
                $(bordered).addClass("tbl-borderless");
                break;

            case "insert-column":
                const index = position;
                tr = td.closest("table").find("tbody").children();
                html+= `<td tabindex="1" contenteditable="true"><span class="ui-content"></span>
                            <button class="btn btn-options"><i class="fas fa-caret-down"></i></button>
                            <div class="table-options">
                                <ul class="tbl-option-list">
                                    <li data-command="insert-column"><i class="fas fa-plus-circle"></i> <span>Insert column</span></li>
                                    <li data-command="insert-row"><i class="fas fa-plus-circle"></i> <span>Insert row</span></li>
                        
                                    <li data-command="delete-column"><i class="fas fa-trash-alt"></i> <span>delete column</span></li>
                                    <li data-command="delete-row"><i class="fas fa-trash-alt"></i> <span>delete row</span></li>

                                    <li data-command="move-left"><i class="fas fa-align-left"></i> <span>move to left</span></li>
                                    <li data-command="move-center"><i class="fas fa-align-center"></i> <span>move to center</span></li>
                                    <li data-command="move-right"><i class="fas fa-align-right"></i> <span>move to right</span></li>
                                </ul>
                            </div>
                        </td>`;
                for(var i=0;i<tr.length; i++) {
                    $(tr[i]).find("td:eq("+index+")").after(html);
                }
                break;
            
            case "insert-row":
                tr = td.closest("tr");
                td = tr.children("td");
                const rowPosition = tr.index();

                var html = `<tr>`;
                for(var i=0; i<td.length;i++) {
                    html+= `<td tabindex="1" contenteditable="true"><span class="ui-content"></span>
                                <button class="btn btn-options"><i class="fas fa-caret-down"></i></button>
                                <div class="table-options">
                                    <ul class="tbl-option-list">
                                        <li data-command="insert-column"><i class="fas fa-plus-circle"></i> <span>Insert column</span></li>
                                        <li data-command="insert-row"><i class="fas fa-plus-circle"></i> <span>Insert row</span></li>
                            
                                        <li data-command="delete-column"><i class="fas fa-trash-alt"></i> <span>delete column</span></li>
                                        <li data-command="delete-row"><i class="fas fa-trash-alt"></i> <span>delete row</span></li>

                                        <li data-command="move-left"><i class="fas fa-align-left"></i> <span>move to left</span></li>
                                        <li data-command="move-center"><i class="fas fa-align-center"></i> <span>move to center</span></li>
                                        <li data-command="move-right"><i class="fas fa-align-right"></i> <span>move to right</span></li>
                                    </ul>
                                </div>
                            </td>`;
                }
                html+= `</tr>`;
                $(tr).after(html);
                break;

            case "delete-column":
                tr = td.closest("table tbody").children();
                const delPosition = position;
                console.log("Position", delPosition);
                for(var i=0;i<tr.length; i++) {
                    $(tr[i]).find("td:eq("+delPosition+")").remove();
                }
                break;
            
            case "delete-row":
                tr = td.closest("tr");
                $(tr).remove();
                break;

            case "move-left":
                table = td.closest("table");
                table.addClass("left-align");
                table.removeClass("right-align");
                table.removeClass("center-align");
                break;

            case "move-right":
                table = td.closest("table");
                table.addClass("right-align");
                table.removeClass("left-align");
                table.removeClass("center-align");
                break;

            case "move-center":
                table = td.closest("table");
                table.removeClass("right-align");
                table.removeClass("left-align");
                table.addClass("center-align");
                break;

            default:
                return;
        }

        this.addResizableEditableColumns();
    }

    appendButtons(table) {
        const buttonHtml = `<span class="ui-content"></span>
                                <button class="btn btn-options" contenteditable="false"><i class="fas fa-caret-down"></i>
                                </button>`;
        table.find("td").each(function(index, td){
            $(td).append(buttonHtml);
        });
    }

    appendOptions(table) {
        var tableOptions = `<div class="table-options">
                                <ul class="tbl-option-list">
                                    <li data-command="add-border"><i class="fas fa-plus-circle"></i> <span>Add Border</span></li>
                                    <li data-command="remove-border"><i class="fas fa-trash-alt"></i> <span>Remove Border</span></li>

                                    <li data-command="insert-column"><i class="fas fa-plus-circle"></i> <span>Insert column</span></li>
                                    <li data-command="insert-row"><i class="fas fa-plus-circle"></i> <span>Insert row</span></li>
                        
                                    <li data-command="delete-column"><i class="fas fa-trash-alt"></i> <span>delete column</span></li>
                                    <li data-command="delete-row"><i class="fas fa-trash-alt"></i> <span>delete row</span></li>

                                    <li data-command="move-left"><i class="fas fa-align-left"></i> <span>move to left</span></li>
                                    <li data-command="move-center"><i class="fas fa-align-center"></i> <span>move to center</span></li>
                                    <li data-command="move-right"><i class="fas fa-align-right"></i> <span>move to right</span></li>
                                </ul>
                            </div>`;
        table.find("tr td").append(tableOptions);
    }
    
    resizeHandlerTable(table) {
            var rows = $(table).find('tr');
            var height = table.outerHeight();
            table.style.position = "relative"; // change position
            table.style.overflow = "visible"

            // create the div the user grabs onto
            var div = document.createElement('div'); // create the resize div to grab onto later
            // general styling
            div.style.top = 0;
            div.style.left = 0;
            div.style.width = '5px';
            div.style.position = 'absolute';
            div.style.cursor = 'col-resize';
            div.style.userSelect = 'none';
            div.style.height = height + 'px';
            div.className = 'tableResizer';
            div.style.border = "none";
                
            cols[i].appendChild(div);
            this.attachColumnEvents(div, table);
    }

    resizeHandlerColumn(table) {
        var rows = $(table).find('tr');

        for(var r=0; r<rows.length; r++) {
        
            var cols = rows[r].childNodes;
            for(var i = 0; i < cols.length; i++) {
                if(cols[i].nodeType == 1) {
                
                var height = $(cols[i]).outerHeight();
                cols[i].style.position = "relative"; // change position
                cols[i].style.overflow = "visible"
    
                // create the div the user grabs onto
                var span = document.createElement('span'); // create the resize span to grab onto later
                // general styling
                span.style.top = 0;
                span.style.right = 0;
                span.style.width = '5px';
                span.style.position = 'absolute';
                span.style.cursor = 'col-resize';
                span.style.height = height + 'px';
                span.className = 'columnSelector';
                span.style.border = "none";
                span.tabIndex = -1;
                span.readonly = true;
                span.contenteditable="false";
                    
                cols[i].appendChild(span);
                this.attachColumnEvents(span, cols[i]); 
               }
            }
        }
    }

    resizeHandlerRows(table) {
        var rows = $(table).find('tr');

        for(var i=0; i<rows.length; i++) {
            var width = table.outerWidth();
            rows[i].style.position = "relative"; // change position
            rows[i].style.overflow = "visible"

            // create the div the user grabs onto
            var span = document.createElement('span'); // create the resize span to grab onto later
            // general styling
            span.style.bottom = 0;
            span.style.left = 0;
            span.style.height = "5px";
            span.style.width = width + "px";
            span.style.position = 'absolute';
            span.style.cursor = 'row-resize';
            span.style.userSelect = 'none';
            span.className = 'rowSelector';
            span.style.border = "none";
            span.tabIndex = -1;
            span.contenteditable="false"
                
            rows[i].appendChild(span);
            this.attachRowEvents(span, rows[i]);
        }
    }

    attachColumnEvents(div, col) {
        $(document).on('mousedown', ".columnSelector", function(event) {
            th_element = col;
            startOffset = col.offsetWidth - event.pageX;
        });

        $(document).on('mousemove', ".columnSelector", function(event) {
            if(th_element) {
                th_element.style.width = startOffset + event.pageX + 'px';
            }
        });

        $(document).on('mouseup', function() {
            th_element = undefined;
        });
    }

    attachRowEvents(div, row) {
        $(document).on('mousedown', div, function(event) {
            th_element = row;
            startOffset = row.offsetHeight - event.pageY;
        });

        $(document).on('mousemove',div, function(event) {
            if(th_element) {
                th_element.style.height = startOffset + event.pageY + 'px';
            }
        });

        $(document).on('mouseup', function() {
            th_element = undefined;
        });
    }
}


/* Tools implementation */
const editor = new ADEditor();

$(document).on("click",".ad-editor-toolbar .ad-btn-dropdown", function() {
    var current = $(this).closest(".ad-dropdown").find(".ad-dropdown-detail");
    $(".ad-editor-toolbar .ad-dropdown-detail").not(current).removeClass("active");
    if(current.hasClass("active")) {
        current.removeClass("active");
    }
    else {
        current.addClass("active");
    }       
});

$(document).on("click",".heading-list li", function(e){
    e = e || window.event;
    e.preventDefault();
    editor.formatDocument($(this).data("command").command, $(this).data("command").element);
    $(this).closest(".ad-dropdown-detail").removeClass("active");
});

$(document).on("click",".ad-dropdown-align .ad-dropdown-list li", function(i, e){
    e = e || window.event;
    e.preventDefault();
    editor.formatDocument($(this).data("command"));
    $(this).closest(".ad-dropdown-detail").removeClass("active");
})

$(document).on("click", ".ad-btn", function(e){
    if(!($(e).hasClass(".ad-btn-dropdown"))) {
        e = e || window.event;
        e.preventDefault();
        editor.formatDocument($(this).data("command"));
    }
});  

$(document).on("click", ".ad-dropdown-dir .ad-dropdown-list li", function(e) {
    e = e || window.event;
    e.preventDefault();

    const direction = $(this).data("command");
    const selection = window.getSelection();
    const range = window.getSelection().getRangeAt(0);
    const content = range.extractContents();
    const element = document.createElement("div");

    console.log($(".MsoNormal").attr("dir"));
    if(selection.focusNode.parentElement.closest("div").dir != "") {
        const content = range.extractContents();
        element.dir = direction;
        element.appendChild(content);
        range.insertNode(element);
    }
    else {
        selection.focusNode.parentElement.closest("div").removeAttribute("dir");
        element.dir = direction;
        element.appendChild(content);
        range.insertNode(element);
    }

    /* delete previous dir attribute in selection */
    const children = element.children;
    for(var i=0; i<children.length; i++) {
        children[i].removeAttribute("dir");
    }

    /* remove unecessary nodes */
    editor.removeEmptyChildren($(".ad-editor-body"));
    editor.removeEmptyChildren($(element));
    $(this).closest(".ad-dropdown-detail").removeClass("active");
});

$(document).on("click",".ad-dropdown-link .btn-link", function(e){
    e.preventDefault();
    var target = $(".ad-editor-body");
    if(document.getSelection()) {}
    var title = $("input[name=title]").val();
    var link = $("input[name=link]").val();

    if((!link.indexOf("http") == 0) || (!link.indexOf("https") == 0)) {
        alert("Please write proper url");
        return;
    } else {
        var anchor = `<a href=${link}>${title}</a>`;
        if(target.setRangeText) {
            target.setRangeText(anchor);
        }else {
            target.focus();
            document.execCommand("insertHTML", false, anchor);
            $(this).closest(".ad-dropdown-detail").removeClass("active");
            $("input[name=title]").val("");
            $("input[name=link]").val("");
        }
    }
});

// Foreground color events //

$(document).on("click", ".ad-dropdown-text_color .swatch-item", function(e){
    if(!$(this).hasClass("swatch-button")) {
        var color = $(this).data("color");
        $(this).closest(".ad-dropdown-text_color").find(".selected-color").attr("data-color", color).css("background-color", color);
        document.execCommand("foreColor", false, color);  
        $(this).closest(".ad-dropdown-detail").removeClass("active");
    }
});

$(document).on("click", ".ad-dropdown-text_color .swatch-action", function(e){
        var color = $(this).closest(".ad-dropdown-text_color").find(".selected-color").attr("data-color");
        document.execCommand("foreColor", false, color);  
        $(this).closest(".ad-dropdown-detail").removeClass("active");
});

$(document).on("input",".ad-dropdown-text_color .swatch-button input", function(e){
        e.preventDefault();
        var color = $(this).val(); 
        $(this).closest(".ad-dropdown").find(".selected-color").attr("data-color", color);
        $(this).closest(".ad-dropdown").find(".selected-color").css("background-color", color);
        document.execCommand("foreColor", false, color);
});

// Background color events //

$(document).on("click", ".ad-dropdown-back_color .swatch-item", function(e){
    if(!$(this).hasClass("swatch-button")) {
        var color = $(this).data("backcolor");
        $(this).closest(".ad-dropdown-back_color").find(".selected-color").attr("data-color", color).css("background-color", color);
        document.execCommand("backColor", false, color);  
        $(this).closest(".ad-dropdown-detail").removeClass("active");
    }
});

$(document).on("click", ".ad-dropdown-back_color .swatch-action", function(e){
        var color = $(this).closest(".ad-dropdown-back_color").find(".selected-color").attr("data-color");
        document.execCommand("backColor", false, color);  
        $(this).closest(".ad-dropdown-detail").removeClass("active");
});

$(document).on("input",".ad-dropdown-back_color .swatch-button input", function(e){
        e.preventDefault();
        var color = $(this).val(); 
        $(this).closest(".ad-dropdown").find(".selected-color").attr("data-color", color);
        $(this).closest(".ad-dropdown").find(".selected-color").css("background-color", color);
        document.execCommand("backColor", false, color);
});

/* hide options if user click outiside */
$(document).on("click", function(e){
    e.preventDefault();
    const selection = window.getSelection();
    if((!$(e.target).closest(".ad-dropdown").length) && (selection.toString() === "")) {
        $(".ad-dropdown-detail ").removeClass("active");
    }
});

var th_element;
var startOffset;

$(document).on("click",".ad-dropdown-table .btn-table", function(e){
    e.preventDefault();
    $(this).closest(".ad-dropdown").removeClass("active");
    var target = $(".ad-editor-body");
    var rows = $("input[name=rows]").val();
    var cols = $("input[name=cols]").val();

    var table = `<table cellspacing="0" class="tbl-border"><tbody>`;
    for(var i=0; i<rows; i++) {
        table+= `<tr>`;

        for(j=0;j<cols; j++) {
            table+= `<td tabindex="${i}${j+1}"><span class="ui-content"></span>
                        <button class="btn btn-options" contenteditable="false"><i class="fas fa-caret-down"></i></button>
                    </td>`;
        }
        table+= `</tr>`;
    }
    table+= `</tbody></table>`;


    if(target.setRangeText) {
        target.setRangeText(table);
    }else {
        target.focus();
        document.execCommand("insertHTML", false, table);
        $(this).closest(".ad-dropdown-detail").removeClass("active");
    }

    /* empty table when values are inserted */
    $("input[name=rows]").val("");
    $("input[name=cols]").val("");
    editor.addResizableEditableColumns();
    editor.appendOptions($("table"));
    $("table td>*").prop("contenteditable", "false");
});

$(document).on("click","table td .btn-options", function(e){
    e.preventDefault();
    var current = $(this).closest("td").find(".table-options");
    $(".table-options").not(current).hide();
    current.toggle();
});

$(document).on("click",".ad-editor-body .table-options li", function(e){
    e.preventDefault();
    var td = $(this).closest("td");
    var command = $(this).data("command");
    var position = $(this).closest("td").index();
    editor.performTableAction(td, position, command);
    $("table td>*").prop("contenteditable", "false");
    $(".table-options").hide();
});


/* hide options if user click outiside */
$(document).on("click", function(e){
    e.preventDefault();
    const selection = window.getSelection();
    if(!$(e.target).closest("table").length && (selection.toString() === "")) {
        $(".table-options").hide();
    }
});

function initTables(){
    $(document).find("table").each(function(index,elem){
        editor.appendButtons($(elem));
        editor.appendOptions($(elem));
        editor.addResizableEditableColumns();
    });
}

var wrapper = document.querySelector(".ad-editor__wrapper");
var body = document.querySelector(".ad-editor__main");
body.addEventListener("keyup", handlePaste);
// body.addEventListener("onpaste", initTables);

function handlePaste(e) {
    let ctrlKey = 17, 
        vKey = 86;
        e.preventDefault();
 
    if((e.ctrlKey || e.metaKey) && (e.keyCode == vKey)) {
        initTables();
        // console.log($(document).find(".MsoNormal").attr("dir"));
    }
}



