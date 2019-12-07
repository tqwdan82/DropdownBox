(function(){
    class DropdownBox extends HTMLElement {
        static get observedAttributes() {
            return ["options", "disabled", "onchange"];
        }
        
        constructor() {
            super();
            this.setElement = this.setElement.bind(this); 
            
            const shadowRoot = this.attachShadow({ mode: 'open' });
            shadowRoot.innerHTML = dropdownBoxTemplate;
            
            this.dropdownBoxInput = shadowRoot.querySelector('[dropdownBoxInput]');
            this.dropdownBoxMessage = shadowRoot.querySelector('[dropdownBoxMessage]');
            this.dropdownBoxList = shadowRoot.querySelector('[dropdownBoxList]');
        }

        get id() {
            return this.getAttribute('id');
        }

        get value() {
            return this.getAttribute('value');
        }

        get list() {
            return this.getAttribute('list');
        }

        get options() {
            return this.getAttribute('options');
        }

        get onchange() {
            return this.getAttribute('onchange');
        }

        setElement(){
            if(this.id)
            {
                this.dropdownBoxList.id = this.id+"List";
                this.dropdownBoxInput.setAttribute('list',  this.id+"List");
            }

            if(this.value){
                this.dropdownBoxInput.setAttribute("value", this.value);
            }

            if(this.options)
            {
                updateOptions(this.dropdownBoxList, this.options, this.dropdownBoxInput);
            }

            if(!!this.disabled)
            {
                this.dropdownBoxInput.disabled = true;
                this.disabled = true;
            }
            else
            {
                this.dropdownBoxInput.disabled = false;
                this.disabled = false;
            }

            if(this.onchange)
            {
                this.onchangefn = eval(this.onchange);
            }

        }

        connectedCallback() {
            this.setElement();
            let _value = this.value;
            let _this = this;
            this.dropdownBoxInput.addEventListener("change", 
            function(e)
            {
                _value = this.value;
                _this.setAttribute("value", this.value);
                if (typeof _this.onchangefn === 'function') {
                    _this.onchangefn();
                }
            });
        }

        attributeChangedCallback(name, oldValue, newValue) {
            //console.log(name, oldValue, newValue);
            if(name === 'options')
                updateOptions(this.dropdownBoxList, newValue, this.dropdownBoxInput);

            if(name === 'disabled')
            {
                this.dropdownBoxInput.disabled = newValue=='true';
            }

            if(name === 'onchange')
            {
                this.onchangefn = eval(this.onchange);
            }
        }

    }

    function updateOptions(ele, newOptions, eleParent)
    {
        let inputOptions = JSON.parse(newOptions);

        let found = false;
        for (const key in inputOptions) {
            let value = inputOptions[key];
            if(eleParent.value === value)
            {
                found = true;
                break;
            }
        }
        if(!found)
        {
            eleParent.value ="";
        }
        
        let child = ele.lastElementChild;  
        while (child) { 
            ele.removeChild(child); 
            child = ele.lastElementChild; 
        }

        for (const key in inputOptions) {
            let value = inputOptions[key];
            let newOption = document.createElement('option');
            newOption.setAttribute('value', value);
            //newOption.textContent = key;
            ele.append(newOption);
        }
    }

    window.customElements.define('dropdown-box', DropdownBox);
})();