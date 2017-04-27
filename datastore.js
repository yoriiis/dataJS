/**
 *
 * dataStoreJS allows to store data with the matched node elements or return the value at the named data store for the first element in the set of matched elements. It is a equivalent of jQuery.data in vanillaJS

 * @version 1.0.0
 *
 * @author: Joris DANIEL
 * @fileoverview:
 *
 * Copyright (c) 2017 Joris DANIEL
 * Licensed under the MIT license
 *
 **/
(function(window) {

    "use strict";

    var expando = '_' + (new Date()).getTime();
    var cache = {};
    var counter = 0;

    var dataStore = {

        add: function(element, key, value) {

            //Check if element is a valid node element
            if (element.nodeType === Node.ELEMENT_NODE ) {

                //Check if key and value exist
                if( typeof key !== 'undefined' && typeof value !== 'undefined' ){

                    var id = element[expando],
                        newIndex = (id === undefined) ? counter : id,
                        obj = {};

                    //New data store on node element reference
                    if (id === undefined) {
                        element[expando] = counter;
                        counter++;
                    }

                    //Check if data is available
                    if (cache[newIndex]) {
                        cache[newIndex][key] = value;
                    } else {
                        obj[key] = value;
                        cache[newIndex] = obj;
                    }

                }

            }

            return element;

        },

        get: function(element, key) {

            var id = element[expando],
                data = null;

            //Check if element has data, else return empty object
            if (cache.hasOwnProperty(id)) {

                data = cache[id];

                //Get key or full data for element
                if (key) {
                    //If key, check if it exist in cache, else return empty object
                    if (data.hasOwnProperty(key)) {
                        return data[key];
                    }else{
                        return {};
                    }
                } else {
                    return data;
                }

            } else {
                return {};
            }

        },

        remove: function(element, key) {

            var id = element[expando],
                data = null;

            if( key ){

                data = cache[id][key];
                if (data) {
                    delete cache[id][key];
                }

                //If object contain any key, remove it and reference on node element
                if (Object.keys(cache[id]).length === 0 && cache[id].constructor === Object) {
                    delete cache[id];
                    delete element[expando];
                }

            }else{
                data = cache[id];
                if (data) {
                    delete cache[id];
                    delete element[expando];
                }
            }

            return element;

        }

    }

    window.dataStore = dataStore;

})(window);