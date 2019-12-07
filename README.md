# DropdownBox
Custom HTML5 Dropdown List for selection

A JavaScript and HTML5 library that provides text entered selection dropdown with minimum behavioral handlers. This library is meant to provide an example on creating custom elements, assigning attributes to the element and behaviours to the element.

## Getting Started

Download ```dropdownBox``` directory and include the directory and to your script directory/location

### Steps to Setting Up
1. Include the required JavaScript library in your page.
```
<script src="scripts/dropdownBox/dropdownBox.tpl.js"></script>
<script src="scripts/dropdownBox/dropdownBox.js"></script>
```

2. Add the element to your page where is necessary.
```
<dropdown-box id="someDropDown2" onchange="tryChange" options='{"key1":"value1", "key2":"value2"}'></dropdown-box>
```
- id: Element Id
- value: Value of the element. This is just an INPUT field
- options: Dropdown list options in a JSON string. Sets the DATALIST in the custom element
- onchange: Function that will be invoked when there is a change to the value in the Dropdown Box

## Sample
Look in the sample directory for a sample

## Built With

* [Visual Code] - IDE

## Authors

* **TQW** - *Initial work* - [tqwdan82](https://github.com/tqwdan82)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project, if any.

## License

This project is free to use.
