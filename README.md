![data-js](https://img.shields.io/badge/dataStore-v1.0.0-0769ad.svg?style=flat-square)

# dataStoreJS

dataStore allows to store data with the matched node elements or return the value at the named data store for the first element in the set of matched elements. It is a equivalent of `jQuery.data` in vanillaJS, so no need to import jQuery to use this feature :)

Data use expando property to prevent from memory leaks. Data are not store in node element, just a reference to them.

## Installation

Call dataStore module in your HTML before your application and use it.

```html
<script src="dataStore.js"></script>
```

## How it works

### .add(selector, key, value)

Calling `.add(selector, key, value)` method allow to attach data of any type to DOM elements in a way that is safe from memory leaks. If key already exist, the new key/value will replace the data.

```javascript
dataStore.add(selector, key, value)
```

### .get(selector, key)

Calling `.get(selector, key)` method return the value at the named data store for the first element in the node collection.

```javascript
dataStore.get(selector, key)
```

Calling `.get(selector)` method without key, retrieves all of the values as a JavaScript object.

```javascript
dataStore.get(selector)
```

### .remove(selector, key)

Calling `.remove(selector, key)` method allows to remove values that were previously set using `add()`.
When called with the name of a key, `.remove()` deletes that particular value.

```javascript
dataStore.add(selector, key)
```

When called with selector argument only (without key), all values are removed.

```javascript
dataStore.add(selector)
```