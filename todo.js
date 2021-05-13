 function add_item()
        {
            
            var item = document.getElementById("box");
            var list_item = document.getElementById("list_item");

            if (item.value !="")
            {
                var make_li = document.createElement("li");            
                make_li.appendChild(document.createTextNode(item.value));
                list_item.appendChild(make_li);

                item.value=""
                make_li.onclick = function()
                {
                    this.parentNode.removeChild(this);
                }
            }
        else
        {
            alert("Please add a value to item");
        }
        }